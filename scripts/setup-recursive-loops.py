#!/usr/bin/env python3
"""Ensure VascuMind CRM has the tabs needed for recursive self-improvement loops.

Safe behavior:
- Creates missing tabs.
- Writes only header rows and optional first seed rows when absent.
- Does not delete or overwrite customer data below row 1.
"""
from __future__ import annotations

from pathlib import Path
from typing import Iterable

from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

SPREADSHEET_ID = "1fmw8ZoTeNFh2onLEbEfq3hXudVQDmXH72IilQXvY_yg"
TOKEN_PATH = Path.home() / ".hermes" / "google_token.json"

TAB_HEADERS = {
    "Events": [
        "eventId",
        "receivedAt",
        "eventName",
        "path",
        "source",
        "occurredAt",
        "product",
        "leadType",
        "score",
        "answeredCount",
        "eventDataJson",
    ],
    "Experiments": [
        "experimentId",
        "createdAt",
        "status",
        "revenueStream",
        "hypothesis",
        "changeToShip",
        "primaryMetric",
        "baseline",
        "target",
        "owner",
        "dateShipped",
        "result",
        "decision",
        "notes",
    ],
    "Loop Runs": [
        "runId",
        "runAt",
        "loopName",
        "status",
        "signalsReviewed",
        "topBottleneck",
        "recommendedAction",
        "verificationEvidence",
        "nextReviewDate",
        "notes",
    ],
}

SEED_ROWS = {
    "Experiments": [
        [
            "VEXP-001",
            "",
            "candidate",
            "Cognitive test sales",
            "If the Hachinski result page makes the paid MCI Screen benchmark feel like the safest next step, more completed quiz users will click through to /memory-screen without increasing claim risk.",
            "Review Hachinski completion/result CTA data, then ship one result-page copy or CTA improvement.",
            "MCI Screen CTA click-through from completed Hachinski sessions",
            "TBD after Events tab has live hachinski/quiz + CTA data",
            "+20% relative lift or clear qualitative improvement with no QA/compliance regression",
            "Croom/Hermes",
            "",
            "",
            "",
            "Seed experiment for the weekly recursive improvement loop; activate only after baseline event data exists.",
        ]
    ]
}


def sheets_service():
    creds = Credentials.from_authorized_user_file(str(TOKEN_PATH))
    return build("sheets", "v4", credentials=creds)


def get_tabs(service) -> dict[str, int]:
    spreadsheet = service.spreadsheets().get(spreadsheetId=SPREADSHEET_ID).execute()
    return {s["properties"]["title"]: s["properties"]["sheetId"] for s in spreadsheet.get("sheets", [])}


def ensure_tab(service, tab_name: str, existing_tabs: dict[str, int]) -> bool:
    if tab_name in existing_tabs:
        return False
    service.spreadsheets().batchUpdate(
        spreadsheetId=SPREADSHEET_ID,
        body={"requests": [{"addSheet": {"properties": {"title": tab_name}}}]},
    ).execute()
    existing_tabs[tab_name] = -1
    return True


def read_range(service, a1_range: str) -> list[list[str]]:
    return service.spreadsheets().values().get(
        spreadsheetId=SPREADSHEET_ID,
        range=a1_range,
    ).execute().get("values", [])


def update_values(service, a1_range: str, rows: Iterable[Iterable[str]]) -> None:
    service.spreadsheets().values().update(
        spreadsheetId=SPREADSHEET_ID,
        range=a1_range,
        valueInputOption="RAW",
        body={"values": [list(row) for row in rows]},
    ).execute()


def append_values(service, a1_range: str, rows: Iterable[Iterable[str]]) -> None:
    service.spreadsheets().values().append(
        spreadsheetId=SPREADSHEET_ID,
        range=a1_range,
        valueInputOption="RAW",
        insertDataOption="INSERT_ROWS",
        body={"values": [list(row) for row in rows]},
    ).execute()


def main():
    service = sheets_service()
    tabs = get_tabs(service)
    results = []

    for tab_name, headers in TAB_HEADERS.items():
        created = ensure_tab(service, tab_name, tabs)
        current_header = read_range(service, f"'{tab_name}'!A1:Z1")
        headers_updated = False
        if not current_header or current_header[0] != headers:
            end_col = chr(ord("A") + len(headers) - 1)
            update_values(service, f"'{tab_name}'!A1:{end_col}1", [headers])
            headers_updated = True

        seeded = False
        data_rows = read_range(service, f"'{tab_name}'!A2:Z20")
        if tab_name in SEED_ROWS and not data_rows:
            seed_rows = []
            for row in SEED_ROWS[tab_name]:
                row = list(row)
                if tab_name == "Experiments" and not row[1]:
                    # createdAt, intentionally set at setup time.
                    from datetime import datetime, timezone

                    row[1] = datetime.now(timezone.utc).isoformat()
                seed_rows.append(row)
            append_values(service, f"'{tab_name}'!A:Z", seed_rows)
            seeded = True

        results.append({
            "tab": tab_name,
            "created": created,
            "headers_updated": headers_updated,
            "seeded": seeded,
        })

    print({"ok": True, "spreadsheetId": SPREADSHEET_ID, "results": results})


if __name__ == "__main__":
    main()

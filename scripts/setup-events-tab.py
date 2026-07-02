#!/usr/bin/env python3
"""Ensure the VascuMind CRM has an Events tab with canonical headers."""
from pathlib import Path

from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

SPREADSHEET_ID = "1fmw8ZoTeNFh2onLEbEfq3hXudVQDmXH72IilQXvY_yg"
TOKEN_PATH = Path.home() / ".hermes" / "google_token.json"
EVENT_HEADERS = [
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
]


def main():
    creds = Credentials.from_authorized_user_file(str(TOKEN_PATH))
    service = build("sheets", "v4", credentials=creds)
    spreadsheet = service.spreadsheets().get(spreadsheetId=SPREADSHEET_ID).execute()
    sheets = {s["properties"]["title"]: s["properties"]["sheetId"] for s in spreadsheet.get("sheets", [])}

    created = False
    if "Events" not in sheets:
        service.spreadsheets().batchUpdate(
            spreadsheetId=SPREADSHEET_ID,
            body={"requests": [{"addSheet": {"properties": {"title": "Events"}}}]},
        ).execute()
        created = True

    current = service.spreadsheets().values().get(
        spreadsheetId=SPREADSHEET_ID,
        range="Events!A1:K1",
    ).execute().get("values", [])

    if not current or current[0] != EVENT_HEADERS:
        service.spreadsheets().values().update(
            spreadsheetId=SPREADSHEET_ID,
            range="Events!A1:K1",
            valueInputOption="RAW",
            body={"values": [EVENT_HEADERS]},
        ).execute()
        headers_updated = True
    else:
        headers_updated = False

    print({"ok": True, "created": created, "headers_updated": headers_updated, "sheet": "Events"})


if __name__ == "__main__":
    main()

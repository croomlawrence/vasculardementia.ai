type EventPayload = {
  eventName?: string;
  path?: string;
  source?: string;
  occurredAt?: string;
  eventData?: Record<string, string | number | boolean | null | undefined>;
};

type EventRecord = {
  eventId: string;
  receivedAt: string;
  eventName: string;
  path: string;
  source: string;
  occurredAt: string;
  eventData: Record<string, string | number | boolean>;
};

type EventStorageResult = {
  configured: boolean;
  stored: boolean;
  destination: "google-sheets-direct" | "server-log";
  response?: string;
  error?: string;
};

const GOOGLE_SHEETS_CRM_ID = process.env.GOOGLE_SHEETS_CRM_ID;
const GOOGLE_OAUTH_CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const GOOGLE_OAUTH_CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
const GOOGLE_OAUTH_REFRESH_TOKEN = process.env.GOOGLE_OAUTH_REFRESH_TOKEN;

const EVENT_FIELDS = [
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
] as const;

function sanitizeEventData(eventData: EventPayload["eventData"] = {}) {
  return Object.fromEntries(
    Object.entries(eventData).filter(([, value]) => value !== undefined && value !== null),
  ) as Record<string, string | number | boolean>;
}

function createEventRecord(payload: EventPayload): EventRecord {
  const receivedAt = new Date().toISOString();
  return {
    eventId: `VEVT-${receivedAt.slice(0, 10).replace(/-/g, "")}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,
    receivedAt,
    eventName: String(payload.eventName),
    path: String(payload.path || "unknown"),
    source: String(payload.source || "vascumind.com"),
    occurredAt: String(payload.occurredAt || receivedAt),
    eventData: sanitizeEventData(payload.eventData),
  };
}

function eventRow(record: EventRecord) {
  const data = record.eventData;
  const rowValues: Record<(typeof EVENT_FIELDS)[number], string> = {
    eventId: record.eventId,
    receivedAt: record.receivedAt,
    eventName: record.eventName,
    path: record.path,
    source: record.source,
    occurredAt: record.occurredAt,
    product: String(data.product || ""),
    leadType: String(data.leadType || ""),
    score: String(data.score || ""),
    answeredCount: String(data.answeredCount || ""),
    eventDataJson: JSON.stringify(data),
  };
  return EVENT_FIELDS.map((field) => rowValues[field]);
}

async function getGoogleAccessToken() {
  if (!GOOGLE_OAUTH_CLIENT_ID || !GOOGLE_OAUTH_CLIENT_SECRET || !GOOGLE_OAUTH_REFRESH_TOKEN) {
    return undefined;
  }

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: GOOGLE_OAUTH_CLIENT_ID,
      client_secret: GOOGLE_OAUTH_CLIENT_SECRET,
      refresh_token: GOOGLE_OAUTH_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });

  const json = await response.json();
  if (!response.ok || !json.access_token) {
    throw new Error(`Google OAuth refresh failed: ${JSON.stringify(json).slice(0, 500)}`);
  }
  return String(json.access_token);
}

async function appendSheetRow(accessToken: string, spreadsheetId: string, sheetName: string, row: string[]) {
  const range = encodeURIComponent(`'${sheetName}'!A:K`);
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: [row] }),
    },
  );

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`Google Sheets event append error ${response.status}: ${text.slice(0, 500)}`);
  }
  return text;
}

async function sendToGoogleSheetsEvents(record: EventRecord): Promise<EventStorageResult | undefined> {
  if (!GOOGLE_SHEETS_CRM_ID) return undefined;
  const accessToken = await getGoogleAccessToken();
  if (!accessToken) return undefined;

  const response = await appendSheetRow(accessToken, GOOGLE_SHEETS_CRM_ID, "Events", eventRow(record));
  return {
    configured: true,
    stored: true,
    destination: "google-sheets-direct",
    response: response.slice(0, 500),
  };
}

async function storeEvent(record: EventRecord): Promise<EventStorageResult> {
  const direct = await sendToGoogleSheetsEvents(record);
  if (direct) return direct;
  return { configured: false, stored: false, destination: "server-log" };
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as EventPayload | null;
  if (!payload?.eventName) {
    return Response.json({ error: "Missing eventName" }, { status: 400 });
  }

  const record = createEventRecord(payload);
  console.log("VascuMind event", JSON.stringify(record));

  try {
    const storage = await storeEvent(record);
    return Response.json({ ok: true, eventId: record.eventId, storage });
  } catch (error) {
    console.error("VascuMind event storage failed", error);
    return Response.json({
      ok: true,
      eventId: record.eventId,
      storage: {
        configured: Boolean(GOOGLE_SHEETS_CRM_ID),
        stored: false,
        destination: "server-log",
        error: error instanceof Error ? error.message : "Unknown event storage error",
      } satisfies EventStorageResult,
    });
  }
}

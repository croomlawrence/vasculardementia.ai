type LeadPayload = {
  leadType?: string;
  name?: string;
  email?: string;
  phone?: string;
  organization?: string;
  role?: string;
  message?: string;
  path?: string;
  trialUseCase?: string;
  participantVolume?: string;
  sites?: string;
  timeline?: string;
  consent?: string | boolean;
};

type CustomerRegistration = LeadPayload & {
  registrationId: string;
  receivedAt: string;
  segment: "consumer" | "cro" | "affiliate" | "unknown";
  status: "new";
  source: "vascumind.com";
  notifyEmail?: string;
};

type CrmResult = {
  configured: boolean;
  stored: boolean;
  destination: string;
  notification?: "sent" | "not-configured" | "failed";
  response?: string;
};

const GOOGLE_LEADS_WEBHOOK_URL = process.env.GOOGLE_LEADS_WEBHOOK_URL;
const GOOGLE_LEADS_WEBHOOK_SECRET = process.env.GOOGLE_LEADS_WEBHOOK_SECRET;
const GOOGLE_SHEETS_CRM_ID = process.env.GOOGLE_SHEETS_CRM_ID;
const GOOGLE_OAUTH_CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const GOOGLE_OAUTH_CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
const GOOGLE_OAUTH_REFRESH_TOKEN = process.env.GOOGLE_OAUTH_REFRESH_TOKEN;
const VASCUMIND_LEAD_NOTIFY_EMAIL = process.env.VASCUMIND_LEAD_NOTIFY_EMAIL;

const REGISTRATION_FIELDS: (keyof CustomerRegistration)[] = [
  "registrationId",
  "receivedAt",
  "leadType",
  "segment",
  "status",
  "source",
  "path",
  "name",
  "email",
  "phone",
  "organization",
  "role",
  "trialUseCase",
  "participantVolume",
  "sites",
  "timeline",
  "message",
  "consent",
];

function segmentFor(leadType = ""): CustomerRegistration["segment"] {
  if (leadType === "cro-licensing") return "cro";
  if (leadType === "memory-screen") return "consumer";
  if (leadType === "affiliate-interest") return "affiliate";
  return "unknown";
}

function createRegistration(payload: LeadPayload): CustomerRegistration {
  const receivedAt = new Date().toISOString();
  const registrationId = `VCRM-${receivedAt.slice(0, 10).replace(/-/g, "")}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
  return {
    registrationId,
    receivedAt,
    status: "new",
    source: "vascumind.com",
    segment: segmentFor(payload.leadType),
    notifyEmail: VASCUMIND_LEAD_NOTIFY_EMAIL,
    ...payload,
  };
}

function registrationRow(registration: CustomerRegistration) {
  return REGISTRATION_FIELDS.map((field) => String(registration[field] ?? ""));
}

function segmentSheetName(segment: CustomerRegistration["segment"]) {
  if (segment === "consumer") return "Memory Screen Customers";
  if (segment === "cro") return "CRO Pipeline";
  if (segment === "affiliate") return "Affiliate Interest";
  return undefined;
}

function followUpRow(registration: CustomerRegistration) {
  const followUpDate = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const nextStep = registration.segment === "cro"
    ? "Review CRO licensing fit and draft outreach."
    : "Confirm screening next step and payment/intake status.";

  return [
    registration.registrationId,
    registration.receivedAt,
    followUpDate,
    "Croom/Hermes",
    "open",
    registration.segment === "cro" ? "high" : "normal",
    registration.name || "",
    registration.email || "",
    registration.organization || "",
    nextStep,
    registration.message || "",
  ];
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
  const range = encodeURIComponent(`'${sheetName}'!A:Z`);
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
    throw new Error(`Google Sheets append error ${response.status}: ${text.slice(0, 500)}`);
  }
  return text;
}

function base64Url(input: string) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

async function sendLeadNotification(accessToken: string, registration: CustomerRegistration) {
  if (!registration.notifyEmail) return "not-configured" as const;

  const subject = `[VascuMind] New ${registration.segment} registration: ${registration.name || registration.email}`;
  const body = [
    `Registration ID: ${registration.registrationId}`,
    `Received: ${registration.receivedAt}`,
    `Lead type: ${registration.leadType}`,
    `Segment: ${registration.segment}`,
    `Name: ${registration.name}`,
    `Email: ${registration.email}`,
    `Organization: ${registration.organization || ""}`,
    `Role: ${registration.role || ""}`,
    `Path: ${registration.path || ""}`,
    `Message: ${registration.message || ""}`,
    "",
    "Next step: Review the VascuMind CRM Sheet and assign follow-up.",
  ].join("\n");

  const raw = base64Url([
    `To: ${registration.notifyEmail}`,
    "From: me",
    `Subject: ${subject}`,
    "Content-Type: text/plain; charset=utf-8",
    "",
    body,
  ].join("\r\n"));

  const response = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ raw }),
  });

  if (!response.ok) return "failed" as const;
  return "sent" as const;
}

async function sendToGoogleSheetsDirect(registration: CustomerRegistration): Promise<CrmResult | undefined> {
  if (!GOOGLE_SHEETS_CRM_ID) return undefined;
  const accessToken = await getGoogleAccessToken();
  if (!accessToken) return undefined;

  await appendSheetRow(accessToken, GOOGLE_SHEETS_CRM_ID, "Registrations", registrationRow(registration));
  const segmentSheet = segmentSheetName(registration.segment);
  if (segmentSheet) {
    await appendSheetRow(accessToken, GOOGLE_SHEETS_CRM_ID, segmentSheet, registrationRow(registration));
  }
  await appendSheetRow(accessToken, GOOGLE_SHEETS_CRM_ID, "Follow-Ups", followUpRow(registration));
  const notification = await sendLeadNotification(accessToken, registration);

  return {
    configured: true,
    stored: true,
    destination: "google-sheets-direct",
    notification,
  };
}

async function sendToGoogleWebhook(registration: CustomerRegistration): Promise<CrmResult | undefined> {
  if (!GOOGLE_LEADS_WEBHOOK_URL) return undefined;

  const webhookUrl = new URL(GOOGLE_LEADS_WEBHOOK_URL);
  if (GOOGLE_LEADS_WEBHOOK_SECRET) {
    // Google Apps Script web apps do not reliably expose custom request headers,
    // so use a query parameter shared secret for this lightweight CRM webhook.
    webhookUrl.searchParams.set("secret", GOOGLE_LEADS_WEBHOOK_SECRET);
  }

  const response = await fetch(webhookUrl.toString(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registration),
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`Google CRM webhook error ${response.status}: ${text}`);
  }

  return { configured: true, stored: true, destination: "google-apps-script", response: text.slice(0, 500) };
}

async function sendToGoogleNativeCrm(registration: CustomerRegistration): Promise<CrmResult> {
  const direct = await sendToGoogleSheetsDirect(registration);
  if (direct) return direct;

  const webhook = await sendToGoogleWebhook(registration);
  if (webhook) return webhook;

  return { configured: false, stored: false, destination: "server-log" };
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as LeadPayload | null;
  if (!payload?.email || !payload?.name || !payload?.leadType) {
    return Response.json({ error: "Name, email, and lead type are required." }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(payload.email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const registration = createRegistration(payload);
  console.log("VascuMind customer registration", JSON.stringify(registration));
  const crm = await sendToGoogleNativeCrm(registration);

  return Response.json({
    ok: true,
    registrationId: registration.registrationId,
    crm,
    message: crm.stored
      ? "Received and stored in the VascuMind customer database."
      : "Received. Native Google CRM routing is ready; add Google CRM environment variables to store registrations in Google Sheets.",
  });
}

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

const GOOGLE_LEADS_WEBHOOK_URL = process.env.GOOGLE_LEADS_WEBHOOK_URL;
const GOOGLE_LEADS_WEBHOOK_SECRET = process.env.GOOGLE_LEADS_WEBHOOK_SECRET;
const VASCUMIND_LEAD_NOTIFY_EMAIL = process.env.VASCUMIND_LEAD_NOTIFY_EMAIL;

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

async function sendToGoogleNativeCrm(registration: CustomerRegistration) {
  if (!GOOGLE_LEADS_WEBHOOK_URL) {
    return { configured: false, stored: false, destination: "server-log" };
  }

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

  return { configured: true, stored: true, destination: "google-sheets", response: text.slice(0, 500) };
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
      : "Received. Native Google CRM routing is ready; add GOOGLE_LEADS_WEBHOOK_URL to store registrations in Google Sheets.",
  });
}

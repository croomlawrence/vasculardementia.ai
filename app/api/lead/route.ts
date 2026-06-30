type LeadPayload = {
  leadType?: string;
  name?: string;
  email?: string;
  organization?: string;
  role?: string;
  message?: string;
  path?: string;
  trialUseCase?: string;
  participantVolume?: string;
  sites?: string;
  timeline?: string;
};

const HUBSPOT_TOKEN = process.env.HUBSPOT_PRIVATE_APP_TOKEN;

function splitName(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return { firstname: parts[0] || "", lastname: parts.slice(1).join(" ") };
}

async function createHubSpotContact(payload: LeadPayload) {
  if (!HUBSPOT_TOKEN || !payload.email) return { configured: false };
  const { firstname, lastname } = splitName(payload.name);
  const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HUBSPOT_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      properties: {
        email: payload.email,
        firstname,
        lastname,
        company: payload.organization || "",
        jobtitle: payload.role || "",
        lifecyclestage: "lead",
        hs_lead_status: payload.leadType === "cro-licensing" ? "OPEN" : "NEW",
      },
    }),
  });

  if (response.status === 409) return { configured: true, duplicate: true };
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`HubSpot error ${response.status}: ${text}`);
  }
  return { configured: true, duplicate: false };
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as LeadPayload | null;
  if (!payload?.email || !payload?.name || !payload?.leadType) {
    return Response.json({ error: "Name, email, and lead type are required." }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(payload.email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  console.log("VascuMind lead", JSON.stringify({ ...payload, receivedAt: new Date().toISOString() }));
  const hubspot = await createHubSpotContact(payload);
  return Response.json({
    ok: true,
    hubspot,
    message: hubspot.configured
      ? "Received and routed to the VascuMind pipeline."
      : "Received. CRM routing is ready; add HUBSPOT_PRIVATE_APP_TOKEN to send directly to HubSpot.",
  });
}

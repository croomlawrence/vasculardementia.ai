import { createSign } from "crypto";

export const HOUSE_GROK_SHEET_ID = "12SmO6oWmVeTY4wB2Ti1YIoOyWKt3TUXDrF8izPuIaPk";
export const LEADS_TAB_TITLE = "Leads";

export const ALLOWED_SOURCE_SITES = ["vascumind", "vasculardementia", "baselinecognitivetest"] as const;
export type SourceSite = (typeof ALLOWED_SOURCE_SITES)[number];

export const LEADS_HEADERS = [
  "lead_id",
  "source_site",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "entry_page",
  "segment_hypothesis",
  "quiz_completed",
  "quiz_answers_json",
  "price_page_viewed",
  "price_page_bounced",
  "purchase_status",
  "purchase_date",
  "retest_due_date",
  "objection_notes",
  "post_purchase_interview_notes",
  "lead_score",
  "escalation_flag",
  "created_at",
  "updated_at",
  "name",
  "email",
  "phone",
  "purchase_amount",
  "payment_ref",
  "payment_provider",
] as const;

export type LeadsHeader = (typeof LEADS_HEADERS)[number];
export type LeadsRowValues = Record<LeadsHeader, string>;

const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const PII_METADATA_KEYS = /^(email|name|phone|tel|telephone|address|ssn|dob|date_of_birth|full_name|first_name|last_name)$/i;

export type GuideLeadBody = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  path?: unknown;
  entry_page?: unknown;
  source_site?: unknown;
  segment_hypothesis?: unknown;
  utm_source?: unknown;
  utm_medium?: unknown;
  utm_campaign?: unknown;
  utmSource?: unknown;
  utmMedium?: unknown;
  utmCampaign?: unknown;
  quiz_completed?: unknown;
  quiz_answers_json?: unknown;
  event_metadata?: unknown;
  leadType?: unknown;
  audience?: unknown;
  message?: unknown;
  checkoutStage?: unknown;
  checkoutStatus?: unknown;
  product?: unknown;
  price?: unknown;
  stripeSessionId?: unknown;
  stripePaymentIntent?: unknown;
  referrer?: unknown;
  sourcePath?: unknown;
};

export type HouseGrokLeadInput = {
  body: GuideLeadBody;
  host?: string;
  referer?: string;
  searchParams?: URLSearchParams;
  now?: Date;
  leadId?: string;
};

export type HouseGrokWriteResult = {
  stored: boolean;
  spreadsheetId: string;
  sheetTitle: string;
  updatedRange?: string;
  error?: string;
};

type AppendRowFn = (row: string[]) => Promise<{ updatedRange?: string }>;

let cachedAccessToken: { token: string; expiresAt: number } | undefined;
let cachedLeadsTabTitle: string | undefined;

export function asTrimmedString(value: unknown): string {
  if (value === undefined || value === null) return "";
  return String(value).trim();
}

export function isValidEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email);
}

export function emailValidationError(email: unknown): "email_required" | null {
  const value = asTrimmedString(email);
  if (!value || !isValidEmail(value)) return "email_required";
  return null;
}

export function resolveSourceSite(explicit: unknown, host = ""): SourceSite {
  const requested = asTrimmedString(explicit).toLowerCase();
  if ((ALLOWED_SOURCE_SITES as readonly string[]).includes(requested)) {
    return requested as SourceSite;
  }
  const hostname = host.split(":")[0].toLowerCase();
  if (hostname.includes("vasculardementia")) return "vasculardementia";
  if (hostname.includes("baselinecognitivetest")) return "baselinecognitivetest";
  return "vascumind";
}

export function resolveSegmentHypothesis(body: GuideLeadBody, entryPage: string): string {
  const explicit = asTrimmedString(body.segment_hypothesis);
  if (explicit) return explicit;

  const audience = asTrimmedString(body.audience).toLowerCase();
  if (audience === "caregiver" || audience === "caregiver / family member") return "caregiver";
  if (audience === "patient") return "self";

  const leadType = asTrimmedString(body.leadType);
  if (leadType === "clinical-trial-match" || leadType === "cro-licensing") return "clinical_trial";
  if (leadType === "memory-screen") return "vascular_dementia";
  if (leadType === "clinician-guide") return "path";

  const haystack = `${entryPage} ${asTrimmedString(body.path)}`.toLowerCase();
  if (haystack.includes("caregiver")) return "caregiver";
  if (haystack.includes("stroke") || haystack.includes("tia") || haystack.includes("vascular")) return "vascular_dementia";
  if (haystack.includes("clinical-trial") || haystack.includes("cro")) return "clinical_trial";
  return "path";
}

function pickUtm(body: GuideLeadBody, searchParams: URLSearchParams | undefined, snake: string, camel: keyof GuideLeadBody): string {
  return asTrimmedString(body[snake as keyof GuideLeadBody])
    || asTrimmedString(body[camel])
    || asTrimmedString(searchParams?.get(snake));
}

function stripPiiMetadata(value: unknown): Record<string, unknown> | undefined {
  if (!value || typeof value !== "object" || Array.isArray(value)) return undefined;
  const cleaned = Object.fromEntries(
    Object.entries(value as Record<string, unknown>).filter(([key, entry]) => {
      if (PII_METADATA_KEYS.test(key)) return false;
      if (typeof entry === "string" && EMAIL_PATTERN.test(entry)) return false;
      return entry !== undefined && entry !== null && entry !== "";
    }),
  );
  return Object.keys(cleaned).length ? cleaned : undefined;
}

export function quizAnswersJsonFromBody(body: GuideLeadBody): string {
  const fromJson = asTrimmedString(body.quiz_answers_json);
  if (fromJson) {
    try {
      const parsed = JSON.parse(fromJson);
      const cleaned = stripPiiMetadata(parsed);
      return cleaned ? JSON.stringify(cleaned) : "";
    } catch {
      return "";
    }
  }

  const metadata = stripPiiMetadata(body.event_metadata) || {};
  const leadType = asTrimmedString(body.leadType);
  const product = asTrimmedString(body.product);
  const checkoutStage = asTrimmedString(body.checkoutStage);
  if (leadType) metadata.leadType = leadType;
  if (product) metadata.product = product;
  if (checkoutStage) metadata.checkoutStage = checkoutStage;
  return Object.keys(metadata).length ? JSON.stringify(metadata) : "";
}

function hasVerifiedStripePayment(body: GuideLeadBody): boolean {
  const status = asTrimmedString(body.checkoutStatus).toLowerCase();
  const paid = status === "paid" || status === "complete" || status === "succeeded";
  const ref = asTrimmedString(body.stripeSessionId) || asTrimmedString(body.stripePaymentIntent);
  return paid && Boolean(ref);
}

export function emptyLeadsRow(): LeadsRowValues {
  return Object.fromEntries(LEADS_HEADERS.map((header) => [header, ""])) as LeadsRowValues;
}

export function buildHouseGrokLeadRow(input: HouseGrokLeadInput): { values: LeadsRowValues; row: string[] } {
  const body = input.body || {};
  const now = (input.now || new Date()).toISOString();
  const searchParams = input.searchParams;
  const entryPage = asTrimmedString(body.entry_page)
    || asTrimmedString(body.path)
    || asTrimmedString(body.sourcePath)
    || asTrimmedString(input.referer)
    || asTrimmedString(body.referrer);
  const paid = hasVerifiedStripePayment(body);
  const values = emptyLeadsRow();

  values.lead_id = input.leadId || crypto.randomUUID();
  values.source_site = resolveSourceSite(body.source_site, input.host);
  values.utm_source = pickUtm(body, searchParams, "utm_source", "utmSource");
  values.utm_medium = pickUtm(body, searchParams, "utm_medium", "utmMedium");
  values.utm_campaign = pickUtm(body, searchParams, "utm_campaign", "utmCampaign");
  values.entry_page = entryPage;
  values.segment_hypothesis = resolveSegmentHypothesis(body, entryPage);
  values.quiz_completed = asTrimmedString(body.quiz_completed) === "true" ? "true" : "false";
  values.quiz_answers_json = quizAnswersJsonFromBody(body);
  values.purchase_status = paid ? "paid" : "guide_lead";
  values.purchase_date = paid ? now : "";
  values.created_at = now;
  values.updated_at = now;
  values.name = asTrimmedString(body.name);
  values.email = asTrimmedString(body.email);
  values.phone = asTrimmedString(body.phone);
  values.purchase_amount = paid ? asTrimmedString(body.price) : "";
  values.payment_ref = paid
    ? asTrimmedString(body.stripeSessionId) || asTrimmedString(body.stripePaymentIntent)
    : "";
  values.payment_provider = paid ? "stripe" : "";
  values.objection_notes = asTrimmedString(body.message);

  return { values, row: LEADS_HEADERS.map((header) => values[header]) };
}

export function houseGrokSheetsId(): string {
  return asTrimmedString(process.env.GOOGLE_SHEETS_ID) || HOUSE_GROK_SHEET_ID;
}

export function isHouseGrokCrmConfigured(): boolean {
  const serviceAccount = Boolean(
    asTrimmedString(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
    && asTrimmedString(process.env.GOOGLE_PRIVATE_KEY),
  );
  const oauth = Boolean(
    asTrimmedString(process.env.GOOGLE_OAUTH_CLIENT_ID)
    && asTrimmedString(process.env.GOOGLE_OAUTH_CLIENT_SECRET)
    && asTrimmedString(process.env.GOOGLE_OAUTH_REFRESH_TOKEN),
  );
  return serviceAccount || oauth;
}

function normalizePrivateKey(raw: string): string {
  return raw.replace(/\\n/g, "\n").trim();
}

function base64Url(input: string | Buffer): string {
  const buffer = typeof input === "string" ? Buffer.from(input) : input;
  return buffer.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

async function getServiceAccountAccessToken(): Promise<string | undefined> {
  const email = asTrimmedString(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
  const privateKey = asTrimmedString(process.env.GOOGLE_PRIVATE_KEY);
  if (!email || !privateKey) return undefined;

  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = base64Url(JSON.stringify({
    iss: email,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  }));
  const unsigned = `${header}.${claim}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsigned);
  const assertion = `${unsigned}.${base64Url(signer.sign(normalizePrivateKey(privateKey)))}`;

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });
  const json = await response.json() as { access_token?: string; expires_in?: number; error?: string };
  if (!response.ok || !json.access_token) {
    throw new Error(`Google service-account token failed: ${JSON.stringify(json).slice(0, 400)}`);
  }
  return json.access_token;
}

async function getOAuthAccessToken(): Promise<string | undefined> {
  const clientId = asTrimmedString(process.env.GOOGLE_OAUTH_CLIENT_ID);
  const clientSecret = asTrimmedString(process.env.GOOGLE_OAUTH_CLIENT_SECRET);
  const refreshToken = asTrimmedString(process.env.GOOGLE_OAUTH_REFRESH_TOKEN);
  if (!clientId || !clientSecret || !refreshToken) return undefined;

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });
  const json = await response.json() as { access_token?: string };
  if (!response.ok || !json.access_token) {
    throw new Error(`Google OAuth refresh failed: ${JSON.stringify(json).slice(0, 400)}`);
  }
  return json.access_token;
}

async function getGoogleAccessToken(): Promise<string> {
  if (cachedAccessToken && cachedAccessToken.expiresAt > Date.now()) {
    return cachedAccessToken.token;
  }
  const token = await getServiceAccountAccessToken() || await getOAuthAccessToken();
  if (!token) {
    throw new Error("Google Sheets auth is not configured");
  }
  cachedAccessToken = { token, expiresAt: Date.now() + 45 * 60 * 1000 };
  return token;
}

async function resolveLeadsTabTitle(accessToken: string, spreadsheetId: string): Promise<string> {
  if (cachedLeadsTabTitle) return cachedLeadsTabTitle;

  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?fields=sheets.properties(sheetId,title)`,
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );
  const json = await response.json() as { sheets?: { properties?: { title?: string } }[]; error?: { message?: string } };
  if (!response.ok) {
    throw new Error(`Sheets metadata error ${response.status}: ${json.error?.message || "unknown"}`);
  }
  const match = json.sheets?.find((sheet) => sheet.properties?.title === LEADS_TAB_TITLE);
  if (!match?.properties?.title) {
    const titles = json.sheets?.map((sheet) => sheet.properties?.title).filter(Boolean).join(", ") || "(none)";
    throw new Error(`House Grok CRM is missing a "${LEADS_TAB_TITLE}" tab. Found: ${titles}`);
  }
  cachedLeadsTabTitle = match.properties.title;
  return cachedLeadsTabTitle;
}

export async function appendHouseGrokLeadRow(row: string[]): Promise<{ updatedRange?: string }> {
  if (row.length !== LEADS_HEADERS.length) {
    throw new Error(`House Grok lead row must have ${LEADS_HEADERS.length} columns, got ${row.length}`);
  }
  const spreadsheetId = houseGrokSheetsId();
  const accessToken = await getGoogleAccessToken();
  const sheetTitle = await resolveLeadsTabTitle(accessToken, spreadsheetId);
  const range = encodeURIComponent(`'${sheetTitle}'!A:Z`);
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
    throw new Error(`House Grok Sheets append error ${response.status}: ${text.slice(0, 500)}`);
  }
  const json = JSON.parse(text) as { updates?: { updatedRange?: string } };
  return { updatedRange: json.updates?.updatedRange };
}

export async function writeHouseGrokLead(
  input: HouseGrokLeadInput,
  appendRow: AppendRowFn = appendHouseGrokLeadRow,
): Promise<{ leadId: string; row: string[]; values: LeadsRowValues; write: HouseGrokWriteResult }> {
  const built = buildHouseGrokLeadRow(input);
  try {
    const appended = await appendRow(built.row);
    return {
      leadId: built.values.lead_id,
      row: built.row,
      values: built.values,
      write: {
        stored: true,
        spreadsheetId: houseGrokSheetsId(),
        sheetTitle: LEADS_TAB_TITLE,
        updatedRange: appended.updatedRange,
      },
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      leadId: built.values.lead_id,
      row: built.row,
      values: built.values,
      write: {
        stored: false,
        spreadsheetId: houseGrokSheetsId(),
        sheetTitle: LEADS_TAB_TITLE,
        error: message.slice(0, 500),
      },
    };
  }
}

export async function parseJsonBody(request: Request): Promise<GuideLeadBody | null> {
  const text = await request.text();
  if (!text.trim()) return {};
  try {
    const parsed = JSON.parse(text);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    return parsed as GuideLeadBody;
  } catch {
    return null;
  }
}

export function requestHost(request: Request): string {
  return asTrimmedString(request.headers.get("x-forwarded-host"))
    || asTrimmedString(request.headers.get("host"))
    || asTrimmedString(new URL(request.url).hostname);
}

export async function handleGuideLeadPost(
  request: Request,
  appendRow: AppendRowFn = appendHouseGrokLeadRow,
): Promise<Response> {
  const body = await parseJsonBody(request);
  if (body === null || emailValidationError(body.email)) {
    return Response.json({ ok: false, error: "email_required" }, { status: 400 });
  }

  const result = await writeHouseGrokLead({
    body,
    host: requestHost(request),
    referer: asTrimmedString(request.headers.get("referer")) || asTrimmedString(body.referrer),
    searchParams: new URL(request.url).searchParams,
  }, appendRow);

  if (!result.write.stored) {
    const configured = isHouseGrokCrmConfigured();
    return Response.json({
      ok: false,
      error: configured ? "crm_write_failed" : "crm_not_configured",
      lead_id: result.leadId,
    }, { status: 503 });
  }

  return Response.json({
    ok: true,
    lead_id: result.leadId,
    source_site: result.values.source_site,
    purchase_status: result.values.purchase_status,
  });
}

import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import {
  ALLOWED_SOURCE_SITES,
  LEADS_HEADERS,
  buildHouseGrokLeadRow,
  emailValidationError,
  handleGuideLeadPost,
  quizAnswersJsonFromBody,
  resolveSegmentHypothesis,
  resolveSourceSite,
} from "./houseGrokCrm.ts";

const savedEnv = { ...process.env };

afterEach(() => {
  for (const key of Object.keys(process.env)) {
    if (!(key in savedEnv)) delete process.env[key];
  }
  Object.assign(process.env, savedEnv);
});

test("rejects empty and invalid email", () => {
  assert.equal(emailValidationError(undefined), "email_required");
  assert.equal(emailValidationError(""), "email_required");
  assert.equal(emailValidationError("   "), "email_required");
  assert.equal(emailValidationError("not-an-email"), "email_required");
  assert.equal(emailValidationError("ada@example.com"), null);
});

test("resolves source_site from host or explicit body", () => {
  assert.equal(resolveSourceSite(undefined, "www.vascumind.com"), "vascumind");
  assert.equal(resolveSourceSite(undefined, "vasculardementia.ai"), "vasculardementia");
  assert.equal(resolveSourceSite(undefined, "www.vasculardementia.com"), "vasculardementia");
  assert.equal(resolveSourceSite(undefined, "baselinecognitivetest.com"), "baselinecognitivetest");
  assert.equal(resolveSourceSite("baselinecognitivetest", "www.vascumind.com"), "baselinecognitivetest");
  assert.equal(resolveSourceSite("evil-site", "www.vascumind.com"), "vascumind");
  assert.deepEqual(ALLOWED_SOURCE_SITES, ["vascumind", "vasculardementia", "baselinecognitivetest"]);
});

test("builds a full A-Z House Grok Leads row for a guide lead", () => {
  const now = new Date("2026-09-10T17:30:00.000Z");
  const { values, row } = buildHouseGrokLeadRow({
    body: {
      name: "Ada Lovelace",
      email: "ada@example.com",
      phone: "555-0100",
      path: "/resources/5-questions-guide",
      source_site: "vascumind",
      segment_hypothesis: "caregiver",
      utm_source: "newsletter",
      utm_medium: "email",
      utm_campaign: "guide",
    },
    host: "www.vascumind.com",
    now,
    leadId: "00000000-0000-4000-8000-000000000001",
  });

  assert.equal(LEADS_HEADERS.length, 26);
  assert.equal(row.length, 26);
  assert.deepEqual(row, LEADS_HEADERS.map((header) => values[header]));
  assert.equal(values.lead_id, "00000000-0000-4000-8000-000000000001");
  assert.equal(values.source_site, "vascumind");
  assert.equal(values.utm_source, "newsletter");
  assert.equal(values.utm_medium, "email");
  assert.equal(values.utm_campaign, "guide");
  assert.equal(values.entry_page, "/resources/5-questions-guide");
  assert.equal(values.segment_hypothesis, "caregiver");
  assert.equal(values.quiz_completed, "false");
  assert.equal(values.quiz_answers_json, "");
  assert.equal(values.purchase_status, "guide_lead");
  assert.equal(values.created_at, "2026-09-10T17:30:00.000Z");
  assert.equal(values.updated_at, "2026-09-10T17:30:00.000Z");
  assert.equal(values.name, "Ada Lovelace");
  assert.equal(values.email, "ada@example.com");
  assert.equal(values.phone, "555-0100");
  assert.equal(values.purchase_amount, "");
  assert.equal(values.payment_ref, "");
  assert.equal(values.payment_provider, "");
});

test("fills Stripe payment columns only when checkout is actually paid", () => {
  const unpaid = buildHouseGrokLeadRow({
    body: {
      email: "ada@example.com",
      price: "$99",
      stripeSessionId: "cs_test_123",
      checkoutStatus: "pending",
    },
  });
  assert.equal(unpaid.values.purchase_status, "guide_lead");
  assert.equal(unpaid.values.purchase_amount, "");
  assert.equal(unpaid.values.payment_ref, "");
  assert.equal(unpaid.values.payment_provider, "");

  const paid = buildHouseGrokLeadRow({
    body: {
      email: "ada@example.com",
      price: "$99",
      stripeSessionId: "cs_test_123",
      checkoutStatus: "paid",
    },
    now: new Date("2026-09-10T17:30:00.000Z"),
  });
  assert.equal(paid.values.purchase_status, "paid");
  assert.equal(paid.values.purchase_amount, "$99");
  assert.equal(paid.values.payment_ref, "cs_test_123");
  assert.equal(paid.values.payment_provider, "stripe");
});

test("strips PII from quiz/event metadata JSON", () => {
  assert.equal(
    quizAnswersJsonFromBody({
      quiz_answers_json: JSON.stringify({ score: 4, email: "secret@example.com", name: "Ada" }),
    }),
    JSON.stringify({ score: 4 }),
  );
  assert.equal(
    quizAnswersJsonFromBody({
      leadType: "clinician-guide",
      event_metadata: { email: "secret@example.com", answeredCount: 5 },
    }),
    JSON.stringify({ answeredCount: 5, leadType: "clinician-guide" }),
  );
});

test("infers segment_hypothesis from audience, lead type, or path", () => {
  assert.equal(resolveSegmentHypothesis({ audience: "caregiver" }, "/"), "caregiver");
  assert.equal(resolveSegmentHypothesis({ audience: "patient" }, "/"), "self");
  assert.equal(resolveSegmentHypothesis({ leadType: "memory-screen" }, "/memory-screen"), "vascular_dementia");
  assert.equal(resolveSegmentHypothesis({}, "/caregiver-guide-memory-after-stroke"), "caregiver");
  assert.equal(resolveSegmentHypothesis({}, "/resources"), "path");
});

test("POST /api/guide-lead rejects empty body with non-2xx and never ok:true", async () => {
  const empty = await handleGuideLeadPost(
    new Request("https://www.vascumind.com/api/guide-lead", { method: "POST", body: "" }),
    async () => {
      throw new Error("append should not run for invalid email");
    },
  );
  assert.equal(empty.status, 400);
  assert.deepEqual(await empty.json(), { ok: false, error: "email_required" });

  const invalid = await handleGuideLeadPost(
    new Request("https://www.vascumind.com/api/guide-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Ada", email: "nope" }),
    }),
    async () => {
      throw new Error("append should not run for invalid email");
    },
  );
  assert.equal(invalid.status, 400);
  assert.deepEqual(await invalid.json(), { ok: false, error: "email_required" });
});

test("POST /api/guide-lead appends a 26-column row when email is present", async () => {
  const captured: string[][] = [];
  const response = await handleGuideLeadPost(
    new Request("https://www.vascumind.com/api/guide-lead?utm_source=ad", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        host: "www.vascumind.com",
        referer: "https://www.vascumind.com/resources",
      },
      body: JSON.stringify({
        name: "Ada Lovelace",
        email: "ada@example.com",
        phone: "555-0100",
        path: "/resources",
        segment_hypothesis: "self",
      }),
    }),
    async (row) => {
      captured.push(row);
      return { updatedRange: "Leads!A2:Z2" };
    },
  );

  assert.equal(response.status, 200);
  const json = await response.json() as { ok: boolean; lead_id: string; source_site: string; purchase_status: string };
  assert.equal(json.ok, true);
  assert.equal(json.source_site, "vascumind");
  assert.equal(json.purchase_status, "guide_lead");
  assert.equal(typeof json.lead_id, "string");
  assert.equal(json.lead_id.length > 0, true);
  assert.equal(captured.length, 1);
  assert.equal(captured[0].length, 26);
  assert.equal(captured[0][1], "vascumind");
  assert.equal(captured[0][2], "ad");
  assert.equal(captured[0][5], "/resources");
  assert.equal(captured[0][6], "self");
  assert.equal(captured[0][11], "guide_lead");
  assert.equal(captured[0][20], "Ada Lovelace");
  assert.equal(captured[0][21], "ada@example.com");
  assert.equal(captured[0][22], "555-0100");
  assert.equal(captured[0][23], "");
  assert.equal(captured[0][24], "");
  assert.equal(captured[0][25], "");
});

test("POST /api/guide-lead does not return ok:true when Sheets write fails", async () => {
  process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL = "crm@example.iam.gserviceaccount.com";
  process.env.GOOGLE_PRIVATE_KEY = "fake-key";
  const response = await handleGuideLeadPost(
    new Request("https://www.vascumind.com/api/guide-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "ada@example.com" }),
    }),
    async () => {
      throw new Error("Sheets unavailable");
    },
  );
  assert.equal(response.status, 503);
  const json = await response.json() as { ok: boolean; error: string };
  assert.equal(json.ok, false);
  assert.equal(json.error, "crm_write_failed");
});

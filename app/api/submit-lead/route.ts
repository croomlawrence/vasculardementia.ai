import { NextResponse } from "next/server";
import {
  emailValidationError,
  isHouseGrokCrmConfigured,
  requestHost,
  writeHouseGrokLead,
} from "@/lib/houseGrokCrm";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null) as {
    name?: string;
    email?: string;
    phone?: string;
    path?: string;
  } | null;

  if (!payload || emailValidationError(payload.email)) {
    return NextResponse.json({ ok: false, error: "email_required", message: "Email is required." }, { status: 400 });
  }

  const result = await writeHouseGrokLead({
    body: {
      ...payload,
      path: payload.path || "/clinical-trials/consent",
      entry_page: payload.path || "/clinical-trials/consent",
      segment_hypothesis: "clinical_trial",
    },
    host: requestHost(request),
    referer: request.headers.get("referer") || "",
    searchParams: new URL(request.url).searchParams,
  });

  if (!result.write.stored) {
    return NextResponse.json({
      ok: false,
      error: isHouseGrokCrmConfigured() ? "crm_write_failed" : "crm_not_configured",
      lead_id: result.leadId,
      message: "Submission could not be stored in the House Grok CRM.",
    }, { status: 503 });
  }

  return NextResponse.json({
    ok: true,
    lead_id: result.leadId,
    message: "Submission successful.",
  });
}

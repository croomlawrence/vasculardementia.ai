import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { croBenchmarks } from "@/lib/business";

const tiers = [
  { name: "Pilot", license: "$35k–$50k", perTest: "$35–$50/test", use: "Single-study feasibility, one indication, defined site cohort" },
  { name: "Standard", license: "$75k", perTest: "$50–$75/test", use: "Active trial program with recruitment, screening, and monitoring workflow" },
  { name: "Enterprise", license: "Custom", perTest: "Custom", use: "Multi-study, multi-region, or trial-network deployment" },
];

const workflow = [
  "Define indication, inclusion/exclusion logic, countries, sites, and participant volume.",
  "Configure the vascular cognitive screening funnel and consent-aware handoff requirements.",
  "Launch trial-readiness recruitment pages and monitor conversion by source and site.",
  "Use repeat screening and structured exports to support sponsor/CRO operating reviews.",
];

export default function CROLicensingPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="text-center mb-16">
        <div className="section-label mb-3">REVENUE STREAM 2 · CRO LICENSING FEES</div>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">License the vascular cognitive screening funnel for trials</h1>
        <p className="text-2xl text-black max-w-4xl mx-auto">
          VascuMind gives CROs and sponsors a focused path to identify, educate, qualify, and monitor people with vascular cognitive impairment and MCI-relevant patterns.
        </p>
      </section>

      <section className="border-4 border-black rounded-3xl p-8 md:p-12 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-black rounded-2xl p-6"><strong>Earlier signal:</strong><br />Find subtle cognitive impairment and vascular-risk context before late-stage disease.</div>
          <div className="border border-black rounded-2xl p-6"><strong>Better fit:</strong><br />Route vascular-pattern and mixed impairment into better-aligned trial pathways.</div>
          <div className="border border-black rounded-2xl p-6"><strong>Operating leverage:</strong><br />Use one consumer-grade front end for recruitment, baseline characterization, and repeat testing.</div>
        </div>
      </section>

      <section className="mb-16">
        <div className="section-label mb-3">PRICING ARCHITECTURE</div>
        <h2 className="text-4xl font-semibold mb-6">Anchor at parity or premium to legacy cognitive tools.</h2>
        <p className="text-xl mb-6">
          Benchmark: MoCA CRO licensing is understood at approximately {croBenchmarks.mocaLicense} plus {croBenchmarks.mocaPerTest}. VascuMind should price at parity or premium when paired with stronger cognitive-screening science, vascular-pattern fit, and implementation support.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className="border border-black rounded-3xl p-8">
              <h3 className="text-3xl font-semibold mb-4">{tier.name}</h3>
              <div className="text-xl font-semibold">License: {tier.license}</div>
              <div className="text-xl font-semibold mb-4">Usage: {tier.perTest}</div>
              <p>{tier.use}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-3xl font-semibold mb-4">CRO workflow</h2>
          <ol className="list-decimal pl-6 space-y-2">
            {workflow.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </div>
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-3xl font-semibold mb-4">Compliance posture</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Educational and trial-screening positioning, not consumer diagnosis.</li>
            <li>Clinical validation claims must be sourced and reviewed before sponsor materials.</li>
            <li>Consent, data privacy, site requirements, and country-specific rules must be defined before deployment.</li>
            <li>No identifiable consumer data is shared with sponsors or CROs without additional explicit consent.</li>
          </ul>
        </div>
      </section>

      <section className="bg-black text-white rounded-3xl p-10 mb-16 text-center">
        <h2 className="text-4xl font-semibold mb-4">Give sponsors a consumer-grade trial-readiness engine.</h2>
        <p className="text-xl text-white max-w-3xl mx-auto mb-8">The DTC funnel creates awareness. The CRO license monetizes validated demand where vascular cognition matters most.</p>
        <Link href="/cro-licensing/packet" className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold border border-white hover:bg-black hover:text-white">
          Preview Licensing One-Pager
        </Link>
      </section>

      <LeadForm leadType="cro-licensing" title="Request CRO licensing packet" submitLabel="Request Licensing Packet" includeTrialFields />
    </main>
  );
}

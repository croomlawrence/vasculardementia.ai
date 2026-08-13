import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { croBenchmarks } from "@/lib/business";
import { ResultPreviewCard, VascularPathwayArt } from "@/app/components/BrandVisuals";

export const metadata: Metadata = {
  title: "CRO Licensing for Vascular Cognitive Screening",
  description: "License VascuMind’s consent-aware, vascular-differentiated cognitive screening funnel for studies where vascular cognition matters.",
  alternates: { canonical: "/cro-licensing" },
};

const pains = [
  ["High screen-fail waste", "Sponsors can spend heavily on biomarker confirmation before cognitive and vascular fit are clear."],
  ["Weak vascular differentiation", "Many recruitment funnels do not separate vascular-pattern, mixed, and non-vascular cognitive concerns early enough."],
  ["Poor consumer trust", "Listing sites rarely create the plain-language confidence families need before they opt into research follow-up."],
];

const tiers = [
  { name: "Pilot", license: "$35k–$50k", perTest: "$35–$50/test", use: "Single-study feasibility, one indication, defined site cohort" },
  { name: "Standard", license: "$75k", perTest: "$50–$75/test", use: "Active trial program with recruitment, screening, and monitoring workflow" },
  { name: "Enterprise", license: "Custom", perTest: "Custom", use: "Multi-study, multi-region, or trial-network deployment" },
];

const workflow = [
  "Define indication, inclusion/exclusion logic, countries, sites, participant volume, and consent requirements.",
  "Configure a condition-specific landing page, vascular pattern check, cognitive baseline handoff, and research-interest form.",
  "Launch source-tracked campaigns and monitor conversion by message, site, audience, and score band.",
  "Use structured exports and operating reviews to refine recruitment, prequalification, and follow-up.",
];

export default function CROLicensingPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="grid lg:grid-cols-[1fr_360px] gap-10 items-start mb-16">
        <div>
          <div className="section-label mb-3">For sponsors, CROs, and research teams</div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">A consent-aware screening funnel for studies where vascular cognition matters.</h1>
          <p className="text-2xl text-black max-w-4xl mb-8">
            VascuMind helps identify, educate, baseline, and route people with vascular cognitive concerns before a sponsor spends deeply on downstream screening.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#packet" className="btn-primary text-center">Request Licensing Packet</Link>
            <Link href="/cognitive-screening-for-clinical-trials" className="btn-secondary text-center">See Trial Screening Page</Link>
          </div>
        </div>
        <aside className="space-y-6">
          <VascularPathwayArt tone="clinical" />
          <div className="border-4 border-black rounded-3xl p-6 bg-background-light">
          <h2 className="text-2xl font-semibold mb-3">What the license packages</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Condition-specific landing page</li>
            <li>Vascular-pattern segmentation</li>
            <li>Cognitive baseline handoff</li>
            <li>Consent-aware research follow-up</li>
            <li>Source and conversion analytics</li>
          </ul>
          </div>
        </aside>
      </section>

      <section className="mb-16">
        <div className="section-label mb-3">Sponsor problem</div>
        <h2 className="text-4xl font-semibold mb-6">Research teams need better-fit candidates before expensive screening steps.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pains.map(([title, copy]) => (
            <div key={title} className="border border-black rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-4 border-black rounded-3xl p-8 md:p-12 mb-16 brand-section-ivory">
        <div className="section-label mb-3">VascuMind wedge</div>
        <h2 className="text-4xl font-semibold mb-6">Consumer-grade front door. Vascular differentiation. Structured cognitive baseline. Consent-aware routing.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-black rounded-2xl p-6"><strong>Earlier signal:</strong><br />Find subtle cognitive impairment and vascular-risk context before late-stage disease.</div>
          <div className="border border-black rounded-2xl p-6"><strong>Better fit:</strong><br />Route vascular-pattern and mixed impairment into better-aligned trial pathways.</div>
          <div className="border border-black rounded-2xl p-6"><strong>Operating leverage:</strong><br />Use one funnel for recruitment, baseline characterization, and repeat testing.</div>
        </div>
      </section>

      <section className="mb-16">
        <div className="section-label mb-3">Pricing architecture</div>
        <h2 className="text-4xl font-semibold mb-6">Anchor at parity or premium to legacy cognitive tools.</h2>
        <p className="text-xl mb-6">
          Benchmark: MoCA CRO licensing is understood at approximately {croBenchmarks.mocaLicense} plus {croBenchmarks.mocaPerTest}. VascuMind should price at parity or premium when paired with stronger cognitive-screening science, vascular-pattern fit, implementation support, and campaign analytics. Final sponsor-facing pricing should be reviewed deal-by-deal.
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
        <ResultPreviewCard />
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-3xl font-semibold mb-4">Implementation workflow</h2>
          <ol className="list-decimal pl-6 space-y-2">
            {workflow.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </div>
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-3xl font-semibold mb-4">Compliance posture</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Educational and trial-screening positioning, not consumer diagnosis.</li>
            <li>Clinical validation claims must be sourced and reviewed before sponsor materials.</li>
            <li>Consent, privacy, site requirements, and country-specific rules must be defined before deployment.</li>
            <li>No identifiable consumer data is shared with sponsors or CROs without additional explicit consent.</li>
          </ul>
        </div>
      </section>

      <section className="bg-black text-white rounded-3xl p-10 mb-16 text-center">
        <h2 className="text-4xl font-semibold mb-4 text-white">Give sponsors a consumer-grade trial-readiness engine.</h2>
        <p className="text-xl text-white max-w-3xl mx-auto mb-8">The DTC funnel creates awareness. The CRO license monetizes validated demand where vascular cognition matters most.</p>
        <Link href="/cro-licensing/packet" className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold border border-white hover:bg-black hover:text-white">
          Preview Licensing One-Pager
        </Link>
      </section>

      <section id="packet">
        <LeadForm leadType="cro-licensing" title="Request CRO licensing packet" submitLabel="Request Licensing Packet" includeTrialFields />
      </section>
    </main>
  );
}

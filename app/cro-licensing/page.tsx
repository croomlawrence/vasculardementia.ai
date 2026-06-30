import LeadForm from "@/components/LeadForm";
import { croBenchmarks } from "@/lib/business";

const tiers = [
  { name: "Pilot", license: "$35k–$50k", perTest: "$35–$50/test", use: "Initial CRO/sponsor validation or single-study feasibility" },
  { name: "Standard", license: "$75k", perTest: "$50–$75/test", use: "Active trial programs with defined participant volume" },
  { name: "Enterprise", license: "Custom", perTest: "Custom", use: "Multi-study, multi-region, or integrated trial-network deployment" },
];

export default function CROLicensingPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="text-center mb-16">
        <div className="section-label mb-3">CRO LICENSING</div>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">Cognitive Screening Infrastructure for Vascular Dementia and MCI Trials</h1>
        <p className="text-2xl text-black max-w-4xl mx-auto">
          License a more sensitive cognitive screening pathway for trial recruitment, baseline characterization, and longitudinal monitoring in vascular cognitive impairment and related programs.
        </p>
      </section>

      <section className="border-4 border-black rounded-3xl p-8 md:p-12 mb-16">
        <h2 className="text-4xl font-semibold mb-4">Why CROs and sponsors need this</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-black rounded-2xl p-6"><strong>Earlier signal:</strong><br />Trials need tools that can identify subtle cognitive impairment before late-stage dementia.</div>
          <div className="border border-black rounded-2xl p-6"><strong>Better fit:</strong><br />Vascular dementia and mixed cognitive impairment require vascular-risk context, not generic memory screening alone.</div>
          <div className="border border-black rounded-2xl p-6"><strong>Operational leverage:</strong><br />A licensed screening workflow can support site qualification, recruitment funnels, and repeat testing.</div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold mb-6">Pricing architecture</h2>
        <p className="text-xl mb-6">
          Benchmark: less accurate MoCA CRO licensing is understood at approximately {croBenchmarks.mocaLicense} plus {croBenchmarks.mocaPerTest}. VascuMind should anchor at parity or premium when paired with stronger cognitive screening science and vascular-dementia fit.
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
            <li>Define indication, sites, countries, and participant volume.</li>
            <li>Select pilot, standard, or enterprise license structure.</li>
            <li>Configure screening, reporting, and data handoff requirements.</li>
            <li>Launch trial-readiness funnel and monitor conversion.</li>
          </ol>
        </div>
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-3xl font-semibold mb-4">Compliance posture</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Educational and trial-screening positioning, not consumer diagnosis.</li>
            <li>Clinical validation claims must be sourced and reviewed before sponsor materials.</li>
            <li>Data privacy, consent, and site-specific requirements must be defined before deployment.</li>
          </ul>
        </div>
      </section>

      <LeadForm leadType="cro-licensing" title="Request CRO licensing packet" submitLabel="Request Licensing Packet" includeTrialFields />
    </main>
  );
}

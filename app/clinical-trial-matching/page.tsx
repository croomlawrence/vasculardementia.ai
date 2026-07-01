import LeadForm from "@/components/LeadForm";

export default function ClinicalTrialMatchingPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="text-center mb-16">
        <div className="section-label mb-3">JOURNEY B — CONSENTED TRIAL MATCHING</div>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">See if current vascular cognitive studies may fit</h1>
        <p className="text-2xl text-black max-w-4xl mx-auto">
          After the Acurist.AI benchmark, users who want research options can opt in to VascuMind evaluating whether clinical studies investigating vascular cognitive impairment may be relevant.
        </p>
      </section>

      <section className="border-4 border-black rounded-3xl p-8 mb-16 text-center">
        <h2 className="text-4xl font-semibold mb-4">Would you like to be matched with cutting-edge clinical trials for vascular health?</h2>
        <p className="text-xl text-black max-w-4xl mx-auto">
          If yes, complete the consent form below. VascuMind will use the information only to evaluate follow-up priority and will not share direct identifiers with CROs or sponsors without additional explicit consent and privacy review.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="border border-black rounded-3xl p-8"><h2 className="text-2xl font-semibold mb-3">Opt in</h2><p>Clinical-trial matching requires explicit consent. Do not submit emergency symptoms or medical records.</p></div>
        <div className="border border-black rounded-3xl p-8"><h2 className="text-2xl font-semibold mb-3">Score locally</h2><p>Local/on-prem lead scoring ranks follow-up priority — high, medium, or low — and does not provide medical advice.</p></div>
        <div className="border border-black rounded-3xl p-8"><h2 className="text-2xl font-semibold mb-3">Share carefully</h2><p>Identifiable information should not be shared with CROs or sponsors without additional explicit consent and privacy review.</p></div>
      </section>

      <LeadForm leadType="clinical-trial-match" title="Request clinical-trial matching follow-up" submitLabel="See If I Match Current Studies" includeTrialFields />
    </main>
  );
}

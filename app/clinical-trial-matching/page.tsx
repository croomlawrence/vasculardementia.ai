import LeadForm from "@/components/LeadForm";

export default function ClinicalTrialMatchingPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="text-center mb-16">
        <div className="section-label mb-3">CONSENTED TRIAL MATCHING</div>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">Be considered for vascular cognitive research opportunities</h1>
        <p className="text-2xl text-black max-w-4xl mx-auto">
          Share basic, non-emergency information so VascuMind can evaluate whether a clinical-trial or CRO partner follow-up may be relevant.
        </p>
      </section>
      <section className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="border border-black rounded-3xl p-8"><h2 className="text-2xl font-semibold mb-3">Opt in</h2><p>Clinical-trial matching requires explicit consent. Do not submit emergency symptoms or medical records.</p></div>
        <div className="border border-black rounded-3xl p-8"><h2 className="text-2xl font-semibold mb-3">Score locally</h2><p>Future local/on-prem lead scoring should only rank follow-up priority — high, medium, or low — and should not provide medical advice.</p></div>
        <div className="border border-black rounded-3xl p-8"><h2 className="text-2xl font-semibold mb-3">Share carefully</h2><p>Identifiable information should not be shared with CROs or sponsors without additional explicit consent and privacy review.</p></div>
      </section>
      <LeadForm leadType="clinical-trial-match" title="Request clinical-trial matching follow-up" submitLabel="Request Matching Follow-Up" includeTrialFields />
    </main>
  );
}

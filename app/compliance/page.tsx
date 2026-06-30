export default function CompliancePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <section className="mb-12">
        <div className="section-label mb-3">COMPLIANCE RULES</div>
        <h1 className="text-5xl font-semibold tracking-tight mb-6">VascuMind public-claim guardrails</h1>
        <p className="text-2xl text-black">Use conservative educational, structure/function, and trial-readiness language until counsel review.</p>
      </section>
      <section className="grid md:grid-cols-2 gap-8">
        <div className="border border-black rounded-3xl p-8"><h2 className="text-3xl font-semibold mb-4">Screening disclaimer</h2><p className="text-xl text-black">The MCI Screen is sourced from Acurist.AI. This test is a cognitive screening, benchmarking and tracking tool, not a diagnostic medical device. Results should be discussed with a qualified healthcare provider.</p></div>
        <div className="border border-black rounded-3xl p-8"><h2 className="text-3xl font-semibold mb-4">Supplement claims</h2><p className="text-xl text-black">Do not say supplements treat, prevent, cure, or diagnose vascular dementia, Alzheimer’s disease, MCI, stroke, or any disease. Use structure/function language such as supports healthy blood flow or supports everyday cognitive wellness.</p></div>
        <div className="border border-black rounded-3xl p-8"><h2 className="text-3xl font-semibold mb-4">Counsel review</h2><p className="text-xl text-black">Website copy, labels, checkout copy, email marketing, HSA/FSA copy, privacy terms, and CRO data-sharing workflows require legal review before scaled launch.</p></div>
        <div className="border border-black rounded-3xl p-8"><h2 className="text-3xl font-semibold mb-4">Emergency boundary</h2><p className="text-xl text-black">VascuMind is not for acute medical emergencies. Sudden neurologic symptoms should route to emergency services.</p></div>
      </section>
    </main>
  );
}

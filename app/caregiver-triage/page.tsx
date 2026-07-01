export default function CaregiverTriagePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <section className="mb-12">
        <div className="section-label mb-3">CAREGIVER TRIAGE GUARDRAILS</div>
        <h1 className="text-5xl font-semibold tracking-tight mb-6">Caregiver support must route emergencies away from VascuMind</h1>
        <p className="text-2xl text-black">Any chatbot or local model used by VascuMind must route acute neurologic symptoms as emergency situations, not product or screening opportunities.</p>
      </section>
      <section className="border-4 border-black rounded-3xl p-8 mb-12">
        <h2 className="text-3xl font-semibold mb-4">Required emergency response</h2>
        <p className="text-2xl font-semibold mb-4">Please call 911 or seek immediate emergency medical attention. VascuMind is not for acute medical emergencies.</p>
        <p className="text-xl text-black">Trigger this response for recent stroke, sudden confusion, facial drooping, one-sided weakness, speech difficulty, severe dizziness, sudden vision loss, or rapidly worsening symptoms.</p>
      </section>
      <section className="border border-black rounded-3xl p-8">
        <h2 className="text-3xl font-semibold mb-4">Allowed scope</h2>
        <ul className="list-disc pl-6 text-xl space-y-2">
          <li>Explain educational site navigation.</li>
          <li>Suggest discussing screening results with a qualified healthcare provider.</li>
          <li>Help caregivers prepare questions for a clinician visit.</li>
          <li>Never diagnose, recommend clinical action, or provide emergency triage beyond routing to urgent care or emergency services.</li>
        </ul>
      </section>
    </main>
  );
}

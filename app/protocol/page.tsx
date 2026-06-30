import Link from "next/link";

const steps = [
  {
    title: "1. Start with subjective vascular-pattern screening",
    body: "Use the Hachinski educational tool to organize whether memory concerns feel sudden, stepwise, stroke/TIA-related, or vascular-risk related. This is not a diagnosis and is not emergency care.",
    href: "/hachinski",
    cta: "Take Hachinski Tool",
  },
  {
    title: "2. Benchmark with the Acurist MCI Screen",
    body: "The MCI Screen is sourced from Acurist.AI. It is a cognitive screening, benchmarking, and tracking tool — not a diagnostic medical device. Results should be discussed with a qualified healthcare provider.",
    href: "/memory-screen",
    cta: "Start Memory Screen",
  },
  {
    title: "3. Build a Vascular Cognitive Risk Profile",
    body: "VascuMind can organize submitted information into a privacy-first risk profile for follow-up triage. Local/on-prem analysis should be used for lead qualification and education, not medical advice.",
    href: "/clinical-trial-matching",
    cta: "Explore Trial Matching",
  },
  {
    title: "4. Choose the next path",
    body: "DTC users can review wellness-support supplements and caregiver education. B2B/CRO users can request a licensing conversation around vascular-specific cognitive trial-readiness.",
    href: "/marketplace",
    cta: "View Wellness Stack",
  },
];

export default function ProtocolPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="text-center mb-16">
        <div className="section-label mb-3">THE VASCUMIND PROTOCOL</div>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">A stepwise pathway for vascular cognitive concerns</h1>
        <p className="text-2xl text-black max-w-4xl mx-auto">
          Screen subjectively, benchmark objectively, organize risk, then choose the right next step: clinician discussion, wellness support, or clinical-trial matching.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-16">
        {steps.map((step) => (
          <div key={step.title} className="border border-black rounded-3xl p-8">
            <h2 className="text-3xl font-semibold mb-4">{step.title}</h2>
            <p className="text-xl text-black mb-6">{step.body}</p>
            <Link href={step.href} className="btn-green inline-block px-6 py-3 rounded-full font-semibold">{step.cta}</Link>
          </div>
        ))}
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="border-4 border-black rounded-3xl p-8">
          <h2 className="text-3xl font-semibold mb-4">Journey A: DTC caregiver path</h2>
          <ol className="list-decimal pl-6 space-y-2 text-xl">
            <li>Caregiver starts with Hachinski education.</li>
            <li>Family purchases or requests Acurist-sourced MCI Screen benchmarking.</li>
            <li>Caregiver reviews clinician-discussion summary.</li>
            <li>Family considers a disclosed wellness-support stack after screening, not before.</li>
          </ol>
        </div>
        <div className="border-4 border-black rounded-3xl p-8">
          <h2 className="text-3xl font-semibold mb-4">Journey B: B2B CRO path</h2>
          <ol className="list-decimal pl-6 space-y-2 text-xl">
            <li>User opts into clinical-trial matching.</li>
            <li>Local/on-prem qualification engine flags high/medium/low follow-up priority.</li>
            <li>Only consented information is routed for partner follow-up.</li>
            <li>VascuMind sells compliant recruitment access and licensing infrastructure to CROs.</li>
          </ol>
        </div>
      </section>

      <section className="border border-black rounded-3xl p-8">
        <h2 className="text-3xl font-semibold mb-4">Safety boundaries</h2>
        <p className="text-xl text-black">
          VascuMind does not diagnose dementia, stroke, MCI, or any disease. Sudden weakness, facial drooping, speech difficulty, confusion, severe dizziness, or vision loss requires emergency medical attention.
        </p>
      </section>
    </main>
  );
}

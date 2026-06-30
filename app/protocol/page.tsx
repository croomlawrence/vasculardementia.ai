import Link from "next/link";

const steps = [
  {
    title: "1. Free: notice the pattern",
    body: "Take the Hachinski Assessment. Notice whether memory slips feel sudden, stepwise, stroke/TIA-related, or vascular-risk related. This lowers friction because a subjective check is easier to start than a paid cognitive benchmark.",
    href: "/hachinski",
    cta: "Take the Hachinski Assessment",
  },
  {
    title: "2. Paid/low-ticket: benchmark it",
    body: "Hachinski shows a pattern? Let’s benchmark it. Purchase or request the Acurist.AI MCI Screen to get a cognitive baseline score for discussion with a qualified healthcare provider.",
    href: "/memory-screen",
    cta: "Benchmark with Acurist.AI",
  },
  {
    title: "3. The fork: choose the right journey",
    body: "After benchmarking, VascuMind routes users toward one of two paths: caregiver wellness support or consented clinical-trial matching for vascular cognitive research.",
    href: "/memory-screen/thank-you",
    cta: "See the Post-Screen Fork",
  },
  {
    title: "4. Support or match",
    body: "DTC users can explore the Cerebrovascular Support stack. Trial-interested users can opt into matching for studies investigating next-generation vascular dementia approaches.",
    href: "/marketplace",
    cta: "View Support Stack",
  },
];

export default function ProtocolPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="text-center mb-16">
        <div className="section-label mb-3">THE VASCUMIND PROTOCOL</div>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">Free subjective signal → paid objective benchmark → targeted next step</h1>
        <p className="text-2xl text-black max-w-4xl mx-auto">
          The conversion bridge is simple: people may dismiss memory concerns, but they will answer a low-friction pattern question. If the pattern resonates, VascuMind offers a concrete next step: an Acurist.AI cognitive benchmark.
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
          <h2 className="text-3xl font-semibold mb-4">Journey A: caregiver / DTC</h2>
          <ol className="list-decimal pl-6 space-y-2 text-xl">
            <li>Take the free Hachinski Assessment.</li>
            <li>If the pattern fits, benchmark with the Acurist.AI MCI Screen.</li>
            <li>If changes are worth discussing, bring results to a qualified healthcare provider.</li>
            <li>Consider the VascuMind Cerebrovascular Support stack as wellness support, not disease treatment.</li>
          </ol>
        </div>
        <div className="border-4 border-black rounded-3xl p-8">
          <h2 className="text-3xl font-semibold mb-4">Journey B: clinical trial / CRO</h2>
          <ol className="list-decimal pl-6 space-y-2 text-xl">
            <li>User opts into clinical-trial matching.</li>
            <li>Local/on-prem qualification engine flags high/medium/low follow-up priority.</li>
            <li>Only consented information is routed for partner follow-up.</li>
            <li>VascuMind offers CROs a vascular-specific, pre-screened recruitment channel.</li>
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

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Science & Validation',
  description: 'Source-aware science, validation, and compliance framing for the VascuMind protocol, Hachinski-style pattern check, and MCI Screen cognitive baseline.',
  alternates: { canonical: '/science' },
};

const claimRules = [
  ['Safe public framing', 'screening, benchmarking, tracking, clinician discussion support, educational pattern check'],
  ['Requires source documentation', 'accuracy statistics, normative-database size, reimbursement precedent, clinic deployment count'],
  ['Avoid without review', 'diagnoses, treats, prevents, reverses, guarantees, or replaces clinician evaluation'],
];

export default function SciencePage() {
  return (
    <main className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="section-label mb-3">Science & validation</div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Structured tools for better clinician conversations.</h1>
        <p className="text-xl text-black mb-12">VascuMind uses educational vascular-pattern questions and an MCI Screen cognitive baseline pathway so families can organize observations, create a benchmark, and discuss next steps with qualified clinicians.</p>
      </div>

      <div className="max-w-5xl mx-auto px-6 space-y-12">
        <section id="mci-screen" className="card bg-white">
          <h2 className="text-3xl font-bold mb-4">The MCI Screen: cognitive screening, benchmarking, and tracking</h2>
          <p className="text-black">The MCI Screen is referenced by VascuMind as a structured cognitive screening, benchmarking, and tracking tool sourced from MCI Screen / EMBIC materials. It is not a diagnosis or a substitute for clinical evaluation.</p>
          <ul className="list-disc pl-6 space-y-2 my-6 text-black">
            <li><strong className="text-black">Published-validation context:</strong> MCI Screen materials describe published validation for detecting memory changes versus normal aging. Any exact accuracy claim should be paired with source documentation, population context, and review.</li>
            <li><strong className="text-black">Structured baseline:</strong> The screen creates a repeatable cognitive benchmark for discussion and tracking.</li>
            <li><strong className="text-black">Clinician framing:</strong> Results should be reviewed with a qualified healthcare professional and never used to change medications, supplements, or care plans independently.</li>
          </ul>
          <Link href="/memory-screen" className="font-semibold text-black underline">Learn about the MCI Screen pathway →</Link>
        </section>

        <section id="hachinski" className="card bg-white">
          <h2 className="text-3xl font-bold mb-4">The free Hachinski-style vascular pattern check</h2>
          <p className="text-black">The free check adapts Hachinski-style vascular features into patient-friendly language: sudden onset, stepwise worsening, stroke/TIA history, focal neurological symptoms, and vascular risk factors. It helps organize a health story before a clinician visit; it is not a disease-confirmation tool.</p>
        </section>

        <section className="card bg-white">
          <h2 className="text-3xl font-bold mb-4">Claim framework</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {claimRules.map(([title, copy]) => (
              <div key={title} className="border border-black rounded-2xl p-5">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="wellness" className="card bg-white">
          <h2 className="text-3xl font-bold mb-4">Wellness-support philosophy</h2>
          <p className="text-black">Optional wellness resources are presented only as general structure/function education. They should be discussed with a qualified healthcare professional, especially if you take medications or have a medical condition.</p>
          <p className="text-sm text-black mt-4">These products are dietary supplements and are not intended to diagnose, treat, cure, or prevent vascular dementia, Alzheimer’s disease, MCI, stroke, or any other disease. Always consult your healthcare professional before use.</p>
        </section>
      </div>
    </main>
  );
}

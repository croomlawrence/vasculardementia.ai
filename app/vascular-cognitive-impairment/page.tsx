import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vascular Cognitive Impairment First Step",
  description: "Understand vascular cognitive impairment and use VascuMind’s free pattern check to prepare better clinician questions. Educational only, not a diagnosis.",
  alternates: { canonical: "/vascular-cognitive-impairment" },
};

export default function VascularCognitiveImpairmentPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="section-label mb-3">Vascular cognitive impairment</div>
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">When circulation and cognition may belong in the same conversation.</h1>
      <p className="text-2xl text-black mb-8">Vascular cognitive impairment is a clinical topic for qualified healthcare professionals. VascuMind helps families organize observations and risk-factor context before that conversation.</p>
      <div className="border-4 border-black rounded-3xl p-8 mb-10 bg-background-light">
        <h2 className="text-3xl font-semibold mb-4">Start with documentation, not diagnosis.</h2>
        <p className="text-xl mb-6">A pattern check can help organize sudden onset, stepwise changes, stroke/TIA history, hypertension, diabetes, PAD, heart disease, and other context.</p>
        <Link href="/hachinski" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">Start Free Pattern Check</Link>
      </div>
    </main>
  );
}

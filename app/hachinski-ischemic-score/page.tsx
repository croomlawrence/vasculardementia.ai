import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hachinski Ischemic Score Explained",
  description: "Learn what the Hachinski Ischemic Score is, what ischemic-pattern features it organizes, and how to use VascuMind’s free educational check before a clinician conversation.",
  alternates: { canonical: "/hachinski-ischemic-score" },
};

export default function HachinskiExplainerPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="section-label mb-3">Hachinski Ischemic Score</div>
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">A plain-language way to organize ischemic-pattern cognitive clues.</h1>
      <p className="text-2xl text-black mb-8">The Hachinski Ischemic Score is a clinician-recognized pattern tool. VascuMind adapts Hachinski-style questions for education and self-reflection only. It is not a disease-confirmation tool or substitute for clinical evaluation.</p>
      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="border border-black rounded-3xl p-6"><h2 className="text-2xl font-semibold mb-3">Sudden or stepwise change</h2><p>Vascular-pattern changes may appear suddenly or worsen in steps.</p></div>
        <div className="border border-black rounded-3xl p-6"><h2 className="text-2xl font-semibold mb-3">Vascular history</h2><p>Stroke/TIA, blood pressure, PAD, heart disease, and diabetes can matter.</p></div>
        <div className="border border-black rounded-3xl p-6"><h2 className="text-2xl font-semibold mb-3">Clinician discussion</h2><p>Results should be discussed with a qualified healthcare professional.</p></div>
      </section>
      <Link href="/hachinski" className="btn-primary inline-block">Take the Free Pattern Check</Link>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "High Blood Pressure and Memory Questions",
  description: "High blood pressure is one vascular risk factor families may need to discuss when memory changes appear. Start a free educational vascular cognitive pattern check.",
  alternates: { canonical: "/high-blood-pressure-and-memory" },
};

export default function HighBloodPressureMemoryPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="section-label mb-3">Blood pressure and memory concerns</div>
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">High blood pressure can be part of the brain-health conversation.</h1>
      <p className="text-2xl text-black mb-8">VascuMind does not provide medical advice or treatment. It helps families organize vascular risk-factor context — including hypertension — before a clinician visit.</p>
      <section className="border-4 border-black rounded-3xl p-8 text-center">
        <h2 className="text-4xl font-semibold mb-4">Memory changes plus vascular risk factors? Start here.</h2>
        <p className="text-xl mb-6">Use the free pattern check to prepare better questions about blood pressure, stroke/TIA history, diabetes, PAD, heart disease, and cognitive screening.</p>
        <Link href="/hachinski" className="btn-primary inline-block">Start Free Check</Link>
      </section>
    </main>
  );
}

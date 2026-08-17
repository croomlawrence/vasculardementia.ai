import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vascular Dementia Symptoms & First Questions",
  description: "Learn common vascular-pattern cognitive symptoms and start a free educational pattern check for clinician discussion. VascuMind does not diagnose disease.",
  alternates: { canonical: "/vascular-dementia-symptoms" },
};

const symptoms = [
  "Thinking or memory changes after stroke or TIA",
  "Stepwise worsening after specific events",
  "Attention, planning, or processing-speed problems",
  "Confusion that fluctuates or worsens at certain times",
  "Vascular risk factors such as blood pressure, diabetes, PAD, or heart disease",
];

export default function VascularDementiaSymptomsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="section-label mb-3">Vascular dementia symptoms</div>
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">Vascular-pattern memory changes deserve specific questions.</h1>
      <p className="text-2xl text-black mb-8">VascuMind is educational only. Use these symptoms to prepare for a clinician conversation — not to label or confirm vascular dementia, Alzheimer’s disease, MCI, stroke, or any disease on your own.</p>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {symptoms.map((symptom) => <div key={symptom} className="border border-black rounded-3xl p-6 text-xl font-semibold">{symptom}</div>)}
      </div>
      <section className="border-4 border-black rounded-3xl p-8 text-center bg-background-light">
        <h2 className="text-4xl font-semibold mb-4">Start with the free vascular memory check.</h2>
        <p className="text-xl mb-6">Then decide whether a $99 memory baseline would help your clinician discussion.</p>
        <Link href="/hachinski" className="btn-primary inline-block">Check My Vascular Memory Pattern</Link>
      </section>
    </main>
  );
}

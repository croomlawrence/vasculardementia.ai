import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Caregiver Safety Guide for Vascular Dementia & Sudden Memory Changes | VascuMind",
  description:
    "A caregiver safety guide for vascular dementia, post-stroke cognitive changes, and urgent neurologic symptoms that require emergency medical care.",
};

export default function CaregiverTriagePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/" className="text-black hover:underline">← Back to VascuMind</Link>
      <section className="mt-8 mb-12">
        <div className="section-label mb-3">CAREGIVER SAFETY GUIDE</div>
        <h1 className="text-5xl font-semibold tracking-tight mb-6">When memory changes need urgent care.</h1>
        <p className="text-xl text-black">
          VascuMind can help families organize vascular cognitive concerns, but it is not for emergencies. Sudden or severe neurologic symptoms require immediate medical care.
        </p>
      </section>

      <section className="border-4 border-black rounded-3xl p-8 mb-12">
        <h2 className="text-3xl font-semibold mb-4">Call 911 or seek emergency care now for:</h2>
        <ul className="list-disc pl-6 space-y-2 text-xl">
          <li>Facial drooping</li>
          <li>One-sided weakness or numbness</li>
          <li>Speech trouble</li>
          <li>Sudden confusion</li>
          <li>Severe dizziness or loss of balance</li>
          <li>Sudden vision loss</li>
          <li>Chest pain, shortness of breath, or rapidly worsening symptoms</li>
        </ul>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-3">Use VascuMind for non-emergency organization</h2>
          <p>When symptoms are not sudden or severe, use the Hachinski pattern check and cognitive baseline to prepare for clinician discussion.</p>
        </div>
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-3">Do not use website tools to triage acute symptoms</h2>
          <p>VascuMind does not diagnose stroke, vascular dementia, delirium, medication reactions, or other urgent conditions.</p>
        </div>
      </section>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/hachinski" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold text-center">Start Free Pattern Check</Link>
        <Link href="/memory-screen" className="inline-block border-2 border-black px-8 py-4 rounded-full text-lg font-semibold text-center hover:bg-black hover:text-white">Create Cognitive Baseline</Link>
      </div>
    </main>
  );
}

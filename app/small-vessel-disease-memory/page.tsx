import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Vessel Disease and Memory Questions",
  description: "Small vessel disease can be part of cognitive-health discussions with clinicians. Use VascuMind’s free educational pattern check to organize questions.",
  alternates: { canonical: "/small-vessel-disease-memory" },
};

export default function SmallVesselDiseaseMemoryPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="section-label mb-3">Small vessel disease and memory</div>
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">Small vessel disease can raise specific cognitive-health questions.</h1>
      <p className="text-2xl text-black mb-8">Only a qualified clinician can interpret imaging and symptoms. VascuMind helps families organize ischemic-pattern clues and prepare for that discussion.</p>
      <Link href="/hachinski" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">Start Free Pattern Check</Link>
    </main>
  );
}

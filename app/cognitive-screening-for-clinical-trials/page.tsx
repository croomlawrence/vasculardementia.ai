import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cognitive Screening for Clinical Trials",
  description: "VascuMind gives sponsors and CROs a consent-aware, vascular-differentiated cognitive screening funnel for studies where vascular cognition matters.",
  alternates: { canonical: "/cognitive-screening-for-clinical-trials" },
};

export default function CognitiveScreeningClinicalTrialsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="section-label mb-3">For sponsors and CROs</div>
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">A vascular-differentiated cognitive screening funnel for clinical trials.</h1>
      <p className="text-2xl text-black mb-8 max-w-4xl">VascuMind combines a consumer-grade front door, vascular-pattern education, structured cognitive baseline options, consent-aware routing, and sponsor-ready analytics for research programs where vascular cognition matters.</p>
      <Link href="/cro-licensing" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">See CRO Licensing</Link>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Caregiver Guide: Memory Changes After Stroke",
  description: "A caregiver guide for families noticing memory changes after stroke, TIA, or vascular risk factors. Start with a free educational pattern check.",
  alternates: { canonical: "/caregiver-guide-memory-after-stroke" },
};

const steps = ["Write down when changes started", "Note sudden or stepwise worsening", "Record stroke/TIA and vascular risk-factor history", "Ask whether cognitive screening or repeat tracking is appropriate"];

export default function CaregiverGuidePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="section-label mb-3">Caregiver guide</div>
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">You may be the first person to notice the pattern.</h1>
      <p className="text-2xl text-black mb-8">When someone you love starts slipping after a stroke or vascular event, VascuMind gives you a safer way to organize concerns before the next clinician visit.</p>
      <ol className="grid md:grid-cols-2 gap-6 mb-12">
        {steps.map((step, index) => <li key={step} className="border border-black rounded-3xl p-6"><div className="text-4xl font-bold mb-3">{index + 1}</div><p className="text-xl font-semibold">{step}</p></li>)}
      </ol>
      <Link href="/hachinski" className="btn-primary inline-block">Start Free Pattern Check</Link>
    </main>
  );
}

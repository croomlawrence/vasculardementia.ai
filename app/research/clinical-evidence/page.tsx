import type { Metadata } from "next";
import Link from 'next/link';
import TrackedLink from '@/components/TrackedLink';

export const metadata: Metadata = {
  title: "What May Be Actionable in Vascular Dementia & Cognitive Decline | VascuMind",
  description:
    "Learn what may be actionable in vascular dementia and vascular cognitive decline, including clinician-directed risk-factor management, screening, lifestyle, and research options.",
};

const actionAreas = [
  ["Vascular risk-factor management", "Blood pressure, diabetes, cholesterol, smoking, atrial fibrillation, PAD, heart disease, and prior stroke/TIA history are clinician-directed topics worth organizing and discussing."],
  ["Cognitive screening and tracking", "A baseline can help families and clinicians compare change over time and decide when formal neuropsychological evaluation or additional workup may be appropriate."],
  ["Rehabilitation, movement, and daily function", "Physical activity, rehabilitation, cognitive training, sleep, hearing/vision, mood, and medication review may all matter depending on the person’s clinical context."],
  ["Research and investigational studies", "Some families may want to learn about trials or investigational approaches for vascular cognitive impairment. VascuMind provides research awareness, not eligibility or treatment promises."],
  ["Optional wellness support", "Supplements can be reviewed as general wellness support only. They do not diagnose, treat, cure, or prevent vascular dementia, stroke, MCI, Alzheimer’s disease, or any disease."],
];

export default function ClinicalEvidencePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/" className="text-black hover:underline">← Back to VascuMind</Link>
      </div>

      <h1 className="text-5xl font-semibold tracking-tight mb-4">What may be actionable in vascular dementia and post-stroke cognitive decline?</h1>
      <div className="green-divider w-20 mb-8"></div>
      
      <p className="text-xl text-black mb-12">
        VascuMind summarizes educational evidence and clinician-discussion topics for families facing vascular dementia, vascular cognitive impairment, or memory changes after stroke. This page is not medical advice and does not recommend treatment.
      </p>

      <div className="green-wash rounded-3xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-3">The practical message for families</h2>
        <p className="text-black">
          Vascular cognitive decline can involve factors clinicians already know how to evaluate and manage. The opportunity is not to self-treat — it is to organize the right questions earlier, benchmark cognition, and bring better information to qualified professionals.
        </p>
      </div>

      <div className="text-center mb-16 flex flex-col sm:flex-row gap-3 justify-center">
        <a href="/hachinski" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
          Start Free Pattern Check
        </a>
        <TrackedLink href="/memory-screen" eventName="cta_memory_screen_click" eventData={{ sourcePath: "/research/clinical-evidence", ctaLabel: "Create Cognitive Baseline", location: "top" }} className="inline-block border-2 border-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-white">
          Create Cognitive Baseline
        </TrackedLink>
      </div>

      <div className="space-y-10 mb-16">
        {actionAreas.map(([title, body]) => (
          <section key={title} className="border border-black rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-3">{title}</h2>
            <p className="text-black">{body}</p>
          </section>
        ))}
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Evidence context behind wellness recommendations</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Omega-3 & vascular health</h3>
            <p className="text-black">
              Multiple large trials have evaluated EPA/DHA in cardiovascular and healthy-aging contexts. Effects depend on dose, population, baseline risk, medications, and outcome measured.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Beetroot & nitric oxide</h3>
            <p className="text-black">
              Research has evaluated dietary nitrates from beetroot for nitric oxide bioavailability, blood pressure, and endothelial-function markers. These are wellness-related markers, not disease-treatment claims.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">B vitamins, homocysteine, and cognitive aging</h3>
            <p className="text-black">
              The VITACOG trial studied high-dose B vitamins in older adults with mild cognitive impairment and elevated homocysteine. Testing, clinical context, and clinician guidance matter; this does not establish a disease-related benefit for any product.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-16 text-center">
        <TrackedLink href="/memory-screen" eventName="cta_memory_screen_click" eventData={{ sourcePath: "/research/clinical-evidence", ctaLabel: "Create Cognitive Baseline", location: "bottom" }} className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
          Create Cognitive Baseline
        </TrackedLink>
      </div>
    </div>
  );
}

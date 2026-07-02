import type { Metadata } from "next";
import Link from 'next/link';
import TrackedLink from '@/components/TrackedLink';

export const metadata: Metadata = {
  title: "Vascular Dementia Clinical Trials & Research Options | VascuMind",
  description:
    "Explore research options and clinical-trial awareness for vascular dementia, vascular cognitive impairment, and post-stroke cognitive decline.",
};

export default function VascularDementiaResearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/" className="text-black hover:underline">← Back to VascuMind</Link>
      </div>

      <h1 className="text-5xl font-semibold tracking-tight mb-4">Vascular dementia clinical trials and research options</h1>
      <div className="green-divider w-24 mb-8"></div>
      <p className="text-xl text-black mb-12">
        A patient-friendly guide for families who want to understand current research in vascular dementia, vascular cognitive impairment, and post-stroke cognitive decline. This is research awareness only — not trial eligibility, medical advice, or treatment guidance.
      </p>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">How VascuMind helps families approach research</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-black rounded-3xl p-10 green-card">
            <div className="text-sm font-medium tracking-widest text-black mb-3">STEP 1 — UNDERSTAND</div>
            <h3 className="text-3xl font-semibold mb-4">Learn the vascular cognitive pattern</h3>
            <p className="text-lg text-black">Understand how stroke, small vessel disease, blood pressure, diabetes, PAD, heart disease, and other vascular factors can be relevant to memory and thinking changes.</p>
          </div>
          <div className="border border-black rounded-3xl p-10 green-card">
            <div className="text-sm font-medium tracking-widest text-black mb-3">STEP 2 — BENCHMARK</div>
            <h3 className="text-3xl font-semibold mb-4">Create a cognitive baseline</h3>
            <p className="text-lg text-black">Use screening and tracking information to support clinician discussion before exploring research pathways.</p>
          </div>
          <div className="border border-black rounded-3xl p-10 green-card">
            <div className="text-sm font-medium tracking-widest text-black mb-3">STEP 3 — ASK</div>
            <h3 className="text-3xl font-semibold mb-4">Explore whether research may be relevant</h3>
            <p className="text-lg text-black">With consent, VascuMind can help route research-interest follow-up. Study teams and clinicians determine eligibility and medical appropriateness.</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-12 flex flex-col sm:flex-row gap-3 justify-center">
        <TrackedLink href="/memory-screen" eventName="cta_memory_screen_click" eventData={{ sourcePath: "/research/vascular-dementia-clinical-trials", ctaLabel: "Create Cognitive Baseline" }} className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
          Create Cognitive Baseline
        </TrackedLink>
        <a href="/clinical-trial-matching" className="inline-block border-2 border-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-white">
          Request Research Follow-Up
        </a>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <p>
          Over the past 30 years, researchers around the world have conducted hundreds of clinical studies focused on vascular cognitive impairment and related syndromes. These studies have helped researchers understand risk-factor management, post-stroke cognitive change, small vessel disease, inflammation, imaging markers, and investigational approaches.
        </p>
      </div>

      <div className="bg-white border border-black rounded-3xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Research Snapshot (ClinicalTrials.gov)</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div><div className="text-4xl font-bold text-black">450+</div><div className="text-sm text-black mt-1">Total Studies</div></div>
          <div><div className="text-4xl font-bold text-black">94</div><div className="text-sm text-black mt-1">Currently Recruiting</div></div>
          <div><div className="text-4xl font-bold text-black">197</div><div className="text-sm text-black mt-1">Completed Studies</div></div>
          <div><div className="text-4xl font-bold text-black">27</div><div className="text-sm text-black mt-1">Phase 3 or 4 Trials</div></div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">What researchers are studying now</h2>
        <ul className="space-y-4 text-black">
          <li className="flex gap-3"><span className="text-black font-bold">•</span> <strong>Blood pressure and vascular risk-factor interventions</strong> — Still a major area of research and clinical discussion.</li>
          <li className="flex gap-3"><span className="text-black font-bold">•</span> <strong>Anti-inflammatory, neuroprotective, and regenerative approaches</strong> — Investigational therapies must be evaluated through appropriate study teams and regulatory pathways.</li>
          <li className="flex gap-3"><span className="text-black font-bold">•</span> <strong>Exercise, rehabilitation, and cognitive training combinations</strong></li>
          <li className="flex gap-3"><span className="text-black font-bold">•</span> <strong>Advanced imaging and small vessel disease markers</strong></li>
          <li className="flex gap-3"><span className="text-black font-bold">•</span> <strong>Multi-domain risk-reduction studies</strong> building on models such as FINGER</li>
        </ul>
      </div>

      <div className="bg-white border border-black rounded-3xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">What this means for you</h2>
        <p className="text-black mb-4">
          Research supports discussing modifiable vascular risk factors with a qualified healthcare professional. The strongest practical next step for most families is to organize the clinical conversation around:
        </p>
        <ul className="list-disc pl-6 text-black space-y-1">
          <li>Blood pressure and other vascular risk factors</li>
          <li>Stroke/TIA history and secondary prevention questions</li>
          <li>Diabetes, cholesterol, smoking, sleep, mood, and medication review</li>
          <li>Physical activity, rehabilitation, nutrition, and cognitive tracking</li>
          <li>Whether research options are appropriate to ask about</li>
        </ul>
        <p className="mt-4 text-sm text-black">
          Current studies can be searched at <a href="https://clinicaltrials.gov" target="_blank" className="text-black underline">ClinicalTrials.gov</a>. Always discuss clinical trial participation with your physician and the study team.
        </p>
      </div>

      <div className="text-center text-sm text-black">
        ClinicalTrials.gov snapshot noted as of June 2026; counts change over time. VascuMind does not determine trial eligibility.
      </div>
    </div>
  );
}

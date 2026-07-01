import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Help for Vascular Dementia, Stroke-Related Memory Changes & Caregivers | VascuMind",
  description:
    "Understand, track, and discuss vascular dementia, post-stroke cognitive changes, and vascular cognitive impairment with VascuMind patient and caregiver resources.",
};

export default function WhatWeOfferPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/" className="text-black hover:underline">← Back to VascuMind</Link>
      </div>

      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
          Help for vascular dementia, stroke-related memory changes, and caregivers.
        </h1>
        <p className="text-2xl text-black max-w-3xl mx-auto">
          A clearer path to understand the vascular pattern, benchmark cognition, and prepare better clinician conversations.
        </p>
      </div>

      <section className="mb-20">
        <div className="mb-8">
          <div className="section-label mb-2">START WITH CLARITY</div>
          <h2 className="text-4xl font-semibold tracking-tight mb-4">
            Organize memory concerns and vascular clues before the next visit.
          </h2>
          <p className="text-xl text-black max-w-3xl">
            A quick pattern check can help you organize memory concerns and vascular risk factors — stroke/TIA history, blood pressure, diabetes, PAD, heart disease, and stepwise change — so you know what to discuss with a clinician.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-black rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-3">Concerned about changes? Start with the pattern.</h3>
            <p className="text-black">The Hachinski check is a free, educational self-report tool that helps families notice whether symptoms may fit a vascular-pattern profile.</p>
          </div>
          <div className="border border-black rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-3">Then create an objective cognitive baseline.</h3>
            <p className="text-black">The Acurist.AI MCI Screen gives families a structured benchmark to discuss with clinicians and track over time.</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="/hachinski" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold text-center">
            Start Free Pattern Check
          </a>
          <a href="/memory-screen" className="inline-block border-2 border-black px-8 py-4 rounded-full text-lg font-semibold text-center hover:bg-black hover:text-white">
            Create Cognitive Baseline
          </a>
        </div>
      </section>

      <section className="mb-20 green-wash rounded-3xl p-12">
        <div className="mb-8">
          <div className="section-label mb-2">WHAT MAY BE ACTIONABLE</div>
          <h2 className="text-4xl font-semibold tracking-tight mb-4">
            Vascular cognitive decline may have contributors worth discussing.
          </h2>
          <p className="text-xl text-black max-w-3xl">
            VascuMind does not provide treatment. It helps families ask better questions about clinician-directed action areas such as blood pressure, diabetes, cholesterol, smoking, sleep, mood, medications, rehabilitation, repeat cognitive tracking, and research options.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Care decisions belong with clinicians.</h3>
            <p className="text-black">Use VascuMind to prepare for visits — not to diagnose, change medications, or replace medical care.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Research is moving quickly.</h3>
            <p className="text-black">Families may want to understand whether current or emerging vascular cognitive studies are worth discussing with physicians and study teams.</p>
          </div>
        </div>

        <div className="mt-8">
          <a href="/research/clinical-evidence" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
            Learn What May Be Actionable
          </a>
        </div>
      </section>

      <section className="mb-20">
        <div className="mb-8">
          <div className="section-label mb-2">CAREGIVERS AND FAMILIES</div>
          <h2 className="text-4xl font-semibold tracking-tight mb-4">
            When someone you love starts slipping, start here.
          </h2>
          <p className="text-xl text-black max-w-3xl">
            A trusted place for families noticing memory changes after stroke, with vascular disease, or alongside circulation concerns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-black rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-3">You are the one noticing the changes.</h3>
            <p className="text-black">Caregivers can answer based on observed changes and bring results to a clinician.</p>
          </div>
          <div className="border border-black rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-3">Vascular causes deserve specific questions.</h3>
            <p className="text-black">Stroke history, small vessel disease, blood pressure, diabetes, PAD, and heart disease can shape the conversation.</p>
          </div>
          <div className="border border-black rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-3">You do not have to navigate this alone.</h3>
            <p className="text-black">VascuMind gives families a structured way to ask, track, and discuss next steps.</p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-semibold tracking-tight mb-6 text-white">
          Start with the pattern. Then benchmark cognition.
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Memory changes can have vascular, non-vascular, medication-related, mood-related, sleep-related, and other causes. Vascular risk is one important place to look with a qualified clinician.
        </p>
        <a href="/hachinski" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
          Start Free Pattern Check
        </a>
      </section>
    </div>
  );
}

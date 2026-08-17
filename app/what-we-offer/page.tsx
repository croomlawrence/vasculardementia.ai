import type { Metadata } from "next";
import Link from 'next/link';
import TrackedLink from '@/components/TrackedLink';
import { memoryScreenPrice } from '@/lib/business';

export const metadata: Metadata = {
  title: "Help for Vascular-Pattern Memory Changes & Caregivers | VascuMind",
  description:
    "Start with concern, organize vascular clues, create a memory baseline when appropriate, and bring better questions to a qualified clinician.",
};

const journeyCards = [
  {
    title: 'Free Vascular Memory Check',
    copy: 'For memory changes after stroke, TIA, blood-pressure issues, diabetes, PAD, heart disease, or stepwise decline.',
    href: '/hachinski',
    cta: 'Check My Vascular Memory Pattern',
  },
  {
    title: `${memoryScreenPrice} Memory Baseline`,
    copy: 'A structured MCI Screen benchmark for clinician discussion and repeat tracking. Screening and benchmarking only, not a diagnosis.',
    href: '/memory-screen',
    cta: 'Create Memory Baseline',
  },
  {
    title: 'Clinician Conversation Guide',
    copy: 'Plain-language questions about vascular risk, medications, sleep, mood, rehabilitation, imaging, repeat testing, and research options.',
    href: '/protocol',
    cta: 'See the Protocol',
  },
];

const discussionItems = [
  'blood pressure, diabetes, cholesterol, smoking history, PAD, and heart disease',
  'stroke, TIA, small-vessel disease, or other vascular history',
  'medication review, sleep, mood, hearing, B12, and other possible contributors',
  'formal cognitive screening, imaging, rehabilitation, referral, or repeat tracking',
];

export default function WhatWeOfferPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/" className="text-black hover:underline">← Back to VascuMind</Link>
      </div>

      <div className="text-center mb-16">
        <div className="section-label mb-3">Start here</div>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
          Start with the concern. Organize the vascular clues. Bring better questions.
        </h1>
        <p className="text-2xl text-black max-w-4xl mx-auto">
          VascuMind helps families move from “something changed” to a safer first step: free pattern check, optional memory baseline, and clearer clinician conversation.
        </p>
      </div>

      <section className="mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {journeyCards.map((card) => (
            <div key={card.title} className="border-2 border-black rounded-3xl p-8 bg-white flex flex-col">
              <h2 className="text-3xl font-semibold mb-4">{card.title}</h2>
              <p className="text-black mb-6 flex-1">{card.copy}</p>
              {card.href === '/memory-screen' ? (
                <TrackedLink href={card.href} eventName="cta_memory_screen_click" eventData={{ sourcePath: "/what-we-offer", ctaLabel: card.cta }} className="btn-secondary inline-flex justify-center text-center">
                  {card.cta}
                </TrackedLink>
              ) : (
                <Link href={card.href} className="btn-primary inline-flex justify-center text-center">
                  {card.cta}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20 green-wash rounded-3xl p-8 md:p-12">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div>
            <div className="section-label mb-2">What may be actionable</div>
            <h2 className="text-4xl font-semibold tracking-tight mb-4">
              Vascular-pattern memory changes deserve specific questions.
            </h2>
            <p className="text-xl text-black mb-6">
              VascuMind does not provide treatment. It helps families prepare for clinician-directed conversations about contributors that may be worth reviewing.
            </p>
            <Link href="/research/clinical-evidence" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
              Learn What May Be Actionable
            </Link>
          </div>
          <div className="bg-white border-2 border-black rounded-3xl p-8">
            <h3 className="text-3xl font-semibold mb-4">Questions may include:</h3>
            <ul className="list-disc pl-6 space-y-3 text-black">
              {discussionItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="mb-8">
          <div className="section-label mb-2">Caregivers and families</div>
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
            <p className="text-black">Stroke history, small-vessel disease, blood pressure, diabetes, PAD, and heart disease can shape the conversation.</p>
          </div>
          <div className="border border-black rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-3">You do not have to navigate this alone.</h3>
            <p className="text-black">VascuMind gives families a structured way to ask, track, and discuss next steps.</p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white rounded-3xl p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
          Concern → pattern → baseline → clinician conversation.
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-8 text-white">
          Memory changes can have vascular, non-vascular, medication-related, mood-related, sleep-related, Alzheimer’s-related, and other causes. Vascular risk is one important place to organize with a qualified clinician.
        </p>
        <Link href="/hachinski" className="bg-white text-black border-2 border-white hover:bg-black hover:text-white inline-block px-8 py-4 rounded-full text-lg font-semibold">
          Check My Vascular Memory Pattern
        </Link>
      </section>
    </div>
  );
}

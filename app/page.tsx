import type { Metadata } from 'next';
import Link from 'next/link';
import TrackedLink from '@/components/TrackedLink';
import { memoryScreenPrice } from '@/lib/business';

export const metadata: Metadata = {
  title: 'VascuMind | Clinical-Grade Vascular Cognitive Pattern Check',
  description:
    'Start with the free Hachinski-style vascular cognitive pattern check, then benchmark changes with the $99 MCI Screen for clinician discussion.',
};

const pathwaySteps = [
  {
    label: 'Step 1: Free Hachinski-style Pattern Check',
    title: 'Screen for a vascular cognitive pattern',
    copy:
      "Use a patient-friendly version of the Hachinski Ischemic Score to organize sudden onset, stepwise change, stroke/TIA history, and vascular risk factors before a clinician conversation.",
    href: '/hachinski',
    cta: 'Start Free Pattern Check',
  },
  {
    label: `Step 2: Paid MCI Screen Baseline (${memoryScreenPrice})`,
    title: 'Benchmark cognition with a structured screen',
    copy:
      'The MCI Screen creates an objective cognitive baseline for clinician discussion and repeat tracking. It is a screen and benchmark, not a diagnosis.',
    href: '/memory-screen',
    cta: 'See the $99 MCI Screen',
  },
  {
    label: 'Step 3: Build Your Action Plan',
    title: 'Choose Your Path Forward',
    copy:
      'Unlock a personalized dashboard with your results, educational resources, and optional pathways to wellness support or clinical research opportunities.',
    href: '/protocol',
    cta: 'See Your Personalized Plan',
  },
];

const trustSignals = [
  ['Clinical-grade first step', 'Built around a recognized vascular-pattern questionnaire and structured cognitive baseline.'],
  ['Educational, not diagnostic', 'Use results to prepare for a qualified clinician conversation — not to self-diagnose.'],
  ['Private next step', 'Your information is used for VascuMind follow-up and is not shared without permission.'],
  ['Clear paid benchmark', `The ${memoryScreenPrice} MCI Screen is the first objective baseline after the free pattern check.`],
];

export default function VascuMindHome() {
  return (
    <main>
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight gradient-text">
            Start with the vascular pattern behind memory change.
          </h1>
          <p className="text-xl text-black mb-10 max-w-3xl mx-auto">
            A clinical-grade, education-first pathway for families concerned about memory changes after stroke, TIA, high blood pressure, diabetes, PAD, or other vascular risk factors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hachinski" className="btn-primary">
              Start the Free Vascular Cognitive Pattern Check
            </Link>
            <TrackedLink href="/memory-screen" eventName="cta_memory_screen_click" eventData={{ sourcePath: '/', ctaLabel: 'See the $99 MCI Screen', location: 'hero' }} className="btn-secondary">
              See the $99 MCI Screen
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-black">
            Vascular causes of memory decline are often under-discussed.
          </h2>
          <p className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight gradient-text mb-4">
            Start earlier
          </p>
          <p className="text-xl text-black mb-6 max-w-2xl mx-auto">
            when memory or thinking changes appear after vascular events or vascular risk factors.
          </p>
          <p className="text-xl text-black max-w-2xl mx-auto">
            The first job is not to diagnose yourself. It is to organize the pattern, create a baseline, and bring clearer questions to a qualified clinician.
          </p>
          <p className="text-sm mt-4 text-black">
            Educational only. Sudden neurologic symptoms require emergency care.
          </p>
        </div>
      </section>

      <section aria-label="Trust signals" className="border-y border-black">
        <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-4 gap-6 text-center">
          {trustSignals.map(([title, copy]) => (
            <div key={title}><strong className="text-black">{title}</strong><br />{copy}</div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="section-label mb-4">HOW IT WORKS</div>
          <h2 className="text-5xl font-bold tracking-tight">The VascuMind Protocol: pattern → baseline → next questions.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pathwaySteps.map((step, index) => (
            <div key={step.title} className="card text-center">
              <div className="text-6xl font-bold gradient-text mb-4">{index + 1}</div>
              <div className="section-label mb-3">{step.label}</div>
              <h3 className="text-2xl font-bold mb-3 text-black">{step.title}</h3>
              <p className="text-black mb-6">{step.copy}</p>
              <Link href={step.href} className="btn-primary">
                {step.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
      
      <section className="bg-background-light py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <div className="section-label mb-4">THE HEART-BRAIN CONNECTION</div>
          <h2 className="text-5xl font-bold tracking-tight mb-6 text-black">Your Brain Thinks Best When Your Blood Flows Freely.</h2>
          <p className="text-xl text-black mx-auto">
            Vascular risk factors can affect attention, memory, processing speed, and day-to-day function. VascuMind helps families move from vague concern to a documented pattern and an objective cognitive baseline for clinician discussion.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold tracking-tight mb-6 text-black">Ready to Move from Concern to Clarity?</h2>
          <p className="text-xl text-black max-w-3xl mx-auto mb-8">
            Start with the free Hachinski-style pattern check. If a vascular pattern is present, the next step is the paid MCI Screen cognitive baseline.
          </p>
          <Link href="/hachinski" className="btn-primary">
            Start the Free Pattern Check
          </Link>
        </div>
      </section>
    </main>
  );
}

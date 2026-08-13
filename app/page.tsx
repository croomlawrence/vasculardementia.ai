import type { Metadata } from 'next';
import Link from 'next/link';
import TrackedLink from '@/components/TrackedLink';
import { memoryScreenPrice } from '@/lib/business';
import { HumanMomentCard, PathwayLine, ResultPreviewCard, TrustBadgeRow, VascularPathwayArt } from '@/app/components/BrandVisuals';

export const metadata: Metadata = {
  title: 'Free Vascular Cognitive Pattern Check | VascuMind',
  description:
    'Worried memory changes may be related to stroke, TIA, blood pressure, diabetes, PAD, or circulation? Start with a free vascular cognitive pattern check, then create a $99 cognitive baseline for clinician discussion.',
  alternates: { canonical: '/' },
};

const pathwaySteps = [
  {
    label: 'Step 1 · Free Pattern Check',
    title: 'Organize the vascular clues',
    copy:
      'Answer a Hachinski-style set of questions about sudden onset, stepwise change, stroke/TIA history, and vascular risk factors. Educational only — not a diagnosis.',
    href: '/hachinski',
    cta: 'Start Free Check',
  },
  {
    label: `Step 2 · ${memoryScreenPrice} Cognitive Baseline`,
    title: 'Create a structured benchmark',
    copy:
      'Use the MCI Screen as an objective cognitive baseline for clinician discussion and repeat tracking. It is a screen and benchmark, not a diagnosis.',
    href: '/memory-screen',
    cta: 'Create Baseline',
  },
  {
    label: 'Step 3 · Next Questions',
    title: 'Bring a clearer plan to the visit',
    copy:
      'Use plain-language prompts for clinician conversations, repeat tracking, wellness-support review, or consent-aware research follow-up when appropriate.',
    href: '/protocol',
    cta: 'See the Protocol',
  },
];

const audiences = [
  ['After stroke or TIA', 'Memory, attention, processing speed, or confusion can change after vascular events.'],
  ['Blood pressure, diabetes, PAD, or heart disease', 'Vascular risk factors can shape the questions worth raising with a clinician.'],
  ['Stepwise or sudden changes', 'A change that appears quickly or worsens in steps deserves organized clinical discussion.'],
  ['Adult children and caregivers', 'You may be the first person to notice the pattern. VascuMind gives you a safer way to start.'],
];

export default function VascuMindHome() {
  return (
    <main>
      <section className="brand-hero py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="section-label mb-4">Free vascular cognitive pattern check</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
              Worried memory changes may be related to stroke, blood pressure, or circulation?
            </h1>
            <p className="text-2xl text-black mb-8 max-w-3xl">
              Start with a free vascular cognitive pattern check. If the pattern fits, create a {memoryScreenPrice} cognitive baseline to discuss with your clinician.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6 max-w-2xl">
              <Link href="/hachinski" className="btn-primary text-center flex items-center justify-center min-h-16 leading-snug" data-cta="start-pattern-check">
                Start the Free Pattern Check
              </Link>
              <TrackedLink href="/memory-screen" eventName="cta_memory_screen_click" eventData={{ sourcePath: '/', ctaLabel: 'Create My $99 Cognitive Baseline', location: 'hero' }} className="btn-secondary text-center flex items-center justify-center min-h-16 leading-snug">
                Create My {memoryScreenPrice} Cognitive Baseline
              </TrackedLink>
            </div>
            <p className="text-base text-black">
              Educational only. Not a diagnosis. Sudden neurologic symptoms — facial drooping, one-sided weakness, speech trouble, severe dizziness, or vision loss — require emergency care.
            </p>
          </div>
          <div className="space-y-8">
            <HumanMomentCard priority />
            <ResultPreviewCard />
          </div>
        </div>
      </section>

      <section aria-label="Trust signals" className="border-y border-black bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <TrustBadgeRow />
        </div>
      </section>

      <section className="py-20 brand-section-ivory">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <div className="section-label mb-4">Who this is for</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-black">A clearer start for families noticing vascular-pattern memory changes.</h2>
            <p className="text-xl text-black">The first job is not to diagnose yourself. It is to organize the pattern, create a baseline when appropriate, and bring clearer questions to qualified clinicians.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map(([title, copy]) => (
              <div key={title} className="card bg-white">
                <h3 className="text-2xl font-bold mb-3 text-black">{title}</h3>
                <p className="text-black">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <div className="section-label mb-4">How it works</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Free pattern check → cognitive baseline → better next questions.</h2>
        </div>
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center mb-12">
          <PathwayLine cta={false} />
          <div className="grid gap-5">
            {pathwaySteps.map((step, index) => (
              <div key={step.title} className="card flex flex-col text-left min-h-full bg-white">
                <div className="text-5xl font-bold mb-4">{index + 1}</div>
                <div className="section-label mb-3">{step.label}</div>
                <h3 className="text-2xl font-bold mb-3 text-black">{step.title}</h3>
                <p className="text-black mb-6 flex-1">{step.copy}</p>
                <Link href={step.href} className="btn-primary inline-flex justify-center text-center w-full sm:w-auto whitespace-normal leading-snug">
                  {step.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="section-label mb-4">The heart-brain connection</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">Your brain depends on healthy blood flow.</h2>
            <p className="text-xl text-white">
              Vascular risk factors can affect attention, memory, processing speed, and day-to-day function. VascuMind helps families move from “something feels different” to a documented pattern and an objective cognitive baseline for clinician discussion.
            </p>
          </div>
          <div className="space-y-6">
            <VascularPathwayArt tone="dark" />
            <div className="bg-white text-black rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4">What you can bring to the next visit</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>A plain-language vascular-pattern summary</li>
                <li>Questions about stroke/TIA history and vascular risk factors</li>
                <li>An optional {memoryScreenPrice} cognitive baseline for tracking</li>
                <li>A safer way to discuss wellness support or research options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black">Start free. Benchmark only if it makes sense.</h2>
          <p className="text-xl text-black max-w-3xl mx-auto mb-8">
            Take the free Hachinski-style pattern check first. If the pattern is worth documenting, the next step is the paid MCI Screen cognitive baseline.
          </p>
          <Link href="/hachinski" className="btn-primary inline-block">
            Start the Free Pattern Check
          </Link>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import TrackedLink from '@/components/TrackedLink';
import { HeroPortrait, HumanMomentCard, PathwayLine, ProductJourneyCards, ResultPreviewCard, StoryPanels, TrustBadgeRow, VascularPathwayArt } from '@/app/components/BrandVisuals';

export const metadata: Metadata = {
  title: 'Could Blood Flow Be Affecting Your Memory? | VascuMind',
  description:
    'Start the memory screen or get a free guide of questions for a doctor visit. For families noticing memory changes after stroke, TIA, blood pressure, diabetes, or heart disease. For learning only. Not a diagnosis.',
  alternates: { canonical: '/' },
};

const audiences = [
  ['After stroke or TIA', 'Memory, attention, processing speed, or confusion can change after vascular events.'],
  ['Blood pressure, diabetes, PAD, or heart disease', 'Vascular risk factors can shape the questions worth raising with a clinician.'],
  ['Sudden or stepwise changes', 'A change that appears quickly or worsens in steps deserves organized clinical discussion.'],
  ['Adult children and caregivers', 'You may be the first person to notice the pattern. VascuMind gives you a safer way to start.'],
];

const comparisonRows = [
  {
    option: 'Vascular Memory Check',
    helps: 'Organizes clues like sudden onset, stepwise change, stroke/TIA history, and vascular risk factors.',
    doesNot: 'Does not diagnose dementia or replace medical evaluation.',
  },
  {
    option: 'Memory screen',
    helps: 'Creates a structured benchmark of cognitive performance for discussion and repeat tracking.',
    doesNot: 'Does not explain the medical cause by itself.',
  },
  {
    option: 'Alzheimer’s Blood Test',
    helps: 'May help clinicians assess Alzheimer’s-related biology in appropriate symptomatic adults.',
    doesNot: 'Does not measure day-to-day function or rule out vascular, medication, sleep, mood, or mixed causes.',
  },
];

const clinicianQuestions = [
  'Could stroke, TIA, small-vessel disease, or vascular risk factors be part of the cognitive changes?',
  'Should we review blood pressure, diabetes, cholesterol, smoking history, PAD, sleep, mood, medications, or hearing?',
  'Is formal cognitive screening appropriate?',
  'Would repeat tracking help show whether things are changing?',
  'Are imaging, labs, rehabilitation, or specialist referral worth discussing?',
  'Are Alzheimer’s biomarker tests relevant in this situation?',
];

export default function VascuMindHome() {
  return (
    <main>
      <section className="home-hero py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="section-label mb-5">Memory and blood flow</p>
            <h1 className="text-5xl md:text-7xl mb-6">
              Could Blood Flow Be Affecting Your Memory?
            </h1>
            <p className="text-xl md:text-2xl mb-5 max-w-2xl">
              Some families notice memory changes after a stroke, a TIA, high blood pressure, diabetes, or heart disease. You can start the memory screen. Or you can get a free guide of questions for your doctor.
            </p>
            <p className="text-lg mb-8 max-w-2xl">
              Educational only. Not a diagnosis. Sudden facial drooping, one-sided weakness, speech trouble, severe dizziness, confusion, or vision loss may require emergency care.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <TrackedLink
                href="/memory-screen"
                eventName="cta_memory_screen_click"
                eventData={{ sourcePath: '/', ctaLabel: 'Start the memory screen', location: 'hero' }}
                className="btn-primary"
              >
                Start the memory screen
              </TrackedLink>
              <Link href="/resources/5-questions-guide" className="btn-secondary">
                Get the free guide
              </Link>
            </div>
            <p>
              <Link href="/hachinski" className="text-link">
                Or take the free vascular memory check
              </Link>
            </p>
          </div>
          <HeroPortrait />
        </div>
      </section>

      <section aria-label="Trust signals" className="border-y border-black bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <TrustBadgeRow />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="section-label mb-4">Choose a first step</p>
            <h2 className="text-4xl md:text-5xl mb-4">Three simple ways to start.</h2>
            <p className="text-xl">
              Start the memory screen, get the free guide, or take the free vascular memory check. Each one is for learning and for talking with a clinician.
            </p>
          </div>
          <ProductJourneyCards />
        </div>
      </section>

      <section className="py-20 md:py-28 brand-section-ivory">
        <div className="max-w-6xl mx-auto px-6">
          <StoryPanels />
        </div>
      </section>

      <section className="py-20 md:py-28 brand-section-mint">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
          <HumanMomentCard variant="clinic" />
          <div>
            <p className="section-label mb-4">For the next visit</p>
            <h2 className="text-4xl md:text-5xl mb-5">Get ready to talk with a clinician.</h2>
            <p className="text-xl mb-6">
              VascuMind is for learning. It is not a diagnosis. It is here to help you bring clearer questions to a qualified clinician.
            </p>
            <ResultPreviewCard />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="section-label mb-4">Who this is for</p>
            <h2 className="text-4xl md:text-5xl mb-4">A clearer start for families noticing vascular-pattern memory changes.</h2>
            <p className="text-xl">The first job is to organize what you noticed, then bring clearer questions to a qualified clinician.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map(([title, copy]) => (
              <div key={title} className="card bg-white">
                <h3 className="text-2xl mb-3">{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl mb-12">
          <p className="section-label mb-4">Which first step makes sense?</p>
          <h2 className="text-4xl md:text-5xl mb-5">Memory check, memory screen, or an Alzheimer’s blood test?</h2>
          <p className="text-xl">
            Families hear about many kinds of brain-health testing. They are not the same. This table shows what each one can and cannot do.
          </p>
        </div>
        <div className="overflow-hidden border border-black rounded-3xl bg-white">
          <div className="grid md:grid-cols-3 bg-black text-white font-bold">
            <div className="p-5 text-white">Option</div>
            <div className="p-5 text-white border-t md:border-t-0 md:border-l border-white">What it helps with</div>
            <div className="p-5 text-white border-t md:border-t-0 md:border-l border-white">What it does not do</div>
          </div>
          {comparisonRows.map((row) => (
            <div key={row.option} className="grid md:grid-cols-3 border-t border-black">
              <div className="p-5 font-bold text-2xl">{row.option}</div>
              <div className="p-5 border-t md:border-t-0 md:border-l border-black">{row.helps}</div>
              <div className="p-5 border-t md:border-t-0 md:border-l border-black">{row.doesNot}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="brand-section-mint py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div>
            <p className="section-label mb-4">Sudden or stepwise change</p>
            <h2 className="text-4xl md:text-5xl mb-5">Did the change happen suddenly or in steps?</h2>
            <p className="text-xl mb-6">
              Some families notice memory or thinking changes that seem to appear suddenly, worsen after a stroke or TIA, or decline in steps rather than gradually. That does not confirm the cause, but it is a pattern worth organizing before a clinician visit.
            </p>
            <Link href="/hachinski" className="btn-secondary">
              Take the free vascular memory check
            </Link>
          </div>
          <div className="card bg-white">
            <h3 className="text-3xl mb-4">Questions to bring to the next visit</h3>
            <ul className="list-disc pl-6 space-y-3">
              {clinicianQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <PathwayLine cta={false} />
      </section>

      <section className="bg-black text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="section-label section-label-on-dark mb-4">The heart-brain connection</p>
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Memory is one of the signals families can actually observe.</h2>
            <p className="text-xl text-white">
              Blood flow, vascular disease, and vascular risk factors can affect attention, memory, processing speed, and day-to-day function. VascuMind helps families move from “something feels different” to a documented memory signal, a vascular-pattern summary, and a memory baseline for clinician discussion.
            </p>
          </div>
          <div className="space-y-6">
            <VascularPathwayArt tone="dark" />
            <div className="bg-white text-black rounded-3xl p-8">
              <h3 className="text-3xl mb-4">What you can bring to the next visit</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>A plain-language vascular-pattern summary</li>
                <li>Questions about stroke/TIA history and vascular risk factors</li>
                <li>Notes from the memory screen, if you choose to start one</li>
                <li>The free guide of questions for your doctor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Start the memory screen, or get the free guide.</h2>
          <p className="text-xl mb-8">
            The memory screen is a place to begin. The free guide lists questions for a doctor visit. The vascular memory check is still here if you want it.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-5">
            <TrackedLink
              href="/memory-screen"
              eventName="cta_memory_screen_click"
              eventData={{ sourcePath: '/', ctaLabel: 'Start the memory screen', location: 'closing' }}
              className="btn-primary"
            >
              Start the memory screen
            </TrackedLink>
            <Link href="/resources/5-questions-guide" className="btn-secondary">
              Get the free guide
            </Link>
          </div>
          <p>
            <Link href="/hachinski" className="text-link">Free vascular memory check</Link>
          </p>
        </div>
      </section>

      <section className="news-band" aria-labelledby="home-news-title">
        <div className="max-w-3xl mx-auto px-6">
          <p className="section-label mb-4">News</p>
          <h2 id="home-news-title" className="text-4xl md:text-5xl mb-4">News from Hemostemix</h2>
          <p className="text-xl mb-6">
            This note is separate from the memory screen. It is not a reason to start the screen.
          </p>
          <Link href="/news" className="news-link">
            Read the news
          </Link>
        </div>
      </section>
    </main>
  );
}

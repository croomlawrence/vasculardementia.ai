import type { Metadata } from 'next';
import Link from 'next/link';
import TrackedLink from '@/components/TrackedLink';
import { memoryScreenPrice } from '@/lib/business';

export const metadata: Metadata = {
  title: 'VascuMind | Your Guide to Vascular & Cognitive Health',
  description:
    'Concerned about memory, focus, or brain fog? VascuMind offers a clear path to understanding and supporting your brain and circulatory health. Start with our free quiz.',
};

const pathwaySteps = [
  {
    label: 'Step 1: Your Free Pattern Quiz',
    title: 'Start with Your Cognitive Pattern',
    copy:
      "Our free, 5-minute quiz, based on a trusted clinical questionnaire, helps organize your symptoms and health history into a clear, personal pattern.",
    href: '/science',
    cta: 'Take the Free Quiz',
  },
  {
    label: `Step 2: Get Your Cognitive Snapshot (${memoryScreenPrice})`,
    title: 'Receive an Objective Baseline',
    copy:
      'The clinically-validated MCI Screen provides an accurate and repeatable benchmark of your cognitive function, administered by a live proctor over the phone.',
    href: '/memory-screen',
    cta: 'Get Your Cognitive Snapshot',
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
  ['Clinician-Designed', 'Our protocol is designed by clinicians using validated scientific tools.'],
  ['100% Private & Secure', 'Your data is always yours. We never share it without your direct permission.'],
  ['HSA/FSA Eligible', 'The $99 fee for your Cognitive Snapshot can be paid for with an HSA/FSA.'],
  ['For Families & Caregivers', 'A trusted first step for navigating the complexities of cognitive health.'],
];

export default function VascuMindHome() {
  return (
    <main>
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight gradient-text">
            Better Circulation. Sharper Mind.
          </h1>
          <p className="text-xl text-foreground-secondary mb-10 max-w-3xl mx-auto">
            VascuMind provides a clear, 3-step journey to help you understand the vital link between your circulation and your cognitive health, empowering you to have more informed conversations with your doctor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/science" className="btn-primary">
              Start Your Free Quiz
            </Link>
            <TrackedLink href="/protocol" eventName="cta_protocol_click" eventData={{ sourcePath: '/', ctaLabel: 'How It Works', location: 'hero' }} className="btn-secondary">
              See How It Works
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground-primary">
            The Overlooked Connection in Brain Health
          </h2>
          <p className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight gradient-text mb-4">
            Up to 50%
          </p>
          <p className="text-xl text-foreground-secondary mb-6 max-w-2xl mx-auto">
            of dementia cases show evidence of both Alzheimer's plaques and vascular damage, a condition known as "mixed dementia."¹
          </p>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            This means that for millions, supporting healthy brain circulation isn't just a good idea—it's a critical and actionable part of any comprehensive cognitive health plan.
          </p>
          <p className="text-sm mt-4 text-gray-500">
            ¹ Source: Alzheimer's Association
          </p>
        </div>
      </section>

      <section aria-label="Trust signals" className="border-y border-[#2A2D40]">
        <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-4 gap-6 text-center">
          {trustSignals.map(([title, copy]) => (
            <div key={title}><strong className="text-foreground-primary">{title}</strong><br />{copy}</div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="section-label mb-4">HOW IT WORKS</div>
          <h2 className="text-5xl font-bold tracking-tight">From Concern to Clarity in 3 Simple Steps.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pathwaySteps.map((step, index) => (
            <div key={step.title} className="card text-center">
              <div className="text-6xl font-bold gradient-text mb-4">{index + 1}</div>
              <div className="section-label mb-3">{step.label}</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground-primary">{step.title}</h3>
              <p className="text-foreground-secondary mb-6">{step.copy}</p>
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
          <h2 className="text-5xl font-bold tracking-tight mb-6 text-foreground-primary">Your Brain Thinks Best When Your Blood Flows Freely.</h2>
          <p className="text-xl text-foreground-secondary mx-auto">
            Your brain is a powerhouse, using 20% of your body's oxygen and blood flow. This vital fuel is delivered through a high-speed network of blood vessels. Supporting your circulation is one of the most important things you can do for your long-term cognitive wellness, and VascuMind is here to help you take the first step.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold tracking-tight mb-6 text-foreground-primary">Ready to Move from Concern to Clarity?</h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto mb-8">
            Get your free, personalized pattern report in the next 5 minutes.
          </p>
          <Link href="/science" className="btn-primary">
            Take the Free Quiz
          </Link>
        </div>
      </section>
    </main>
  );
}

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
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-white leading-tight">
            Better Circulation. Sharper Mind.
          </h1>
          <p className="text-2xl text-white mb-10 max-w-3xl mx-auto">
            VascuMind provides a clear, 3-step journey to help you understand the vital link between your circulation and your cognitive health, empowering you to have more informed conversations with your doctor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/science#hachinski" className="btn-green inline-block px-10 py-4 rounded-full text-xl font-semibold focus:outline focus:outline-4 focus:outline-white text-center">
              Start Your Free Quiz
            </Link>
            <TrackedLink href="/protocol" eventName="cta_protocol_click" eventData={{ sourcePath: '/', ctaLabel: 'How It Works', location: 'hero' }} className="inline-block bg-white text-black px-10 py-4 rounded-full text-xl font-semibold hover:bg-black hover:text-white transition border border-white focus:outline focus:outline-4 focus:outline-white text-center">
              See How It Works
            </TrackedLink>
          </div>
        </div>
      </section>

      <section aria-label="Trust signals" className="border-b border-black">
        <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-4 gap-6 text-center">
          {trustSignals.map(([title, copy]) => (
            <div key={title}><strong>{title}</strong><br />{copy}</div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="section-label mb-3">HOW IT WORKS</div>
          <h2 className="text-5xl font-semibold tracking-tight mb-4">From Concern to Clarity in 3 Simple Steps.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pathwaySteps.map((step, index) => (
            <div key={step.title} className="border border-black rounded-3xl p-8">
              <div className="text-5xl font-semibold mb-4">{index + 1}</div>
              <div className="section-label mb-3">{step.label}</div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-xl text-black mb-6">{step.copy}</p>
              <Link href={step.href} className="btn-green inline-block px-7 py-3 rounded-full font-semibold">
                {step.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
      
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <div className="section-label mb-3">THE HEART-BRAIN CONNECTION</div>
          <h2 className="text-5xl font-semibold tracking-tight mb-6">Your Brain Thinks Best When Your Blood Flows Freely.</h2>
          <p className="text-xl text-black max-w-4xl mx-auto">
            Your brain is a powerhouse, using 20% of your body's oxygen and blood flow. This vital fuel is delivered through a high-speed network of blood vessels. When it's running smoothly, your brain gets everything it needs for sharp memory, clear focus, and quick thinking.
          </p>
          <p className="text-xl text-black max-w-4xl mx-auto mt-4">
            Factors like aging, high blood pressure, and diabetes can slow down this network. Supporting your circulation is one of the most important things you can do for your long-term cognitive wellness, and VascuMind is here to help you take the first step.
          </p>
        </div>
      </section>

      <section className="bg-black text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-semibold tracking-tight mb-6">Ready to Move from Concern to Clarity?</h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Get your free, personalized pattern report in the next 5 minutes.
          </p>
          <Link href="/science#hachinski" className="btn-green inline-block px-10 py-4 rounded-full text-xl font-semibold focus:outline focus:outline-4 focus:outline-white">
            Take the Free Quiz
          </Link>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import TrackedLink from '@/components/TrackedLink';
import { memoryScreenPrice } from '@/lib/business';

export const metadata: Metadata = {
  title: 'The VascuMind Protocol | Your Path to Cognitive Clarity',
  description:
    'Discover our 3-step protocol: a free pattern quiz, an objective cognitive baseline, and a personalized plan to share with your doctor.',
};

const pathwaySteps = [
  {
    label: 'Step 1 · Your Free Pattern Quiz',
    title: 'Discover Your Cognitive Pattern',
    body:
      "Start with a private, 5-minute quiz to help organize your symptoms and health history. It's a simple first step to see if a vascular connection is worth exploring.",
    why:
      'Why it matters: This quiz helps turn confusing symptoms into a clear story you can share with your doctor, empowering a more productive conversation.',
    href: '/science',
    cta: 'Start Your Free Quiz',
  },
  {
    label: `Step 2 · Your Cognitive Snapshot (${memoryScreenPrice})`,
    title: 'Get Your Objective Baseline',
    body:
      'If your pattern suggests a vascular link, the next step is an objective snapshot of your cognitive health, taken over the phone with a trained proctor using the validated MCI Screen.',
    why:
      'Why it matters: Unlike unreliable web quizzes, this provides a trusted, scientific baseline to track changes and gives you concrete information to discuss with your healthcare provider.',
    href: '/memory-screen',
    cta: 'Get Your Baseline',
  },
  {
    label: 'Step 3 · Your Personalized Plan',
    title: 'Explore Your Next Steps',
    body:
      'Receive a personalized plan that includes your results, educational materials, and optional pathways to wellness products or relevant clinical research.',
    why:
      'Why it matters: You get a clear, actionable plan. You are in full control of your data and can choose if and when to explore supplements or research opportunities.',
    href: '/protocol/thank-you', // This should lead to a user-specific dashboard in a real app
    cta: 'See My Plan',
  },
];

const stack = [
    {
      ingredient: 'Citicoline (Cognizin-style)',
      role: 'Brain Energy Support',
      claim: 'Supports healthy brain energy and overall cognitive wellness.',
      href: '/marketplace/citicoline',
    },
    {
      ingredient: 'High-EPA Omega-3',
      role: 'Circulation Health',
      claim: 'Supports healthy circulation and general cognitive wellness. Please review with a clinician, especially if you are taking other medications.',
      href: '/marketplace/omega-3',
    },
    {
      ingredient: 'MCT Oil',
      role: 'Alternative Brain Fuel',
      claim: 'Provides an alternative energy source for your brain.',
      href: '/marketplace/mct-oil',
    },
  ];

export default function ProtocolPage() {
  return (
    <main>
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="section-label mb-4">THE VASCUMIND PROTOCOL</div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight gradient-text">
            From Concern to Clarity: A Guided Path for Your Cognitive Health.
          </h1>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            The VascuMind Protocol is your 3-step journey to understand your cognitive health. We provide the tools to help you have a better conversation with your doctor and make informed decisions about your wellness.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pathwaySteps.map((step) => (
            <div key={step.title} className="card flex flex-col">
              <div className="section-label mb-3">{step.label}</div>
              <h3 className="text-3xl font-bold mb-4 text-foreground-primary">{step.title}</h3>
              <p className="text-foreground-secondary mb-4">{step.body}</p>
              <p className="text-sm text-foreground-secondary mb-6 flex-grow"><strong>{step.why}</strong></p>
              <Link href={step.href} className="btn-primary mt-auto text-center">{step.cta}</Link>
            </div>
          ))}
        </div>
        
        <section className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="card">
            <div className="section-label mb-3">OPTIONAL WELLNESS SUPPORT</div>
            <h2 className="text-4xl font-bold mb-4">Support Your Brain's Circulation</h2>
            <p className="text-foreground-secondary mb-6">
              After your screening and discussion with your doctor, you can explore optional wellness products. These supplements are intended to support your body's natural functions. They are not treatments for any disease.
            </p>
            <div className="space-y-4 mb-8">
              {stack.map((item) => (
                <Link key={item.ingredient} href={item.href} className="block card hover:border-accent-blue">
                  <div className="section-label mb-2">{item.role}</div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground-primary">{item.ingredient}</h3>
                  <p className="text-foreground-secondary">{item.claim}</p>
                </Link>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/marketplace" className="btn-primary text-center">Explore Wellness Support</Link>
              <Link href="/transparency" className="btn-secondary text-center">Our Quality Promise</Link>
            </div>
          </div>

          <div className="card">
            <div className="section-label mb-3">OPTIONAL RESEARCH PATHWAYS</div>
            <h2 className="text-4xl font-bold mb-4">Explore Clinical Trials</h2>
            <p className="text-foreground-secondary mb-6">
              For those who are interested, we provide information about new and ongoing clinical trials for cognitive health. You decide if you want to learn more.
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-lg mb-8 text-foreground-secondary">
              <li>You must give your express permission before we share any information.</li>
              <li>Your personal data is never shared without your consent.</li>
              <li>This is for informational purposes only and is not medical advice.</li>
            </ol>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/clinical-trials" className="btn-primary text-center">Explore Research Options</Link>
              <Link href="/research/areas-of-study" className="btn-secondary text-center">Learn About Trial Types</Link>
            </div>
          </div>
        </section>
        
        <section className="card text-center">
          <h2 className="text-3xl font-bold mb-4">Our Commitment to You</h2>
          <div className="grid md:grid-cols-3 gap-6 text-lg text-foreground-secondary">
            <div><strong>For Information, Not Diagnosis:</strong> Our tools help you prepare for a doctor's visit. They do not replace a medical evaluation.</div>
            <div><strong>Responsible Wellness:</strong> Any supplements we feature are for supporting general wellness and are not intended to treat, cure, or prevent any disease.</div>
            <div><strong>You Are in Control:</strong> You choose if you want to explore research. Your privacy and consent are our top priorities.</div>
          </div>
        </section>
      </section>
    </main>
  );
}

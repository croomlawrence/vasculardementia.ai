import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About VascuMind',
  description: 'Learn about VascuMind’s mission, vision, and founder Croom Lawrence: a caregiver-first front door for ischemic and vascular memory-health questions.',
};

const missionCards = [
  ['Mission', 'Give families a calmer, clearer first step when memory changes may relate to blood flow, ischemic disease, stroke/TIA history, or vascular risk factors.'],
  ['Vision', 'Make memory-health navigation more accessible, trackable, and clinician-ready without turning families into self-diagnosticians.'],
  ['Principle', 'Memory can be a practical signal families observe over time — but it must be interpreted with qualified clinical judgment, context, and appropriate evaluation.'],
];

export default function AboutPage() {
  return (
    <main>
      <section className="brand-hero py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_0.9fr] gap-10 items-center">
          <div>
            <div className="section-label mb-4">About VascuMind</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">A better front door for families worried about memory and blood flow.</h1>
            <p className="text-2xl text-black mb-6">
              VascuMind exists to help people move from vague concern — “something changed” — to a safer, more organized conversation about memory, ischemic patterns, vascular risk factors, and next steps with a clinician.
            </p>
            <p className="text-base text-black">Educational only. Not a diagnosis, medical advice, treatment recommendation, or emergency service.</p>
          </div>
          <div className="card bg-white">
            <div className="section-label mb-4">Founder-led</div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Built by Croom Lawrence.</h2>
            <p className="text-black mb-4">
              Croom Lawrence is the founder of VascuMind and a healthcare commercialization operator focused on practical, patient-centered tools that make complex health journeys easier to understand and act on.
            </p>
            <p className="text-black">
              His work spans healthcare growth systems, cognitive screening commercialization, regenerative medicine, clinical-trial pathways, and compliant consumer-health experience design.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 brand-section-ivory">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {missionCards.map(([title, copy]) => (
              <div key={title} className="card bg-white">
                <div className="section-label mb-3">{title}</div>
                <p className="text-xl text-black">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="section-label mb-4">Why this matters</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Memory is often the signal families notice first.</h2>
          <div className="space-y-6 text-xl text-black">
            <p>
              Blood flow and vascular health can affect how the brain performs day to day — including attention, processing speed, confusion, and memory. Families may notice these changes before they know what to ask or where to start.
            </p>
            <p>
              VascuMind does not claim that memory changes diagnose ischemic disease, vascular dementia, Alzheimer’s disease, or any other condition. Instead, it helps organize observable clues and create a baseline that may support a more productive clinical conversation.
            </p>
            <p>
              The goal is simple: reduce fear, increase clarity, and help families bring better questions to qualified clinicians.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/hachinski" className="btn-primary text-center">Start the Free Ischemic Pattern Check</Link>
            <Link href="/memory-screen" className="btn-secondary text-center">Create a $99 Memory Baseline</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

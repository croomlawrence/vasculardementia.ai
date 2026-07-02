import type { Metadata } from "next";
import Link from "next/link";
import { memoryScreenPrice } from "@/lib/business";

export const metadata: Metadata = {
  title: "VascuMind | Vascular Dementia & Post-Stroke Cognitive Support",
  description:
    "VascuMind helps patients and caregivers understand vascular dementia, post-stroke cognitive changes, and vascular cognitive impairment with education, pattern-check tools, cognitive baseline options, and clinician discussion support.",
};

const pathwaySteps = [
  {
    label: "1 · Self-report pattern check",
    title: "Start with the Hachinski pattern",
    copy:
      "Use a patient-friendly Hachinski self-report check to organize observations about sudden onset, stepwise change, stroke/TIA history, blood pressure, PAD, diabetes, and other vascular clues.",
    href: "/hachinski",
    cta: "Start Free Pattern Check",
  },
  {
    label: "2 · Objective cognitive baseline",
    title: "Benchmark cognition with MCI Screen",
    copy:
      "Move from subjective concern to a structured MCI Screen baseline for clinician discussion and before/after tracking. MCI Screen materials describe published validation and high accuracy for detecting memory changes versus normal aging; results are still screening information, not a diagnosis.",
    href: "/memory-screen",
    cta: "Create a Cognitive Baseline",
  },
  {
    label: "3 · Support and research pathways",
    title: "Choose the right next step",
    copy:
      "After screening, families can review clinician-discussion topics, optional wellness-support bundles, and consented research pathways for investigational studies when appropriate.",
    href: "/protocol",
    cta: "See the Care Pathway",
  },
];

const trustSignals = [
  ["For patients and caregivers", "Built for families facing vascular dementia, post-stroke cognitive change, or cognition affected by vascular disease."],
  ["Educational, not diagnostic", "Tools organize observations and screening information for discussion with qualified clinicians."],
  ["Vascular-focus first", "Blood pressure, stroke/TIA history, PAD, diabetes, circulation, and small-vessel context are central."],
  ["Safety-aware", "Sudden neurologic symptoms require emergency care — not a website tool, supplement, or research form."],
];

export default function VascuMindHome() {
  return (
    <main>
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="inline-block bg-white text-black rounded-full px-5 py-2 text-sm font-semibold mb-6">
              For vascular dementia, stroke-related memory change, and caregivers
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-white leading-none">
              A trusted starting point for vascular dementia and post-stroke cognitive decline.
            </h1>
            <p className="text-2xl text-white mb-6 max-w-3xl">
              VascuMind helps patients and caregivers understand memory changes linked to stroke, vascular disease, and vascular dementia — then organize next steps for clinician discussion, cognitive screening, wellness support, and research options.
            </p>
            <p className="text-lg text-white mb-10 max-w-3xl">
              Educational only. Not a diagnosis, treatment plan, or emergency service. Sudden neurologic symptoms require immediate emergency care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/hachinski" className="btn-green inline-block px-10 py-4 rounded-full text-xl font-semibold focus:outline focus:outline-4 focus:outline-white text-center">
                Start Free Pattern Check
              </Link>
              <Link href="/memory-screen" className="inline-block bg-white text-black px-10 py-4 rounded-full text-xl font-semibold hover:bg-black hover:text-white transition border border-white focus:outline focus:outline-4 focus:outline-white text-center">
                Create Cognitive Baseline
              </Link>
            </div>
          </div>
          <div className="bg-white text-black rounded-3xl p-8 border-4 border-white">
            <div className="section-label mb-3">THE VASCUMIND PROTOCOL</div>
            <h2 className="text-3xl font-semibold mb-4">From concern to clarity.</h2>
            <p className="text-black mb-6">
              The Protocol is a bundled care-navigation pathway: Hachinski self-report pattern check → MCI Screen objective cognitive benchmark → optional wellness-support bundles → consented research and investigational-study pathways when appropriate.
            </p>
            <div className="space-y-5">
              {pathwaySteps.map((step) => (
                <Link key={step.label} href={step.href} className="block border border-black rounded-2xl p-5 hover:shadow-lg transition green-card">
                  <div className="text-sm font-semibold uppercase tracking-widest mb-2">{step.label}</div>
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-black mb-3">{step.copy}</p>
                  <span className="font-semibold underline">{step.cta}</span>
                </Link>
              ))}
            </div>
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
          <div className="section-label mb-3">WHY VASCULAR COGNITIVE HEALTH MATTERS</div>
          <h2 className="text-5xl font-semibold tracking-tight mb-4">Vascular memory changes can be different — because some drivers may be actionable.</h2>
          <p className="text-xl text-black max-w-4xl mx-auto">
            Memory problems can have many causes. But when cognitive changes are linked to stroke, small vessel disease, blood pressure, diabetes, heart disease, PAD, or other vascular issues, families may have more concrete questions to ask and track with clinicians.
          </p>
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

      <section className="bg-black text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block bg-white text-black rounded-full px-5 py-2 text-sm font-semibold mb-6">NEXT BEST STEP</div>
          <h2 className="text-5xl font-semibold tracking-tight mb-6 text-white">Start with the vascular pattern.</h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            If memory changes followed a stroke, progressed in steps, or appeared alongside vascular risk factors, start with a free Hachinski pattern check. If the pattern resonates, create an MCI Screen cognitive baseline ({memoryScreenPrice}) for clinician discussion.
          </p>
          <Link href="/hachinski" className="btn-green inline-block px-10 py-4 rounded-full text-xl font-semibold focus:outline focus:outline-4 focus:outline-white">
            Start Free Pattern Check
          </Link>
        </div>
      </section>
    </main>
  );
}

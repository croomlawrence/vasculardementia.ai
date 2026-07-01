import Link from "next/link";
import { memoryScreenPrice } from "@/lib/business";

const revenuePillars = [
  {
    label: "1 · Cognitive test sales",
    title: "Start with a paid cognitive baseline",
    copy: "Families get a simple, private way to benchmark memory concerns before the next clinician conversation.",
    href: "/memory-screen",
    cta: "Start memory screen",
  },
  {
    label: "2 · CRO licensing",
    title: "License the vascular cognition funnel",
    copy: "CROs and sponsors can use VascuMind for trial-readiness, recruitment, and repeated cognitive monitoring workflows.",
    href: "/cro-licensing",
    cta: "View CRO licensing",
  },
  {
    label: "3 · Affiliate wellness sales",
    title: "Offer compliant vascular wellness support",
    copy: "After screening, families can review disclosed supplement links for circulation and brain wellness — never disease treatment claims.",
    href: "/marketplace",
    cta: "Explore marketplace",
  },
];

const journeySteps = [
  "Answer a few plain-language vascular and memory questions.",
  "Complete an Acurist-sourced MCI Screen baseline when appropriate.",
  "Use results to prepare for a clinician conversation, research pathway, or compliant wellness plan.",
];

export default function VascuMindHome() {
  return (
    <main>
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="inline-block bg-white text-black rounded-full px-5 py-2 text-sm font-semibold mb-6">
              The consumer front door for vascular cognitive health
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-white leading-none">
              Build the Hims/Hers of vascular dementia — starting with screening.
            </h1>
            <p className="text-2xl text-white mb-6 max-w-3xl">
              VascuMind turns vascular cognitive concern into a clear commercial journey: screen, understand, track, and then route to research or compliant wellness support.
            </p>
            <p className="text-lg text-white mb-10 max-w-3xl">
              Educational only. Not a diagnosis, treatment plan, or emergency service. Designed to help families ask better questions and help CROs find better-fit cognitive trial participants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/memory-screen" className="btn-green inline-block px-10 py-4 rounded-full text-xl font-semibold focus:outline focus:outline-4 focus:outline-white text-center">
                Start Memory Screen — {memoryScreenPrice}
              </Link>
              <Link href="/cro-licensing" className="inline-block bg-white text-black px-10 py-4 rounded-full text-xl font-semibold hover:bg-black hover:text-white transition border border-white focus:outline focus:outline-4 focus:outline-white text-center">
                License for Trials
              </Link>
            </div>
          </div>
          <div className="bg-white text-black rounded-3xl p-8 border-4 border-white">
            <div className="section-label mb-3">VASCUMIND COMMERCIAL ENGINE</div>
            <h2 className="text-3xl font-semibold mb-6">Three revenue streams. One trusted journey.</h2>
            <div className="space-y-5">
              {revenuePillars.map((pillar) => (
                <Link key={pillar.label} href={pillar.href} className="block border border-black rounded-2xl p-5 hover:shadow-lg transition green-card">
                  <div className="text-sm font-semibold uppercase tracking-widest mb-2">{pillar.label}</div>
                  <h3 className="text-2xl font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-black mb-3">{pillar.copy}</p>
                  <span className="font-semibold underline">{pillar.cta}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Trust signals" className="border-b border-black">
        <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-4 gap-6 text-center">
          <div><strong>Educational screen</strong><br />Not a diagnosis or substitute for medical care.</div>
          <div><strong>Clinician conversation</strong><br />Results are framed for discussion with qualified professionals.</div>
          <div><strong>Vascular focus</strong><br />Blood pressure, stroke history, PAD, diabetes, and circulation context.</div>
          <div><strong>Transparent commerce</strong><br />Paid screening, CRO licensing, and disclosed affiliate links.</div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="section-label mb-3">CONSUMER JOURNEY</div>
          <h2 className="text-5xl font-semibold tracking-tight mb-4">A simple path from concern to action.</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Hims and Hers won by making a stigmatized health concern easy to start. VascuMind does the same for families worried that vascular health may be affecting memory — with stricter medical and supplement compliance.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {journeySteps.map((step, index) => (
            <div key={step} className="border border-black rounded-3xl p-8">
              <div className="text-5xl font-semibold mb-4">{index + 1}</div>
              <p className="text-xl text-black">{step}</p>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {revenuePillars.map((pillar) => (
            <div key={pillar.title} className="border-4 border-black rounded-3xl p-8">
              <div className="section-label mb-3">{pillar.label}</div>
              <h3 className="text-3xl font-semibold mb-4">{pillar.title}</h3>
              <p className="text-black mb-6">{pillar.copy}</p>
              <Link href={pillar.href} className="btn-green inline-block px-7 py-3 rounded-full font-semibold">
                {pillar.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block bg-white text-black rounded-full px-5 py-2 text-sm font-semibold mb-6">NEXT BEST STEP</div>
          <h2 className="text-5xl font-semibold tracking-tight mb-6">Turn memory concern into a measurable baseline.</h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Start with the revenue event that also creates the clinical and commercial routing layer: an educational cognitive screen connected to Acurist.AI.
          </p>
          <Link href="/memory-screen" className="btn-green inline-block px-10 py-4 rounded-full text-xl font-semibold focus:outline focus:outline-4 focus:outline-white">
            Start Memory Screen
          </Link>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import { memoryScreenPrice } from "@/lib/business";

const revenuePillars = [
  {
    label: "1 · Paid benchmark",
    title: "Acurist.AI MCI Screen",
    copy: "The low-ticket conversion event: move from subjective concern to an objective cognitive baseline for clinician discussion.",
    href: "/memory-screen",
    cta: "Benchmark with Acurist.AI",
  },
  {
    label: "2 · DTC wellness",
    title: "Cerebrovascular Support Stack",
    copy: "After screening, offer a compliant bundle around citicoline, high-EPA omega-3, and MCT oil with COA transparency.",
    href: "/marketplace",
    cta: "View protocol stack",
  },
  {
    label: "3 · CRO / trials",
    title: "Consented Trial Matching",
    copy: "Route qualified, consented users into trial-readiness follow-up and CRO licensing conversations.",
    href: "/clinical-trial-matching",
    cta: "Check trial matching",
  },
];

const journeySteps = [
  "Free: take the Hachinski Assessment to notice whether memory slips match vascular-pattern concerns.",
  "Paid/low-ticket: benchmark the pattern with the Acurist.AI MCI Screen and Memory Performance Index-style baseline.",
  "Fork: choose the DTC Cerebrovascular Support Stack or consented clinical-trial matching pathway.",
];

export default function VascuMindHome() {
  return (
    <main>
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="inline-block bg-white text-black rounded-full px-5 py-2 text-sm font-semibold mb-6">
              The VascuMind Protocol
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-white leading-none">
              Free Hachinski pattern check → Acurist.AI benchmark → two revenue paths.
            </h1>
            <p className="text-2xl text-white mb-6 max-w-3xl">
              VascuMind turns vascular cognitive concern into a protocolized funnel: notice the pattern, benchmark it objectively, then route to a compliant support stack or consented clinical-trial matching.
            </p>
            <p className="text-lg text-white mb-10 max-w-3xl">
              Educational only. Not a diagnosis, treatment plan, or emergency service. Designed to help families ask better questions and help CROs find better-fit cognitive trial participants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/protocol" className="btn-green inline-block px-10 py-4 rounded-full text-xl font-semibold focus:outline focus:outline-4 focus:outline-white text-center">
                See the VascuMind Protocol
              </Link>
              <Link href="/hachinski" className="inline-block bg-white text-black px-10 py-4 rounded-full text-xl font-semibold hover:bg-black hover:text-white transition border border-white focus:outline focus:outline-4 focus:outline-white text-center">
                Take Free Assessment
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
          <h2 className="text-5xl font-semibold tracking-tight mb-4">The conversion journey: subjective first, objective second.</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            People will often answer a free pattern quiz before they commit to a paid cognitive benchmark. The Protocol uses that natural sequence to create trust, then converts the right users into screening, DTC wellness support, or consented research matching.
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
          <h2 className="text-5xl font-semibold tracking-tight mb-6">Start the Protocol with a free Hachinski pattern check.</h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            If the pattern resonates, benchmark it with the Acurist.AI MCI Screen ({memoryScreenPrice}), then choose the support-stack or trial-matching path.
          </p>
          <Link href="/hachinski" className="btn-green inline-block px-10 py-4 rounded-full text-xl font-semibold focus:outline focus:outline-4 focus:outline-white">
            Take the Free Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}

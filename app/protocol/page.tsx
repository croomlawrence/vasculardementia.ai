import type { Metadata } from "next";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "The VascuMind Protocol | Vascular Cognitive Care Navigation",
  description:
    "Follow the VascuMind Protocol from Hachinski self-report pattern check to MCI Screen cognitive baseline, clinician discussion, wellness support, and consented research pathways.",
};

const pathwaySteps = [
  {
    label: "Step 1 · Free self-report",
    title: "Take the Hachinski pattern check",
    body:
      "Organize observations about sudden onset, stepwise change, stroke/TIA history, hypertension, PAD, diabetes, and other vascular clues. Caregivers can answer based on what they observe.",
    why:
      "Why it matters: families often need a safe first step before they are ready for formal testing. This check does not diagnose — it helps organize the story.",
    href: "/hachinski",
    cta: "Start Free Pattern Check",
  },
  {
    label: "Step 2 · Objective benchmark",
    title: "Create an MCI Screen cognitive baseline",
    body:
      "If the vascular pattern resonates, the MCI Screen provides an objective cognitive benchmark for clinician discussion and repeat tracking.",
    why:
      "MCI Screen materials describe published validation and high accuracy for detecting memory changes versus normal aging. The result is still screening, benchmarking, and tracking information — not a diagnosis.",
    href: "/memory-screen",
    cta: "Create Cognitive Baseline",
  },
  {
    label: "Step 3 · Guided next steps",
    title: "Review support and research pathways",
    body:
      "Use the baseline to prepare clinician questions, review optional wellness-support bundles, and explore consented research or investigational-study pathways when appropriate.",
    why:
      "VascuMind helps families move from confusion to organized next steps without replacing medical care or over-claiming what any product can do.",
    href: "/memory-screen/thank-you",
    cta: "Review Next Steps",
  },
];

const stack = [
  {
    ingredient: "Citicoline (Cognizin-style)",
    role: "Brain energy",
    claim: "Supports healthy brain energy and cognitive wellness.",
    href: "/marketplace/citicoline",
  },
  {
    ingredient: "High-EPA Omega-3",
    role: "Vascular function",
    claim: "Supports general vascular and cognitive wellness; review with a clinician, especially if medications are involved.",
    href: "/marketplace/omega-3",
  },
  {
    ingredient: "MCT Oil",
    role: "Alternative brain energy",
    claim: "Provides ketone fuel as an alternative brain-energy source.",
    href: "/marketplace/mct-oil",
  },
];

export default function ProtocolPage() {
  return (
    <main>
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block bg-white text-black rounded-full px-5 py-2 text-sm font-semibold mb-6">THE VASCUMIND PROTOCOL</div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 text-white leading-none">From concern to clarity: a safer path for vascular memory changes.</h1>
          <p className="text-2xl text-white max-w-4xl mx-auto mb-8">
            The VascuMind Protocol bundles a Hachinski self-report pattern check, an MCI Screen objective cognitive benchmark, clinician-discussion support, optional wellness bundles, and consented research pathways for families facing vascular dementia, post-stroke cognitive impairment, or cognition affected by vascular disease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hachinski" className="btn-green inline-block px-10 py-4 rounded-full text-xl font-semibold focus:outline focus:outline-4 focus:outline-white">Start Free Pattern Check</Link>
            <TrackedLink href="/memory-screen" eventName="cta_memory_screen_click" eventData={{ sourcePath: "/protocol", ctaLabel: "Create Cognitive Baseline", location: "hero" }} className="inline-block bg-white text-black px-10 py-4 rounded-full text-xl font-semibold hover:bg-black hover:text-white border border-white focus:outline focus:outline-4 focus:outline-white">Create Cognitive Baseline</TrackedLink>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="section-label mb-3">CARE NAVIGATION PATHWAY</div>
          <h2 className="text-5xl font-semibold tracking-tight mb-4">The right sequence matters: subjective first, objective second, action third.</h2>
          <p className="text-xl text-black max-w-4xl mx-auto">
            Vascular cognitive decline can feel overwhelming. The Protocol creates a low-pressure sequence that helps caregivers organize what they notice, benchmark cognition, and decide what to discuss next with qualified clinicians.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pathwaySteps.map((step) => (
            <div key={step.title} className="border-4 border-black rounded-3xl p-8 flex flex-col">
              <div className="section-label mb-3">{step.label}</div>
              <h3 className="text-3xl font-semibold mb-4">{step.title}</h3>
              <p className="text-xl text-black mb-4">{step.body}</p>
              <p className="text-base text-black mb-6"><strong>{step.why}</strong></p>
              <Link href={step.href} className="btn-green inline-block px-6 py-3 rounded-full font-semibold mt-auto text-center">{step.cta}</Link>
            </div>
          ))}
        </div>

        <section className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="border-4 border-black rounded-3xl p-8">
            <div className="section-label mb-3">OPTIONAL WELLNESS SUPPORT</div>
            <h2 className="text-4xl font-semibold mb-4">Cerebrovascular wellness-support bundle</h2>
            <p className="text-xl text-black mb-6">
              After screening and clinician discussion, families can review optional wellness-support products with clear supplement disclaimers, affiliate disclosure, and COA transparency. These products are not treatments for vascular dementia, stroke, MCI, or any disease.
            </p>
            <div className="space-y-4 mb-8">
              {stack.map((item) => (
                <Link key={item.ingredient} href={item.href} className="block border border-black rounded-2xl p-5 hover:shadow-lg">
                  <div className="section-label mb-2">{item.role}</div>
                  <h3 className="text-2xl font-semibold mb-2">{item.ingredient}</h3>
                  <p className="text-black">{item.claim}</p>
                </Link>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/marketplace" className="btn-green inline-block px-7 py-3 rounded-full font-semibold text-center">Review Wellness Support</Link>
              <Link href="/transparency" className="inline-block border-2 border-black px-7 py-3 rounded-full font-semibold text-center hover:bg-black hover:text-white">COA Transparency</Link>
            </div>
          </div>

          <div className="border-4 border-black rounded-3xl p-8">
            <div className="section-label mb-3">RESEARCH AND INVESTIGATIONAL PATHWAYS</div>
            <h2 className="text-4xl font-semibold mb-4">Explore research options with consent</h2>
            <p className="text-xl text-black mb-6">
              Some families want to understand whether emerging vascular cognitive studies or investigational therapies may be relevant. VascuMind provides research awareness and consent-aware follow-up only; eligibility and medical decisions belong with study teams and clinicians.
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-xl mb-8">
              <li>Explicit consent before any trial-related follow-up.</li>
              <li>No emergency symptoms or medical records should be submitted through public forms.</li>
              <li>No identifiable data is shared with sponsors, CROs, or study partners without additional explicit consent and privacy review.</li>
              <li>Investigational options can be discussed as research awareness, not as promised treatment outcomes.</li>
            </ol>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/clinical-trial-matching" className="btn-green inline-block px-7 py-3 rounded-full font-semibold text-center">Explore Research Options</Link>
              <Link href="/research/vascular-dementia-clinical-trials" className="inline-block border-2 border-black px-7 py-3 rounded-full font-semibold text-center hover:bg-black hover:text-white">Learn About Trials</Link>
            </div>
          </div>
        </section>

        <section className="border border-black rounded-3xl p-8 mb-16">
          <h2 className="text-3xl font-semibold mb-4">Compliance boundaries that protect families</h2>
          <div className="grid md:grid-cols-3 gap-6 text-lg">
            <div><strong>Screening:</strong> MCI Screen is a cognitive screening, benchmarking, and tracking tool — not a standalone diagnosis or substitute for clinical evaluation.</div>
            <div><strong>Supplements:</strong> Structure/function wellness language only; no diagnosis, treatment, cure, prevention, or disease-slowing claims.</div>
            <div><strong>Research:</strong> Matching is opt-in and informational only; sudden neurologic symptoms require emergency care.</div>
          </div>
        </section>
      </section>
    </main>
  );
}

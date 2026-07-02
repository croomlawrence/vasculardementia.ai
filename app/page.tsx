import type { Metadata } from "next";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import { memoryScreenPrice } from "@/lib/business";

export const metadata: Metadata = {
  title: "VascuMind | Your Guide to Vascular & Cognitive Health",
  description:
    "Concerned about memory, focus, or brain fog? VascuMind offers a clear path to understanding and supporting your vascular and cognitive health. Start your free assessment.",
};

const pathwaySteps = [
  {
    label: "Step 1: Discover Your Pattern (Free)",
    title: "Start with Your Vascular Pattern",
    copy:
      "Our free, 5-minute quiz, based on the trusted Hachinski questionnaire, helps you organize your symptoms and history into a clear pattern. This is your personal starting point.",
    href: "/hachinski",
    cta: "Start My Free Pattern Check",
  },
  {
    label: `Step 2: Establish Your Cognitive Baseline (${memoryScreenPrice})`,
    title: "Get Your Objective Baseline",
    copy:
      "Free online quizzes can be unreliable. The MCI Screen provides an objective, accurate, and repeatable benchmark of your cognitive function. It moves you from subjective worry to a concrete baseline you can use to track changes and facilitate a high-quality discussion with your healthcare provider.",
    href: "/memory-screen",
    cta: "Schedule My Baseline Assessment",
  },
  {
    label: "Step 3: Explore Your Next Steps",
    title: "Choose Your Path",
    copy:
      "Based on your journey, unlock a personalized dashboard with educational resources, wellness support options, and potential pathways to clinical research.",
    href: "/protocol",
    cta: "See Your Personalized Pathways",
  },
];

const trustSignals = [
  ["Clinician-Guided", "Our protocol is designed by clinicians and based on validated scientific tools."],
  ["100% Private & Secure", "Your data is yours. We never share it without your explicit consent."],
  ["HSA/FSA Eligible", "The $99 fee for the MCI Screen can be paid for with your Health Savings or Flexible Spending Account."],
  ["For Families & Caregivers", "A trusted resource for navigating the complexities of cognitive health."],
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
            VascuMind provides a clear, 3-step journey to help you understand the link between your circulation and your cognitive health, so you can have more informed conversations with your doctor and take meaningful action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hachinski" className="btn-green inline-block px-10 py-4 rounded-full text-xl font-semibold focus:outline focus:outline-4 focus:outline-white text-center">
              Find Your Starting Point
            </Link>
            <TrackedLink href="/protocol" eventName="cta_protocol_click" eventData={{ sourcePath: "/", ctaLabel: "How It Works", location: "hero" }} className="inline-block bg-white text-black px-10 py-4 rounded-full text-xl font-semibold hover:bg-black hover:text-white transition border border-white focus:outline focus:outline-4 focus:outline-white text-center">
              How It Works
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
          <h2 className="text-5xl font-semibold tracking-tight mb-6">Your Brain Relies on a Superhighway of Blood Vessels.</h2>
          <p className="text-xl text-black max-w-4xl mx-auto">
            Think of it this way: your brain is only 2% of your body weight, but it uses 20% of your oxygen and blood flow. This delivery system is your vascular network. When it’s running smoothly, your brain gets the fuel it needs for memory, focus, and clarity.
          </p>
          <p className="text-xl text-black max-w-4xl mx-auto mt-4">
            But factors like age, high blood pressure, diabetes, and even your history of strokes or TIAs can slow it down. This is what we call the "heart-brain connection," and it is the single most important—and often overlooked—factor in long-term cognitive wellness. VascuMind was built to put you back in the driver's seat.
          </p>
        </div>
      </section>

      <section className="bg-black text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-semibold tracking-tight mb-6 text-white">Ready to move from concern to clarity?</h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Get your free, personalized Vascular Pattern Report in the next 5 minutes.
          </p>
          <Link href="/hachinski" className="btn-green inline-block px-10 py-4 rounded-full text-xl font-semibold focus:outline focus:outline-4 focus:outline-white">
            Start Free Check
          </Link>
        </div>
      </section>
    </main>
  );
}

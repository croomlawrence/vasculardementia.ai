import type { Metadata } from "next";
import Link from "next/link";
import { memoryScreenPrice } from "@/lib/business";
import { HumanMomentCard, PathwayLine } from "@/app/components/BrandVisuals";
import PaidBaselineIntake from "@/app/components/PaidBaselineIntake";

export const metadata: Metadata = {
  title: "After Your Cognitive Baseline",
  description: "After the $99 MCI Screen cognitive baseline, complete intake and use your result for clinician discussion, optional wellness-support review, and consent-aware research follow-up.",
  alternates: { canonical: "/memory-screen/thank-you" },
  robots: { index: false, follow: false },
};

const checklist = [
  "Watch for Stripe confirmation by email.",
  "Complete the intake form below so your request can be matched to the right screening workflow.",
  "Do not enter emergency symptoms or sensitive medical records into this form.",
  "Save your pattern-check summary and cognitive baseline for clinician discussion.",
];

const paths = [
  {
    label: "Path A · clinician conversation",
    title: "Prepare for the next appointment",
    copy: "Use your pattern-check summary and cognitive baseline to ask about stroke/TIA history, blood pressure, diabetes, PAD, medications, sleep, mood, rehabilitation, repeat cognitive tracking, or imaging when appropriate.",
    href: "/what-we-offer",
    cta: "Review clinician questions",
  },
  {
    label: "Path B · wellness support",
    title: "Review optional wellness support safely",
    copy: "If you explore supplements or lifestyle-support products, use VascuMind’s disclaimers, transparency pages, and clinician-first framing. Products are not disease treatments.",
    href: "/marketplace",
    cta: "View wellness support",
  },
  {
    label: "Path C · research awareness",
    title: "Ask whether research may be relevant",
    copy: "With consent, VascuMind can route research-interest follow-up. Study teams and clinicians determine eligibility and medical appropriateness.",
    href: "/clinical-trial-matching",
    cta: "Request research follow-up",
  },
];

export default function MemoryScreenThankYouPage() {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start mb-12">
          <div className="border-4 border-black rounded-3xl p-8 md:p-12 green-wash">
            <div className="section-label mb-3">After the {memoryScreenPrice} cognitive baseline</div>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">Your baseline is a starting point for better questions — not a diagnosis.</h1>
            <p className="text-2xl text-black mb-6 max-w-4xl">
              Use your MCI Screen benchmark and vascular-pattern context to guide clinician discussion, repeat tracking, optional wellness-support review, or consent-aware research follow-up.
            </p>
            <p className="text-xl text-black mb-6">
              If symptoms are sudden or severe — facial drooping, one-sided weakness, speech trouble, confusion, severe dizziness, or vision loss — call emergency services immediately.
            </p>
            <Link href="#paid-intake" className="btn-primary inline-flex justify-center text-center">
              Complete Intake
            </Link>
          </div>
          <aside className="space-y-6">
            <HumanMomentCard variant="clinic" />
            <div className="border-4 border-black rounded-3xl p-6 bg-white">
              <h2 className="text-2xl font-semibold mb-4">What to do now</h2>
              <ul className="list-disc pl-6 space-y-2">
                {checklist.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mb-12">
          <PaidBaselineIntake />
        </div>

        <section className="mb-12">
          <PathwayLine cta={false} />
        </section>

        <section className="grid lg:grid-cols-3 gap-8 mb-12">
          {paths.map((path) => (
            <div key={path.title} className="border-4 border-black rounded-3xl p-8 flex flex-col">
              <div className="section-label mb-3">{path.label}</div>
              <h2 className="text-3xl font-semibold mb-4">{path.title}</h2>
              <p className="text-xl text-black mb-6 flex-1">{path.copy}</p>
              <Link href={path.href} className="btn-primary text-center">
                {path.cta}
              </Link>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}

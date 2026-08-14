import type { Metadata } from "next";
import { MCIScreenDisclaimer } from '@/app/components/ComplianceNotices';
import LeadForm from "@/components/LeadForm";
import TrackedLink from "@/components/TrackedLink";
import { memoryScreenCheckoutUrl, memoryScreenPrice } from "@/lib/business";
import { HumanMomentCard, PathwayLine, ResultPreviewCard } from "@/app/components/BrandVisuals";

export const metadata: Metadata = {
  title: "$99 MCI Screen Cognitive Baseline",
  description:
    "Create a $99 MCI Screen cognitive baseline after the free vascular pattern check. Use the structured benchmark for clinician discussion and repeat tracking; not a diagnosis.",
  alternates: { canonical: "/memory-screen" },
};

const deliverables = [
  "A structured MCI Screen cognitive baseline for clinician discussion",
  "Objective benchmarking after the free Hachinski-style vascular pattern check",
  "Plain-language next-step questions for caregivers and clinicians",
  "Repeat-tracking context if you want to compare changes over time",
];

const nextSteps = [
  { title: "Clinician conversation", copy: "Bring better questions about vascular risk factors, stroke history, medications, sleep, mood, rehabilitation, and follow-up testing.", href: "/what-we-offer" },
  { title: "Wellness support", copy: "Review optional supplement and lifestyle-support resources only after clinician discussion and with clear safety disclaimers.", href: "/marketplace" },
  { title: "Research awareness", copy: "Opt in to consent-aware follow-up about studies that may be relevant to vascular cognitive impairment.", href: "/clinical-trial-matching" },
];

const purchaseFlow = [
  ["1", "Start securely", "Click the payment/intake link and submit only the information needed for the screening request."],
  ["2", "Complete the screen", "Checkout and/or screening may occur through Stripe or the authorized MCI Screen workflow."],
  ["3", "Receive a baseline", "Use the structured cognitive benchmark and plain-language context to prepare for clinician discussion."],
  ["4", "Track next questions", "Decide whether to repeat tracking, discuss vascular risk factors, review wellness support, or ask about research options."],
];

export default function MemoryScreenPage() {
  return (
    <main>
    <div className="max-w-6xl mx-auto px-6 py-16">
      <section className="grid lg:grid-cols-[1fr_360px] gap-10 items-start mb-16">
        <div>
          <div className="section-label mb-3">Step 2 · {memoryScreenPrice} objective cognitive benchmark</div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">Create your {memoryScreenPrice} cognitive baseline after the free pattern check.</h1>
          <p className="text-2xl text-black max-w-4xl mb-6">
            If stroke, TIA, blood pressure, diabetes, PAD, or other vascular risk factors may be part of the story, the MCI Screen gives your family a structured benchmark to discuss with a clinician.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="border-2 border-black rounded-2xl p-4"><strong>Educational</strong><br />Not a diagnosis</div>
            <div className="border-2 border-black rounded-2xl p-4"><strong>Structured</strong><br />Objective baseline</div>
            <div className="border-2 border-black rounded-2xl p-4"><strong>Trackable</strong><br />Repeat over time</div>
          </div>
          <div className="text-left">
            <MCIScreenDisclaimer />
          </div>
        </div>
        <aside className="space-y-6 sticky top-24">
          <ResultPreviewCard />
          <div className="border-4 border-black rounded-3xl p-6 text-center bg-white">
          <div className="text-sm uppercase tracking-widest mb-2">Starting at</div>
          <div className="text-6xl font-semibold mb-4">{memoryScreenPrice}</div>
          <TrackedLink
            href={memoryScreenCheckoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            eventName="checkout_started"
            eventData={{ product: "memory-screen", price: memoryScreenPrice, location: "hero-card" }}
            className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold w-full"
          >
            Create My {memoryScreenPrice} Cognitive Baseline
          </TrackedLink>
          <p className="text-sm text-black mt-3">Contact information used for this request only • no identifiable information shared without permission • educational only • not a diagnosis</p>
          <a href="#follow-up" className="inline-block mt-4 underline font-semibold">Questions before starting?</a>
          </div>
        </aside>
      </section>

      <section className="border-4 border-black rounded-3xl p-8 md:p-12 mb-16 brand-section-ivory">
        <div className="grid md:grid-cols-[1fr_300px] gap-10 items-center">
          <div>
            <div className="section-label mb-3">Why create a baseline?</div>
            <h2 className="text-4xl font-semibold mb-4">Move from concern to a structured benchmark.</h2>
            <p className="text-xl text-black mb-6">
              The free check organizes a possible vascular pattern. The paid baseline helps your next conversation — clinician, caregiver, research, or wellness — start from clearer information.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {deliverables.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="text-base text-black mt-6">
              Screening performance claims should be reviewed with source documentation and a qualified healthcare professional. The MCI Screen is still a screening, benchmarking, and tracking tool — not a standalone diagnosis or substitute for clinical evaluation.
            </p>
          </div>
          <div className="space-y-6">
            <HumanMomentCard variant="tablet" />
            <div className="border border-black rounded-3xl p-6 bg-white">
            <h3 className="text-2xl font-semibold mb-3">Bring this to the visit</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pattern-check summary</li>
              <li>Cognitive baseline context</li>
              <li>Questions about vascular risk factors</li>
              <li>Follow-up and repeat-tracking prompts</li>
            </ul>
          </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="section-label mb-3">How this differs from other tests</div>
        <h2 className="text-4xl font-semibold mb-6">Pattern check, cognitive baseline, and Alzheimer’s blood tests answer different questions.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-black rounded-3xl p-6 bg-white">
            <h3 className="text-2xl font-semibold mb-3">Vascular pattern check</h3>
            <p className="text-black">Organizes sudden onset, stepwise change, stroke/TIA history, and vascular risk factors. It does not diagnose disease.</p>
          </div>
          <div className="border border-black rounded-3xl p-6 bg-white">
            <h3 className="text-2xl font-semibold mb-3">Cognitive baseline</h3>
            <p className="text-black">Creates a structured cognitive benchmark for clinician discussion and repeat tracking. It does not explain the medical cause by itself.</p>
          </div>
          <div className="border border-black rounded-3xl p-6 bg-white">
            <h3 className="text-2xl font-semibold mb-3">Alzheimer’s blood test</h3>
            <p className="text-black">May help clinicians assess Alzheimer’s-related biology in appropriate symptomatic adults. It does not rule out vascular, medication, sleep, mood, or mixed causes.</p>
          </div>
        </div>
        <div className="mt-6">
          <a href="/alzheimers-blood-test-vs-cognitive-screening" className="font-semibold underline">Compare the options →</a>
        </div>
      </section>

      <section className="mb-16">
        <PathwayLine cta={false} />
      </section>

      <section className="mb-16">
        <div className="section-label mb-3">What happens after you click?</div>
        <h2 className="text-4xl font-semibold mb-6">A simple, privacy-conscious intake flow.</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {purchaseFlow.map(([num, title, copy]) => (
            <div key={title} className="border border-black rounded-3xl p-6">
              <div className="text-5xl font-bold mb-3">{num}</div>
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-black">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="section-label mb-3">After the baseline</div>
        <h2 className="text-4xl font-semibold mb-6">Use the screen to organize the next conversation.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {nextSteps.map((path) => (
            <a key={path.title} href={path.href} className="border border-black rounded-3xl p-8 hover:shadow-lg transition green-card">
              <h3 className="text-2xl font-semibold mb-3">{path.title}</h3>
              <p className="text-black mb-4">{path.copy}</p>
              <span className="font-semibold underline">Continue</span>
            </a>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-3xl font-semibold mb-4">Who this is for</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Patients or caregivers facing vascular dementia or vascular cognitive impairment</li>
            <li>Stroke or TIA survivors noticing memory, attention, or thinking changes</li>
            <li>People with vascular risk factors such as hypertension, PAD, diabetes, heart disease, or small-vessel disease</li>
            <li>Families wanting a baseline before a clinician visit, wellness plan, or research inquiry</li>
          </ul>
        </div>
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-3xl font-semibold mb-4">What it does not do</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>It does not diagnose Alzheimer’s disease, vascular dementia, MCI, stroke, or any disease.</li>
            <li>It does not replace urgent care or a clinician evaluation.</li>
            <li>It should not be used to change medications, supplements, or care plans without medical advice.</li>
          </ul>
        </div>
      </section>

      <section id="follow-up">
        <LeadForm leadType="memory-screen" title="Questions before the cognitive baseline?" submitLabel="Request Follow-Up" />
      </section>
        </div>
    </main>
  );
}

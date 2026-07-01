import type { Metadata } from "next";
import { AcuristScreenDisclaimer } from '@/app/components/ComplianceNotices';
import LeadForm from "@/components/LeadForm";
import TrackedLink from "@/components/TrackedLink";
import { memoryScreenCheckoutUrl, memoryScreenPrice } from "@/lib/business";

export const metadata: Metadata = {
  title: "Cognitive Baseline for Vascular Dementia & Post-Stroke Memory Changes | VascuMind",
  description:
    "Create a cognitive baseline to discuss with your clinician if you are facing vascular dementia, post-stroke memory changes, or vascular cognitive impairment.",
};

const deliverables = [
  "A structured Acurist.AI MCI Screen cognitive baseline for clinician discussion",
  "Objective benchmarking after a subjective Hachinski self-report pattern check",
  "Acurist.AI-reported validation: 97% accuracy from a 2M-person database spanning all ancestries",
  "Plain-language next-step framing for caregivers, clinicians, wellness support, and research awareness",
];

const nextSteps = [
  { title: "Clinician conversation", copy: "Use the baseline to ask better questions about vascular risk factors, stroke history, medications, sleep, mood, rehabilitation, and follow-up testing.", href: "/what-we-offer" },
  { title: "Wellness support", copy: "Review optional supplement and lifestyle-support resources only after clinician discussion and with clear safety disclaimers.", href: "/marketplace" },
  { title: "Research awareness", copy: "If you want research options, opt in to consent-aware follow-up about studies that may be relevant to vascular cognitive impairment.", href: "/clinical-trial-matching" },
];

export default function MemoryScreenPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="text-center mb-16">
        <div className="section-label mb-3">STEP 2 · OBJECTIVE COGNITIVE BENCHMARK</div>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">Create a cognitive baseline to discuss with your clinician.</h1>
        <p className="text-2xl text-black max-w-4xl mx-auto mb-6">
          For families facing vascular dementia, stroke-related memory changes, or vascular cognitive impairment, a structured screen can help organize what is changing and support a more informed clinical conversation.
        </p>
        <div className="max-w-4xl mx-auto text-left">
          <AcuristScreenDisclaimer />
        </div>
      </section>

      <section className="border-4 border-black rounded-3xl p-8 md:p-12 mb-16">
        <div className="grid md:grid-cols-[1fr_300px] gap-10 items-center">
          <div>
            <div className="section-label mb-3">ACURIST.AI MCI SCREEN BASELINE</div>
            <h2 className="text-4xl font-semibold mb-4">Move from concern to a structured benchmark</h2>
            <p className="text-xl text-black mb-6">
              Step 1 helps families notice a possible vascular pattern. Step 2 benchmarks cognition so the next conversation — clinician, caregiver, research, or wellness — starts from a clearer baseline.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {deliverables.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="text-base text-black mt-6">
              As with any screening performance claim, ask for source documentation and discuss results with a qualified healthcare professional. The screen is still a screening and tracking tool, not a diagnostic medical device.
            </p>
          </div>
          <div className="border border-black rounded-3xl p-6 text-center">
            <div className="text-sm uppercase tracking-widest mb-2">Starting at</div>
            <div className="text-6xl font-semibold mb-4">{memoryScreenPrice}</div>
            <TrackedLink
              href={memoryScreenCheckoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              eventName="checkout_started"
              eventData={{ product: "memory-screen", price: memoryScreenPrice }}
              className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold w-full"
            >
              Start Cognitive Baseline
            </TrackedLink>
            <p className="text-sm text-black mt-3">Private next step • clinician discussion support • educational only</p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-3">1. Screen</h2>
          <p>Complete a brief cognitive health screen and capture a structured baseline.</p>
        </div>
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-3">2. Understand</h2>
          <p>Review plain-language context that helps organize what to discuss with a clinician.</p>
        </div>
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-3">3. Decide next questions</h2>
          <p>Prepare for clinician follow-up, research education, or compliant wellness support when appropriate.</p>
        </div>
      </section>

      <section className="mb-16">
        <div className="section-label mb-3">AFTER THE BASELINE</div>
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
        <LeadForm leadType="memory-screen" title="Request cognitive baseline follow-up" submitLabel="Request Follow-Up" />
      </section>
    </main>
  );
}

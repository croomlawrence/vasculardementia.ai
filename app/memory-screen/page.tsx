import LeadForm from "@/components/LeadForm";
import TrackedLink from "@/components/TrackedLink";
import { memoryScreenCheckoutUrl, memoryScreenPrice } from "@/lib/business";

export default function MemoryScreenPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="text-center mb-16">
        <div className="section-label mb-3">COGNITIVE TEST SALES</div>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">Start Your Memory Screen</h1>
        <p className="text-2xl text-black max-w-4xl mx-auto mb-6">
          Establish a cognitive baseline and receive a clinician-ready summary you can use to guide a conversation about memory, vascular risk, and next steps.
        </p>
        <p className="text-xl text-black max-w-3xl mx-auto">
          Educational only — not a diagnosis. Designed for adults and caregivers who want a clearer starting point before a healthcare visit.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-3">1. Screen</h2>
          <p>Complete a brief cognitive health screen and capture a structured baseline.</p>
        </div>
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-3">2. Understand</h2>
          <p>Review a plain-language summary that helps organize what to discuss with your clinician.</p>
        </div>
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-3">3. Track</h2>
          <p>Use repeat screening over time when appropriate to monitor change and support follow-up.</p>
        </div>
      </section>

      <section className="border-4 border-black rounded-3xl p-8 md:p-12 mb-16">
        <div className="grid md:grid-cols-[1fr_280px] gap-8 items-center">
          <div>
            <h2 className="text-4xl font-semibold mb-4">Memory Screen Baseline</h2>
            <p className="text-xl mb-4">A focused cognitive screening entry point for families, caregivers, and patients concerned about memory changes.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clinician-conversation support</li>
              <li>Privacy-first educational flow</li>
              <li>Built to connect VascuMind education with Acurist cognitive testing</li>
              <li>No emergency or diagnostic claims</li>
            </ul>
          </div>
          <div className="border border-black rounded-3xl p-6 text-center">
            <div className="text-sm uppercase tracking-widest mb-2">Starting at</div>
            <div className="text-5xl font-semibold mb-4">{memoryScreenPrice}</div>
            <TrackedLink
              href={memoryScreenCheckoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              eventName="checkout_started"
              eventData={{ product: "memory-screen", price: memoryScreenPrice }}
              className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold w-full"
            >
              Continue to Checkout
            </TrackedLink>
            <p className="text-sm text-black mt-3">Stripe should redirect to /memory-screen/thank-you after payment. If checkout is not yet connected, this routes to the current Acurist screening path.</p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-3xl font-semibold mb-4">Who this is for</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>People noticing memory or thinking changes</li>
            <li>Caregivers organizing concerns before a visit</li>
            <li>People with vascular risk factors such as hypertension, stroke/TIA history, PAD, diabetes, or heart disease</li>
            <li>Families wanting a baseline before lifestyle or medical follow-up</li>
          </ul>
        </div>
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-3xl font-semibold mb-4">What it does not do</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>It does not diagnose Alzheimer’s disease, vascular dementia, MCI, stroke, or any disease.</li>
            <li>It does not replace urgent care or a clinician evaluation.</li>
            <li>It should not be used to change medications or treatment plans without medical advice.</li>
          </ul>
        </div>
      </section>

      <section id="follow-up">
        <LeadForm leadType="memory-screen" title="Request memory screen follow-up" submitLabel="Request Follow-Up" />
      </section>
    </main>
  );
}

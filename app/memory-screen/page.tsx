import { AcuristScreenDisclaimer } from '@/app/components/ComplianceNotices';
import LeadForm from "@/components/LeadForm";
import TrackedLink from "@/components/TrackedLink";
import { memoryScreenCheckoutUrl, memoryScreenPrice } from "@/lib/business";

const deliverables = [
  "A structured cognitive-screening baseline sourced from Acurist.AI",
  "Memory Performance Index-style framing for understanding baseline performance",
  "Plain-language next-step framing for a clinician conversation",
  "Routing to the DTC Cerebrovascular Support Stack or consented trial matching when appropriate",
];

const upsellPaths = [
  { title: "Journey A · DTC Stack", copy: "If your benchmark shows changes worth discussing, review the Cerebrovascular Support Stack with COA transparency and clinician framing.", href: "/marketplace" },
  { title: "Journey B · Trial Matching", copy: "If your pattern suggests research relevance, opt into vascular cognitive trial matching and CRO follow-up review.", href: "/clinical-trial-matching" },
  { title: "See the Post-Screen Fork", copy: "Use the benchmark to decide between wellness support, clinical-trial awareness, repeat tracking, or clinician discussion.", href: "/memory-screen/thank-you" },
];

export default function MemoryScreenPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="text-center mb-16">
        <div className="section-label mb-3">STEP 2 · PAID / LOW-TICKET BENCHMARK</div>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">Hachinski shows a pattern? Benchmark it with Acurist.AI.</h1>
        <p className="text-2xl text-black max-w-4xl mx-auto mb-6">
          This is the conversion bridge: turn a subjective vascular-pattern signal into an objective cognitive baseline, then route users into the right VascuMind Protocol pathway.
        </p>
        <div className="max-w-4xl mx-auto text-left">
          <AcuristScreenDisclaimer />
        </div>
      </section>

      <section className="border-4 border-black rounded-3xl p-8 md:p-12 mb-16">
        <div className="grid md:grid-cols-[1fr_300px] gap-10 items-center">
          <div>
            <div className="section-label mb-3">MEMORY SCREEN BASELINE</div>
            <h2 className="text-4xl font-semibold mb-4">Purchase or request the Acurist.AI MCI Screen</h2>
            <p className="text-xl text-black mb-6">
              Step 1 helped the user notice a possible pattern. Step 2 benchmarks cognition so the next conversation — clinician, caregiver, research, or wellness — starts from a clearer baseline.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {deliverables.map((item) => <li key={item}>{item}</li>)}
            </ul>
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
              Continue to Checkout
            </TrackedLink>
            <p className="text-sm text-black mt-3">If Stripe is not connected yet, this routes to the current Acurist screening path.</p>
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
          <h2 className="text-2xl font-semibold mb-3">3. Route</h2>
          <p>Move to clinician follow-up, trial education, or compliant wellness support when appropriate.</p>
        </div>
      </section>

      <section className="mb-16">
        <div className="section-label mb-3">POST-SCREEN PATHWAYS</div>
        <h2 className="text-4xl font-semibold mb-6">The screen is the beginning of the commercial journey.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {upsellPaths.map((path) => (
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
            <li>People noticing memory or thinking changes</li>
            <li>Caregivers organizing concerns before a visit</li>
            <li>People with vascular risk factors such as hypertension, stroke/TIA history, PAD, diabetes, or heart disease</li>
            <li>Families wanting a baseline before lifestyle or medical follow-up</li>
          </ul>
        </div>
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-3xl font-semibold mb-4">What it does not do</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>It does not diagnose Alzheimer’s disease, vascular cognitive impairment, MCI, stroke, or any disease.</li>
            <li>It does not replace urgent care or a clinician evaluation.</li>
            <li>It should not be used to change medications or care plans without medical advice.</li>
          </ul>
        </div>
      </section>

      <section id="follow-up">
        <LeadForm leadType="memory-screen" title="Request memory screen follow-up" submitLabel="Request Follow-Up" />
      </section>
    </main>
  );
}

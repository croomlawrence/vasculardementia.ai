import Link from "next/link";

export default function MemoryScreenThankYouPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <section className="border-4 border-black rounded-3xl p-8 md:p-12 text-center mb-12">
        <div className="section-label mb-3">THE POST-SCREEN FORK</div>
        <h1 className="text-5xl font-semibold tracking-tight mb-6">Your Acurist.AI benchmark creates two VascuMind Protocol paths</h1>
        <p className="text-2xl text-black mb-6">
          If your screening results show changes worth discussing, use them to guide a conversation with a qualified healthcare provider — then choose the DTC Cerebrovascular Support Stack or consented clinical-trial matching.
        </p>
        <p className="text-xl text-black mb-8">
          This is not a diagnosis, care plan, or emergency service. If symptoms are sudden or severe, call emergency services immediately.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="border-4 border-black rounded-3xl p-8">
          <div className="section-label mb-3">Journey A — DTC</div>
          <h2 className="text-3xl font-semibold mb-4">Support cerebrovascular wellness</h2>
          <p className="text-xl text-black mb-6">
            Your Acurist.AI benchmark shows changes worth discussing. Support vascular and cognitive wellness foundations with the VascuMind Protocol Stack — citicoline, high-EPA omega-3, and MCT oil — after clinician review and supplier/COA checks.
          </p>
          <Link href="/marketplace" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
            View Protocol Stack
          </Link>
        </div>
        <div className="border-4 border-black rounded-3xl p-8">
          <div className="section-label mb-3">Journey B — CRO / Research</div>
          <h2 className="text-3xl font-semibold mb-4">See if current studies may fit</h2>
          <p className="text-xl text-black mb-6">
            Your Acurist.AI benchmark may be useful when asking about clinical studies investigating vascular cognitive impairment and related approaches. Opt in before VascuMind evaluates current-study fit.
          </p>
          <Link href="/clinical-trial-matching" className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold border border-black hover:bg-black hover:text-white">
            See If I Match Current Studies
          </Link>
        </div>
      </section>

      <section className="border border-black rounded-3xl p-8">
        <h2 className="text-2xl font-semibold mb-3">Still need to complete intake?</h2>
        <p className="text-xl text-black mb-6">Use the follow-up form so the screening pathway can be routed correctly.</p>
        <Link href="/memory-screen#follow-up" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
          Complete Follow-Up Form
        </Link>
      </section>
    </main>
  );
}

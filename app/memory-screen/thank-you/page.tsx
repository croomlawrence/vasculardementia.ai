import Link from "next/link";

export default function MemoryScreenThankYouPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <section className="border-4 border-black rounded-3xl p-8 md:p-12 text-center mb-12">
        <div className="section-label mb-3">THE POST-SCREEN FORK</div>
        <h1 className="text-5xl font-semibold tracking-tight mb-6">After your Acurist.AI benchmark, choose the right next step</h1>
        <p className="text-2xl text-black mb-6">
          If your screening results show changes you want to understand, use them to guide a conversation with a qualified healthcare provider — then choose whether you want caregiver wellness support or clinical-trial matching.
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
            Interested in non-diagnostic wellness support? Review the VascuMind Cerebrovascular Support stack and ingredient-quality policy. Subscribe-and-save will be enabled after payment and supplier review.
          </p>
          <Link href="/marketplace" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
            View Support Stack
          </Link>
        </div>
        <div className="border-4 border-black rounded-3xl p-8">
          <div className="section-label mb-3">Journey B — CRO / Research</div>
          <h2 className="text-3xl font-semibold mb-4">See if research matching may fit</h2>
          <p className="text-xl text-black mb-6">
            Interested in cutting-edge clinical studies investigating vascular cognitive health? Opt in to consented trial matching so VascuMind can evaluate whether follow-up may be relevant.
          </p>
          <Link href="/clinical-trial-matching" className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold border border-black hover:bg-black hover:text-white">
            Check Trial Matching
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

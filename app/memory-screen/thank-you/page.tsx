import Link from "next/link";

export default function MemoryScreenThankYouPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <section className="border-4 border-black rounded-3xl p-8 md:p-12 text-center">
        <div className="section-label mb-3">PAYMENT RECEIVED</div>
        <h1 className="text-5xl font-semibold tracking-tight mb-6">Next Step: Complete Your Screening Intake</h1>
        <p className="text-2xl text-black mb-6">
          Thank you. Your payment has been received. The next step is to complete the screening intake and confirm the best contact email for follow-up.
        </p>
        <p className="text-xl text-black mb-8">
          VascuMind is educational only and does not provide diagnosis, treatment, or emergency care. If symptoms are sudden or severe, call emergency services immediately.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/memory-screen#follow-up" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
            Complete Follow-Up Form
          </Link>
          <Link href="/hachinski" className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold border border-black hover:bg-black hover:text-white">
            Review Hachinski Tool
          </Link>
        </div>
      </section>

      <section className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="border border-black rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-2">1. Confirm contact</h2>
          <p>Use the follow-up form so the screening pathway can be routed correctly.</p>
        </div>
        <div className="border border-black rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-2">2. Complete intake</h2>
          <p>Answer only the requested screening information. Do not submit emergency symptoms or medical records here.</p>
        </div>
        <div className="border border-black rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-2">3. Prepare for discussion</h2>
          <p>Use your results to guide a conversation with a qualified healthcare professional.</p>
        </div>
      </section>
    </main>
  );
}

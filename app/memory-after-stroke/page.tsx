import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Memory Changes After Stroke",
  description: "Noticing memory, attention, or confusion changes after stroke or TIA? Start with a free vascular cognitive pattern check and learn what to discuss with a clinician.",
  alternates: { canonical: "/memory-after-stroke" },
};

export default function MemoryAfterStrokePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="grid lg:grid-cols-[1fr_360px] gap-10 items-start mb-16">
        <div>
          <div className="section-label mb-3">Memory changes after stroke or TIA</div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">Noticing memory or thinking changes after a stroke? Start by organizing the pattern.</h1>
          <p className="text-2xl text-black mb-6">Families often notice attention, processing speed, confusion, or memory changes before they know what to ask. VascuMind helps you prepare for a qualified clinician conversation.</p>
          <Link href="/hachinski" className="btn-primary inline-block">Start Free Pattern Check</Link>
        </div>
        <aside className="border-4 border-black rounded-3xl p-6 bg-background-light">
          <h2 className="text-2xl font-semibold mb-3">Seek urgent care now if symptoms are sudden or severe.</h2>
          <p>Facial drooping, one-sided weakness, speech trouble, severe dizziness, confusion, or vision loss require emergency care. Do not use this website instead of urgent medical care.</p>
        </aside>
      </section>
      <section className="grid md:grid-cols-3 gap-6 mb-16">
        {["Sudden onset", "Stepwise worsening", "Stroke/TIA history"].map((item) => <div key={item} className="border border-black rounded-3xl p-8"><h2 className="text-2xl font-semibold mb-3">{item}</h2><p>These vascular-pattern clues can help organize the story before a clinician visit. They do not diagnose disease.</p></div>)}
      </section>
      <section className="border-4 border-black rounded-3xl p-8 text-center">
        <h2 className="text-4xl font-semibold mb-4">Before the next appointment, bring better questions.</h2>
        <p className="text-xl mb-6">Start free. If the pattern is worth tracking, create a structured cognitive baseline.</p>
        <Link href="/hachinski" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">Start Free Check</Link>
      </section>
    </main>
  );
}

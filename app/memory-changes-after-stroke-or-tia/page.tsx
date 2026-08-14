import type { Metadata } from "next";
import Link from "next/link";
import { memoryScreenPrice } from "@/lib/business";

export const metadata: Metadata = {
  title: "Memory Changes After Stroke or TIA | Vascular Cognitive Pattern Check",
  description:
    "Memory, attention, or confusion can change after stroke, TIA, or vascular risk factors. Learn what to track, what may be urgent, and how to prepare for a clinician conversation.",
  alternates: { canonical: "/memory-changes-after-stroke-or-tia" },
};

const patterns = [
  ["Sudden onset", "The change seemed to appear overnight, within a few days, or after a vascular event."],
  ["Stepwise change", "There are periods of stability followed by noticeable drops rather than one slow gradual decline."],
  ["Stroke or TIA history", "Memory, attention, processing speed, or confusion changed after stroke, mini-stroke, or related events."],
  ["Vascular risk factors", "Blood pressure, diabetes, PAD, heart disease, smoking history, or cholesterol may be part of the story."],
];

const clinicianChecklist = [
  "Could stroke, TIA, small-vessel disease, or vascular risk factors be contributing to the changes?",
  "Should we review blood pressure, diabetes, cholesterol, PAD, smoking history, sleep, mood, medications, B12, or hearing?",
  "Is formal cognitive screening or a repeatable cognitive baseline appropriate?",
  "Are imaging, labs, rehabilitation, or a specialist referral worth discussing?",
  "Are Alzheimer’s biomarker tests relevant, or is a different first step more appropriate?",
];

export default function MemoryChangesAfterStrokeOrTiaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can memory change after a stroke or TIA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Memory, attention, processing speed, confusion, and day-to-day function can change after stroke or TIA. Any concerns should be discussed with a qualified clinician.",
        },
      },
      {
        "@type": "Question",
        name: "Does a vascular pattern check diagnose vascular dementia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. VascuMind’s pattern check is educational only. It helps organize observations for clinician discussion and does not diagnose dementia or replace medical evaluation.",
        },
      },
    ],
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="grid lg:grid-cols-[1fr_360px] gap-10 items-start mb-16">
        <div>
          <div className="section-label mb-3">Memory changes after stroke or TIA</div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            Memory changes after stroke or TIA? Start by organizing the pattern.
          </h1>
          <p className="text-2xl text-black mb-8">
            Families may notice changes in memory, attention, processing speed, confusion, or day-to-day function before they know what to ask. VascuMind helps you organize the vascular clues and prepare for a qualified clinician conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/hachinski" className="btn-primary text-center">Start the Free Pattern Check</Link>
            <Link href="/memory-screen" className="btn-secondary text-center">Create a {memoryScreenPrice} Cognitive Baseline</Link>
          </div>
        </div>
        <aside className="border-4 border-black rounded-3xl p-6 bg-background-light">
          <h2 className="text-2xl font-semibold mb-3">Seek urgent care now if symptoms are sudden or severe.</h2>
          <p className="text-black">Facial drooping, one-sided weakness, speech trouble, severe dizziness, new confusion, or vision loss may require emergency care. Do not use this website instead of urgent medical care.</p>
        </aside>
      </section>

      <section className="mb-16">
        <div className="section-label mb-3">Common patterns families notice</div>
        <h2 className="text-4xl font-semibold tracking-tight mb-8">What may be worth documenting before the visit.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {patterns.map(([title, copy]) => (
            <div key={title} className="border border-black rounded-3xl p-8 bg-white">
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-black">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 green-wash rounded-3xl p-8 md:p-12">
        <h2 className="text-4xl font-semibold tracking-tight mb-5">Why vascular risk matters.</h2>
        <p className="text-xl text-black mb-5">
          Stroke, TIA, high blood pressure, diabetes, PAD, heart disease, smoking history, and small-vessel disease can shape the questions worth raising with a clinician. These clues do not prove the cause, but they can make the next conversation more focused.
        </p>
        <Link href="/vascular-cognitive-impairment" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">Learn about vascular cognitive impairment</Link>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold tracking-tight mb-6">What to bring to a clinician.</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-black">
          {clinicianChecklist.map((item) => (
            <li key={item} className="border border-black rounded-2xl p-5">{item}</li>
          ))}
        </ul>
      </section>

      <section className="bg-black text-white rounded-3xl p-8 md:p-12 text-center">
        <h2 className="text-4xl font-semibold text-white mb-4">Start with the free vascular pattern check.</h2>
        <p className="text-xl text-white max-w-3xl mx-auto mb-8">If the pattern is worth documenting, the next step is a structured {memoryScreenPrice} cognitive baseline for clinician discussion and repeat tracking.</p>
        <Link href="/hachinski" className="bg-white text-black border-2 border-white hover:bg-black hover:text-white inline-block px-8 py-4 rounded-full text-lg font-semibold">Start Free Pattern Check</Link>
      </section>
    </main>
  );
}

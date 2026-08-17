import type { Metadata } from "next";
import Link from "next/link";
import { memoryScreenPrice } from "@/lib/business";

export const metadata: Metadata = {
  title: "Alzheimer’s Blood Test vs Cognitive Screening | VascuMind",
  description:
    "Learn how Alzheimer’s blood tests, cognitive screening, and vascular memory checks answer different questions for families worried about memory changes.",
  alternates: { canonical: "/alzheimers-blood-test-vs-cognitive-screening" },
};

const comparisonRows = [
  {
    tool: "Alzheimer’s blood test",
    helps: "May help clinicians assess Alzheimer’s-related biology in appropriate symptomatic adults.",
    limits: "Does not measure day-to-day cognitive function, explain every cause of symptoms, or replace clinician evaluation.",
  },
  {
    tool: "Cognitive screening or baseline",
    helps: "Creates a structured view of cognitive performance that can be discussed and tracked over time.",
    limits: "Does not identify the medical cause by itself and is not a diagnosis.",
  },
  {
    tool: "Vascular memory check",
    helps: "Organizes clues like sudden onset, stepwise change, stroke/TIA history, and vascular risk factors.",
    limits: "Does not diagnose vascular dementia or tell you which treatment is needed.",
  },
];

const questions = [
  "Did memory or thinking change suddenly or in steps?",
  "Was there a stroke, TIA, or vascular event?",
  "Are blood pressure, diabetes, PAD, heart disease, cholesterol, or smoking history part of the story?",
  "Would a memory baseline help track changes over time?",
  "Are Alzheimer’s biomarkers appropriate to discuss with a clinician?",
];

export default function AlzheimersBloodTestVsCognitiveScreeningPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is an Alzheimer’s blood test the same as cognitive screening?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Alzheimer’s blood tests may assess disease-related biology in appropriate clinical contexts, while cognitive screening measures cognitive performance and can help create a baseline for discussion and tracking.",
        },
      },
      {
        "@type": "Question",
        name: "Can VascuMind diagnose Alzheimer’s disease or vascular dementia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. VascuMind is educational only. It provides an ischemic pattern check and memory baseline pathway to support clinician conversations, not diagnosis or treatment decisions.",
        },
      },
    ],
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="mb-16 max-w-5xl">
        <div className="section-label mb-3">Brain health testing, explained simply</div>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
          Alzheimer’s blood tests, cognitive screening, and vascular memory patterns are different tools.
        </h1>
        <p className="text-2xl text-black mb-8">
          Blood-based biomarkers may help clinicians evaluate Alzheimer’s-related biology in certain symptomatic adults. Cognitive screening and ischemic pattern checks help organize symptoms, function, and risk-factor context for a clinician conversation.
        </p>
        <Link href="/hachinski" className="btn-primary inline-block">Check My Vascular Memory Pattern</Link>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold tracking-tight mb-8">What each option helps answer.</h2>
        <div className="overflow-hidden border-2 border-black rounded-3xl bg-white">
          <div className="grid md:grid-cols-3 bg-black text-white font-bold text-lg">
            <div className="p-5 text-white">Tool</div>
            <div className="p-5 text-white border-t md:border-t-0 md:border-l border-white">What it helps with</div>
            <div className="p-5 text-white border-t md:border-t-0 md:border-l border-white">What it does not do</div>
          </div>
          {comparisonRows.map((row) => (
            <div key={row.tool} className="grid md:grid-cols-3 border-t-2 border-black">
              <div className="p-5 font-bold text-2xl text-black">{row.tool}</div>
              <div className="p-5 text-black border-t md:border-t-0 md:border-l border-black">{row.helps}</div>
              <div className="p-5 text-black border-t md:border-t-0 md:border-l border-black">{row.limits}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 grid lg:grid-cols-2 gap-8">
        <div className="green-wash rounded-3xl p-8 md:p-10">
          <h2 className="text-4xl font-semibold tracking-tight mb-5">Where VascuMind fits.</h2>
          <p className="text-xl text-black mb-5">
            VascuMind is a first step for families worried that memory changes may have a vascular pattern: stroke or TIA history, sudden onset, stepwise change, or vascular risk factors.
          </p>
          <p className="text-xl text-black">
            The free check organizes the pattern. The {memoryScreenPrice} MCI Screen pathway can create a structured memory baseline for clinician discussion and repeat tracking.
          </p>
        </div>
        <div className="border-2 border-black rounded-3xl p-8 md:p-10">
          <h2 className="text-4xl font-semibold tracking-tight mb-5">Questions to discuss.</h2>
          <ul className="list-disc pl-6 space-y-3 text-black">
            {questions.map((question) => <li key={question}>{question}</li>)}
          </ul>
        </div>
      </section>

      <section className="border-4 border-black rounded-3xl p-8 md:p-12 text-center brand-section-ivory">
        <h2 className="text-4xl font-semibold mb-4">Start by organizing the story.</h2>
        <p className="text-xl text-black max-w-3xl mx-auto mb-8">
          VascuMind does not diagnose Alzheimer’s disease, vascular dementia, MCI, stroke, or any other condition. It helps you prepare clearer questions for qualified clinicians.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/hachinski" className="btn-primary text-center">Check My Vascular Memory Pattern</Link>
          <Link href="/memory-screen" className="btn-secondary text-center">Create a {memoryScreenPrice} Memory Baseline</Link>
        </div>
      </section>
    </main>
  );
}

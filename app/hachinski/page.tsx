"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import { trackVascuMindEvent } from "@/lib/trackVascuMindEvent";

interface HachinskiItem {
  id: number;
  points: number;
  category: string;
  question: string;
  explanation: string;
  clinicianOnly?: boolean;
  emergencyNote?: boolean;
}

type Answer = "yes" | "no" | "unsure";

const hachinskiItems: HachinskiItem[] = [
  { id: 1, points: 2, category: "Symptom onset", question: "Did memory or thinking problems start very suddenly — almost overnight or within just a few days?", explanation: "Sudden changes can occur after vascular events such as strokes or mini-strokes, while many non-vascular cognitive conditions begin gradually.", emergencyNote: true },
  { id: 2, points: 1, category: "Course over time", question: "Have symptoms worsened in clear steps — stable for a while, then suddenly worse after a specific event?", explanation: "A stepwise pattern can happen when repeated vascular events affect the brain over time." },
  { id: 3, points: 2, category: "Course over time", question: "Do thinking, memory, or confusion symptoms fluctuate noticeably from day to day or within the same day?", explanation: "Fluctuating symptoms can relate to blood flow, sleep, medicines, infections, or vascular brain changes." },
  { id: 4, points: 1, category: "Daily pattern", question: "Are there periods of confusion that are worse at night?", explanation: "Nighttime confusion can have many causes, including sleep disruption, medicines, infection, or cognitive disorders." },
  { id: 5, points: 1, category: "Behavior and mood", question: "Has personality stayed relatively the same, even as memory has declined?", explanation: "In vascular-pattern cognitive impairment, personality may be better preserved than memory or executive function, although every person is different." },
  { id: 6, points: 1, category: "Behavior and mood", question: "Has there been significant depression along with the memory changes?", explanation: "Depression is common in older adults and may occur alongside vascular cognitive impairment. It is important to raise with a clinician." },
  { id: 7, points: 1, category: "Physical symptoms", question: "Are frequent physical complaints — headaches, dizziness, fatigue, or unexplained discomfort — happening along with memory changes?", explanation: "Physical complaints can accompany vascular brain changes, but they can also reflect many non-cognitive causes." },
  { id: 8, points: 1, category: "Behavior and mood", question: "Are there sudden episodes of crying or laughing that seem out of proportion or hard to control?", explanation: "This can sometimes happen after strokes or other brain changes. A clinician can help distinguish causes." },
  { id: 9, points: 1, category: "Vascular history", question: "Is there a history of high blood pressure — also called hypertension?", explanation: "High blood pressure is one of the most important modifiable vascular risk factors for brain health." },
  { id: 10, points: 2, category: "Vascular history", question: "Has there been one or more strokes or transient ischemic attacks — sometimes called TIAs or mini-strokes — in the past?", explanation: "Prior stroke or TIA can increase the likelihood that vascular changes are contributing to cognitive symptoms.", emergencyNote: true },
  { id: 11, points: 1, category: "Vascular history", question: "Is there artery disease elsewhere, such as heart disease, peripheral artery disease, or carotid artery disease?", explanation: "Artery disease in one part of the body can be a clue that blood vessels in the brain may also be affected." },
  { id: 12, points: 2, category: "Neurological symptoms", question: "Have stroke-like symptoms happened, such as weakness on one side, speech difficulty, or vision loss in one eye?", explanation: "These symptoms can be signs of stroke-related brain injury. If they are sudden, new, or ongoing, seek urgent medical care.", clinicianOnly: true, emergencyNote: true },
  { id: 13, points: 2, category: "Clinician exam", question: "Has a doctor found focal neurological signs on exam, such as one-sided weakness, reflex changes, or walking difficulty?", explanation: "This item requires a physical neurological examination by a clinician. Choose Not sure if a clinician has not told you this.", clinicianOnly: true },
];

const faqs = [
  ["Is this an Alzheimer’s test?", "No. This educational check looks for vascular-pattern clues. Many people have mixed or non-vascular causes, so results should be paired with clinical evaluation."],
  ["Is the Hachinski score still used?", "Clinicians may still use Hachinski-style vascular features as part of a broader assessment that can include history, cognitive testing, risk-factor review, and imaging."],
  ["What should I do with my result?", "Save or print it, discuss it with a qualified clinician, and consider a structured cognitive baseline if you need something trackable over time."],
];

function getInterpretation(score: number, answeredCount: number) {
  if (answeredCount === 0) return { label: "No answers selected yet", description: "Answer each question to see whether fewer, mixed, or more vascular-pattern features are reported.", cta: "Start the questions" };
  if (score <= 4) return { label: "Fewer vascular-pattern features reported", description: "Lower scores report fewer classic vascular-pattern features. Memory changes can still have vascular, non-vascular, medication, sleep, mood, infection, or mixed causes that deserve clinical evaluation.", cta: "Save results and learn what to discuss" };
  if (score <= 6) return { label: "Mixed or uncertain vascular-pattern features", description: "Middle-range scores can reflect mixed or uncertain causes. Discuss the pattern with a clinician and consider a formal cognitive baseline and vascular risk review.", cta: "Create a cognitive baseline" };
  return { label: "More vascular-pattern features reported", description: "Higher scores are more suggestive of vascular contribution. This is not a diagnosis; it is a reason to discuss vascular risk factors, stroke/TIA history, cognitive testing, and imaging with a healthcare professional.", cta: "Create a baseline and discuss with a clinician" };
}

export default function HachinskiPage() {
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const startedTracked = useRef(false);
  const completedTracked = useRef(false);

  const answeredCount = Object.keys(answers).length;
  const totalScore = useMemo(() => hachinskiItems.reduce((sum, item) => sum + (answers[item.id] === "yes" ? item.points : 0), 0), [answers]);
  const interpretation = getInterpretation(totalScore, answeredCount);
  const progressPercent = Math.round((answeredCount / hachinskiItems.length) * 100);
  const current = hachinskiItems[currentIndex];
  const isComplete = answeredCount === hachinskiItems.length;

  const setAnswer = (id: number, answer: Answer) => {
    if (!startedTracked.current) {
      startedTracked.current = true;
      trackVascuMindEvent("start_pattern_check", { eventData: { firstQuestionId: id, answer } });
    }
    setAnswers((prev) => ({ ...prev, [id]: answer }));
    trackVascuMindEvent("quiz_answered", { eventData: { questionId: id, answer, score: totalScore, answeredCount: answeredCount + (answers[id] ? 0 : 1) } });
    if (currentIndex < hachinskiItems.length - 1) setCurrentIndex((index) => index + 1);
  };

  useEffect(() => {
    if (!isComplete || completedTracked.current) return;
    completedTracked.current = true;
    trackVascuMindEvent("quiz_completed", { eventData: { totalScore, score: totalScore, answeredCount, riskBand: interpretation.label } });
    trackVascuMindEvent("score_band_viewed", { eventData: { score: totalScore, answeredCount, riskBand: interpretation.label } });
  }, [answeredCount, interpretation.label, isComplete, totalScore]);

  const resetAnswers = () => {
    trackVascuMindEvent("hachinski_reset", { eventData: { score: totalScore, answeredCount, riskBand: interpretation.label } });
    completedTracked.current = false;
    setAnswers({});
    setCurrentIndex(0);
  };

  const printResults = () => {
    trackVascuMindEvent("hachinski_print_results", { eventData: { score: totalScore, answeredCount, riskBand: interpretation.label } });
    window.print();
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <Link href="/" className="text-black hover:underline focus:outline focus:outline-4 focus:outline-black">← Back to VascuMind</Link>

      <section className="py-10">
        <div className="section-label mb-3">Step 1 · Free vascular cognitive pattern check</div>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4">Answer one question at a time. Get a plain-language vascular-pattern summary.</h1>
        <p className="text-xl text-black mb-6">This Hachinski-style educational tool helps organize whether memory or thinking changes may have vascular-pattern features. It cannot diagnose cognitive disease.</p>
        <div className="border-4 border-black bg-black text-white p-6 rounded-2xl">
          <p className="font-semibold text-xl mb-2 text-white">Emergency warning</p>
          <p className="text-white">Call emergency services immediately if symptoms are sudden or severe — including facial drooping, one-sided weakness, speech trouble, confusion, severe dizziness, or vision loss.</p>
        </div>
      </section>

      <section className="sticky top-20 z-10 bg-white border-4 border-black rounded-3xl p-5 mb-8" aria-live="polite">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-sm uppercase tracking-widest">Current score</div>
            <div className="text-5xl font-semibold tabular-nums">{totalScore} / 18</div>
            <div className="font-semibold">{answeredCount} of {hachinskiItems.length} answered</div>
          </div>
          <div className="md:text-right max-w-lg">
            <div className="text-xl font-semibold">{interpretation.label}</div>
            <div className="text-base text-black">{isComplete ? interpretation.description : "Complete all questions to unlock a result-specific next step."}</div>
          </div>
        </div>
        <div className="mt-4 border border-black h-4 rounded-full overflow-hidden" aria-label={`Progress: ${progressPercent}% complete`}>
          <div className="h-full bg-black" style={{ width: `${progressPercent}%` }} />
        </div>
      </section>

      {!isComplete ? (
        <section className="border-4 border-black rounded-3xl p-8 md:p-10 mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-3 py-1 text-sm font-mono border border-black rounded-full">Question {currentIndex + 1} of {hachinskiItems.length}</span>
            <span className="px-3 py-1 text-sm font-mono border border-black rounded-full">{current.points} {current.points === 1 ? "point" : "points"}</span>
            <span className="px-3 py-1 text-sm uppercase tracking-widest border border-black rounded-full">{current.category}</span>
            {current.clinicianOnly && <span className="px-3 py-1 text-sm uppercase tracking-widest border-2 border-black rounded-full">Clinician exam recommended</span>}
          </div>
          {current.emergencyNote && <p className="font-semibold text-black mb-4">If this symptom is sudden, new, severe, or happening now, seek urgent medical care.</p>}
          <h2 id={`hachinski-${current.id}-label`} className="text-3xl md:text-4xl font-semibold mb-4">{current.question}</h2>
          <p className="text-xl text-black mb-8">{current.explanation}</p>
          <div className="grid sm:grid-cols-3 gap-3" role="radiogroup" aria-labelledby={`hachinski-${current.id}-label`}>
            {(["yes", "no", "unsure"] as Answer[]).map((answer) => {
              const label = answer === "yes" ? "Yes" : answer === "no" ? "No" : "Not sure";
              const selected = answers[current.id] === answer;
              return (
                <button key={answer} type="button" role="radio" aria-checked={selected} onClick={() => setAnswer(current.id, answer)} className={`px-6 py-4 rounded-full text-lg font-semibold transition border-2 focus:outline focus:outline-4 focus:outline-black ${selected ? "bg-black text-white border-black" : "bg-white text-black border-black hover:bg-black hover:text-white"}`}>
                  {selected ? `✓ ${label}` : label}
                </button>
              );
            })}
          </div>
          <div className="flex justify-between gap-4 mt-8">
            <button type="button" disabled={currentIndex === 0} onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))} className="btn-secondary disabled:opacity-40">Back</button>
            <button type="button" onClick={() => setCurrentIndex((i) => Math.min(hachinskiItems.length - 1, i + 1))} className="btn-secondary">Skip for now</button>
          </div>
        </section>
      ) : (
        <section className="border-4 border-black rounded-3xl p-8 md:p-10 mb-10 bg-background-light">
          <div className="section-label mb-3">Your pattern-check summary</div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">{interpretation.label}</h2>
          <div className="text-6xl font-semibold mb-4 tabular-nums">{totalScore} / 18</div>
          <p className="text-xl text-black mb-6">{interpretation.description}</p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="border border-black rounded-2xl p-4 bg-white"><strong>0–4:</strong><br />Fewer vascular-pattern features reported.</div>
            <div className="border border-black rounded-2xl p-4 bg-white"><strong>5–6:</strong><br />Mixed or uncertain pattern; discuss with a clinician.</div>
            <div className="border border-black rounded-2xl p-4 bg-white"><strong>7+:</strong><br />More vascular-pattern features; clinical evaluation recommended.</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <TrackedLink href="/memory-screen" eventName="mci_cta_clicked" eventData={{ sourcePath: "/hachinski", ctaLabel: interpretation.cta, location: "result-card", score: totalScore, answeredCount, riskBand: interpretation.label }} className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold text-center">
              {interpretation.cta}
            </TrackedLink>
            <button type="button" onClick={printResults} className="btn-secondary">Print or Save Results</button>
            <button type="button" onClick={resetAnswers} className="btn-secondary">Reset</button>
          </div>
        </section>
      )}

      <section className="border border-black rounded-3xl p-8 mb-12">
        <h2 className="text-3xl font-semibold mb-4">Clinician conversation checklist</h2>
        <p className="text-black mb-4">Bring your pattern-check result and ask whether formal cognitive screening, medication review, vascular risk-factor management, rehabilitation, sleep/mood review, or imaging may be appropriate.</p>
        <TrackedLink href="/memory-screen" eventName="mci_cta_clicked" eventData={{ sourcePath: "/hachinski", location: "clinician-checklist", score: totalScore, answeredCount, riskBand: interpretation.label }} className="font-semibold underline">
          Create the $99 cognitive baseline →
        </TrackedLink>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(([question, answer], index) => {
            const isOpen = openFAQs.includes(index);
            const panelId = `faq-panel-${index}`;
            return (
              <div key={question} className="border border-black rounded-2xl overflow-hidden">
                <button type="button" onClick={() => setOpenFAQs((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))} aria-expanded={isOpen} aria-controls={panelId} className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-black hover:text-white transition focus:outline focus:outline-4 focus:outline-black">
                  <span className="font-semibold text-lg pr-4">{question}</span><span className="text-2xl font-light" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <div id={panelId} className="px-8 pb-8 text-black">{answer}</div>}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

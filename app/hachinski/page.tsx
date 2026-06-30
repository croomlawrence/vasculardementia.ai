"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

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
  {
    id: 1,
    points: 2,
    category: "Symptom onset",
    question: "Did your memory or thinking problems start very suddenly — almost overnight or within just a few days?",
    explanation: "Sudden changes can occur after vascular events such as strokes or mini-strokes, while Alzheimer’s disease more often begins gradually.",
    emergencyNote: true,
  },
  {
    id: 2,
    points: 1,
    category: "Course over time",
    question: "Have your symptoms worsened in clear 'steps' — staying stable for months, then suddenly getting worse after a specific event?",
    explanation: "A stepwise pattern can happen when repeated vascular events affect the brain over time.",
  },
  {
    id: 3,
    points: 2,
    category: "Course over time",
    question: "Do your thinking, memory, or confusion symptoms fluctuate noticeably from day to day or even within the same day?",
    explanation: "Fluctuating symptoms can be seen when blood flow, sleep, medicines, infections, or vascular brain changes affect thinking.",
  },
  {
    id: 4,
    points: 1,
    category: "Daily pattern",
    question: "Do you or your loved one experience periods of confusion that are worse at night?",
    explanation: "Nighttime confusion can have many causes, including sleep disruption, medicines, infection, or dementia. New or worsening symptoms should be discussed with a clinician.",
  },
  {
    id: 5,
    points: 1,
    category: "Behavior and mood",
    question: "Has your personality stayed relatively the same, even as memory has declined?",
    explanation: "In vascular dementia, personality may be better preserved than memory or executive function, although every person is different.",
  },
  {
    id: 6,
    points: 1,
    category: "Behavior and mood",
    question: "Have you experienced significant depression along with the memory changes?",
    explanation: "Depression is common in older adults and may occur alongside vascular cognitive impairment. It is also treatable and worth raising with a clinician.",
  },
  {
    id: 7,
    points: 1,
    category: "Physical symptoms",
    question: "Do you have frequent physical complaints — such as headaches, dizziness, fatigue, or unexplained discomfort — along with memory changes?",
    explanation: "Physical complaints can accompany vascular brain changes, but they can also reflect many non-dementia causes.",
  },
  {
    id: 8,
    points: 1,
    category: "Behavior and mood",
    question: "Do you have sudden episodes of crying or laughing that seem out of proportion or hard to control?",
    explanation: "This can sometimes happen after strokes or other brain changes. A clinician can help distinguish causes.",
  },
  {
    id: 9,
    points: 1,
    category: "Vascular history",
    question: "Do you have a history of high blood pressure — also called hypertension?",
    explanation: "High blood pressure is one of the most important modifiable vascular risk factors for brain health.",
  },
  {
    id: 10,
    points: 2,
    category: "Vascular history",
    question: "Have you had one or more strokes or transient ischemic attacks — sometimes called TIAs or mini-strokes — in the past?",
    explanation: "Prior stroke or TIA can increase the likelihood that vascular changes are contributing to cognitive symptoms.",
    emergencyNote: true,
  },
  {
    id: 11,
    points: 1,
    category: "Vascular history",
    question: "Do you have artery disease elsewhere, such as heart disease, peripheral artery disease, or carotid artery disease?",
    explanation: "Artery disease in one part of the body can be a clue that blood vessels in the brain may also be affected.",
  },
  {
    id: 12,
    points: 2,
    category: "Neurological symptoms",
    question: "Have you experienced stroke-like symptoms such as weakness on one side, speech difficulty, or vision loss in one eye?",
    explanation: "These symptoms can be signs of stroke-related brain injury. If they are sudden, new, or ongoing, seek urgent medical care.",
    clinicianOnly: true,
    emergencyNote: true,
  },
  {
    id: 13,
    points: 2,
    category: "Clinician exam",
    question: "Has a doctor found focal neurological signs on exam, such as one-sided weakness, reflex changes, or walking difficulty?",
    explanation: "This item requires a physical neurological examination by a clinician. Choose Not sure if a clinician has not told you this.",
    clinicianOnly: true,
  },
];

const faqs = [
  {
    question: "What is vascular dementia and how is it different from Alzheimer’s?",
    answer: "Vascular dementia is related to reduced blood flow or blood-vessel injury in the brain. Alzheimer’s disease is associated with abnormal amyloid and tau proteins. Many people have mixed causes, so this tool should be paired with clinical evaluation, cognitive testing, and sometimes brain imaging.",
  },
  {
    question: "Is the Hachinski score still used today?",
    answer: "Yes. Clinicians may still use the Hachinski Ischemic Score as one part of a broader assessment. It is most useful when combined with cognitive testing, clinical history, risk-factor review, and imaging when appropriate.",
  },
  {
    question: "Can I take this test myself?",
    answer: "This version is designed for education and self-reflection only. Some items require a clinician’s neurological examination. If you are unsure about an item, choose Not sure and discuss it with your healthcare professional.",
  },
  {
    question: "What should I do if my score suggests vascular contribution?",
    answer: "Share the result with your clinician. Ask about blood pressure, cholesterol, diabetes, stroke/TIA history, medicines, sleep, exercise, diet, and whether formal cognitive screening or imaging is appropriate.",
  },
  {
    question: "Are there limitations to the Hachinski score?",
    answer: "Yes. It does not diagnose Alzheimer’s disease, vascular dementia, or mixed dementia. It is a pattern-recognition tool that can help prepare for a medical conversation.",
  },
];

function getInterpretation(score: number, answeredCount: number) {
  if (answeredCount === 0) {
    return {
      label: "No answers selected yet",
      description: "Select Yes, No, or Not sure for each item. Yes adds the listed points; No and Not sure add 0 points.",
    };
  }
  if (score <= 4) {
    return {
      label: "Fewer vascular-pattern features reported",
      description: "Lower scores report fewer classic vascular-pattern features. Alzheimer’s disease, vascular cognitive impairment, mixed dementia, medication effects, sleep problems, depression, infection, and other causes still require professional evaluation.",
    };
  }
  if (score <= 6) {
    return {
      label: "Mixed or uncertain pattern",
      description: "Middle-range scores can reflect mixed or uncertain causes. Discuss the pattern with a clinician and consider formal cognitive screening and vascular risk review.",
    };
  }
  return {
    label: "More vascular-pattern features reported",
    description: "Higher scores are more suggestive of vascular contribution. This is not a diagnosis; it is a reason to discuss vascular risk factors, stroke/TIA history, cognitive testing, and imaging with a healthcare professional.",
  };
}

export default function HachinskiPage() {
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});

  const answeredCount = Object.keys(answers).length;
  const totalScore = useMemo(
    () => hachinskiItems.reduce((sum, item) => sum + (answers[item.id] === "yes" ? item.points : 0), 0),
    [answers],
  );
  const interpretation = getInterpretation(totalScore, answeredCount);
  const progressPercent = Math.round((answeredCount / hachinskiItems.length) * 100);

  const setAnswer = (id: number, answer: Answer) => {
    setAnswers((prev) => ({ ...prev, [id]: answer }));
  };

  const resetAnswers = () => setAnswers({});

  const toggleFAQ = (index: number) => {
    setOpenFAQs((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/" className="text-black hover:underline focus:outline focus:outline-4 focus:outline-black">← Back to Vascumind</Link>
      </div>

      <h1 className="text-5xl font-semibold tracking-tight mb-4">The Hachinski Ischemic Score</h1>
      <div className="green-divider w-16 mb-8"></div>
      <p className="text-xl text-black mb-8">
        A classic clinical pattern-recognition tool, translated into patient-friendly language for education and clinician discussion.
      </p>

      <div className="border-4 border-black p-6 mb-8 rounded-2xl bg-white">
        <p className="font-semibold text-xl mb-2">Important: This tool cannot diagnose dementia</p>
        <ul className="list-disc pl-6 text-black space-y-2">
          <li>This is an educational self-reflection tool only — not medical advice, diagnosis, or treatment.</li>
          <li>Several items require a clinician’s physical examination. Choose <strong>Not sure</strong> when you do not know.</li>
          <li>Share results with a qualified healthcare professional before making health decisions.</li>
        </ul>
      </div>

      <div className="border-4 border-black bg-black text-white p-6 mb-12 rounded-2xl">
        <p className="font-semibold text-xl mb-2 text-white">Emergency warning</p>
        <p className="text-white">
          Call emergency services immediately if symptoms are sudden or severe — including facial drooping, one-sided weakness,
          speech trouble, confusion, severe dizziness, or vision loss. Do not use this tool instead of urgent medical care.
        </p>
      </div>

      <div id="self-report" className="mb-16">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">Symptoms, History, and Vascular Risk Factors</h2>
        <p className="text-lg mb-6">
          For each item, selecting <strong>Yes</strong> adds the listed points. Selecting <strong>No</strong> or <strong>Not sure</strong> adds 0.
          Your running score updates automatically.
        </p>

        <div className="sticky top-4 z-10 mb-8 bg-white border-4 border-black p-6 rounded-2xl" aria-live="polite">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <div className="text-sm uppercase tracking-widest">Your Current Hachinski Score</div>
              <div className="text-6xl font-semibold tabular-nums">{totalScore} / 18</div>
              <div className="text-base font-semibold mt-2">{answeredCount} of {hachinskiItems.length} answered</div>
            </div>
            <div className="max-w-md md:text-right">
              <div className="text-lg font-semibold text-black">{interpretation.label}</div>
              <div className="text-base mt-1 text-black">{interpretation.description}</div>
            </div>
          </div>
          <div className="mt-4 border border-black h-4 rounded-full overflow-hidden" aria-label={`Progress: ${progressPercent}% complete`}>
            <div className="h-full bg-black" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        <div className="border border-black rounded-2xl p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Score range guide</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-black rounded-2xl p-4"><strong>0–4:</strong> Fewer vascular-pattern features reported.</div>
            <div className="border border-black rounded-2xl p-4"><strong>5–6:</strong> Mixed or uncertain pattern; discuss with a clinician.</div>
            <div className="border border-black rounded-2xl p-4"><strong>7+:</strong> More vascular-pattern features; clinical evaluation recommended.</div>
          </div>
        </div>

        <div className="space-y-4">
          {hachinskiItems.map((item, index) => {
            const selected = answers[item.id];
            const groupId = `hachinski-${item.id}`;
            return (
              <fieldset key={item.id} className="border border-black rounded-2xl p-8">
                <legend className="sr-only">Question {index + 1} of {hachinskiItems.length}</legend>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 text-sm font-mono border border-black rounded-full">Question {index + 1} of {hachinskiItems.length}</span>
                      <span className="inline-block px-3 py-1 text-sm font-mono border border-black rounded-full">{item.points} {item.points === 1 ? "point" : "points"}</span>
                      <span className="inline-block px-3 py-1 text-sm uppercase tracking-widest border border-black rounded-full">{item.category}</span>
                      {item.clinicianOnly && <span className="text-sm uppercase tracking-widest border-2 border-black px-3 py-1 rounded-full">Clinician exam recommended</span>}
                    </div>
                    {item.emergencyNote && (
                      <p className="font-semibold text-black mb-3">If this symptom is sudden, new, severe, or happening now, seek urgent medical care.</p>
                    )}
                    <p id={`${groupId}-label`} className="text-xl font-medium mb-3">{item.question}</p>
                    <p className="text-black leading-relaxed">{item.explanation}</p>
                  </div>
                  <div className="grid grid-cols-1 gap-2 min-w-[150px]" role="radiogroup" aria-labelledby={`${groupId}-label`}>
                    {(["yes", "no", "unsure"] as Answer[]).map((answer) => {
                      const isSelected = selected === answer;
                      const label = answer === "yes" ? "Yes" : answer === "no" ? "No" : "Not sure";
                      return (
                        <button
                          key={answer}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => setAnswer(item.id, answer)}
                          className={`px-6 py-3 rounded-full font-semibold transition border-2 focus:outline focus:outline-4 focus:outline-black ${isSelected ? "bg-black text-white border-black" : "bg-white text-black border-black hover:bg-black hover:text-white"}`}
                        >
                          {isSelected ? `✓ ${label}` : label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </fieldset>
            );
          })}
        </div>

        <div className="mt-12 border border-black p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4">Your Score Interpretation</h3>
          <div className="text-4xl font-semibold mb-4 tabular-nums">{totalScore} / 18</div>
          <p className="text-lg mb-6">{interpretation.description}</p>
          <p className="text-base text-black mb-6"><strong>Next step:</strong> Share these results with your doctor. Consider formal cognitive screening, vascular risk review, and medical evaluation when appropriate.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button type="button" onClick={resetAnswers} className="border-2 border-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white focus:outline focus:outline-4 focus:outline-black">Reset answers</button>
            <button type="button" onClick={() => window.print()} className="border-2 border-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white focus:outline focus:outline-4 focus:outline-black">Print or save results</button>
          </div>
        </div>
      </div>

      <div className="text-center mb-16 border-4 border-black rounded-3xl p-8">
        <h2 className="text-3xl font-semibold mb-3">Pair this pattern score with a memory screen</h2>
        <p className="text-black mb-6">Educational results only. No diagnosis. Takes a few minutes and helps prepare for a clinician conversation.</p>
        <a href="https://www.acurist.ai" target="_blank" rel="noopener noreferrer" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold focus:outline focus:outline-4 focus:outline-black">
          Start Memory Screen
        </a>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold tracking-tight mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFAQs.includes(index);
            const panelId = `faq-panel-${index}`;
            return (
              <div key={faq.question} className="border border-black rounded-2xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-black hover:text-white transition focus:outline focus:outline-4 focus:outline-black"
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <span className="text-2xl font-light" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <div id={panelId} className="px-8 pb-8 text-black">{faq.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center">
        <a href="https://www.acurist.ai" target="_blank" rel="noopener noreferrer" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold focus:outline focus:outline-4 focus:outline-black">
          Start Memory Screen
        </a>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface HachinskiItem {
  id: number;
  points: number;
  question: string;
  explanation: string;
  clinicianOnly?: boolean;
}

const hachinskiItems: HachinskiItem[] = [
  {
    id: 1,
    points: 2,
    question: "Did your memory or thinking problems start very suddenly — almost overnight or within just a few days?",
    explanation: "Vascular events (like small strokes) often cause sudden changes, unlike the gradual onset typical of Alzheimer’s."
  },
  {
    id: 2,
    points: 1,
    question: "Have your symptoms worsened in clear 'steps' — staying stable for months, then suddenly getting worse after a specific event?",
    explanation: "Stepwise decline is a hallmark of multi-infarct (vascular) dementia as new small strokes occur."
  },
  {
    id: 3,
    points: 2,
    question: "Do your thinking, memory, or confusion symptoms fluctuate noticeably from day to day or even within the same day?",
    explanation: "Fluctuating course is more common in vascular dementia than in typical Alzheimer’s."
  },
  {
    id: 4,
    points: 1,
    question: "Do you or your loved one experience periods of confusion that are worse at night?",
    explanation: "Nocturnal confusion (sundowning-like symptoms) can point to vascular contributions."
  },
  {
    id: 5,
    points: 1,
    question: "Has your personality stayed relatively the same, even as memory has declined?",
    explanation: "In vascular dementia, personality is often better preserved compared to Alzheimer’s."
  },
  {
    id: 6,
    points: 1,
    question: "Have you experienced significant depression along with the memory changes?",
    explanation: "Depression is more frequently associated with vascular dementia."
  },
  {
    id: 7,
    points: 1,
    question: "Do you have frequent physical complaints (headaches, dizziness, fatigue, etc.) that are hard to explain?",
    explanation: "Somatic complaints are more common in vascular dementia."
  },
  {
    id: 8,
    points: 1,
    question: "Do you have sudden episodes of crying or laughing that seem out of proportion or inappropriate?",
    explanation: "Emotional incontinence (pseudobulbar affect) is linked to vascular brain changes."
  },
  {
    id: 9,
    points: 1,
    question: "Do you have a history of high blood pressure (hypertension)?",
    explanation: "Hypertension is the strongest risk factor for vascular dementia."
  },
  {
    id: 10,
    points: 2,
    question: "Have you had one or more strokes or transient ischemic attacks (TIAs/mini-strokes) in the past?",
    explanation: "Previous strokes dramatically increase the likelihood of vascular dementia."
  },
  {
    id: 11,
    points: 1,
    question: "Do you have signs of atherosclerosis elsewhere (heart disease, peripheral artery disease, carotid artery disease)?",
    explanation: "Widespread vascular disease increases the chance that brain blood vessels are also affected."
  },
  {
    id: 12,
    points: 2,
    question: "Have you experienced focal neurological symptoms such as weakness on one side, speech difficulty, or vision loss in one eye?",
    explanation: "These are classic signs of stroke-related brain injury. (Some items benefit from clinician confirmation.)",
    clinicianOnly: true
  },
  {
    id: 13,
    points: 2,
    question: "Has a doctor found focal neurological signs on exam (e.g., weakness, reflex changes, or walking difficulty on one side)?",
    explanation: "This requires a physical neurological examination by a clinician.",
    clinicianOnly: true
  }
];

export default function HachinskiPage() {
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});

  const toggleFAQ = (index: number) => {
    if (openFAQs.includes(index)) {
      setOpenFAQs(openFAQs.filter(i => i !== index));
    } else {
      setOpenFAQs([...openFAQs, index]);
    }
  };

  const toggleAnswer = (id: number) => {
    setAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalScore = hachinskiItems.reduce((sum, item) => {
    return sum + (answers[item.id] ? item.points : 0);
  }, 0);

  const getInterpretation = (score: number) => {
    if (score <= 4) {
      return {
        label: "More suggestive of Alzheimer’s disease",
        color: "text-black",
        description: "Lower scores are more typical of Alzheimer’s. However, mixed dementia is still possible. A full evaluation including cognitive testing and imaging is recommended."
      };
    } else if (score <= 6) {
      return {
        label: "Mixed or uncertain picture",
        color: "text-black",
        description: "Scores in this range often indicate mixed dementia (both vascular and Alzheimer’s features). Further testing is especially important."
      };
    } else {
      return {
        label: "More suggestive of vascular dementia",
        color: "text-black",
        description: "Higher scores point toward a stronger vascular contribution. Aggressive management of blood pressure, cholesterol, and other vascular risks becomes even more critical."
      };
    }
  };

  const interpretation = getInterpretation(totalScore);

  const faqs = [
    {
      question: "What is vascular dementia and how is it different from Alzheimer’s?",
      answer: "Vascular dementia is caused by reduced blood flow to the brain — often from strokes, high blood pressure, or damaged blood vessels. Alzheimer’s is driven by abnormal protein buildup (amyloid and tau). The Hachinski score helps doctors tell them apart by looking at the pattern of symptoms and vascular risk factors."
    },
    {
      question: "Is the Hachinski score still used today?",
      answer: "Yes. The 1993 review by Pantoni confirmed it remains a valuable, low-cost tool. Modern clinics often combine it with brain scans (MRI/CT) and cognitive tests like the MCI Screen used by Vascumind."
    },
    {
      question: "Can I take this test myself?",
      answer: "This version is designed for education and self-reflection only. Items 12 and 13 require a clinician’s neurological exam. Use this tool to prepare for your appointment and understand what your doctor is evaluating."
    },
    {
      question: "What should I do if my score suggests vascular dementia?",
      answer: "Focus on modifiable vascular risks: control blood pressure and cholesterol, exercise, eat a brain-healthy diet, don’t smoke, and stay cognitively active. Vascumind combines this classic tool with modern screening to help you take action early."
    },
    {
      question: "Are there limitations to the Hachinski score?",
      answer: "It works best when combined with imaging and other tests. Some people have “mixed” dementia, which can produce middle-range scores. That’s why Vascumind uses multiple tools together."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/" className="text-black hover:underline">← Back to Vascumind</Link>
      </div>

      <h1 className="text-5xl font-semibold tracking-tight mb-4">The Hachinski Ischemic Score</h1>
      <div className="green-divider w-16 mb-8"></div>
      <p className="text-xl text-black mb-12">
        A classic clinical tool to help differentiate vascular dementia from Alzheimer’s — now in patient-friendly language.
      </p>

      {/* Disclaimer */}
      <div className="border border-black p-6 mb-12 rounded-2xl bg-white">
        <p className="font-semibold mb-2">Important Disclaimer</p>
        <p className="text-black">
          This is an educational self-reflection tool only. It is <strong>not a diagnosis</strong>. 
          Several items require a clinician’s physical examination. Always discuss results with your physician. 
          Vascumind recommends combining this with proper cognitive screening and medical evaluation.
        </p>
      </div>

      {/* Interactive Self-Report Section */}
      <div id="self-report" className="mb-16">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">Understand Your Risk Factors</h2>
        <p className="text-lg mb-8">
          Answer each question honestly based on your experience or observations. 
          Your running score updates automatically. This helps you see which vascular factors may be contributing.
        </p>

        {/* Live Score */}
        <div className="sticky top-4 z-10 mb-8 bg-white border border-black p-6 rounded-2xl flex items-center justify-between">
          <div>
            <div className="text-sm uppercase tracking-widest">Your Current Hachinski Score</div>
            <div className="text-6xl font-semibold tabular-nums">{totalScore}</div>
          </div>
          <div className="text-right max-w-[280px]">
            <div className={`text-lg font-semibold ${interpretation.color}`}>
              {interpretation.label}
            </div>
            <div className="text-sm mt-1 text-black">
              {interpretation.description}
            </div>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-4">
          {hachinskiItems.map((item, index) => {
            const isYes = answers[item.id] === true;
            return (
              <div key={item.id} className="border border-black rounded-2xl p-8">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 text-sm font-mono border border-black rounded-full">
                        {item.points} {item.points === 1 ? 'point' : 'points'}
                      </span>
                      {item.clinicianOnly && (
                        <span className="text-xs uppercase tracking-widest border border-black px-2 py-0.5 rounded">Clinician exam recommended</span>
                      )}
                    </div>
                    <p className="text-xl font-medium mb-3">{item.question}</p>
                    <p className="text-black leading-relaxed">{item.explanation}</p>
                  </div>
                  <div className="flex flex-col gap-2 min-w-[120px]">
                    <button
                      onClick={() => toggleAnswer(item.id)}
                      className={`px-6 py-3 rounded-full font-semibold transition border ${isYes ? 'bg-black text-white border-black' : 'border-black hover:bg-black hover:text-white'}`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => {
                        if (answers[item.id] !== false) {
                          setAnswers(prev => ({ ...prev, [item.id]: false }));
                        }
                      }}
                      className={`px-6 py-3 rounded-full font-semibold transition border ${answers[item.id] === false ? 'bg-black text-white border-black' : 'border-black hover:bg-black hover:text-white'}`}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Interpretation */}
        <div className="mt-12 border border-black p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4">Your Score Interpretation</h3>
          <div className="text-4xl font-semibold mb-4 tabular-nums">{totalScore} / 18</div>
          <p className="text-lg mb-6">{interpretation.description}</p>
          
          <div className="text-sm text-black">
            <strong>Next step:</strong> Share these results with your doctor. Consider a formal cognitive screening (MCI Screen) and vascular workup. Early action on blood pressure, exercise, and diet can slow progression.
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <a href="/what-we-offer" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
          Start Your Memory Screen
        </a>
        <p className="text-sm mt-3 text-black">Combine the Hachinski with modern cognitive testing for a clearer picture.</p>
      </div>

      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold tracking-tight mb-8">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-black rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <span className="text-2xl text-black font-light">
                  {openFAQs.includes(index) ? '−' : '+'}
                </span>
              </button>
              {openFAQs.includes(index) && (
                <div className="px-8 pb-8 text-black">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center">
        <a href="/what-we-offer" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
          Start Your Memory Screen
        </a>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function HachinskiPage() {
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    if (openFAQs.includes(index)) {
      setOpenFAQs(openFAQs.filter(i => i !== index));
    } else {
      setOpenFAQs([...openFAQs, index]);
    }
  };

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
      answer: "No. Some items require a physical neurological exam by a clinician. However, understanding the questions helps you prepare for your appointment and know what your doctor is looking for."
    },
    {
      question: "What should I do if my score suggests vascular dementia?",
      answer: "Focus on vascular health: control blood pressure and cholesterol, exercise regularly, eat a brain-healthy diet, don’t smoke, and stay cognitively active. Vascumind combines this classic tool with modern screening to help you take action early."
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

      <h1 className="text-5xl font-semibold tracking-tight mb-4">The Hachinski Score</h1>
      <div className="green-divider w-16 mb-8"></div>
      <p className="text-xl text-black mb-12">
        A classic clinical tool to help differentiate vascular dementia from Alzheimer’s.
      </p>

      {/* Intro */}
      <div className="prose prose-lg max-w-none mb-12">
        <p>
          The Hachinski Ischemic Score is one of the oldest and most widely used clinical tools to help distinguish vascular dementia from Alzheimer’s disease. Developed in the 1970s, it remains relevant today when combined with modern imaging and cognitive screening.
        </p>
      </div>

      {/* CTA */}
      <div className="mb-16 text-center">
        <a href="#get-started" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
          Start Memory Screen
        </a>
      </div>

      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold tracking-tight mb-8">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden green-card">
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
        <a href="#get-started" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
          Start Memory Screen
        </a>
      </div>
    </div>
  );
}

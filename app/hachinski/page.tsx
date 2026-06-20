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
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-x-3">
            <div className="w-9 h-9 bg-teal-800 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="font-semibold text-2xl tracking-tight">Vascumind</span>
          </Link>
          <div className="flex items-center gap-x-4 text-sm">
            <Link href="/marketplace" className="text-slate-600 hover:text-slate-900">Marketplace</Link>
            <Link href="/hachinski" className="text-slate-600 hover:text-slate-900 font-medium">Hachinski Score</Link>
            <Link href="#take-action" className="px-5 py-2.5 bg-teal-800 hover:bg-teal-900 text-white text-sm font-medium rounded-2xl transition-colors">
              Take the MCI Screen
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 pt-12 pb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-x-2 bg-teal-100 text-teal-800 px-4 py-1.5 rounded-3xl text-sm font-medium mb-6">
            <span>Classic Research, Modern Understanding</span>
          </div>
          
          <h1 className="text-5xl leading-[1.05] tracking-tighter font-semibold text-slate-900">
            The Hachinski Ischemic Score:<br />
            A Simple Tool That Helps<br />
            Spot Vascular Dementia
          </h1>
          
          <p className="mt-6 text-xl text-slate-600 max-w-lg">
            For over 50 years, doctors have used this 13-point checklist to tell the difference between vascular dementia and Alzheimer’s. Here’s what patients and families need to know.
          </p>
          
          <div className="flex items-center gap-x-4 mt-8">
            <a href="#faqs" className="px-8 py-4 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold rounded-3xl flex items-center gap-x-3 transition-all text-sm shadow-sm">
              Read the FAQs
            </a>
            <a href="#score" className="px-8 py-4 bg-teal-800 hover:bg-teal-900 text-white font-semibold rounded-3xl flex items-center gap-x-3 transition-all text-sm">
              See the 13 Questions
            </a>
          </div>
        </div>
      </div>

      {/* What is it */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">What is the Hachinski Ischemic Score?</h2>
              <p className="mt-4 text-lg text-slate-600">
                The Hachinski Ischemic Score (HIS) is a quick bedside checklist that helps doctors determine whether memory or thinking problems are likely caused by problems with blood flow to the brain (vascular dementia) rather than Alzheimer’s disease.
              </p>
              <p className="mt-4 text-slate-600">
                First published in 1975 by Dr. Vladimir Hachinski, it was later validated in major reviews (including Pantoni et al., 1993) and remains one of the most practical tools in memory clinics today.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-50 rounded-2xl p-6">
              <div className="text-sm font-medium text-slate-500 mb-3">Why it still matters</div>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-x-3"><span className="text-teal-600 mt-1">✓</span> <span>Fast — takes just a few minutes</span></li>
                <li className="flex gap-x-3"><span className="text-teal-600 mt-1">✓</span> <span>No expensive equipment needed</span></li>
                <li className="flex gap-x-3"><span className="text-teal-600 mt-1">✓</span> <span>Helps guide next steps and treatment</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Score Visual */}
      <div id="score" className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">How the Score Works</h2>
            <p className="text-slate-600 mt-1">Doctors add up points based on your symptoms and history</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white border border-emerald-200 rounded-3xl p-6">
            <div className="flex items-center gap-x-3">
              <div className="w-9 h-9 bg-emerald-100 rounded-2xl flex items-center justify-center">✓</div>
              <div>
                <div className="font-semibold text-emerald-700">Score 0–4</div>
                <div className="text-sm text-emerald-600">Likely Alzheimer’s</div>
              </div>
            </div>
            <p className="text-sm text-slate-600 mt-4">Gradual onset, steady progression, fewer vascular risk factors.</p>
          </div>

          <div className="bg-white border border-amber-200 rounded-3xl p-6">
            <div className="flex items-center gap-x-3">
              <div className="w-9 h-9 bg-amber-100 rounded-2xl flex items-center justify-center">?</div>
              <div>
                <div className="font-semibold text-amber-700">Score 4–7</div>
                <div className="text-sm text-amber-600">Possible mixed dementia</div>
              </div>
            </div>
            <p className="text-sm text-slate-600 mt-4">Features of both vascular damage and Alzheimer’s may be present.</p>
          </div>

          <div className="bg-white border border-red-200 rounded-3xl p-6">
            <div className="flex items-center gap-x-3">
              <div className="w-9 h-9 bg-red-100 rounded-2xl flex items-center justify-center">!</div>
              <div>
                <div className="font-semibold text-red-700">Score 7+</div>
                <div className="text-sm text-red-600">Likely vascular dementia</div>
              </div>
            </div>
            <p className="text-sm text-slate-600 mt-4">Sudden or stepwise changes, history of stroke, high blood pressure, focal signs.</p>
          </div>
        </div>
      </div>

      {/* The 13 Items */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-2">The 13 Questions Doctors Ask</h2>
        <p className="text-slate-600 mb-6">Each item adds points. Higher scores point toward vascular causes.</p>

        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden">
          <div className="divide-y text-sm">
            {[
              ["1", "Did memory problems start suddenly?", "2 pts"],
              ["2", "Did symptoms get worse in steps (not gradually)?", "1 pt"],
              ["3", "Do symptoms come and go (fluctuate)?", "2 pts"],
              ["4", "More confusion at night?", "1 pt"],
              ["5", "Has your personality stayed mostly the same?", "1 pt"],
              ["6", "Have you felt depressed?", "1 pt"],
              ["7", "Many physical complaints (somatic symptoms)?", "1 pt"],
              ["8", "Do you cry or laugh easily without reason?", "1 pt"],
              ["9", "History of high blood pressure?", "1 pt"],
              ["10", "Have you had any strokes?", "2 pts"],
              ["11", "Evidence of atherosclerosis elsewhere?", "1 pt"],
              ["12", "Focal neurological symptoms (one-sided weakness, speech issues)?", "2 pts"],
              ["13", "Focal neurological signs found on physical exam?", "2 pts"],
            ].map(([num, question, points], index) => (
              <div key={index} className="grid grid-cols-12 px-6 py-4 items-center hover:bg-slate-50">
                <div className="col-span-1 font-mono text-teal-700">{num}</div>
                <div className="col-span-8">{question}</div>
                <div className="col-span-3 text-right font-semibold text-teal-700">{points}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div id="faqs" className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold tracking-tight mb-8">Frequently Asked Questions</h2>
        
        <div className="space-y-3 max-w-4xl">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-3xl overflow-hidden">
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-5 text-left flex items-center justify-between font-medium text-slate-900 hover:bg-slate-50"
              >
                <span>{faq.question}</span>
                <span className={`transition-transform ${openFAQs.includes(index) ? 'rotate-180' : ''}`}>↓</span>
              </button>
              {openFAQs.includes(index) && (
                <div className="px-8 pb-6 text-slate-600 text-[15px]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* World-Class MCI Screen CTA - Best Practice Conversion Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white border border-slate-200 rounded-3xl p-10 md:p-14 text-center shadow-sm">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-x-2 bg-teal-100 text-teal-800 px-4 py-1 rounded-full text-xs font-semibold tracking-[1.5px] mb-4">
              BEFORE &amp; AFTER TRACKING
            </div>
            
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4 leading-tight">
              See exactly how your lifestyle changes and therapy are working.
            </h2>
            
            <p className="text-xl text-slate-600 mb-8">
              The MCI Screen is the most accurate tool available for detecting Mild Cognitive Impairment early — 
              long before dementia. Establish your baseline now, then re-test after 3–6 months of vascular health improvements.
            </p>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-8 text-left">
              <div className="font-semibold text-slate-900 mb-3 text-sm tracking-wide">HOW THE MCI SCREEN WORKS</div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-x-2"><span className="text-teal-600 font-bold">•</span> <strong>Memory Screen</strong> (quick self-report) — 94% accurate at identifying MCI</li>
                <li className="flex gap-x-2"><span className="text-teal-600 font-bold">•</span> Full MCI Screen — detects the earliest reversible stage of cognitive decline</li>
                <li className="flex gap-x-2"><span className="text-teal-600 font-bold">•</span> Personalized Action Plan + repeat testing to measure real progress</li>
                <li className="flex gap-x-2"><span className="text-teal-600 font-bold">•</span> Backed by 20+ years of peer-reviewed research (Journal of Alzheimer’s Disease, 2007)</li>
              </ul>
            </div>

            <a 
              href="https://www.acurist.ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-x-3 bg-teal-800 hover:bg-teal-900 active:bg-black transition-all text-white font-semibold text-lg px-10 py-4.5 rounded-3xl shadow-sm hover:shadow-md"
            >
              Get Your MCI Screen Baseline
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>

            <div className="mt-5 flex flex-wrap justify-center gap-x-6 text-xs text-slate-500">
              <div>Trusted by Cleveland Clinic • Mayo Clinic • NIH</div>
              <div>Takes ~15 minutes</div>
              <div>Results in 24–48 hours</div>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-500">
        <p>Content based on the original Hachinski 1975 study and Pantoni 1993 review. For educational purposes only. Always consult your physician.</p>
        <p className="mt-1">Vascumind® — Advanced diagnostics and emerging therapies for vascular dementia.</p>
      </footer>
    </div>
  );
}

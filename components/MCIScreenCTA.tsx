import React from 'react';

interface MCIScreenCTAProps {
  variant?: 'default' | 'compact';
}

export default function MCIScreenCTA({ variant = 'default' }: MCIScreenCTAProps) {
  return (
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
  );
}

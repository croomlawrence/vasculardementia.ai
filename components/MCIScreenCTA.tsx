import React from 'react';

export default function MCIScreenCTA() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="bg-white border border-black rounded-3xl p-10 md:p-14 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-x-2 border border-black text-black px-4 py-1 rounded-full text-xs font-semibold tracking-[1.5px] mb-4">
            COGNITIVE BASELINE
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-black mb-4 leading-tight">
            Pair vascular wellness changes with a memory screen.
          </h2>

          <p className="text-xl text-black mb-8">
            Establish a cognitive baseline and use the result to support a better conversation with a qualified healthcare professional. Educational only — not a diagnosis.
          </p>

          <div className="bg-white border border-black rounded-2xl p-6 mb-8 text-left">
            <div className="font-semibold text-black mb-3 text-sm tracking-wide">HOW THE MEMORY SCREEN FITS</div>
            <ul className="space-y-2 text-base text-black">
              <li><strong>Start:</strong> complete a brief memory screen.</li>
              <li><strong>Discuss:</strong> bring results and vascular risk questions to your clinician.</li>
              <li><strong>Track:</strong> repeat over time when clinically appropriate.</li>
              <li><strong>Context:</strong> cognitive screening works best alongside medical history, risk-factor review, and clinician guidance.</li>
            </ul>
          </div>

          <a href="https://www.acurist.ai" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-x-3 btn-green font-semibold text-lg px-10 py-4 rounded-3xl focus:outline focus:outline-4 focus:outline-black">
            Start Memory Screen
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </a>

          <div className="mt-5 flex flex-wrap justify-center gap-x-6 text-sm text-black">
            <div>Private next step</div>
            <div>Educational use only</div>
            <div>Clinician conversation support</div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function CompactMCIScreenCTA() {
  return (
    <div className="bg-white border border-black rounded-2xl p-6">
      <div className="text-xs font-semibold tracking-wider text-black mb-2">TRACK YOUR PROGRESS</div>
      <h3 className="font-semibold text-lg leading-tight mb-3">
        Pair wellness changes with a memory screen
      </h3>
      <p className="text-base text-black mb-4">
        Establish a cognitive baseline and discuss results with a qualified healthcare professional. Educational only — not a diagnosis.
      </p>
      <a href="/memory-screen" className="inline-block w-full text-center btn-green text-base font-semibold py-3 rounded-2xl transition-colors focus:outline focus:outline-4 focus:outline-black">
        Start Memory Screen →
      </a>
      <p className="text-sm text-center text-black mt-2">Private next step • clinician conversation support</p>
    </div>
  );
}

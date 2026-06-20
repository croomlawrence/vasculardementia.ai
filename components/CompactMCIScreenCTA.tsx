import React from 'react';

export default function CompactMCIScreenCTA() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <div className="text-xs font-semibold tracking-wider text-teal-700 mb-2">TRACK YOUR PROGRESS</div>
      <h3 className="font-semibold text-lg leading-tight mb-3">
        Measure the impact of your changes with the MCI Screen
      </h3>
      <p className="text-sm text-slate-600 mb-4">
        Establish your baseline now. Re-test after lifestyle or therapy changes to see real improvement.
      </p>
      <a 
        href="https://www.acurist.ca" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block w-full text-center bg-teal-800 hover:bg-teal-900 text-white text-sm font-semibold py-3 rounded-2xl transition-colors"
      >
        Get MCI Screen Baseline →
      </a>
      <p className="text-[10px] text-center text-slate-500 mt-2">94% accurate • 15 min • Cleveland Clinic trusted</p>
    </div>
  );
}

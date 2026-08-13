'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PreScreenerPage() {
  const [step, setStep] = useState<number | 'fail'>(1);

  // In a real application, you would collect and evaluate answers.
  // For now, we will just simulate the steps.

  return (
    <main className="max-w-xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold tracking-tight">Clinical Trial Pre-Screener</h1>
        <p className="text-lg text-black mt-2">This informational pre-screener can help organize whether a study conversation may be worth exploring.</p>
      </div>

      <div className="bg-white rounded-3xl border shadow-lg p-8">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Have you or the person you care for received a formal diagnosis of Mild Cognitive Impairment (MCI) or dementia from a qualified doctor?</h2>
            <div className="flex flex-col gap-4">
              <button onClick={() => setStep(2)} className="btn-secondary w-full py-3 text-lg">Yes</button>
              <button onClick={() => setStep('fail')} className="btn-secondary w-full py-3 text-lg">No</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Are you or the person you care for over the age of 55?</h2>
            <div className="flex flex-col gap-4">
              <button onClick={() => setStep(3)} className="btn-secondary w-full py-3 text-lg">Yes</button>
              <button onClick={() => setStep('fail')} className="btn-secondary w-full py-3 text-lg">No</button>
            </div>
          </div>
        )}

        {step === 3 && (
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">A research conversation may be worth exploring.</h2>
                <p className="text-lg mb-6">Based on your answers, there may be current or future studies to discuss with qualified study teams. VascuMind does not determine trial eligibility. The next step is to provide contact information and consent to research-awareness follow-up.</p>
                <Link href="/clinical-trials/consent" className="btn-green inline-block px-10 py-4 text-xl font-semibold rounded-full">
                    Proceed to Consent Form
                </Link>
            </div>
        )}

        {step === 'fail' && (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Thank You for Your Interest</h2>
            <p className="text-lg mb-6">Based on your answers, a research follow-up may not be the right next step today. New studies can open over time, and educational resources may still help you prepare for clinician conversations.</p>
            <Link href="/resources" className="text-black underline">
                Explore Our Resources
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

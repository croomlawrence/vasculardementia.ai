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
        <p className="text-lg text-gray-600 mt-2">Let's see if you might be a preliminary fit for a study.</p>
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
                <h2 className="text-2xl font-semibold mb-4">You may be a preliminary candidate.</h2>
                <p className="text-lg mb-6">Based on your answers, you may be a fit for current or future research studies. The next step is to provide your contact information and consent to be contacted by our research partners.</p>
                <Link href="/clinical-trials/consent" className="btn-green inline-block px-10 py-4 text-xl font-semibold rounded-full">
                    Proceed to Consent Form
                </Link>
            </div>
        )}

        {step === 'fail' && (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Thank You for Your Interest</h2>
            <p className="text-lg mb-6">Based on your answers, you may not be a fit for the specific criteria of current studies. However, new studies are always starting. We encourage you to subscribe to our newsletter to stay informed.</p>
            <Link href="/resources" className="text-blue-600 hover:underline">
                Explore Our Resources
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

'use client';

import { useState } from 'react';

export default function ConsentFormPage() {
  const [hasConsented, setHasConsented] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
        <main className="max-w-xl mx-auto px-6 py-20 text-center">
            <h1 className="text-4xl font-semibold tracking-tight mb-4">Thank You</h1>
            <p className="text-lg text-gray-600">Your information has been securely submitted. Our research partners may contact you if you are a good fit for a study.</p>
        </main>
    );
  }

  return (
    <main className="max-w-xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold tracking-tight">Final Step: Consent & Contact</h1>
        <p className="text-lg text-gray-600 mt-2">Please review and agree to the following before submitting your information.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-3xl border shadow-lg p-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-800">Full Name</label>
            <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg p-2" />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-800">Email Address</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg p-2" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg font-medium text-gray-800">Phone Number (Optional)</label>
            <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg p-2" />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <h2 className="text-2xl font-semibold mb-4">Informed Consent</h2>
          <div className="space-y-4 text-gray-700">
            <p>By checking the box below and submitting this form, you acknowledge and agree to the following:</p>
            <ul className="list-disc pl-6 space-y-2">
                <li>You are providing your accurate contact information.</li>
                <li>You have read and understood that VascuMind may provide your information to its clinical research partners.</li>
                <li>Those partners may contact you to discuss your potential eligibility for a clinical trial.</li>
                <li>This does not guarantee your participation in any study and is not medical advice.</li>
            </ul>
          </div>

          <div className="relative flex items-start mt-6">
            <div className="flex h-6 items-center">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                checked={hasConsented}
                onChange={(e) => setHasConsented(e.target.checked)}
                className="h-6 w-6 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
              />
            </div>
            <div className="ml-3 text-lg leading-6">
              <label htmlFor="consent" className="font-medium text-gray-900">I have read, understood, and agree to the consent statement above.</label>
            </div>
          </div>
        </div>
        
        {status === 'error' && (
            <div className="mt-6 text-red-600 text-center font-semibold">
                An error occurred. Please try again.
            </div>
        )}

        <div className="mt-8">
          <button 
            type="submit" 
            disabled={!hasConsented || status === 'loading'}
            className="w-full btn-green disabled:bg-gray-400 disabled:cursor-not-allowed px-10 py-4 text-xl font-semibold rounded-full"
          >
            {status === 'loading' ? 'Submitting...' : 'Submit Information'}
          </button>
        </div>
      </form>
    </main>
  );
}

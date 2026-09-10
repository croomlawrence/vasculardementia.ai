'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EmailCapture() {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const params = new URLSearchParams(window.location.search);
    try {
      const response = await fetch('/api/guide-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          path: window.location.pathname,
          entry_page: window.location.pathname,
          source_site: 'vascumind',
          segment_hypothesis: 'path',
          utm_source: params.get('utm_source') || '',
          utm_medium: params.get('utm_medium') || '',
          utm_campaign: params.get('utm_campaign') || '',
        }),
      });
      const result = await response.json() as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.error === 'email_required' ? 'Please enter a valid email address.' : 'Submission failed. Please try again.');
      }
      router.push('/resources/5-questions-guide');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Submission failed. Please try again.');
    }
  }

  return (
    <div className="bg-gray-100 rounded-3xl p-8 mt-16 text-center">
      <h3 className="text-3xl font-semibold mb-4">Get Your Free Guide</h3>
      <p className="text-xl text-black mb-6">
        Download our free PDF guide: "The 5 Key Questions to Ask Your Doctor About Brain Health & Circulation" to help you prepare for your next appointment.
      </p>

      <form onSubmit={onSubmit} className="max-w-xl mx-auto space-y-4 text-left" aria-label="Get Your Free Guide">
        <label className="block">
          <span className="font-semibold">Name</span>
          <input name="name" className="mt-2 w-full border-2 border-black rounded-xl px-4 py-3 text-black" />
        </label>
        <label className="block">
          <span className="font-semibold">Email</span>
          <input name="email" type="email" required className="mt-2 w-full border-2 border-black rounded-xl px-4 py-3 text-black" />
        </label>
        <label className="block">
          <span className="font-semibold">Phone (optional)</span>
          <input name="phone" type="tel" className="mt-2 w-full border-2 border-black rounded-xl px-4 py-3 text-black" />
        </label>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-green w-full px-10 py-4 rounded-full text-xl font-semibold focus:outline focus:outline-4 focus:outline-white text-center disabled:opacity-70"
        >
          {status === 'submitting' ? 'Sending...' : 'Download The Guide'}
        </button>
        {message && <p className="font-semibold text-center" role="status">{message}</p>}
      </form>

      <p className="text-sm text-black mt-4">
        We respect your privacy. No spam.
      </p>
    </div>
  );
}

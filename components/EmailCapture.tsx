'use client';

import Link from 'next/link';

export default function EmailCapture() {
  return (
    <div className="bg-gray-100 rounded-3xl p-8 mt-16 text-center">
      <h3 className="text-3xl font-semibold mb-4">Get Your Free Guide</h3>
      <p className="text-xl text-black mb-6">
        Download our free PDF guide: "The 5 Key Questions to Ask Your Doctor About Brain Health & Circulation" to help you prepare for your next appointment.
      </p>
      
      {/* This is a placeholder. In a real app, this would be a form that submits to an email service.
          For now, we will just link directly to the guide page. */}
      
      <Link 
        href="/resources/5-questions-guide"
        className="btn-green inline-block px-10 py-4 rounded-full text-xl font-semibold focus:outline focus:outline-4 focus:outline-white text-center"
      >
        Download The Guide
      </Link>
      
      <p className="text-sm text-black mt-4">
        We respect your privacy. No spam.
      </p>
    </div>
  );
}

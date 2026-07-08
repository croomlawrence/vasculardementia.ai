import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Explore Clinical Research | VascuMind",
  description: "Learn about clinical trials for cognitive health and find out if you may be a candidate.",
};

export default function ClinicalTrialsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight mb-6">Could You Help Advance the Science of Brain Health?</h1>
        <p className="text-xl text-black mb-10 max-w-3xl mx-auto">
          Clinical trials are research studies that explore whether a new medicine or treatment is safe and effective. They are a vital part of developing new therapies, and participants are the heroes who make it all possible.
        </p>
      </div>

      <div className="bg-gray-100 rounded-3xl p-8 lg:p-12 mb-12">
        <h2 className="text-3xl font-semibold mb-4">What to Expect</h2>
        <div className="prose prose-lg">
            <p>Participating in a clinical trial is a significant decision. Here’s a general overview of the process:</p>
            <ol>
                <li><strong>Screening:</strong> First, a research team determines if you meet the specific criteria for a study.</li>
                <li><strong>Informed Consent:</strong> If you are a potential match, you will receive detailed information about the study, including all potential risks and benefits. You decide if you want to proceed.</li>
                <li><strong>Participation:</strong> If you consent, you will follow the study's protocol, which may involve regular visits, specific treatments, and monitoring by a dedicated medical team.</li>
                <li><strong>Contribution:</strong> By participating, you are making an invaluable contribution to medical science and helping future generations.</li>
            </ol>
            <p><strong>Your safety is the highest priority at every stage.</strong></p>
        </div>
      </div>
      
      <div className="text-center border-t pt-12 mt-12">
        <h2 className="text-4xl font-semibold tracking-tight mb-6">Learn About Different Types of Research</h2>
        <p className="text-xl text-black mb-10 max-w-3xl mx-auto">
          Not all clinical trials are the same. Explore the major categories of research being done to better understand and treat vascular cognitive conditions.
        </p>
        <Link 
          href="/research/areas-of-study"
          className="btn-secondary inline-block px-12 py-4 rounded-full text-xl font-semibold focus:outline focus:outline-4 focus:outline-white"
        >
          Explore Areas of Study
        </Link>
      </div>

      <div className="text-center border-t pt-12 mt-12">
        <h2 className="text-4xl font-semibold tracking-tight mb-6">Is a Clinical Trial Right for You?</h2>
        <p className="text-xl text-black mb-10 max-w-3xl mx-auto">
          If you're ready, the first step is a short, anonymous pre-screener to see if you may be a preliminary fit for any current or future studies.
        </p>
        
        <Link 
          href="/clinical-trials/pre-screener"
          className="btn-green inline-block px-12 py-4 rounded-full text-xl font-semibold focus:outline focus:outline-4 focus:outline-white"
        >
          Start the Pre-Screener
        </Link>
        <p className="text-sm mt-4 text-black">This is not a substitute for medical advice. Always consult with your doctor.</p>
      </div>
    </main>
  );
}

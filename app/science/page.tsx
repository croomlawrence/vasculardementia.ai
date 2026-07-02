import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Science Behind VascuMind',
  description: 'Learn about the trusted, clinically-validated tools that power the VascuMind protocol.',
};

export default function SciencePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-semibold tracking-tight mb-6">Confidence in Your Results.</h1>
	  <p className="text-xl text-gray-700 mb-12">We use trusted, clinically-validated tools so you can feel confident in the information you receive and the conversations you have with your doctor.</p>

      <div className="prose prose-xl space-y-12">
        <div id="mci-screen">
          <h2 className="text-3xl font-semibold">The MCI Screen®: A Trusted Cognitive Snapshot</h2>
          <p>The heart of our assessment is the MCI Screen, a tool used by doctors and researchers for over a decade to detect early cognitive changes.</p>
          <ul>
            <li><strong>Backed by Research:</strong> The MCI Screen's accuracy is supported by multiple studies published in peer-reviewed medical journals.</li>
            <li><strong>Objective and Reliable:</strong> This isn't a subjective web quiz. It is a structured test administered by a live, trained proctor to ensure your results are accurate and repeatable.</li>
          </ul>
		  <Link href="#" className="text-blue-600 hover:underline">See the Published Research</Link>
        </div>

        <div id="hachinski">
          <h2 className="text-3xl font-semibold">The Vascular Pattern Quiz</h2>
          <p>Our free quiz is a patient-friendly version of a questionnaire that neurologists have used for decades to understand the potential role of vascular factors in cognitive symptoms. It's a simple, powerful way to help organize your health story.</p>
        </div>
		
		<div id="wellness">
          <h2 className="text-3xl font-semibold">Our Wellness Philosophy</h2>
          <p>We believe in a "whole body" approach to health. Any optional supplements we suggest are intended to support your body's natural circulatory and cognitive systems. We partner with best-in-class providers like Swanson® to ensure quality and transparency.</p>
		  <p className="text-sm text-gray-500">*These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease.</p>
        </div>

      </div>
    </main>
  );
}

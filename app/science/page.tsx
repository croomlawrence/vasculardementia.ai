import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Science Behind VascuMind',
  description: 'Learn about the trusted, clinically-validated tools that power the VascuMind protocol.',
};

export default function SciencePage() {
  return (
    <main className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 gradient-text">Confidence in Your Results.</h1>
        <p className="text-xl text-foreground-secondary mb-12">We use trusted, clinically-validated tools so you can feel confident in the information you receive and the conversations you have with your doctor.</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div id="mci-screen" className="card">
          <h2 className="text-3xl font-bold mb-4">The MCI Screen®: A Trusted Cognitive Snapshot</h2>
          <p className="text-foreground-secondary">The heart of our assessment is the MCI Screen, a tool used by doctors and researchers for over a decade to detect early cognitive changes.</p>
          <ul className="list-disc pl-6 space-y-2 my-6 text-foreground-secondary">
            <li><strong className="text-foreground-primary">Backed by Research:</strong> The MCI Screen's accuracy is supported by multiple studies published in peer-reviewed medical journals.</li>
            <li><strong className="text-foreground-primary">Objective and Reliable:</strong> This isn't a subjective web quiz. It is a structured test administered by a live, trained proctor to ensure your results are accurate and repeatable.</li>
          </ul>
		  <Link href="#" className="font-semibold text-accent-blue hover:underline">See the Published Research →</Link>
        </div>

        <div id="hachinski" className="card">
          <h2 className="text-3xl font-bold mb-4">The Vascular Pattern Quiz</h2>
          <p className="text-foreground-secondary">Our free quiz is a patient-friendly version of a questionnaire that neurologists have used for decades to understand the potential role of vascular factors in cognitive symptoms. It's a simple, powerful way to help organize your health story before your next doctor's visit.</p>
        </div>
		
		<div id="wellness" className="card">
          <h2 className="text-3xl font-bold mb-4">Our Wellness Philosophy</h2>
          <p className="text-foreground-secondary">We believe in a "whole body" approach to health. Any optional supplements we suggest are intended to support your body's natural circulatory and cognitive systems. We partner with best-in-class providers like Swanson® to ensure quality and transparency.</p>
		  <p className="text-sm text-foreground-secondary mt-4">*These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease.</p>
        </div>
      </div>
    </main>
  );
}

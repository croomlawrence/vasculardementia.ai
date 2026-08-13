import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Science Behind VascuMind',
  description: 'Learn about the educational screening, cognitive benchmarking, and clinician-discussion tools behind the VascuMind protocol.',
};

export default function SciencePage() {
  return (
    <main className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 gradient-text">Confidence in Your Results.</h1>
        <p className="text-xl text-black mb-12">We use structured educational tools so families can organize observations, create a cognitive baseline, and have better conversations with qualified clinicians.</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div id="mci-screen" className="card">
          <h2 className="text-3xl font-bold mb-4">The MCI Screen®: A Trusted Cognitive Snapshot</h2>
          <p className="text-black">The MCI Screen is used by VascuMind as a structured cognitive screening, benchmarking, and tracking tool to support clinician discussion. It is not a diagnosis or a substitute for clinical evaluation.</p>
          <ul className="list-disc pl-6 space-y-2 my-6 text-black">
            <li><strong className="text-black">Published-validation context:</strong> MCI Screen materials describe published validation for detecting memory changes versus normal aging. Ask for source documentation and discuss results with a qualified healthcare professional.</li>
            <li><strong className="text-black">Structured baseline:</strong> The screen is administered by a trained proctor to create a repeatable cognitive benchmark for discussion and tracking.</li>
          </ul>

		  <Link href="/memory-screen" className="font-semibold text-black underline">Learn about the MCI Screen pathway →</Link>
        </div>

        <div id="hachinski" className="card">
          <h2 className="text-3xl font-bold mb-4">The Vascular Pattern Quiz</h2>
          <p className="text-black">Our free pattern check adapts Hachinski-style vascular questions into patient-friendly language. It helps organize your health story before a clinician visit; it does not diagnose vascular dementia, Alzheimer’s disease, MCI, stroke, or any disease.</p>
        </div>
		
		<div id="wellness" className="card">
          <h2 className="text-3xl font-bold mb-4">Our Wellness Philosophy</h2>
          <p className="text-black">Optional wellness resources are presented only as general structure/function education. They should be discussed with a qualified healthcare professional, especially if you take medications or have a medical condition.</p>
		  <p className="text-sm text-black mt-4">These products are dietary supplements and are not intended to diagnose, treat, cure, or prevent vascular dementia, Alzheimer’s disease, MCI, stroke, or any other disease. Always consult your healthcare professional before use.</p>
        </div>
      </div>
    </main>
  );
}

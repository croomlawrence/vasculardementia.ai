import type { Metadata } from 'next';
import Link from 'next/link';
import EmailCapture from '@/components/EmailCapture';

export const metadata: Metadata = {
  title: "A Patient's Guide to the Hachinski Score | VascuMind",
  description: "Understand what the Hachinski Score is, the questions it asks, and how it helps doctors assess the role of vascular factors in cognitive health.",
};

export default function HachinskiGuidePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <div className="prose prose-xl mx-auto">
        <h1>A Patient's Guide to the Hachinski Score</h1>
        
        <p>If you or a loved one are exploring the causes of memory changes, your doctor might mention the "Hachinski Score" or "Hachinski Ischemic Index." It sounds technical, but it's a simple and powerful tool that has helped clinicians for decades.</p>
        
        <p>This guide will break down what it is, why it's important, and how it helps you and your doctor have a more productive conversation.</p>

        <h2>What is the Hachinski Score?</h2>
        <p>The Hachinski Score is a short questionnaire designed to help doctors understand the likelihood that vascular (blood vessel) problems are contributing to cognitive symptoms.</p>
        <p>It is not a diagnosis, but a way to "point the flashlight" toward questions to discuss with a clinician. A higher pattern may suggest that vascular issues, stroke/TIA history, or reduced blood flow deserve clinical attention.</p>

        <h2>What Kind of Questions Does It Ask?</h2>
        <p>The questionnaire focuses on the <em>nature</em> of the symptoms. Here are the kinds of things it covers, rephrased in simple terms:</p>
        <ul>
          <li><strong>How did the changes start?</strong> Was it very sudden, or was it a gradual decline over many years?</li>
          <li><strong>How has it progressed?</strong> Have things gotten worse in clear "steps," or has it been a slow and steady progression?</li>
          <li><strong>Are there other health issues?</strong> It looks for a history of things like high blood pressure, strokes, or circulation problems elsewhere in the body.</li>
          <li><strong>What are the physical symptoms?</strong> It checks for things like issues with speech, a history of falls, or notable emotional changes.</li>
        </ul>
        <p>Each "yes" to a question adds points to the total score. A higher score suggests that vascular issues are more likely to be a significant factor.</p>

        <h2>Why It Matters: The Vascular Connection</h2>
        <p>Understanding whether vascular factors may be involved can change what you discuss with your clinician. Blood pressure, diabetes, cholesterol, smoking, sleep, medications, stroke/TIA history, and cardiovascular health may all be relevant to cognitive wellness.</p>
        <p><strong>Learn more about the <Link href="/resources/heart-brain-connection">Heart-Brain Connection</Link>.</strong></p>

        <h2>How VascuMind Uses This Approach</h2>
        <p>Our free <strong>Vascular Pattern Quiz</strong> is a patient-friendly version of the Hachinski questionnaire.</p>
        <p>We designed it to be a safe, private, and stress-free first step. It allows you to organize your experiences and symptoms from the comfort of your home. You'll receive a personalized report that can help you prepare for your next doctor's appointment.</p>

        <h2>Take the First Step</h2>
        <p>Ready to understand your pattern? The quiz is free, takes about 5 minutes, and is completely private.</p>
        <div className="mt-8">
          <Link href="/hachinski" className="btn-green inline-block px-8 py-3 rounded-full text-lg font-semibold">
            Take the Free Vascular Pattern Quiz
          </Link>
        </div>

        <EmailCapture />
        
      </div>
    </main>
  );
}

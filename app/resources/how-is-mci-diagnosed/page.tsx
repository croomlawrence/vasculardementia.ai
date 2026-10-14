import type { Metadata } from 'next';
import Link from 'next/link';
import EmailCapture from '@/components/EmailCapture';

export const metadata: Metadata = {
  title: "How Doctors Look at MCI | VascuMind",
  description: "Learn how clinicians evaluate Mild Cognitive Impairment (MCI), from clinical interviews to structured cognitive screening tools like the MCI Screen.",
};

export default function HowMciIsDiagnosedPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <div className="prose prose-xl mx-auto">
        <h1>How Do Doctors Look at Mild Cognitive Impairment (MCI)?</h1>
        
        <p>If you're concerned about changes in your memory or thinking, you might be wondering: "How do doctors actually figure out what's going on?" Looking at MCI involves several steps, moving from a general conversation to a memory screen.</p>

        <h2>The First Step: The Clinical Interview</h2>
        <p>Your journey will start with a detailed conversation with your doctor. They will want to know about:</p>
        <ul>
          <li><strong>Your specific symptoms:</strong> What changes have you noticed? When did they start? How often do they happen?</li>
          <li><strong>Your medical history:</strong> This includes conditions like high blood pressure, diabetes, and any history of stroke.</li>
          <li><strong>Your family history:</strong> Is there a history of dementia or MCI in your family?</li>
          <li><strong>Medications:</strong> A full review of everything you are taking, including supplements.</li>
        </ul>
        <p>Your doctor's goal is to build a complete picture of your health and symptoms.</p>

        <h2>The Problem with Traditional, In-Office Screening Tools</h2>
        <p>For many years, the standard in-office cognitive test has been the Mini-Mental State Exam (MMSE). While it is a useful tool, it has a significant limitation: **it was primarily designed to detect dementia, not the much earlier stage of MCI.**</p>
        <p>This means some people with early memory changes can still pass the MMSE. A memory screen can give you and your doctor more to talk about.</p>

        <h2>The Modern Solution: Structured MCI Screening</h2>
        <p>To support earlier conversations, newer structured tools were developed. VascuMind references the <strong>MCI Screen</strong> as a cognitive screening, benchmarking, and tracking tool for clinician discussion.</p>
        
        <p>Here’s why it’s different:</p>
        <ul>
            <li><strong>Made for earlier changes:</strong> The MCI Screen is a structured memory screen for earlier memory changes. It is not a diagnosis.</li>
            <li><strong>Published-validation context:</strong> MCI Screen materials describe published validation for detecting memory changes versus normal aging. Ask for source documentation and discuss results with a qualified clinician.</li>
            <li><strong>Objective & Standardized:</strong> The test is administered over the phone by a trained proctor to create a structured cognitive benchmark. It is not a diagnosis or a substitute for clinical evaluation.</li>
        </ul>

        <h2>Your Baseline is Your Power</h2>
        <p>Learning you have MCI can be a starting point for clearer clinician conversations. A memory screen may help you and your doctor track change over time and decide what evaluation or support is appropriate.</p>
        <p><strong><Link href="/resources/mci-vs-normal-aging">Learn more about the difference between MCI and normal aging</Link>.</strong></p>

        <EmailCapture />

      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import EmailCapture from '@/components/EmailCapture';

export const metadata: Metadata = {
  title: "How is MCI Diagnosed? A Guide to Cognitive Testing | VascuMind",
  description: "Learn about the process of diagnosing Mild Cognitive Impairment (MCI), from clinical interviews to objective tests like the MCI Screen.",
};

export default function HowMciIsDiagnosedPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <div className="prose prose-xl mx-auto">
        <h1>How is Mild Cognitive Impairment (MCI) Diagnosed?</h1>
        
        <p>If you're concerned about changes in your memory or thinking, you might be wondering: "How do doctors actually figure out what's going on?" The process of diagnosing MCI involves several steps, moving from a general conversation to objective testing.</p>

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
        <p>This means many people in the early stages of cognitive decline can "pass" the MMSE, leaving both the patient and doctor with a false sense of security while the window for early, effective intervention closes.</p>

        <h2>The Modern Solution: High-Accuracy MCI Screening</h2>
        <p>To solve this problem, a new generation of highly sensitive tools was developed. The most accurate of these is the **MCI Screen**.</p>
        
        <p>Here’s why it’s different:</p>
        <ul>
            <li><strong>Purpose-Built for MCI:</strong> The MCI Screen was scientifically designed and validated specifically to detect the subtle changes of Mild Cognitive Impairment.</li>
            <li><strong>Superior Accuracy:</strong> With a published accuracy of 97.3%, it is the most reliable tool available to determine if your memory is normal for your age.</li>
            <li><strong>Objective & Standardized:</strong> The test is administered over the phone by a trained proctor, ensuring every test is performed under the same controlled conditions. This removes the variability of a busy doctor's office and provides a score you can trust.</li>
        </ul>

        <h2>Your Baseline is Your Power</h2>
        <p>A diagnosis of MCI isn't just a label; it's a starting point. By getting a reliable, objective baseline of your cognitive health with a tool like the MCI Screen, you empower yourself and your doctor with the data needed to make informed decisions, track your progress, and take proactive control of your cognitive journey.</p>
        <p><strong><Link href="/resources/mci-vs-normal-aging">Learn more about the difference between MCI and normal aging</Link>.</strong></p>

        <EmailCapture />

      </div>
    </main>
  );
}

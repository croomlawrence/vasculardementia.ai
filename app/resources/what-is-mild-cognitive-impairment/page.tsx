import type { Metadata } from 'next';
import Link from 'next/link';
import EmailCapture from '@/components/EmailCapture';

export const metadata: Metadata = {
  title: "What is Mild Cognitive Impairment (MCI)? | VascuMind",
  description: "A complete patient's guide to understanding Mild Cognitive Impairment (MCI), its symptoms, causes, and the importance of early, accurate detection.",
};

export default function MciPillarPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <div className="prose prose-xl mx-auto">
        <h1>What is Mild Cognitive Impairment (MCI)? A Complete Patient's Guide</h1>
        
        <p className="text-xl">You've noticed some changes. Maybe you're forgetting appointments more often, or struggling to find the right words in conversations. You're wondering if it's just a normal part of getting older, or if it could be something more. This is where understanding Mild Cognitive Impairment (MCI) becomes crucial.</p>
        
        <p>MCI is the stage between the expected cognitive decline of normal aging and the more serious decline of dementia. It's a critical early warning sign, and identifying it provides a powerful opportunity to take proactive steps for your brain health.</p>

        <h2>What Are the Symptoms of MCI?</h2>
        <p>A person with MCI is still able to function independently, but they and their family members can notice a clear "slip" in their mental sharpness. Symptoms can include:</p>
        <ul>
          <li>Forgetting important information that you would previously have recalled easily.</li>
          <li>Losing your train of thought or the thread of conversations.</li>
          <li>Feeling increasingly overwhelmed by making decisions or planning steps to accomplish a task.</li>
          <li>Taking longer to find your way around familiar environments.</li>
        </ul>
        <p>The key is that these are not just occasional lapses. They are a consistent change from your previous abilities. <strong><Link href="/resources/mci-vs-normal-aging">Learn more about how MCI differs from normal aging</Link>.</strong></p>

        <h2>How is MCI Diagnosed? The Importance of Accuracy</h2>
        <p>Diagnosing MCI is a process. It starts with a conversation with your doctor about your symptoms and medical history. However, to get a clear picture, an objective cognitive test is needed.</p>
        <p>The problem is that many traditional tests are not sensitive enough to detect the subtle changes of MCI. A modern, highly accurate tool is needed. The **MCI Screen** was purpose-built for this task, with a 97.3% accuracy rate in detecting MCI, making it the most reliable tool to determine if your memory is normal for your age.</p>
        <p><strong><Link href="/resources/how-is-mci-diagnosed">Read our full guide on how MCI is diagnosed</Link>.</strong></p>

        <h2>What Causes MCI?</h2>
        <p>MCI can have many different root causes. Sometimes, it can be the earliest stage of Alzheimer's disease. In other cases, it can be caused by vascular issues—problems with blood flow to the brain.</p>
        <p>Importantly, some causes of MCI are reversible. These can include:</p>
        <ul>
            <li>Vitamin deficiencies</li>
            <li>Thyroid problems</li>
            <li>Sleep disorders like sleep apnea</li>
            <li>Side effects from medications</li>
        </ul>
        <p>This is why a timely and accurate diagnosis is so important: it gives you and your doctor the chance to investigate and potentially treat an underlying issue.</p>
        
        <h2>You've Received an MCI Diagnosis. What Now?</h2>
        <p>Receiving an MCI diagnosis is not a passive event; it is the starting line for taking proactive control of your cognitive health. It's a call to action.</p>
        <p>Your journey should include getting a reliable baseline to track your progress, working with your doctor to investigate reversible causes, and implementing powerful lifestyle changes related to diet, exercise, and sleep.</p>
        <p><strong><Link href="/resources/what-to-do-after-mci-diagnosis">Read our 5-Step Plan for What to Do After an MCI Diagnosis</Link>.</strong></p>

        <EmailCapture />

      </div>
    </main>
  );
}

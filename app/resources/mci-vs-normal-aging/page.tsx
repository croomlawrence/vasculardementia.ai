import type { Metadata } from 'next';
import Link from 'next/link';
import EmailCapture from '@/components/EmailCapture';

export const metadata: Metadata = {
  title: "MCI vs. Normal Aging: How to Tell the Difference | VascuMind",
  description: "Understand the key differences between Mild Cognitive Impairment (MCI) and the normal memory lapses that come with age.",
};

export default function MciVsAgingPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <div className="prose prose-xl mx-auto">
        <h1>MCI vs. Normal Aging: How to Tell the Difference</h1>
        
        <p>Forgetting where you put your keys. Walking into a room and not knowing why you're there. Struggling for a name that's on the tip of your tongue. Are these just "senior moments," or could they be a sign of something more?</p>
        
        <p>This is one of the most common questions people ask as they get older. Let's break down the difference between normal, age-related memory changes and a condition called Mild Cognitive Impairment (MCI).</p>

        <h2>What is Normal Age-Related Memory Change?</h2>
        <p>As we age, our brains change. It can take longer to learn new things or recall information. This is perfectly normal. Key characteristics of normal age-related memory changes include:</p>
        <ul>
          <li>You are still able to function independently and perform daily activities without difficulty.</li>
          <li>You might occasionally forget a name or an appointment but remember it later.</li>
          <li>You may make a bad decision once in a while.</li>
          <li>Forgetting which word to use, but not having trouble holding a conversation.</li>
          <li>You and your family have some concerns, but they are mild.</li>
        </ul>
        <p>In short, while you may have occasional lapses, your memory issues don't significantly disrupt your work, social life, or ability to live independently.</p>

        <h2>What is Mild Cognitive Impairment (MCI)?</h2>
        <p>Mild Cognitive Impairment (MCI) is a step beyond normal aging. It's an early stage of memory and thinking problems that are noticeable to the individual and those around them, but are not severe enough to be classified as dementia.</p>
        <p>Key signs of MCI may include:</p>
        <ul>
          <li><strong>More frequent memory loss:</strong> Forgetting important events, recent conversations, or relying heavily on notes.</li>
          <li><strong>Impaired judgment:</strong> Consistently making poor financial decisions or having trouble planning multi-step tasks.</li>
          <li><strong>Language difficulties:</strong> Frequently struggling to find the right words, to the point it disrupts conversations.</li>
          <li><strong>Getting lost:</strong> Feeling disoriented or getting lost in familiar places.</li>
          <li><strong>Your family is worried:</strong> Your loved ones have noticed a consistent pattern of change.</li>
        </ul>
        <p>The most important distinction is that with MCI, the cognitive changes are a new and persistent problem, representing a decline from your previous level of ability.</p>

        <h2>Why Early Clinician Discussion Matters</h2>
        <p>Most traditional cognitive tests, like the MMSE, were designed to detect full-blown dementia. By that point, the window for many of the most effective interventions has passed.</p>
        <p>Discussing possible MCI early gives you time to work with your doctor to look for contributors such as vitamin deficiencies, medication side effects, sleep problems, mood, vascular risk factors, or other issues that may deserve evaluation.</p>

        <h2>How to Get a Clearer Baseline</h2>
        <p>A qualified clinician can help determine what evaluation is appropriate. VascuMind presents the <strong>MCI Screen</strong> as a structured cognitive screening, benchmarking, and tracking tool to support that conversation. It is not a diagnosis or a substitute for clinical evaluation.</p>
        <p><strong><Link href="/resources/how-is-mci-diagnosed">Learn more about how MCI is diagnosed</Link>.</strong></p>

        <EmailCapture />

      </div>
    </main>
  );
}

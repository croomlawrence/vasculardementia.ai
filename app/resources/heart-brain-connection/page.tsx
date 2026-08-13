import type { Metadata } from 'next';
import Link from 'next/link';
import EmailCapture from '@/components/EmailCapture';

export const metadata: Metadata = {
  title: "The Heart-Brain Connection | VascuMind",
  description: "Learn how your circulatory health directly impacts your cognitive function, memory, and focus.",
};

export default function HeartBrainConnectionPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <div className="prose prose-xl mx-auto">
        <h1>The Heart-Brain Connection: How Your Circulation Affects Your Mind</h1>
        
        <p>We often think of our heart and brain as two separate systems. One is about emotion and biology; the other is about logic and thought. But the truth is, they are deeply and powerfully connected. The health of your heart and blood vessels directly impacts how well your brain can perform.</p>
        
        <p>This is what we call the <strong>Heart-Brain Connection</strong>.</p>

        <h2>Your Brain's Superhighway</h2>
        <p>Think of your brain as a bustling city. It needs a constant, massive supply of energy, oxygen, and nutrients to manage everything from your thoughts and memories to your breathing and balance. This critical supply is delivered by a complex network of blood vessels—a superhighway that your heart tirelessly maintains.</p>
        
        <p>While your brain is only about 2% of your body weight, it demands a staggering 20% of your body's total blood and oxygen supply. When this superhighway is clear and running smoothly, your brain has everything it needs to function at its peak.</p>

        <h2>What Happens When There are Traffic Jams?</h2>
        <p>Just like a real highway, this network can develop problems. Factors like high blood pressure, high cholesterol, diabetes, and smoking can damage the delicate lining of these blood vessels, making them stiff and narrow. This creates "traffic jams," reducing the flow of blood to vital areas of the brain.</p>

        <p>When brain cells are starved of oxygen and nutrients, they can't function properly. This can manifest in several ways:</p>
        <ul>
          <li><strong>"Brain fog"</strong> or difficulty concentrating.</li>
          <li><strong>Memory lapses,</strong> especially with short-term memory.</li>
          <li><strong>Slower thinking</strong> or trouble finding the right words.</li>
          <li>In more severe cases, it can lead to a "step-wise" decline in function, often associated with a series of small, silent strokes.</li>
        </ul>

        <h2>You Have More Influence Than You Think</h2>
        <p>The good news is that you have the power to support this connection. By focusing on your cardiovascular health, you are also investing directly in your long-term cognitive wellness.</p>
        <p>Things that are good for your heart are fantastic for your brain. This includes a healthy diet, regular exercise, and managing your blood pressure and cholesterol. <strong>Learn about <Link href="/resources/improve-brain-circulation">5 Lifestyle Changes to Support Healthy Brain Circulation</Link>.</strong></p>

        <h2>Where Do You Start?</h2>
        <p>Understanding the health of your vascular system is the first step. Tools like the Hachinski Score can help you and your doctor assess the potential role of vascular factors in your cognitive symptoms.</p>
        <p><strong>Learn more in our <Link href="/resources/guide-to-hachinski-score">Patient's Guide to the Hachinski Score</Link>.</strong></p>
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

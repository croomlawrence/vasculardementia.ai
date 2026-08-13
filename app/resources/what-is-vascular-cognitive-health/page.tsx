import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "What is Vascular Cognitive Health? A Complete Guide | VascuMind",
  description: "A comprehensive guide to understanding vascular cognitive health, its importance, risk factors, and how you can support it.",
};

export default function VCHGuidePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <div className="prose prose-xl mx-auto">
        <h1>What is Vascular Cognitive Health? A Complete Guide</h1>
        
        <p className="text-xl">Your brain's health and your circulatory system's health are not separate—they are deeply intertwined. **Vascular Cognitive Health** is a term that describes this vital relationship. It's the idea that a healthy brain needs healthy blood flow, and a disruption in that flow can impact how you think, feel, and remember.</p>
        
        <p>This guide will walk you through everything you need to know about this critical aspect of your well-being.</p>

        <h2>The Core Principle: The Heart-Brain Connection</h2>
        <p>Your brain is a powerhouse. While it makes up only a small fraction of your body weight, it consumes about 20% of your body's oxygen and energy. This fuel is delivered through a massive network of blood vessels.</p>
        <p>A healthy vascular system means a clear, efficient delivery route for your brain. When this system is compromised, it can lead to a range of cognitive issues. This is the essence of the **<Link href="/resources/heart-brain-connection">heart-brain connection</Link>**. </p>
        
        <h2>What Does "Vascular Cognitive Impairment" Mean?</h2>
        <p>Vascular Cognitive Impairment (VCI) is a broad term for changes in a person's thinking and memory that are caused by problems with blood flow to the brain. It's not a single disease, but a spectrum that can range from mild "brain fog" to more severe dementia.</p>
        <p>Unlike the gradual decline often associated with Alzheimer's, VCI can sometimes appear more suddenly or progress in noticeable "steps," often following a stroke or a series of smaller, "silent" strokes.</p>

        <h2>Key Risk Factors for Poor Vascular Health</h2>
        <p>Several common health conditions can damage your blood vessels and increase the risk of VCI. These include:</p>
        <ul>
          <li><strong>High Blood Pressure (Hypertension):</strong> Puts extra strain on blood vessel walls throughout the body, including the brain.</li>
          <li><strong>High Cholesterol:</strong> Can lead to the buildup of plaque, narrowing arteries and restricting blood flow.</li>
          <li><strong>Diabetes:</strong> High blood sugar can damage small blood vessels, making them less flexible and efficient.</li>
          <li><strong>Smoking:</strong> Directly damages blood vessels and increases the risk of stroke.</li>
          <li><strong>Atrial Fibrillation (AFib):</strong> An irregular heartbeat that can increase the risk of blood clots traveling to the brain.</li>
        </ul>
        
        <h2>How Do Doctors Assess Vascular Factors?</h2>
        <p>When a doctor is evaluating cognitive changes, one of the key questions is, "What role is the vascular system playing?" They use several tools to investigate this:</p>
        <ul>
            <li><strong>Medical History:</strong> A thorough review of your health history, especially the risk factors listed above.</li>
            <li><strong>Brain Imaging:</strong> MRIs or CT scans can reveal evidence of past strokes or damage to the brain's white matter.</li>
            <li><strong>Questionnaires:</strong> Tools like the Hachinski Score help organize symptoms to see if they fit a vascular pattern. <strong><Link href="/resources/guide-to-hachinski-score">Learn more about the Hachinski Score in our guide</Link>.</strong></li>
        </ul>

        <h2>You Can Take Action to Support Your Cognitive Health</h2>
        <p>One of the most hopeful aspects of vascular cognitive health is that it's often something you can influence. The same choices that protect your heart also protect your brain.</p>
        <p>Focusing on a healthy lifestyle can have a profound impact. A heart-healthy diet, regular physical activity, and good quality sleep are all powerful strategies. <strong><Link href="/resources/improve-brain-circulation">Discover 5 lifestyle changes</Link></strong> you can start making today.</p>

        <h2>Your First Step to Clarity</h2>
        <p>Understanding your personal risk factors and symptom patterns is the first step. Our free, confidential Vascular Pattern Quiz is designed to help you organize this information, providing a clear starting point for a more informed conversation with your doctor.</p>
        <div className="mt-8">
          <Link href="/hachinski" className="btn-green inline-block px-8 py-3 rounded-full text-lg font-semibold">
            Take Your Free Quiz
          </Link>
        </div>
      </div>
    </main>
  );
}

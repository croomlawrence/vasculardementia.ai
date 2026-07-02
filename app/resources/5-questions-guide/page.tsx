import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Your Guide: 5 Questions for Your Doctor | VascuMind",
  description: "A guide to help you have a more productive conversation with your doctor about cognitive health and circulation.",
  robots: "noindex, nofollow", // Prevents this page from showing up in Google
};

export default function FiveQuestionsGuide() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 bg-white">
      <div className="prose prose-xl mx-auto">
        <h1 className="text-center">Your Guide is Here</h1>
        <p className="text-center text-lg">Thank you for signing up. Here are the 5 Key Questions to help you prepare for your next doctor's appointment.</p>
        
        <hr className="my-10" />

        <h2>1. The "What & When" Question: How Can I Best Describe My Symptoms?</h2>
        <p>Instead of just saying "I have brain fog," try to be more specific. Your doctor can learn a lot from the details.</p>
        <p><strong>Ask:</strong> "I've noticed some changes in my thinking. I've listed them out here. Based on this pattern, what possibilities should we be considering?"</p>
        <p><em>Jot down your examples before your appointment:</em></p>
        <ul>
          <li><strong>Type of Change:</strong> Is it trouble finding words? Forgetting recent conversations? Getting lost? Difficulty with tasks you used to do easily?</li>
          <li><strong>Timing:</strong> When did you first notice it? Was it gradual, or did it happen in sudden steps?</li>
          <li><strong>Frequency:</strong> Does it happen every day? Once a week? Is it worse at certain times of day?</li>
        </ul>

        <h2>2. The "Connection" Question: Could My Other Health Issues Be Related?</h2>
        <p>Your brain health is connected to your overall health, especially your circulation. It's important to explore this link directly.</p>
        <p><strong>Ask:</strong> "I know I have [High Blood Pressure / High Cholesterol / Diabetes / etc.]. Could this be contributing to the cognitive symptoms I'm experiencing?"</p>

        <h2>3. The "Medication" Question: Could My Prescriptions Be a Factor?</h2>
        <p>Some common medications can have cognitive side effects. It is always a good idea to review your full medication list with your doctor.</p>
        <p><strong>Ask:</strong> "Could any of the medications, supplements, or over-the-counter drugs I am currently taking be affecting my memory or concentration?"</p>
        <p><em>Bring a complete, up-to-date list of everything you take, including dosages.</em></p>

        <h2>4. The "Baseline" Question: How Can We Measure This?</h2>
        <p>Moving from a subjective feeling to an objective measurement is a critical step. It gives you and your doctor a starting point to track changes over time.</p>
        <p><strong>Ask:</strong> "I would like to get a baseline of my cognitive function. What are the options for doing this? Are there specific screening tools or tests you would recommend?"</p>

        <h2>5. The "Action" Question: What Are My Next Best Steps?</h2>
        <p>End your appointment with a clear understanding of the plan. This puts you in the driver's seat of your own health journey.</p>
        <p><strong>Ask:</strong> "Based on our conversation today, what are the one or two most important things I should be doing to support my brain health?"</p>
        <p><em>Write down the answer so you can remember it clearly.</em></p>

        <hr className="my-10" />

        <p className="text-sm text-gray-600"><em>Disclaimer: This guide is for informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare professional for any health concerns or before making any decisions related to your health or treatment.</em></p>
        <p className="text-center font-semibold">VascuMind.com</p>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import EmailCapture from '@/components/EmailCapture';

export const metadata: Metadata = {
  title: "What to Do After an MCI Diagnosis: A 5-Step Plan | VascuMind",
  description: "A diagnosis of Mild Cognitive Impairment (MCI) can be overwhelming. Here is a 5-step plan to help you take control and move forward with hope.",
};

export default function AfterMciDiagnosisPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <div className="prose prose-xl mx-auto">
        <h1>What to Do After an MCI Diagnosis: A 5-Step Plan</h1>
        
        <p>A diagnosis of Mild Cognitive Impairment (MCI) can feel unsettling and raise many questions about the future. It's normal to feel concerned, but it's important to remember that MCI is not dementia. It is an early warning sign, and receiving a diagnosis is actually a powerful opportunity to take proactive steps to protect your brain health.</p>
        
        <p>Here is a 5-step plan to help you move forward with confidence and clarity.</p>

        <h2>Step 1: Confirm and Baseline</h2>
        <p>The first step is to ensure your diagnosis is based on objective, reliable data. Many screening tools are not sensitive enough to accurately detect MCI. If your diagnosis was based on a simple in-office questionnaire, consider getting a more robust baseline.</p>
        <p>The **MCI Screen**, with its 97% accuracy rate, provides a trusted, objective benchmark of your cognitive function. This gives you a clear and reliable starting point to track any changes—either positive or negative—over time.</p>
        <p><strong><Link href="/resources/how-is-mci-diagnosed">Learn more about the different types of cognitive tests available</Link>.</strong></p>

        <h2>Step 2: Investigate Reversible Causes</h2>
        <p>Not all cognitive decline is set in stone. In some cases, MCI symptoms can be caused or worsened by treatable underlying conditions. Work with your doctor to investigate:</p>
        <ul>
          <li><strong>Vitamin Deficiencies:</strong> Especially Vitamin B12.</li>
          <li><strong>Thyroid Issues:</strong> An underactive or overactive thyroid can impact cognition.</li>
          <li><strong>Sleep Apnea:</strong> Poor sleep quality starves the brain of oxygen.</li>
          <li><strong>Medication Side Effects:</strong> Review all your current prescriptions and supplements with your doctor.</li>
        </ul>

        <h2>Step 3: Focus on Lifestyle Medicine</h2>
        <p>What is good for your heart is good for your brain. This is the most empowering part of your new plan. Lifestyle changes have been proven to have a significant impact on cognitive health and can slow the progression of MCI.</p>
        <p>Focus on the "big five":</p>
        <ol>
            <li><strong>Regular Exercise:</strong> Aim for 150 minutes of moderate activity per week, like brisk walking.</li>
            <li><strong>A Brain-Healthy Diet:</strong> Think Mediterranean: lots of fruits, vegetables, fish, and healthy fats.</li>
            <li><strong>Quality Sleep:</strong> Make 7-9 hours of restful sleep a priority.</li>
            <li><strong>Stress Management:</strong> Chronic stress can harm the brain. Explore practices like meditation or yoga.</li>
            <li><strong>Social Engagement:</strong> Staying connected with friends, family, and community is a powerful brain booster.</li>
        </ol>

        <h2>Step 4: Build Your Care Team</h2>
        <p>You don't have to do this alone. Assemble a team that can support you. This may include:</p>
        <ul>
            <li>Your primary care physician.</li>
            <li>A neurologist or geriatrician.</li>
            <li>A nutritionist or dietitian.</li>
            <li>Family members and trusted friends who can provide support.</li>
            <li>A health coach to help you implement your lifestyle plan.</li>
        </ul>

        <h2>Step 5: Track Your Progress</h2>
        <p>Once you have your trusted baseline from a tool like the MCI Screen and have started your lifestyle plan, it's crucial to track your progress. Regular, objective cognitive assessments can show you how your efforts are paying off and can help you and your doctor make informed decisions about your care plan. This transforms anxiety about the future into empowerment in the present.</p>

        <EmailCapture />

      </div>
    </main>
  );
}

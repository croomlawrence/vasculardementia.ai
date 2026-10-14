import type { Metadata } from 'next';
import Link from 'next/link';
import EmailCapture from '@/components/EmailCapture';

export const metadata: Metadata = {
  title: "What to Do After You Learn You Have MCI: A 5-Step Plan | VascuMind",
  description: "Learning you have Mild Cognitive Impairment (MCI) can feel like a lot. Here is a 5-step plan for what to do next.",
};

export default function AfterMciDiagnosisPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <div className="prose prose-xl mx-auto">
        <h1>What to Do After You Learn You Have MCI: A 5-Step Plan</h1>
        
        <p>Learning you have Mild Cognitive Impairment (MCI) can feel unsettling and raise many questions about the future. It's normal to feel concerned. MCI is not dementia. It can be an early warning sign, and a time to take practical steps for your brain health with your doctor.</p>
        
        <p>Here is a 5-step plan to help you move forward with confidence and clarity.</p>

        <h2>Step 1: Confirm and Baseline</h2>
        <p>The first step is to understand what evaluation was used and whether you have a clear baseline for future comparison. If the first check was a brief in-office questionnaire, ask your clinician whether a memory screen would be useful.</p>
        <p>The <strong>MCI Screen</strong> is presented by VascuMind as a cognitive screening, benchmarking, and tracking tool. It can support clinician discussion and repeat tracking, but it is not a standalone diagnosis or substitute for clinical evaluation.</p>
        <p><strong><Link href="/resources/how-is-mci-diagnosed">Learn more about the different types of cognitive tests available</Link>.</strong></p>

        <h2>Step 2: Look at other causes</h2>
        <p>Some memory changes have other causes a doctor may be able to address. Work with your doctor to look at:</p>
        <ul>
          <li><strong>Vitamin Deficiencies:</strong> Especially Vitamin B12.</li>
          <li><strong>Thyroid Issues:</strong> An underactive or overactive thyroid can impact cognition.</li>
          <li><strong>Sleep Apnea:</strong> Poor sleep quality starves the brain of oxygen.</li>
          <li><strong>Medication Side Effects:</strong> Review all your current prescriptions and supplements with your doctor.</li>
        </ul>

        <h2>Step 3: Focus on Lifestyle Medicine</h2>
        <p>What is good for your heart is often relevant to brain health. Work with your clinician on lifestyle factors that may support vascular and cognitive wellness.</p>
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
        <p>Once you have a structured baseline from a tool like the MCI Screen and have discussed next steps with your clinician, repeat tracking can help organize future conversations and support informed decisions.</p>

        <EmailCapture />

      </div>
    </main>
  );
}

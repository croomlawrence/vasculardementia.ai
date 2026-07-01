import Link from 'next/link';

export default function VascularDementiaResearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/" className="text-black hover:underline">← Back to Vascumind</Link>
      </div>

      <h1 className="text-5xl font-semibold tracking-tight mb-4">Emerging Vascular Cognitive Research Is Recruiting Now — See If You Qualify</h1>
      
      <div className="green-divider w-24 mb-8"></div>

      <p className="text-xl text-black mb-12">A patient-friendly guide to the history and current landscape of clinical trials</p>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">How It Works</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-black rounded-3xl p-10 green-card">
            <div className="text-sm font-medium tracking-widest text-black mb-3">STEP 1 — UNDERSTAND</div>
            <h3 className="text-3xl font-semibold mb-4">Learn how vascular health affects your brain</h3>
            <p className="text-lg text-black">Educational articles and doctor-reviewed explainers on how blood flow, small vessel disease, and cardiovascular issues contribute to memory loss and cognitive decline.</p>
          </div>
          <div className="border border-black rounded-3xl p-10 green-card">
            <div className="text-sm font-medium tracking-widest text-black mb-3">STEP 2 — TRACK</div>
            <h3 className="text-3xl font-semibold mb-4">Identify and monitor your risk factors</h3>
            <p className="text-lg text-black">Simple self-assessment tools, checklists, and trackers to understand your personal vascular and cognitive risk profile over time.</p>
          </div>
          <div className="border border-black rounded-3xl p-10 green-card">
            <div className="text-sm font-medium tracking-widest text-black mb-3">STEP 3 — ACT</div>
            <h3 className="text-3xl font-semibold mb-4">Access evidence-based solutions</h3>
            <p className="text-lg text-black">Curated supplements, lifestyle strategies, and information on emerging therapies and clinical trials focused on vascular cognitive impairment.</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <a href="/memory-screen" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
          Start Memory Screen
        </a>
      </div>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none mb-12">
        <p>
          Over the past 30 years, researchers around the world have conducted hundreds of clinical studies focused on vascular cognitive impairment and related syndromes. These studies have helped researchers understand risk-factor management and approaches related to reduced blood flow in the brain.
        </p>
      </div>

      {/* Key Statistics */}
      <div className="bg-white border border-black rounded-3xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Research Snapshot (ClinicalTrials.gov)</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-black">450+</div>
            <div className="text-sm text-black mt-1">Total Studies</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-black">94</div>
            <div className="text-sm text-black mt-1">Currently Recruiting</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-black">197</div>
            <div className="text-sm text-black mt-1">Completed Studies</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-black">27</div>
            <div className="text-sm text-black mt-1">Phase 3 or 4 Trials</div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">A Brief History of Research</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">1990s – Early Recognition</h3>
            <p className="text-black">Researchers began distinguishing vascular-pattern cognitive impairment from non-vascular causes. Major studies such as the <strong>Systolic Hypertension in the Elderly Program (SHEP)</strong> helped clarify the relationship between blood-pressure management and cognitive outcomes.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2000s – Focus on Risk Reduction</h3>
            <p className="text-black">Large international trials such as <strong>PROGRESS</strong> (blood pressure lowering) and <strong>PRoFESS</strong> (antiplatelet therapy) confirmed that controlling vascular risk factors (blood pressure, cholesterol, diabetes, smoking) is one of the most effective ways to lower risk markers.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2010s – Lifestyle & Multi-Domain Approaches</h3>
            <p className="text-black">Landmark studies like the <strong>FINGER trial</strong> (Finland) demonstrated that combining physical activity, healthy diet, cognitive training, and vascular risk management can support cognitive trajectories — even in people at high risk.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2020s – New Targets & Precision Medicine</h3>
            <p className="text-black">Current research is exploring inflammation, small vessel disease, and new medications. There is growing interest in combining vascular protection with emerging therapies originally developed for non-vascular cognitive conditions.</p>
          </div>
        </div>
      </div>

      {/* Current Research Areas */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">What Researchers Are Studying Now</h2>
        
        <ul className="space-y-4 text-black">
          <li className="flex gap-3"><span className="text-black font-bold">•</span> <strong>Blood pressure & lifestyle interventions</strong> — Still a major area of risk-factor research.</li>
          <li className="flex gap-3"><span className="text-black font-bold">•</span> <strong>Anti-inflammatory and neuroprotective drugs</strong></li>
          <li className="flex gap-3"><span className="text-black font-bold">•</span> <strong>Exercise and cognitive training combinations</strong></li>
          <li className="flex gap-3"><span className="text-black font-bold">•</span> <strong>Advanced imaging</strong> to better understand small vessel disease</li>
          <li className="flex gap-3"><span className="text-black font-bold">•</span> <strong>Multi-domain risk-reduction trials</strong> (building on the FINGER model)</li>
        </ul>
      </div>

      {/* What This Means for Patients */}
      <div className="bg-white border border-black rounded-3xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">What This Means for You</h2>
        <p className="text-black mb-4">
          Research supports discussing modifiable vascular risk factors with a qualified healthcare professional. The strongest evidence supports:
        </p>
        <ul className="list-disc pl-6 text-black space-y-1">
          <li>Controlling blood pressure and other vascular risk factors</li>
          <li>Regular physical activity and mental stimulation</li>
          <li>Healthy diet (especially Mediterranean or MIND-style eating)</li>
          <li>Not smoking and limiting alcohol</li>
        </ul>
        <p className="mt-4 text-sm text-black">
          Many of these interventions are being tested in ongoing trials. You can find current studies at <a href="https://clinicaltrials.gov" target="_blank" className="text-black underline">ClinicalTrials.gov</a>.
        </p>
      </div>

      <div className="text-center mb-8">
        <a href="/memory-screen" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
          Start Memory Screen
        </a>
      </div>

      <div className="text-center text-sm text-black">
        ClinicalTrials.gov snapshot noted as of June 2026; counts change over time. Always discuss clinical trial participation with your physician.
      </div>
    </div>
  );
}

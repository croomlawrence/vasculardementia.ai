import Link from 'next/link';

export default function ClinicalEvidencePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/" className="text-black hover:underline">← Back to Vascumind</Link>
      </div>

      <h1 className="text-5xl font-semibold tracking-tight mb-4">Evidence Context Behind Our Wellness Recommendations</h1>
      <div className="green-divider w-20 mb-8"></div>
      
      <p className="text-xl text-black mb-12">
        We summarize research that may be relevant to vascular and cognitive wellness. This evidence does not mean any supplement diagnoses, treats, cures, or prevents disease.
      </p>

      {/* How We Select Evidence */}
      <div className="green-wash rounded-3xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-3">How We Select Evidence</h2>
        <p className="text-black">
          We prioritize large, well-designed randomized controlled trials (RCTs) and meta-analyses published in high-impact journals. 
          Recommendations should be discussed with a qualified healthcare professional, especially when medications or medical conditions are involved.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <a href="https://www.acurist.ai" target="_blank" rel="noopener noreferrer" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
          Start Memory Screen
        </a>
      </div>

      {/* Studies Section */}
      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-semibold mb-3">Omega-3 & Vascular Health</h3>
          <p className="text-black">
            Multiple large trials (REDUCE-IT, STRENGTH, VITAL) have evaluated EPA/DHA in cardiovascular and healthy-aging contexts. Effects depend on dose, population, baseline risk, and outcome measured.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">Beetroot & Nitric Oxide</h3>
          <p className="text-black">
            Research has evaluated dietary nitrates from beetroot for nitric oxide bioavailability, blood pressure, and endothelial-function markers. These are wellness-related markers, not dementia treatment claims.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">B Vitamins & Cognitive Function</h3>
          <p className="text-black">
            The VITACOG trial studied high-dose B vitamins in older adults with mild cognitive impairment and elevated homocysteine. Testing, clinical context, and clinician guidance matter.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <a href="https://www.acurist.ai" target="_blank" rel="noopener noreferrer" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
          Start Memory Screen
        </a>
      </div>
    </div>
  );
}

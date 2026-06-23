import Link from 'next/link';

export default function ClinicalEvidencePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/" className="text-black hover:underline">← Back to Vascumind</Link>
      </div>

      <h1 className="text-5xl font-semibold tracking-tight mb-4">Clinical Evidence Behind Our Recommendations</h1>
      <div className="green-divider w-20 mb-8"></div>
      
      <p className="text-xl text-black mb-12">
        We only recommend supplements when there is meaningful clinical research behind them. 
        Below are the key studies that inform our choices.
      </p>

      {/* How We Select Evidence */}
      <div className="green-wash rounded-3xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-3">How We Select Evidence</h2>
        <p className="text-black">
          We prioritize large, well-designed randomized controlled trials (RCTs) and meta-analyses published in high-impact journals. 
          All recommendations are reviewed for relevance to vascular and cognitive health.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mb-16">
        <a href="#get-started" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
          Start Memory Screen
        </a>
      </div>

      {/* Studies Section */}
      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-semibold mb-3">Omega-3 & Vascular Health</h3>
          <p className="text-black">
            Multiple large trials (REDUCE-IT, STRENGTH, VITAL) have demonstrated that high-dose EPA/DHA can reduce cardiovascular events and support brain health through anti-inflammatory mechanisms.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">Beetroot & Nitric Oxide</h3>
          <p className="text-black">
            Research shows that dietary nitrates from beetroot significantly increase nitric oxide bioavailability, improving blood flow and endothelial function — key factors in vascular cognitive health.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">B Vitamins & Cognitive Function</h3>
          <p className="text-black">
            The VITACOG trial demonstrated that high-dose B vitamins (B6, B9, B12) can slow brain atrophy in older adults with elevated homocysteine levels.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <a href="#get-started" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
          Start Memory Screen
        </a>
      </div>
    </div>
  );
}

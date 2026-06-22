import CompactMCIScreenCTA from '@/components/CompactMCIScreenCTA';

export default function Omega3Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-black hover:underline">← Back to Marketplace</a>
      </div>
      <h1 className="text-5xl font-semibold tracking-tight mb-4">High-Potency Omega-3</h1>
      <p className="text-xl text-black mb-8">1,400 mg EPA + DHA per serving • Vascular & Cognitive Support</p>

      <div className="flex items-center gap-4 mb-12">
        <div className="text-4xl font-semibold">$34</div>
        <button className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800">Add to Cart</button>
      </div>

      <div className="prose prose-lg max-w-none text-black">
        <h2>Why Omega-3 for Vascular Dementia?</h2>
        <p>
          EPA and DHA support vascular health, reduce inflammation, and are linked to slower cognitive decline in multiple large studies.
        </p>

        <h2>Key Clinical Evidence</h2>
        <p><strong>VITAL Trial (NEJM 2019)</strong> — Over 25,000 participants. Omega-3 reduced heart attack risk and supported vascular health. Higher doses show additional cognitive benefits in meta-analyses.</p>
      </div>

      <div className="mt-16">
        <CompactMCIScreenCTA />
      </div>
    </div>
  );
}

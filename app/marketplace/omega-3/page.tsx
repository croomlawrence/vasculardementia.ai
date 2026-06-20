import CompactMCIScreenCTA from '@/components/CompactMCIScreenCTA';

export default function Omega3Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-blue-600 hover:underline">← Back to Marketplace</a>
      </div>

      <h1 className="text-5xl font-semibold tracking-tight mb-4">High-Potency Omega-3 Fish Oil</h1>
      <p className="text-xl text-gray-600 mb-8">1,400 mg EPA + DHA per serving • 60 softgels</p>

      <div className="flex items-center gap-4 mb-12">
        <div className="text-4xl font-semibold">$34</div>
        <button className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800">Add to Cart</button>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>Product Details</h2>
        <p>Premium fish oil providing concentrated EPA and DHA from sustainably sourced, molecularly distilled fish oil. These essential fatty acids support cardiovascular health and overall wellness.</p>

        <h3>Suggested Use</h3>
        <p>Take 2 softgels daily with a meal, or as directed by your healthcare provider.</p>
      </div>

      {/* Compact CTA on product page */}
      <div className="mt-16">
        <CompactMCIScreenCTA />
      </div>
    </div>
  );
}

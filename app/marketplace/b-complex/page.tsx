import CompactMCIScreenCTA from '../../../components/CompactMCIScreenCTA';

export default function BComplexPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-blue-600 hover:underline">← Back to Marketplace</a>
      </div>

      <h1 className="text-5xl font-semibold tracking-tight mb-4">Methylated B-Complex</h1>
      <p className="text-xl text-gray-600 mb-8">Active forms for better absorption • 60 capsules</p>

      <div className="flex items-center gap-4 mb-12">
        <div className="text-4xl font-semibold">$28</div>
        <button className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800">Add to Cart</button>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>Product Details</h2>
        <p>High-quality methylated B vitamins in their active forms for superior absorption and utilization, supporting energy, mood, and cognitive function.</p>
      </div>

      <div className="mt-16">
        <CompactMCIScreenCTA />
      </div>
    </div>
  );
}

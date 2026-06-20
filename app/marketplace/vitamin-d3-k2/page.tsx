import CompactMCIScreenCTA from '@/components/CompactMCIScreenCTA';

export default function VitaminD3K2Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-blue-600 hover:underline">← Back to Marketplace</a>
      </div>

      <h1 className="text-5xl font-semibold tracking-tight mb-4">Vitamin D3 + K2</h1>
      <p className="text-xl text-black mb-8">Essential for calcium metabolism • 60 capsules</p>

      <div className="flex items-center gap-4 mb-12">
        <div className="text-4xl font-semibold">$22</div>
        <button className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800">Add to Cart</button>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>Product Details</h2>
        <p>Combined Vitamin D3 and K2 for optimal calcium absorption and vascular health support.</p>
      </div>

      <div className="mt-16">
        <CompactMCIScreenCTA />
      </div>
    </div>
  );
}

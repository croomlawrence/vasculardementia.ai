import CompactMCIScreenCTA from '@/components/CompactMCIScreenCTA';

export default function VitaminD3K2Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-black hover:underline">← Back to Marketplace</a>
      </div>
      <h1 className="text-5xl font-semibold tracking-tight mb-4">Vitamin D3 + K2</h1>
      <p className="text-xl text-black mb-8">2,000 IU D3 + 100 mcg K2 • Vascular + Bone Support</p>

      <div className="flex items-center gap-4 mb-12">
        <div className="text-4xl font-semibold">$22</div>
        <button className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800">Add to Cart</button>
      </div>

      <div className="prose prose-lg max-w-none text-black">
        <h2>Why D3 + K2 for Vascular Dementia?</h2>
        <p>
          Vitamin D supports vascular and immune health. K2 directs calcium into bones and away from arteries.
        </p>

        <h2>Key Clinical Evidence</h2>
        <p><strong>VITAL Trial (NEJM 2019)</strong> — 2,000 IU D3 showed benefits for cardiovascular and immune health. Combined with K2, it supports proper calcium metabolism and vascular integrity.</p>
      </div>

      <div className="mt-16">
        <CompactMCIScreenCTA />
      </div>
    </div>
  );
}

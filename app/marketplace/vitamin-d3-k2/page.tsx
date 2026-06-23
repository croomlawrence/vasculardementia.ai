import CompactMCIScreenCTA from '@/components/CompactMCIScreenCTA';

export default function VitaminD3K2Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-black hover:underline">← Back to Marketplace</a>
      </div>
      <h1 className="text-5xl font-semibold tracking-tight mb-4">Vitamin D3 + K2</h1>
      <div className="green-divider w-16 mb-4"></div>
      <p className="text-xl text-black mb-8">High-potency with K2 for absorption • Bone & Brain</p>

      <div className="flex items-center gap-4 mb-12">
        <div className="text-4xl font-semibold">$27</div>
        <button className="btn-green px-8 py-3 rounded-full text-lg">Add to Cart</button>
      </div>

      <div className="prose prose-lg max-w-none text-black">
        <h2>Why Vitamin D3 + K2 for Vascular Dementia?</h2>
        <p>
          Vitamin D supports vascular and cognitive health. K2 helps direct calcium to bones and away from arteries.
        </p>

        <h2>Key Clinical Evidence</h2>
        <p>Multiple studies link optimal Vitamin D levels with better cognitive function and reduced vascular risk.</p>
      </div>

      <div className="mt-16">
        <CompactMCIScreenCTA />
      </div>
    </div>
  );
}

import CompactMCIScreenCTA from '@/components/CompactMCIScreenCTA';

export default function BComplexPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-black hover:underline">← Back to Marketplace</a>
      </div>
      <h1 className="text-5xl font-semibold tracking-tight mb-4">Methylated B-Complex</h1>
      <div className="green-divider w-16 mb-4"></div>
      <p className="text-xl text-black mb-8">Active forms of B vitamins • Cognitive Support</p>

      <div className="flex items-center gap-4 mb-12">
        <div className="text-4xl font-semibold">$32</div>
        <button className="btn-green px-8 py-3 rounded-full text-lg">Add to Cart</button>
      </div>

      <div className="prose prose-lg max-w-none text-black">
        <h2>Why B Vitamins for Vascular Dementia?</h2>
        <p>
          Methylated B vitamins help lower homocysteine, support vascular health, and are linked to slower brain atrophy in clinical studies.
        </p>

        <h2>Key Clinical Evidence</h2>
        <p><strong>VITACOG Trial (2010)</strong> — High-dose B vitamins significantly slowed brain atrophy in older adults with elevated homocysteine.</p>
      </div>

      <div className="mt-16">
        <CompactMCIScreenCTA />
      </div>
    </div>
  );
}

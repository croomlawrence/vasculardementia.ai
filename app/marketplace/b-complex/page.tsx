import CompactMCIScreenCTA from '@/components/CompactMCIScreenCTA';

export default function BComplexPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-black hover:underline">← Back to Marketplace</a>
      </div>
      <h1 className="text-5xl font-semibold tracking-tight mb-4">Methylated B-Complex</h1>
      <p className="text-xl text-black mb-8">Active forms for superior absorption • Cognitive Support</p>

      <div className="flex items-center gap-4 mb-12">
        <div className="text-4xl font-semibold">$28</div>
        <button className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800">Add to Cart</button>
      </div>

      <div className="prose prose-lg max-w-none text-black">
        <h2>Why Methylated B Vitamins for Vascular Dementia?</h2>
        <p>
          Active (methylated) forms of B6, B9, and B12 lower homocysteine — a key vascular and cognitive risk factor.
        </p>

        <h2>Key Clinical Evidence</h2>
        <p><strong>VITACOG Trial</strong> — High-dose B vitamins significantly slowed brain atrophy and cognitive decline in older adults with elevated homocysteine. Methylated forms are better absorbed, especially for those with MTHFR variants.</p>
      </div>

      <div className="mt-16">
        <CompactMCIScreenCTA />
      </div>
    </div>
  );
}

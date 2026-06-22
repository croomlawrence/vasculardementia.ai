import CompactMCIScreenCTA from '@/components/CompactMCIScreenCTA';

export default function BeetrootPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-black hover:underline">← Back to Marketplace</a>
      </div>
      <h1 className="text-5xl font-semibold tracking-tight mb-4">Organic Beetroot Powder</h1>
      <p className="text-xl text-black mb-8">Natural nitric oxide support • Circulation</p>

      <div className="flex items-center gap-4 mb-12">
        <div className="text-4xl font-semibold">$26</div>
        <button className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800">Add to Cart</button>
      </div>

      <div className="prose prose-lg max-w-none text-black">
        <h2>Why Beetroot for Vascular Dementia?</h2>
        <p>
          Rich in dietary nitrate that converts to nitric oxide, improving blood flow and endothelial function.
        </p>

        <h2>Key Clinical Evidence</h2>
        <p><strong>Webb et al., Hypertension 2008</strong> — Beetroot juice significantly lowered blood pressure and improved endothelial function within hours via nitric oxide pathway. Multiple meta-analyses confirm benefits for circulation and blood pressure.</p>
      </div>

      <div className="mt-16">
        <CompactMCIScreenCTA />
      </div>
    </div>
  );
}

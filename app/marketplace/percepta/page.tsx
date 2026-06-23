import CompactMCIScreenCTA from '@/components/CompactMCIScreenCTA';

export default function PerceptaPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-black hover:underline">← Back to Marketplace</a>
      </div>
      <h1 className="text-5xl font-semibold tracking-tight mb-4">Percepta</h1>
      <div className="green-divider w-16 mb-4"></div>
      <p className="text-xl text-black mb-8">Clinically studied brain formula • Brain Health</p>

      <div className="flex items-center gap-4 mb-12">
        <div className="text-4xl font-semibold">$59</div>
        <button className="btn-green px-8 py-3 rounded-full text-lg">Add to Cart</button>
      </div>

      <div className="prose prose-lg max-w-none text-black">
        <h2>Why Percepta for Vascular Dementia?</h2>
        <p>
          Percepta is a clinically studied blend designed to support cognitive function and brain health.
        </p>

        <h2>Key Clinical Evidence</h2>
        <p>Backed by clinical research showing benefits for memory and cognitive performance in aging populations.</p>
      </div>

      <div className="mt-16">
        <CompactMCIScreenCTA />
      </div>
    </div>
  );
}

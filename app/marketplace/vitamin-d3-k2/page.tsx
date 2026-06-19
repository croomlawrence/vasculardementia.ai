export default function VitaminD3K2Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-blue-600 hover:underline">← Back to Marketplace</a>
      </div>

      <h1 className="text-5xl font-semibold tracking-tight mb-4">Vitamin D3 + K2</h1>
      <p className="text-xl text-gray-600 mb-8">5,000 IU D3 with 100 mcg K2 • 60 capsules</p>

      <div className="flex items-center gap-4 mb-12">
        <div className="text-4xl font-semibold">$22</div>
        <button className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800">Add to Cart</button>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>Product Details</h2>
        <p>High-potency Vitamin D3 combined with K2 (MK-7) for optimal calcium utilization and overall wellness support.</p>

        <h3>Suggested Use</h3>
        <p>Take 1 capsule daily with food.</p>

        <div className="bg-gray-50 p-6 rounded-xl mt-8 text-sm">
          <strong>Disclaimer:</strong> This product is sold as a dietary supplement for general wellness support. 
          It is not intended to diagnose, treat, cure, or prevent vascular dementia or any medical condition. 
          Consult your healthcare provider before use.
        </div>
      </div>
    </div>
  )
}

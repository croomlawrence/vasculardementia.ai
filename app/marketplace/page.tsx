import Link from 'next/link'

export default function Marketplace() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-semibold tracking-tight mb-4">
          Vascular & Cognitive Wellness Marketplace
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Curated supplements to support cardiovascular health, circulation, 
          and everyday cognitive wellness — as a complement to advanced diagnostics and therapies.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          These products are not intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Omega-3 */}
        <Link href="/marketplace/omega-3" className="group border rounded-2xl p-6 hover:shadow-lg transition">
          <div className="mb-4">
            <div className="text-sm text-blue-600 font-medium">Vascular Support</div>
          </div>
          <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-600">High-Potency Omega-3</h3>
          <p className="text-gray-600 mb-4">1,400 mg EPA + DHA per serving</p>
          <div className="text-lg font-medium">$34</div>
        </Link>

        {/* B-Complex */}
        <Link href="/marketplace/b-complex" className="group border rounded-2xl p-6 hover:shadow-lg transition">
          <div className="mb-4">
            <div className="text-sm text-blue-600 font-medium">Homocysteine Support</div>
          </div>
          <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-600">Methylated B-Complex</h3>
          <p className="text-gray-600 mb-4">Active forms of B6, B9 & B12</p>
          <div className="text-lg font-medium">$28</div>
        </Link>

        {/* Vitamin D3 + K2 */}
        <Link href="/marketplace/vitamin-d3-k2" className="group border rounded-2xl p-6 hover:shadow-lg transition">
          <div className="mb-4">
            <div className="text-sm text-blue-600 font-medium">Foundational Wellness</div>
          </div>
          <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-600">Vitamin D3 + K2</h3>
          <p className="text-gray-600 mb-4">5,000 IU D3 with 100 mcg K2</p>
          <div className="text-lg font-medium">$22</div>
        </Link>

        {/* Beetroot */}
        <Link href="/marketplace/beetroot" className="group border rounded-2xl p-6 hover:shadow-lg transition">
          <div className="mb-4">
            <div className="text-sm text-blue-600 font-medium">Vascular Support</div>
          </div>
          <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-600">Organic Beetroot Powder</h3>
          <p className="text-gray-600 mb-4">Natural dietary nitrates</p>
          <div className="text-lg font-medium">$26</div>
        </Link>
      </div>

      <div className="mt-16 text-center text-sm text-gray-500 max-w-xl mx-auto">
        All products are sold as general wellness supplements. 
        Always consult your healthcare provider before use.
      </div>
    </div>
  )
}

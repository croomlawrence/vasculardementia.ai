import Link from 'next/link';

export default function Marketplace() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold tracking-tight mb-4">
            Vascular & Cognitive Wellness Marketplace
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Curated supplements to support cardiovascular health, circulation, 
            and everyday cognitive wellness — as a complement to advanced diagnostics and therapies.
          </p>
          <p className="text-sm text-black mt-4">
            These products are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Omega-3 */}
          <Link href="/marketplace/omega-3" className="group border rounded-2xl p-6 hover:shadow-lg transition green-card">
            <div className="mb-4">
              <div className="section-label">Vascular Support</div>
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-black">High-Potency Omega-3</h3>
            <p className="text-black mb-4">1,400 mg EPA + DHA per serving</p>
            <div className="text-lg font-medium">$34</div>
          </Link>

          {/* Beetroot */}
          <Link href="/marketplace/beetroot" className="group border rounded-2xl p-6 hover:shadow-lg transition green-card">
            <div className="mb-4">
              <div className="section-label">Circulation</div>
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-black">Beetroot Powder</h3>
            <p className="text-black mb-4">Natural nitric oxide support</p>
            <div className="text-lg font-medium">$29</div>
          </Link>

          {/* B-Complex */}
          <Link href="/marketplace/b-complex" className="group border rounded-2xl p-6 hover:shadow-lg transition green-card">
            <div className="mb-4">
              <div className="section-label">Cognitive Support</div>
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-black">Methylated B-Complex</h3>
            <p className="text-black mb-4">Active forms of B vitamins</p>
            <div className="text-lg font-medium">$32</div>
          </Link>

          {/* Vitamin D3 + K2 */}
          <Link href="/marketplace/vitamin-d3-k2" className="group border rounded-2xl p-6 hover:shadow-lg transition green-card">
            <div className="mb-4">
              <div className="section-label">Bone & Brain</div>
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-black">Vitamin D3 + K2</h3>
            <p className="text-black mb-4">High-potency with K2 for absorption</p>
            <div className="text-lg font-medium">$27</div>
          </Link>

          {/* Percepta */}
          <Link href="/marketplace/percepta" className="group border rounded-2xl p-6 hover:shadow-lg transition green-card">
            <div className="mb-4">
              <div className="section-label">Brain Health</div>
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-black">Percepta</h3>
            <p className="text-black mb-4">Clinically studied brain formula</p>
            <div className="text-lg font-medium">$59</div>
          </Link>
        </div>
      </div>

      <div className="text-center pb-16">
        <a href="https://www.acurist.ai" target="_blank" rel="noopener noreferrer" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
          Start Memory Screen
        </a>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function Marketplace() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="section-label mb-3">STEP 4 OF THE VASCUMIND PROTOCOL</div>
          <h1 className="text-5xl font-semibold tracking-tight mb-4">
            VascuMind Wellness Stack
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto">
            A curated supplement stack for cardiovascular health, circulation, and everyday cognitive wellness — positioned after screening, benchmarking, and clinician discussion.
          </p>
          <p className="text-base text-black mt-4 max-w-3xl mx-auto">
            Dietary supplements are not intended to diagnose, treat, cure, or prevent vascular dementia, Alzheimer’s disease, MCI, stroke, or any other disease. VascuMind may earn commissions from qualifying purchases; see our affiliate disclosure.
          </p>
          <p className="text-base text-black mt-4 max-w-3xl mx-auto">
            COA and ingredient-quality policy: each product page now has a Certificate of Analysis request track. Do not treat a supplement as protocol-ready until purity, dosage, and manufacturer documentation are reviewed.
          </p>
          <a href="/affiliate-disclosure" className="inline-block mt-3 text-black underline">Read affiliate disclosure</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Omega-3 */}
          <Link href="/marketplace/omega-3" className="group border border-black rounded-2xl p-6 hover:shadow-lg transition green-card">
            <div className="mb-4">
              <div className="section-label">Vascular Support</div>
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-black">High-Potency Omega-3</h3>
            <p className="text-black mb-4">1,400 mg EPA + DHA per serving</p>
            <div className="text-lg font-medium">$34</div>
          </Link>

          {/* Beetroot */}
          <Link href="/marketplace/beetroot" className="group border border-black rounded-2xl p-6 hover:shadow-lg transition green-card">
            <div className="mb-4">
              <div className="section-label">Circulation</div>
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-black">Beetroot Powder</h3>
            <p className="text-black mb-4">Natural nitric oxide support</p>
            <div className="text-lg font-medium">$29</div>
          </Link>

          {/* B-Complex */}
          <Link href="/marketplace/b-complex" className="group border border-black rounded-2xl p-6 hover:shadow-lg transition green-card">
            <div className="mb-4">
              <div className="section-label">Cognitive Support</div>
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-black">Methylated B-Complex</h3>
            <p className="text-black mb-4">Active forms of B vitamins</p>
            <div className="text-lg font-medium">$32</div>
          </Link>

          {/* Vitamin D3 + K2 */}
          <Link href="/marketplace/vitamin-d3-k2" className="group border border-black rounded-2xl p-6 hover:shadow-lg transition green-card">
            <div className="mb-4">
              <div className="section-label">Bone & Brain</div>
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-black">Vitamin D3 + K2</h3>
            <p className="text-black mb-4">High-potency with K2 for absorption</p>
            <div className="text-lg font-medium">$27</div>
          </Link>

          {/* Percepta */}
          <Link href="/marketplace/percepta" className="group border border-black rounded-2xl p-6 hover:shadow-lg transition green-card">
            <div className="mb-4">
              <div className="section-label">Brain Health</div>
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-black">Percepta</h3>
            <p className="text-black mb-4">Ingredients studied in cognitive-aging research</p>
            <div className="text-lg font-medium">$59</div>
          </Link>
        </div>
      </div>

      <div className="text-center pb-16">
        <a href="/memory-screen" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
          Start Memory Screen
        </a>
      </div>
    </div>
  );
}

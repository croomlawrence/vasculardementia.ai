import MCIScreenCTA from '../components/MCIScreenCTA';

export default function Home() {
  return (
    <main>
      {/* Hero Section - High Contrast Black Background */}
      <section className="bg-black py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-semibold tracking-tight mb-6 text-white">
            Vascular Dementia Help.<br />Breakthrough tests & therapies. One hub.
          </h1>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Advanced diagnostics and emerging treatment options — no traditional appointment required.
          </p>
          <a 
            href="#get-started" 
            className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-12">3 Easy Steps</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl">
              <div className="text-sm text-blue-600 font-medium mb-2">STEP 1</div>
              <h3 className="text-2xl font-semibold mb-3">Complete Your Assessment</h3>
              <p className="text-black">Answer a short questionnaire about symptoms and history.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <div className="text-sm text-blue-600 font-medium mb-2">STEP 2</div>
              <h3 className="text-2xl font-semibold mb-3">Expert Review</h3>
              <p className="text-black">A specialized clinician reviews your case.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <div className="text-sm text-blue-600 font-medium mb-2">STEP 3</div>
              <h3 className="text-2xl font-semibold mb-3">Personalized Plan</h3>
              <p className="text-black">Receive access to testing, therapies, or clinical trials.</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="#get-started" className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="what-we-offer" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-semibold text-center mb-12">Focused care for vascular dementia</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Diagnostic Clarity", desc: "Advanced cognitive screening and vascular assessments." },
            { title: "Therapy Access", desc: "Access to emerging regenerative options, including ACP-01 programs." },
            { title: "Clinical Trial Matching", desc: "Connect with active trials studying new approaches." },
            { title: "Family & Caregiver Support", desc: "Resources and guidance for patients and families." },
            { title: "Ongoing Monitoring", desc: "Structured follow-up and support." }
          ].map((item, index) => (
            <div key={index} className="border rounded-2xl p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-black mb-6">{item.desc}</p>
              <a href="#get-started" className="text-blue-600 font-medium hover:underline">Get Started →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Marketplace */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-4">Vascular & Cognitive Wellness Marketplace</h2>
          <p className="text-center text-black mb-10">Curated supplements to support vascular health and cognitive wellness.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "High-Potency Omega-3", price: "$34" },
              { name: "Methylated B-Complex", price: "$28" },
              { name: "Vitamin D3 + K2", price: "$22" },
              { name: "Organic Beetroot Powder", price: "$26" }
            ].map((product, index) => (
              <a key={index} href="/marketplace" className="bg-white p-6 rounded-2xl border hover:shadow-md transition">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="text-lg font-medium">{product.price}</div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="/marketplace" className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800">
              Browse Marketplace
            </a>
          </div>
        </div>
      </section>

      {/* MCI Screen CTA */}
      <MCIScreenCTA />

      {/* Final CTA */}
      <section id="get-started" className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-semibold mb-6">Ready for answers?</h2>
        <a 
          href="#get-started" 
          className="inline-block bg-black text-white px-10 py-4 rounded-full text-xl hover:bg-gray-800"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}

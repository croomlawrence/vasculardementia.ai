"use client";

export default function VascuMindHome() {
  return (
    <main>
      {/* Hero Section - High Contrast Black Background */}
      <section className="bg-black py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter mb-6 text-white leading-none">
            Vascular Dementia Starts in Your Blood Vessels —<br />Not Just Your Brain
          </h1>
          <p className="text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            Poor blood flow and cardiovascular issues can quietly accelerate memory loss, confusion, and cognitive decline. 
            VascuMind helps you understand the vascular connection and take practical steps to protect your brain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#learn" 
              className="inline-block bg-white text-black px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-200 transition"
            >
              Explore the Learning Center
            </a>
            <a 
              href="#marketplace" 
              className="inline-block bg-white/10 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-white/20 transition border border-white/30"
            >
              Browse Recommended Supplements
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition - How VascuMind Helps */}
      <section id="learn" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold tracking-tight mb-4">Clear answers. Practical tools. Trusted recommendations.</h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            VascuMind is your educational resource and trusted marketplace for vascular brain health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-3xl p-10">
            <div className="text-sm font-medium tracking-widest text-black/60 mb-3">UNDERSTAND</div>
            <h3 className="text-3xl font-semibold mb-4">Learn how vascular health affects your brain</h3>
            <p className="text-lg text-black">Educational articles and doctor-reviewed explainers on how blood flow, small vessel disease, and cardiovascular issues contribute to memory loss and cognitive decline.</p>
          </div>
          <div className="border border-gray-200 rounded-3xl p-10">
            <div className="text-sm font-medium tracking-widest text-black/60 mb-3">TRACK</div>
            <h3 className="text-3xl font-semibold mb-4">Identify and monitor your risk factors</h3>
            <p className="text-lg text-black">Simple self-assessment tools, checklists, and trackers to understand your personal vascular and cognitive risk profile over time.</p>
          </div>
          <div className="border border-gray-200 rounded-3xl p-10">
            <div className="text-sm font-medium tracking-widest text-black/60 mb-3">ACT</div>
            <h3 className="text-3xl font-semibold mb-4">Access evidence-based solutions</h3>
            <p className="text-lg text-black">Curated supplements, lifestyle strategies, and information on emerging therapies and clinical trials focused on vascular cognitive impairment.</p>
          </div>
        </div>
      </section>

      {/* Why Vascular Health Matters */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-5xl font-semibold tracking-tight mb-6">Your blood vessels play a bigger role in memory than most people realize.</h2>
            <p className="text-xl text-black">Many cases of cognitive decline are not caused by Alzheimer’s alone. Vascular issues can damage brain tissue and accelerate memory loss — often years before symptoms become obvious.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Vascular damage can begin early", desc: "Changes in blood flow and small vessels often start long before noticeable memory issues appear." },
              { title: "Many risk factors are modifiable", desc: "Blood pressure, inflammation, exercise, and nutrition all influence vascular brain health." },
              { title: "Early action matters most", desc: "Understanding your vascular risk is one of the most actionable steps you can take to protect long-term brain function." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border">
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-black">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section id="marketplace" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold tracking-tight mb-4">Vascular &amp; Cognitive Wellness Marketplace</h2>
          <p className="text-xl text-black max-w-2xl mx-auto">Evidence-based supplements commonly used to support vascular and cognitive health.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { name: "High-Potency Omega-3", price: "$34", href: "/marketplace/omega-3" },
            { name: "Methylated B-Complex", price: "$28", href: "/marketplace/b-complex" },
            { name: "Vitamin D3 + K2", price: "$22", href: "/marketplace/vitamin-d3-k2" },
            { name: "Organic Beetroot Powder", price: "$26", href: "/marketplace/beetroot" },
            { name: "Percepta", price: "$49", href: "/marketplace/percepta" }
          ].map((product, index) => (
            <a key={index} href={product.href} className="bg-white p-8 rounded-2xl border hover:shadow-md transition block">
              <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
              <div className="text-2xl font-medium">{product.price}</div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/marketplace" className="inline-block bg-black text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition">
            Browse Full Marketplace →
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-semibold text-white tracking-tighter mb-6">Ready to protect your brain?</h2>
          <p className="text-2xl text-white/80 mb-10">Start with education. Then take action.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#learn" className="inline-block bg-white text-black px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-200 transition">
              Start Learning
            </a>
            <a href="#marketplace" className="inline-block bg-white/10 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-white/20 transition border border-white/30">
              Explore Supplements
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

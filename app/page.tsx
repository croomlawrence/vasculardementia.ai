"use client";

export default function VascuMindHome() {
  return (
    <main>
      {/* Hero Section - High Contrast Black Background */}
      <section className="bg-black py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter mb-6 text-white leading-none">
            Know Your Vascular Cognitive Score in Minutes
          </h1>
          <p className="text-2xl text-white mb-10 max-w-3xl mx-auto">
            A quick screening can reveal how your blood vessels may be affecting your memory — and what you can do about it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#get-started" 
              className="btn-green inline-block px-10 py-4 rounded-full text-xl font-semibold"
            >
              Start Memory Screen
            </a>
            <a 
              href="#learn" 
              className="inline-block bg-white text-black px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-200 transition border border-white"
            >
              Learn More
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
            <div className="text-sm font-medium tracking-widest text-black mb-3">UNDERSTAND</div>
            <h3 className="text-3xl font-semibold mb-4">Learn how vascular health affects your brain</h3>
            <p className="text-lg text-black">Educational articles and doctor-reviewed explainers on how blood flow, small vessel disease, and cardiovascular issues contribute to memory loss and cognitive decline.</p>
          </div>
          <div className="border border-gray-200 rounded-3xl p-10">
            <div className="text-sm font-medium tracking-widest text-black mb-3">TRACK</div>
            <h3 className="text-3xl font-semibold mb-4">Identify and monitor your risk factors</h3>
            <p className="text-lg text-black">Simple self-assessment tools, checklists, and trackers to understand your personal vascular and cognitive risk profile over time.</p>
          </div>
          <div className="border border-gray-200 rounded-3xl p-10">
            <div className="text-sm font-medium tracking-widest text-black mb-3">ACT</div>
            <h3 className="text-3xl font-semibold mb-4">Access evidence-based solutions</h3>
            <p className="text-lg text-black">Curated supplements, lifestyle strategies, and information on emerging therapies and clinical trials focused on vascular cognitive impairment.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="#get-started" 
            className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold"
          >
            Start Memory Screen
          </a>
        </div>
      </section>
    </main>
  );
}

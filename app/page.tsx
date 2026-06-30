"use client";

export default function VascuMindHome() {
  return (
    <main>
      <section className="bg-black py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter mb-6 text-white leading-none">
            Know Your Vascular Cognitive Score in Minutes
          </h1>
          <p className="text-2xl text-white mb-6 max-w-3xl mx-auto">
            Concerned that blood flow, stroke risk, or vascular disease may be affecting memory? A quick educational screen can help you understand what to discuss with your clinician.
          </p>
          <p className="text-lg text-white mb-10 max-w-3xl mx-auto">
            Educational only — not a diagnosis. Private, secure, and designed to support a better next conversation about brain and vascular health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.acurist.ai" target="_blank" rel="noopener noreferrer" className="btn-green inline-block px-10 py-4 rounded-full text-xl font-semibold focus:outline focus:outline-4 focus:outline-white">
              Start Memory Screen
            </a>
            <a href="#learn" className="inline-block bg-white text-black px-10 py-4 rounded-full text-xl font-semibold hover:bg-black hover:text-white transition border border-white focus:outline focus:outline-4 focus:outline-white">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section aria-label="VascuMind safety and trust signals" className="border-b border-black">
        <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-4 gap-6 text-center">
          <div><strong>Educational screen</strong><br />Not a diagnosis or substitute for medical care.</div>
          <div><strong>Clinician conversation</strong><br />Built to help families prepare better questions.</div>
          <div><strong>Vascular focus</strong><br />Highlights blood-pressure, stroke, and circulation factors.</div>
          <div><strong>Private next step</strong><br />Start with a memory screen through Acurist.</div>
        </div>
      </section>

      <section id="learn" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold tracking-tight mb-4">Clear answers. Practical tools. Trusted recommendations.</h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            VascuMind is your educational resource for understanding vascular brain health, tracking risk patterns, and finding evidence-informed next steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-black rounded-3xl p-10">
            <div className="text-sm font-medium tracking-widest text-black mb-3">UNDERSTAND</div>
            <h3 className="text-3xl font-semibold mb-4">Learn how vascular health affects your brain</h3>
            <p className="text-lg text-black">Plain-language explainers on how blood flow, small vessel disease, cardiovascular risk, and stroke history can contribute to memory changes.</p>
          </div>
          <div className="border border-black rounded-3xl p-10">
            <div className="text-sm font-medium tracking-widest text-black mb-3">TRACK</div>
            <h3 className="text-3xl font-semibold mb-4">Identify and monitor your risk factors</h3>
            <p className="text-lg text-black">Self-reflection tools, checklists, and screening pathways that help you prepare for a more informed clinician conversation.</p>
          </div>
          <div className="border border-black rounded-3xl p-10">
            <div className="text-sm font-medium tracking-widest text-black mb-3">ACT</div>
            <h3 className="text-3xl font-semibold mb-4">Access evidence-informed next steps</h3>
            <p className="text-lg text-black">Education on lifestyle strategies, clinical-trial awareness, and wellness products with clear limitations and medical disclaimers.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="https://www.acurist.ai" target="_blank" rel="noopener noreferrer" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold focus:outline focus:outline-4 focus:outline-black">
            Start Memory Screen
          </a>
          <p className="text-black mt-3">A few minutes. Educational only. Use results to guide a conversation with your clinician.</p>
        </div>
      </section>
    </main>
  );
}

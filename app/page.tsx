"use client";

import MCIScreenCTA from '../components/MCIScreenCTA';

export default function Home() {
  return (
    <main>
      {/* Hero Section - High Contrast Black Background */}
      <section className="bg-black py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-semibold tracking-tight mb-6 text-white">
            Start with the MCI Screen.<br />The clearest first step for vascular dementia.
          </h1>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            94% accuracy • 20+ years of research • Used by leading clinicians
          </p>
          <a 
            href="#mci-screen" 
            className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200"
          >
            Take the MCI Screen
          </a>
        </div>
      </section>

      {/* MCI Screen Primary CTA Section */}
      <section id="mci-screen" className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="mb-8">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            RECOMMENDED FIRST STEP
          </div>
          <h2 className="text-5xl font-semibold tracking-tight mb-4">
            Get objective answers in minutes
          </h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            The MCI Screen is the most validated cognitive assessment for detecting early changes associated with vascular dementia and Alzheimer’s.
          </p>
        </div>
        
        <a 
          href="https://www.acurist.ca" 
          target="_blank"
          className="inline-block bg-black text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-800 transition"
        >
          Start the MCI Screen →
        </a>
        
        <p className="text-sm text-black mt-4">
          Takes ~15 minutes • Immediate results • Clinician-reviewed option available
        </p>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-12">3 Easy Steps</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl">
              <div className="text-sm text-blue-600 font-medium mb-2">STEP 1</div>
              <h3 className="text-2xl font-semibold mb-3">Complete the MCI Screen</h3>
              <p className="text-black">Take the validated 15-minute cognitive assessment online.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <div className="text-sm text-blue-600 font-medium mb-2">STEP 2</div>
              <h3 className="text-2xl font-semibold mb-3">Get Your Results</h3>
              <p className="text-black">Receive an immediate score and interpretation.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <div className="text-sm text-blue-600 font-medium mb-2">STEP 3</div>
              <h3 className="text-2xl font-semibold mb-3">Next Steps</h3>
              <p className="text-black">Access diagnostics, therapies, or clinical trials if needed.</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="#mci-screen" className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800">
              Start the MCI Screen
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
              <a href="#mci-screen" className="text-blue-600 font-medium hover:underline">Start with MCI Screen →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Marketplace */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-4">Vascular & Cognitive Wellness Marketplace</h2>
          <p className="text-center text-black mb-10">Evidence-based supplements commonly used to support vascular and cognitive health.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: "High-Potency Omega-3", price: "$34", href: "/marketplace/omega-3" },
              { name: "Methylated B-Complex", price: "$28", href: "/marketplace/b-complex" },
              { name: "Vitamin D3 + K2", price: "$22", href: "/marketplace/vitamin-d3-k2" },
              { name: "Organic Beetroot Powder", price: "$26", href: "/marketplace/beetroot" },
              { name: "Percepta", price: "$49", href: "/marketplace/percepta" }
            ].map((product, index) => (
              <a key={index} href={product.href} className="bg-white p-6 rounded-2xl border hover:shadow-md transition">
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

      {/* Newsletter / Community CTA - High Converting Section */}
      <section className="bg-black py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 tracking-wide">
            PRIVATE COMMUNITY
          </div>
          
          <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter mb-6 leading-none">
            Most patients need more<br />than standard care.
          </h2>
          
          <p className="text-2xl text-white/90 mb-4 max-w-2xl mx-auto font-light">
            Join the movement accelerating real solutions for vascular dementia.
          </p>
          
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Get real-time updates on breakthrough diagnostics, therapies, clinical trials, and new science — delivered straight to your inbox.
          </p>

          <form 
            className="max-w-md mx-auto" 
            onSubmit={(e) => {
              e.preventDefault();
              const email = (e.target as HTMLFormElement).email.value;
              alert(`Thank you! We'll send updates to ${email}. (Form ready for email service integration)`);
              (e.target as HTMLFormElement).reset();
            }}
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                name="email"
                placeholder="Your email address" 
                className="flex-1 px-6 py-4 rounded-full text-lg bg-white text-black placeholder:text-gray-500 border-2 border-white focus:outline-none focus:border-white" 
                required 
              />
              <button 
                type="submit"
                className="bg-white hover:bg-gray-100 active:bg-gray-200 text-black px-10 py-4 rounded-full text-lg font-semibold whitespace-nowrap transition-all shadow-lg hover:shadow-xl"
              >
                Join the Movement
              </button>
            </div>
            <div className="mt-4 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-center gap-2">
              <span>2,487 caregivers &amp; clinicians already joined</span>
              <span className="hidden sm:inline">•</span>
              <span>Unsubscribe anytime</span>
            </div>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section id="get-started" className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-semibold mb-6">Ready to take the first step?</h2>
        <a 
          href="#mci-screen" 
          className="inline-block bg-black text-white px-10 py-4 rounded-full text-xl hover:bg-gray-800"
        >
          Start the MCI Screen
        </a>
      </section>
    </main>
  );
}

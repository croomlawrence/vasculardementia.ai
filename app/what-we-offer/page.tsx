import Link from 'next/link';

export default function WhatWeOfferPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/" className="text-black hover:underline">← Back to Vascumind</Link>
      </div>

      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
          What We Offer
        </h1>
        <p className="text-2xl text-black max-w-3xl mx-auto">
          Focused options to understand, track, and act on vascular cognitive risk.
        </p>
      </div>

      {/* 1. Screening - Primary Revenue */}
      <section className="mb-20">
        <div className="mb-8">
          <div className="section-label mb-2">PRIMARY OFFERING</div>
          <h2 className="text-4xl font-semibold tracking-tight mb-4">
            Know Your Vascular Cognitive Risk in Minutes
          </h2>
          <p className="text-xl text-black max-w-3xl">
            A quick screening can reveal how your blood vessels may be affecting your memory — and what you can do about it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-black rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-3">Concerned About Changes? Start With a Baseline</h3>
            <p className="text-black">A baseline can help you understand whether memory changes deserve a deeper clinical conversation.</p>
          </div>
          <div className="border border-black rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-3">Catch Cognitive Risk Early Enough to Actually Act On It</h3>
            <p className="text-black">A clearer picture of your brain health starts with one screening. Know where you stand and what to do next.</p>
          </div>
        </div>

        <div className="mt-8">
          <a href="/memory-screen" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
            Start Memory Screen
          </a>
        </div>
      </section>

      {/* 2. Clinical Trials - High Potential Revenue */}
      <section className="mb-20 green-wash rounded-3xl p-12">
        <div className="mb-8">
          <div className="section-label mb-2">HIGH-POTENTIAL OFFERING</div>
          <h2 className="text-4xl font-semibold tracking-tight mb-4">
            Emerging Vascular Dementia Therapies Are Being Studied Now — See If You Qualify
          </h2>
          <p className="text-xl text-black max-w-3xl">
            Research is moving fast. Connect with trials investigating vascular cognitive decline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Beyond Supplements: Explore the Clinical Trials Shaping What&apos;s Next</h3>
            <p className="text-black">Access information on active studies focused on vascular protection, inflammation, and new therapeutic approaches.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Find Your Place in Vascular Dementia Research</h3>
            <p className="text-black">Many families want to contribute to advancing care. We help connect you with relevant opportunities.</p>
          </div>
        </div>

        <div className="mt-8">
          <a href="/memory-screen" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
            Start Memory Screen
          </a>
        </div>
      </section>

      {/* 3. Caregivers & Families - Strategic Core */}
      <section className="mb-20">
        <div className="mb-8">
          <div className="section-label mb-2">STRATEGIC FOCUS</div>
          <h2 className="text-4xl font-semibold tracking-tight mb-4">
            When Someone You Love Starts Slipping, Start Here
          </h2>
          <p className="text-xl text-black max-w-3xl">
            A trusted place for families facing vascular memory loss.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-black rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-3">You&apos;re the One Noticing the Changes</h3>
            <p className="text-black">Guidance and resources designed specifically for the people who care most.</p>
          </div>
          <div className="border border-black rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-3">Support That Understands Vascular Causes</h3>
            <p className="text-black">Practical information about circulation, small vessel disease, and what families can actually do.</p>
          </div>
          <div className="border border-black rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-3">You Don&apos;t Have to Navigate This Alone</h3>
            <p className="text-black">Clear next steps for caregivers who want to take meaningful action.</p>
          </div>
        </div>
      </section>

      {/* 4. Early Action - Supporting */}
      <section className="mb-20">
        <div className="mb-8">
          <div className="section-label mb-2">SUPPORTING RESOURCES</div>
          <h2 className="text-4xl font-semibold tracking-tight mb-4">
            Much of What Drives Vascular Memory Loss Is Within Your Control
          </h2>
          <p className="text-xl text-black max-w-3xl">
            The best time to protect your brain was years ago. The second best time is now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-black rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-3">Small Vessels, Big Consequences — and Real Steps You Can Take</h3>
            <p className="text-black">Practical, evidence-based actions focused on blood flow and vascular health.</p>
          </div>
          <div className="border border-black rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-3">Memory Decline Isn&apos;t Always Inevitable</h3>
            <p className="text-black">Many vascular risk factors are modifiable. Learn what to discuss with a qualified healthcare professional.</p>
          </div>
        </div>
      </section>

      {/* 5. Vascular-Brain Connection - Top of Funnel */}
      <section className="bg-black text-white rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">
          Your Memory Has a Circulation Problem You Can&apos;t See
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Memory changes can have vascular, Alzheimer’s, mixed, medication-related, mood-related, sleep-related, and other causes. Vascular risk is one important place to look.
        </p>
        <a href="/memory-screen" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
          Start Memory Screen
        </a>
      </section>
    </div>
  );
}

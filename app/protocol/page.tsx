import Link from "next/link";

const funnelSteps = [
  {
    label: "Step 1 · Free",
    title: "Take the Hachinski Assessment",
    body: "Notice whether memory slips match vascular-pattern concerns such as sudden onset, stepwise change, stroke/TIA history, hypertension, PAD, diabetes, or other circulation context.",
    conversion: "Why it converts: people will often answer a subjective, no-cost pattern quiz before they are ready to pay for an objective cognitive benchmark.",
    href: "/hachinski",
    cta: "Take the Free Assessment",
  },
  {
    label: "Step 2 · Paid / low-ticket",
    title: "Benchmark it with Acurist.AI",
    body: "If the Hachinski pattern resonates, purchase or request the Acurist.AI MCI Screen to create a cognitive baseline for clinician discussion.",
    conversion: "Why it converts: the subjective score creates the bridge from concern to commitment — “I should benchmark this.”",
    href: "/memory-screen",
    cta: "Benchmark with Acurist.AI",
  },
  {
    label: "Step 3 · Fork",
    title: "Choose the right next step",
    body: "After the benchmark, VascuMind routes users to either caregiver/DTC cerebrovascular wellness support or consented clinical-trial matching.",
    conversion: "Why it converts: one score can power two monetization paths without confusing the user or over-claiming clinically.",
    href: "/memory-screen/thank-you",
    cta: "See the Post-Screen Fork",
  },
];

const stack = [
  {
    ingredient: "Citicoline (Cognizin-style)",
    role: "Brain energy",
    claim: "Supports healthy brain energy and cognitive wellness.",
    href: "/marketplace/citicoline",
  },
  {
    ingredient: "High-EPA Omega-3",
    role: "Vascular function",
    claim: "Maintains normal vascular function in the brain.",
    href: "/marketplace/omega-3",
  },
  {
    ingredient: "MCT Oil",
    role: "Alternative brain energy",
    claim: "Provides ketone fuel as an alternative brain-energy source.",
    href: "/marketplace/mct-oil",
  },
];

export default function ProtocolPage() {
  return (
    <main>
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block bg-white text-black rounded-full px-5 py-2 text-sm font-semibold mb-6">THE VASCUMIND PROTOCOL</div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 text-white leading-none">Subjective Hachinski → objective Acurist.AI → revenue fork</h1>
          <p className="text-2xl text-white max-w-4xl mx-auto mb-8">
            The Protocol is VascuMind’s primary offering and funnel: a low-friction free assessment that earns the right to sell an objective cognitive benchmark, then routes users to compliant DTC wellness support or consented CRO/trial matching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hachinski" className="btn-green inline-block px-10 py-4 rounded-full text-xl font-semibold focus:outline focus:outline-4 focus:outline-white">Start Free Assessment</Link>
            <Link href="/memory-screen" className="inline-block bg-white text-black px-10 py-4 rounded-full text-xl font-semibold hover:bg-black hover:text-white border border-white focus:outline focus:outline-4 focus:outline-white">Benchmark with Acurist.AI</Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="section-label mb-3">FUNNEL COPY BLUEPRINT</div>
          <h2 className="text-5xl font-semibold tracking-tight mb-4">Use denial bypass as the conversion bridge.</h2>
          <p className="text-xl text-black max-w-4xl mx-auto">
            Families may resist “buy a cognitive test.” They will more readily answer, “Do these memory slips match a vascular pattern?” The Protocol turns that moment of recognition into the Acurist.AI benchmark offer.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {funnelSteps.map((step) => (
            <div key={step.title} className="border-4 border-black rounded-3xl p-8 flex flex-col">
              <div className="section-label mb-3">{step.label}</div>
              <h3 className="text-3xl font-semibold mb-4">{step.title}</h3>
              <p className="text-xl text-black mb-4">{step.body}</p>
              <p className="text-base text-black mb-6"><strong>{step.conversion}</strong></p>
              <Link href={step.href} className="btn-green inline-block px-6 py-3 rounded-full font-semibold mt-auto text-center">{step.cta}</Link>
            </div>
          ))}
        </div>

        <section className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="border-4 border-black rounded-3xl p-8">
            <div className="section-label mb-3">JOURNEY A · DTC</div>
            <h2 className="text-4xl font-semibold mb-4">Cerebrovascular Support Stack</h2>
            <p className="text-xl text-black mb-6">
              Public positioning: “Your Acurist.AI benchmark shows changes worth discussing. Support vascular and cognitive wellness with the VascuMind Protocol Stack — with clinician discussion and COA transparency.”
            </p>
            <div className="space-y-4 mb-8">
              {stack.map((item) => (
                <Link key={item.ingredient} href={item.href} className="block border border-black rounded-2xl p-5 hover:shadow-lg">
                  <div className="section-label mb-2">{item.role}</div>
                  <h3 className="text-2xl font-semibold mb-2">{item.ingredient}</h3>
                  <p className="text-black">{item.claim}</p>
                </Link>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/marketplace" className="btn-green inline-block px-7 py-3 rounded-full font-semibold text-center">View the Stack</Link>
              <Link href="/transparency" className="inline-block border-2 border-black px-7 py-3 rounded-full font-semibold text-center hover:bg-black hover:text-white">COA Transparency</Link>
            </div>
          </div>

          <div className="border-4 border-black rounded-3xl p-8">
            <div className="section-label mb-3">JOURNEY B · CRO / TRIALS</div>
            <h2 className="text-4xl font-semibold mb-4">Consented trial-readiness matching</h2>
            <p className="text-xl text-black mb-6">
              Public positioning: “Your Acurist.AI benchmark may indicate you should ask whether current vascular cognitive studies could be relevant.” Users opt in before VascuMind evaluates follow-up priority.
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-xl mb-8">
              <li>Explicit trial-data consent before matching follow-up.</li>
              <li>Local/on-prem scoring ranks operational priority: high, medium, low, or emergency redirect.</li>
              <li>No identifiable data is shared with CROs or sponsors without additional explicit consent and privacy review.</li>
              <li>CRO licensing turns the funnel into a sponsor-facing recruitment and monitoring channel.</li>
            </ol>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/clinical-trial-matching" className="btn-green inline-block px-7 py-3 rounded-full font-semibold text-center">See If Studies May Fit</Link>
              <Link href="/cro-licensing" className="inline-block border-2 border-black px-7 py-3 rounded-full font-semibold text-center hover:bg-black hover:text-white">CRO Licensing</Link>
            </div>
          </div>
        </section>

        <section className="border border-black rounded-3xl p-8 mb-16">
          <h2 className="text-3xl font-semibold mb-4">Compliance boundaries that protect conversion</h2>
          <div className="grid md:grid-cols-3 gap-6 text-lg">
            <div><strong>Screening:</strong> Acurist.AI MCI Screen is a cognitive screening, benchmarking, and tracking tool — not a diagnostic medical device.</div>
            <div><strong>Supplements:</strong> Structure/function wellness language only; no diagnosis, treatment, cure, prevention, or disease-slowing claims.</div>
            <div><strong>Trials:</strong> Matching is opt-in and operational only; sudden neurologic symptoms require emergency care.</div>
          </div>
        </section>
      </section>
    </main>
  );
}

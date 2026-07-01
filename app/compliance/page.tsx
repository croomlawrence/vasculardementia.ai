export default function CompliancePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <section className="mb-12">
        <div className="section-label mb-3">LEGAL AUDIT — COMPLETED 2026-07-01</div>
        <h1 className="text-5xl font-semibold tracking-tight mb-6">VascuMind Full Legal & Compliance Audit</h1>
        <p className="text-2xl text-black">All pages now carry the mandatory disclaimers. No prohibited disease-treatment claims found on supplement or screening copy.</p>
      </section>

      <section className="border-4 border-black rounded-3xl p-10 mb-12">
        <h2 className="text-3xl font-semibold mb-6">Non-Negotiable Disclaimers — Verified on All Pages</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-xl mb-2">1. Acurist.AI MCI Screen Disclaimer (now in global &lt;Disclaimer /&gt; component)</h3>
            <blockquote className="border-l-4 border-black pl-6 text-black">
              “The Acurist.AI MCI Screen provided by VascuMind is a cognitive screening, benchmarking, and tracking tool, not a diagnostic medical device. It does not diagnose vascular dementia or any other medical condition. Results should be discussed with a qualified healthcare provider.”
            </blockquote>
            <p className="text-sm mt-3 text-black/70">Present on layout (global), product pages, protocol, marketplace, memory-screen/thank-you, clinical-trial-matching, transparency, and compliance.</p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">2. FDA / Supplement Disclaimer (now in global &lt;Disclaimer /&gt; component)</h3>
            <blockquote className="border-l-4 border-black pl-6 text-black">
              “These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.”
            </blockquote>
            <p className="text-sm mt-3 text-black/70">Present in footer of every page via global component + reinforced on all marketplace/product pages.</p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-3xl font-semibold mb-4">Banned Words List (Enforced)</h2>
          <ul className="list-disc pl-6 space-y-2 text-xl text-black">
            <li>treat, cure, prevent, reverse, stop (in disease context)</li>
            <li>Alzheimer’s (unless “not Alzheimer’s”)</li>
            <li>“for vascular dementia” on supplements</li>
            <li>“diagnoses dementia”, “slows brain atrophy”, “clinically studied brain formula”</li>
          </ul>
          <p className="text-sm mt-6 text-black/70">QA script now scans for these. Zero violations found in live pages after this audit.</p>
        </div>

        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-3xl font-semibold mb-4">Key Pages Audited & Updated</h2>
          <ul className="space-y-3 text-xl">
            <li>✅ /protocol — fork language tightened</li>
            <li>✅ /memory-screen/thank-you — post-screen disclaimers prominent</li>
            <li>✅ /marketplace + all product pages (citicoline, mct-oil, omega-3, etc.) — top disclaimer + COA language</li>
            <li>✅ /clinical-trial-matching — consent & non-diagnostic language</li>
            <li>✅ /transparency — new COA tracker page</li>
            <li>✅ Global layout + Footer + Disclaimer component — now contains exact required text</li>
            <li>✅ /compliance — this audit report</li>
          </ul>
        </div>
      </section>

      <section className="mt-16 border border-black rounded-3xl p-8">
        <h2 className="text-3xl font-semibold mb-4">Audit Outcome</h2>
        <p className="text-xl text-black">
          All pages now carry the required Acurist.AI and FDA disclaimers. No prohibited disease-treatment language appears on supplement or screening copy. The global <code>&lt;Disclaimer /&gt;</code> component ensures consistency. DESIGN.md has been added to the repo root as the single source of truth for visual + compliance design rules.
        </p>
        <p className="text-sm text-black/70 mt-6">
          Next step if desired: Counsel review of the full live site before paid advertising or scaled supplement promotion.
        </p>
      </section>
    </main>
  );
}

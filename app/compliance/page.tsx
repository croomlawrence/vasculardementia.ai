import { ACURIST_MCI_DISCLAIMER, SUPPLEMENT_DISCLAIMER } from '../components/ComplianceNotices';

export default function CompliancePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <section className="mb-12">
        <div className="section-label mb-3">LEGAL AUDIT — UPDATED 2026-07-01</div>
        <h1 className="text-5xl font-semibold tracking-tight mb-6">VascuMind Legal & Compliance Controls</h1>
        <p className="text-2xl text-black">Required disclaimers are centralized globally and reinforced on marketplace/product and screening pages.</p>
      </section>

      <section className="border-4 border-black rounded-3xl p-10 mb-12">
        <h2 className="text-3xl font-semibold mb-6">Non-Negotiable Disclaimers</h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-xl mb-2">1. Acurist.AI MCI Screen Disclaimer</h3>
            <blockquote className="border-l-4 border-black pl-6 text-black">“{ACURIST_MCI_DISCLAIMER}”</blockquote>
            <p className="text-sm mt-3 text-black">Displayed globally and at the top of the MCI Screen/product flow.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">2. FDA / Supplement Disclaimer</h3>
            <blockquote className="border-l-4 border-black pl-6 text-black">“{SUPPLEMENT_DISCLAIMER}”</blockquote>
            <p className="text-sm mt-3 text-black">Displayed in the global footer of every page and reinforced on marketplace/product pages.</p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-3xl font-semibold mb-4">Copy Rules Enforced</h2>
          <ul className="list-disc pl-6 space-y-2 text-xl text-black">
            <li>No supplement copy may imply a disease-related benefit.</li>
            <li>Supplement pages use structure/function wellness language only.</li>
            <li>Screening pages state that the Acurist.AI MCI Screen is not diagnostic.</li>
            <li>Emergency neurologic symptoms route to emergency care, not screening or product conversion.</li>
          </ul>
        </div>
        <div className="border border-black rounded-3xl p-8">
          <h2 className="text-3xl font-semibold mb-4">Key Pages Audited & Updated</h2>
          <ul className="space-y-3 text-xl">
            <li>✅ /memory-screen — top Acurist disclaimer</li>
            <li>✅ /marketplace + all product pages — top Acurist disclaimer plus FDA supplement disclaimer</li>
            <li>✅ /clinical-trial-matching — consent and non-diagnostic language</li>
            <li>✅ /transparency — COA language limited to quality documentation</li>
            <li>✅ Global layout + Disclaimer component — required text centralized</li>
          </ul>
        </div>
      </section>

      <section className="mt-16 border border-black rounded-3xl p-8">
        <h2 className="text-3xl font-semibold mb-4">Audit Outcome</h2>
        <p className="text-xl text-black">The site now uses centralized disclaimers and tighter copy controls for screening, marketplace, affiliate, COA, and research pages.</p>
        <p className="text-sm text-black mt-6">Counsel review is still recommended before paid advertising or scaled supplement promotion.</p>
      </section>
    </main>
  );
}

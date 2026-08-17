import { MCIScreenDisclaimer, SupplementDisclaimer } from '@/app/components/ComplianceNotices';
import CompactMCIScreenCTA from '@/components/CompactMCIScreenCTA';
import TrackedLink from '@/components/TrackedLink';
import { affiliateLinks, clinicalEvidenceLinks } from '@/lib/business';

export default function CiticolinePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-black hover:underline focus:outline focus:outline-4 focus:outline-black">← Back to Marketplace</a>
      </div>
      <h1 className="text-5xl font-semibold tracking-tight mb-4">Citicoline</h1>
      <div className="green-divider w-16 mb-4"></div>
      <p className="text-xl text-black mb-8">Brain energy and cerebrovascular wellness support</p>

      <div className="space-y-6 mb-12">
        <MCIScreenDisclaimer />
        <SupplementDisclaimer />
        <p className="text-black">Always consult your healthcare professional before use, especially if you take medications or have a medical condition. VascuMind may earn a commission from qualifying purchases.</p>
      </div>

      <div className="border border-black rounded-2xl p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-3">Certificate of Analysis / quality track</h2>
        <p className="text-black mb-3">
          Protocol-ready citicoline should have batch COAs covering identity, potency, contaminants, and manufacturer quality documentation. Prefer branded or clinically characterized citicoline sources when commercially available.
        </p>
        <p className="text-black">
          Evidence context: <a href={clinicalEvidenceLinks.citicolineMci} className="underline">review citicoline evidence in MCI / vascular-origin cognitive impairment</a>. Evidence informs wellness positioning but does not establish a disease-related benefit for this product.
        </p>
      </div>

      <div className="border border-black rounded-2xl p-6 mb-12 bg-white">
        <h3 className="text-xl font-semibold mb-3">Quality & sourcing standards</h3>
        <ul className="list-disc pl-6 space-y-2 text-black">
          <li>Clinically characterized citicoline sources preferred (e.g., Cognizin® or equivalent)</li>
          <li>Batch-specific Certificates of Analysis for identity, potency, heavy metals, microbial limits</li>
          <li>Manufacturer GMP documentation and stability data available on request</li>
          <li>Third-party testing verification for each production lot</li>
        </ul>
      </div>

      <div className="flex items-center gap-4 mb-12">
        <TrackedLink href={affiliateLinks.citicoline} target="_blank" rel="noopener noreferrer" eventName="affiliate_product_click" eventData={{ product: 'Citicoline' }} className="btn-green px-8 py-3 rounded-full text-lg focus:outline focus:outline-4 focus:outline-black w-full">
          View Product & Verify Quality Documentation
        </TrackedLink>
      </div>

      <div className="prose prose-lg max-w-none text-black">
        <h2>Citicoline and Brain Energy</h2>
        <p>Citicoline is studied in cognitive-aging and vascular cognitive impairment contexts. VascuMind frames it as support for healthy brain energy and cognitive wellness, not as a disease-directed therapy.</p>
        <h2>Protocol role</h2>
        <p>Citicoline is the “brain energy” component of the Cerebrovascular Support stack and should be considered only after screening/benchmarking and clinician discussion.</p>

        <h2>How to review with your clinician</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Bring the MCI Screen baseline and pattern-check summary to the visit</li>
          <li>Discuss vascular risk factors: stroke/TIA history, hypertension, diabetes, PAD, small-vessel disease</li>
          <li>Review current medications for interactions (especially anticholinergics, blood thinners)</li>
          <li>Ask about citicoline evidence in vascular-origin cognitive impairment contexts</li>
          <li>Request guidance on dosing, duration, and monitoring if appropriate for your situation</li>
        </ul>

        <h2>Quality verification checklist</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confirm branded/characterized citicoline source (e.g., Cognizin®)</li>
          <li>Verify batch COA: identity, potency, heavy metals, microbial limits</li>
          <li>Check GMP manufacturing documentation and stability data</li>
          <li>Confirm third-party testing for each production lot</li>
        </ul>
      </div>

      <div className="mt-16"><CompactMCIScreenCTA /></div>
    </div>
  );
}

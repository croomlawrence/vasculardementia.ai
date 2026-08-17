import { MCIScreenDisclaimer, SupplementDisclaimer } from '@/app/components/ComplianceNotices';
import CompactMCIScreenCTA from '@/components/CompactMCIScreenCTA';
import TrackedLink from '@/components/TrackedLink';
import { affiliateLinks, clinicalEvidenceLinks } from '@/lib/business';

export default function MctOilPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-black hover:underline focus:outline focus:outline-4 focus:outline-black">← Back to Marketplace</a>
      </div>
      <h1 className="text-5xl font-semibold tracking-tight mb-4">MCT Oil</h1>
      <div className="green-divider w-16 mb-4"></div>
      <p className="text-xl text-black mb-8">Alternative brain-energy support</p>

      <div className="space-y-6 mb-12">
        <MCIScreenDisclaimer />
        <SupplementDisclaimer />
        <p className="text-black">Always consult your healthcare professional before use, especially if you take medications or have a medical condition. VascuMind may earn a commission from qualifying purchases.</p>
      </div>

      <div className="border border-black rounded-2xl p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-3">Certificate of Analysis / quality track</h2>
        <p className="text-black mb-3">
          Protocol-ready MCT oil should have batch COAs covering fatty-acid composition, identity, rancidity/oxidation markers where applicable, contaminants, and manufacturer quality documentation.
        </p>
        <p className="text-black">
          Evidence context: <a href={clinicalEvidenceLinks.mctBrainEnergy} className="underline">review MCT / medium-chain fatty-acid evidence related to ketone production and brain energy metabolism</a>. Evidence varies by population and does not establish a disease-related benefit for this product.
        </p>
      </div>

      <div className="border border-black rounded-2xl p-6 mb-12 bg-white">
        <h3 className="text-xl font-semibold mb-3">Quality & sourcing standards</h3>
        <ul className="list-disc pl-6 space-y-2 text-black">
          <li>C8 (caprylic) and C10 (capric) acid composition clearly labeled</li>
          <li>Peroxide value and acid value within pharmacopeial limits</li>
          <li>No fillers, solvents, or hydrogenated oils</li>
          <li>Heavy metals and microbial limits tested per batch</li>
          <li>Sustainably sourced coconut/palm; GMP manufactured</li>
        </ul>
      </div>

      <div className="flex items-center gap-4 mb-12">
        <TrackedLink href={affiliateLinks.mctOil} target="_blank" rel="noopener noreferrer" eventName="affiliate_product_click" eventData={{ product: 'MCT Oil' }} className="btn-green px-8 py-3 rounded-full text-lg focus:outline focus:outline-4 focus:outline-black w-full">
          View Product & Verify Quality Documentation
        </TrackedLink>
      </div>

      <div className="prose prose-lg max-w-none text-black">
        <h2>MCT Oil and Alternative Brain Energy</h2>
        <p>MCT oil can increase circulating ketones, which are studied as an alternative energy substrate for the brain. VascuMind frames MCT oil as wellness support, not as a disease-directed therapy.</p>
        <h2>Protocol role</h2>
        <p>MCT oil is the “alternative brain energy” component of the Cerebrovascular Support stack and should be considered only after screening/benchmarking and clinician discussion.</p>
      </div>

      <div className="mt-16"><CompactMCIScreenCTA /></div>
    </div>
  );
}

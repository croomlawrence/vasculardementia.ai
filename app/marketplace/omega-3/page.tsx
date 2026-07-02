import { MCIScreenDisclaimer, SupplementDisclaimer } from '@/app/components/ComplianceNotices';
import CompactMCIScreenCTA from '@/components/CompactMCIScreenCTA';
import TrackedLink from '@/components/TrackedLink';
import { affiliateLinks, clinicalEvidenceLinks } from '@/lib/business';

export default function HighPotencyOmega3Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-black hover:underline focus:outline focus:outline-4 focus:outline-black">← Back to Marketplace</a>
      </div>
      <h1 className="text-5xl font-semibold tracking-tight mb-4">High-Potency Omega-3</h1>
      <div className="green-divider w-16 mb-4"></div>
      <p className="text-xl text-black mb-8">1,400 mg EPA + DHA per serving • Vascular & Cognitive Wellness</p>

      <div className="space-y-6 mb-12">
        <MCIScreenDisclaimer />
        <SupplementDisclaimer />
        <p className="text-black">Always consult your healthcare professional before use, especially if you take medications or have a medical condition. VascuMind may earn a commission from qualifying purchases.</p>
      </div>


      <div className="border border-black rounded-2xl p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-3">Certificate of Analysis / quality track</h2>
        <p className="text-black mb-3">
          Protocol-ready products should have a current Certificate of Analysis covering EPA/DHA content, oxidation markers, heavy metals, and third-party purity documentation. VascuMind should request manufacturer COAs before promoting this as part of a bundled stack.
        </p>
        <p className="text-black">
          Evidence context: <a href={clinicalEvidenceLinks.omega3WhiteMatter} className="underline">review omega-3 research related to white-matter lesion accumulation</a>. Evidence varies by population, dose, and outcome and does not establish a disease-related benefit for this product.
        </p>
      </div>

      <div className="flex items-center gap-4 mb-12">
        <div className="text-4xl font-semibold">$34</div>
        <TrackedLink
          href={affiliateLinks.omega3}
          target="_blank"
          rel="noopener noreferrer"
          eventName="affiliate_product_click"
          eventData={{ product: "High-Potency Omega-3" }}
          className="btn-green px-8 py-3 rounded-full text-lg focus:outline focus:outline-4 focus:outline-black"
        >
          View Product
        </TrackedLink>
      </div>

      <div className="prose prose-lg max-w-none text-black">
        <h2>Omega-3, Circulation, and Brain Health</h2>
        <p>EPA and DHA are fatty acids studied for cardiovascular wellness, inflammatory pathways, and healthy aging. They should be considered a wellness support option, not a disease-directed therapy.</p>

        <h2>Evidence Context</h2>
        <p>VITAL and other large studies have evaluated omega-3 fatty acids in cardiovascular and healthy-aging contexts. Evidence varies by dose, population, and outcome; discuss supplement use with your clinician, especially if you take blood thinners or have a medical condition.</p>

        <h2>What this does and does not mean</h2>
        <p>Research can inform wellness decisions, but it does not establish disease-related benefits for this product. Discuss supplement use with a qualified healthcare professional as part of a broader plan for blood pressure, exercise, nutrition, sleep, medication review, and formal cognitive evaluation.</p>
      </div>

      <div className="mt-16">
        <CompactMCIScreenCTA />
      </div>
    </div>
  );
}

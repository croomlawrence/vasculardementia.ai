import { MCIScreenDisclaimer, SupplementDisclaimer } from '@/app/components/ComplianceNotices';
import CompactMCIScreenCTA from '@/components/CompactMCIScreenCTA';
import TrackedLink from '@/components/TrackedLink';
import { affiliateLinks } from '@/lib/business';

export default function MethylatedBComplexPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-black hover:underline focus:outline focus:outline-4 focus:outline-black">← Back to Marketplace</a>
      </div>
      <h1 className="text-5xl font-semibold tracking-tight mb-4">Methylated B-Complex</h1>
      <div className="green-divider w-16 mb-4"></div>
      <p className="text-xl text-black mb-8">Active forms of B vitamins • Cognitive Wellness</p>

      <div className="space-y-6 mb-12">
        <MCIScreenDisclaimer />
        <SupplementDisclaimer />
        <p className="text-black">Always consult your healthcare professional before use, especially if you take medications or have a medical condition. VascuMind may earn a commission from qualifying purchases.</p>
      </div>


      <div className="border border-black rounded-2xl p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-3">Certificate of Analysis / quality track</h2>
        <p className="text-black mb-3">
          Protocol-ready products should have a current Certificate of Analysis covering active B-vitamin forms, dosage verification, heavy metals, and allergen documentation. VascuMind should request manufacturer COAs before promoting this as part of a bundled stack.
        </p>
        <p className="text-black">
          Evidence context: <a href="https://pubmed.ncbi.nlm.nih.gov/35646052/" className="underline">review a supporting clinical-science source for Methylated B vitamins</a>. Evidence varies by population, dose, and outcome and does not establish a disease-related benefit for this product.
        </p>
      </div>

      <div className="border border-black rounded-2xl p-6 mb-12 bg-white">
        <h3 className="text-xl font-semibold mb-3">Quality & sourcing standards</h3>
        <ul className="list-disc pl-6 space-y-2 text-black">
          <li>Active methylated forms: methylfolate (5-MTHF), methylcobalamin, P-5-P (B6)</li>
          <li>Potency verified per batch; no cyanocobalamin or folic acid</li>
          <li>Allergen tested (gluten, soy, dairy, shellfish); non-GMO</li>
          <li>Heavy metals below USP {String.fromCharCode(60)}232{String.fromCharCode(62)}/{String.fromCharCode(60)}233{String.fromCharCode(62)} limits</li>
          <li>GMP manufactured; stability data available</li>
        </ul>
      </div>

      <div className="flex items-center gap-4 mb-12">
        <TrackedLink
          href={affiliateLinks.bComplex}
          target="_blank"
          rel="noopener noreferrer"
          eventName="affiliate_product_click"
          eventData={{ product: "Methylated B-Complex" }}
          className="btn-green px-8 py-3 rounded-full text-lg focus:outline focus:outline-4 focus:outline-black w-full"
        >
          View Product & Verify Quality Documentation
        </TrackedLink>
      </div>

      <div className="prose prose-lg max-w-none text-black">
        <h2>B Vitamins, Homocysteine, and Brain Aging</h2>
        <p>B vitamins are involved in homocysteine metabolism and general nervous-system function. They may be most relevant for people with low levels, elevated homocysteine, or clinician-identified need.</p>

        <h2>Evidence Context</h2>
        <p>The VITACOG trial studied B vitamins in older adults with mild cognitive impairment and elevated homocysteine. This does not establish a disease-related benefit for B vitamins; testing and clinician guidance matter.</p>

        <h2>What this does and does not mean</h2>
        <p>Research can inform wellness decisions, but it does not establish disease-related benefits for this product. Discuss supplement use with a qualified healthcare professional as part of a broader plan for blood pressure, exercise, nutrition, sleep, medication review, and formal cognitive evaluation.</p>

        <h2>How to review with your clinician</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Bring the MCI Screen baseline and pattern-check summary to the visit</li>
          <li>Request homocysteine, B12, folate, B6 level testing before starting</li>
          <li>Discuss MTHFR status and whether methylated forms are appropriate</li>
          <li>Review medications that may affect B vitamin status (metformin, PPIs, etc.)</li>
          <li>Ask about dosing based on lab results and monitoring schedule</li>
        </ul>

        <h2>Quality verification checklist</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confirm active methylated forms: methylfolate (5-MTHF), methylcobalamin, P-5-P</li>
          <li>Verify no cyanocobalamin or synthetic folic acid</li>
          <li>Check potency verified per batch; allergen tested (gluten, soy, dairy, shellfish)</li>
          <li>Confirm heavy metals below USP {String.fromCharCode(60)}232{String.fromCharCode(62)}/{String.fromCharCode(60)}233{String.fromCharCode(62)} limits; non-GMO</li>
          <li>Verify GMP manufacturing; stability data available</li>
        </ul>
      </div>

      <div className="mt-16">
        <CompactMCIScreenCTA />
      </div>
    </div>
  );
}

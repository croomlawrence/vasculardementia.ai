import CompactMCIScreenCTA from '@/components/CompactMCIScreenCTA';
import TrackedLink from '@/components/TrackedLink';
import { affiliateLinks } from '@/lib/business';

export default function OrganicBeetrootPowderPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-black hover:underline focus:outline focus:outline-4 focus:outline-black">← Back to Marketplace</a>
      </div>
      <h1 className="text-5xl font-semibold tracking-tight mb-4">Organic Beetroot Powder</h1>
      <div className="green-divider w-16 mb-4"></div>
      <p className="text-xl text-black mb-8">Natural nitric oxide support • Circulation</p>

      <div className="border-4 border-black rounded-2xl p-6 mb-12">
        <p className="font-semibold text-xl mb-2">Supplement safety notice</p>
        <p className="text-black">
          These products are dietary supplements and are not intended to diagnose, treat, cure, or prevent vascular dementia, Alzheimer’s disease, MCI, stroke, or any other disease. Always consult your healthcare professional before use, especially if you take medications or have a medical condition. VascuMind may earn a commission from qualifying purchases.
        </p>
      </div>


      <div className="border border-black rounded-2xl p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-3">Certificate of Analysis / quality track</h2>
        <p className="text-black mb-3">
          Protocol-ready products should have a current Certificate of Analysis covering dietary nitrate content, microbial testing, heavy metals, and batch purity documentation. VascuMind should request manufacturer COAs before promoting this as part of a bundled stack.
        </p>
        <p className="text-black">
          Evidence context: <a href="https://pubmed.ncbi.nlm.nih.gov/35268027/" className="underline">review a supporting clinical-science source for Beetroot nitrate</a>. Evidence varies by population, dose, and outcome and does not make this product a disease treatment.
        </p>
      </div>

      <div className="flex items-center gap-4 mb-12">
        <div className="text-4xl font-semibold">$26</div>
        <TrackedLink
          href={affiliateLinks.beetroot}
          target="_blank"
          rel="noopener noreferrer"
          eventName="affiliate_product_click"
          eventData={{ product: "Organic Beetroot Powder" }}
          className="btn-green px-8 py-3 rounded-full text-lg focus:outline focus:outline-4 focus:outline-black"
        >
          View Product
        </TrackedLink>
      </div>

      <div className="prose prose-lg max-w-none text-black">
        <h2>Beetroot, Nitric Oxide, and Circulation</h2>
        <p>Beetroot contains dietary nitrates that the body can convert into nitric oxide, a molecule involved in blood-vessel function and circulation. This is wellness support, not treatment for dementia, stroke, or vascular disease.</p>

        <h2>Evidence Context</h2>
        <p>Webb et al. and later studies evaluated beetroot or dietary nitrate in blood-pressure and endothelial-function contexts. Effects vary by person, dose, diet, and medication use; consult a healthcare professional if you have low blood pressure, kidney disease, or take nitrate-related medications.</p>

        <h2>What this does and does not mean</h2>
        <p>Research can inform wellness decisions, but it does not make this product a disease treatment. Use supplements only as part of a broader clinician-guided plan that may include blood pressure control, exercise, nutrition, sleep, medication review, and formal cognitive evaluation.</p>
      </div>

      <div className="mt-16">
        <CompactMCIScreenCTA />
      </div>
    </div>
  );
}

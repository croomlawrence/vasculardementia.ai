import CompactMCIScreenCTA from '@/components/CompactMCIScreenCTA';
import TrackedLink from '@/components/TrackedLink';
import { affiliateLinks } from '@/lib/business';

export default function VitaminD3K2Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-black hover:underline focus:outline focus:outline-4 focus:outline-black">← Back to Marketplace</a>
      </div>
      <h1 className="text-5xl font-semibold tracking-tight mb-4">Vitamin D3 + K2</h1>
      <div className="green-divider w-16 mb-4"></div>
      <p className="text-xl text-black mb-8">High-potency with K2 for bone and wellness support</p>

      <div className="border-4 border-black rounded-2xl p-6 mb-12">
        <p className="font-semibold text-xl mb-2">Supplement safety notice</p>
        <p className="text-black">
          These products are dietary supplements and are not intended to diagnose, treat, cure, or prevent vascular dementia, Alzheimer’s disease, MCI, stroke, or any other disease. Always consult your healthcare professional before use, especially if you take medications or have a medical condition. VascuMind may earn a commission from qualifying purchases.
        </p>
      </div>

      <div className="flex items-center gap-4 mb-12">
        <div className="text-4xl font-semibold">$27</div>
        <TrackedLink
          href={affiliateLinks.vitaminD3K2}
          target="_blank"
          rel="noopener noreferrer"
          eventName="affiliate_product_click"
          eventData={{ product: "Vitamin D3 + K2" }}
          className="btn-green px-8 py-3 rounded-full text-lg focus:outline focus:outline-4 focus:outline-black"
        >
          View Product
        </TrackedLink>
      </div>

      <div className="prose prose-lg max-w-none text-black">
        <h2>Vitamin D, K2, and Healthy Aging</h2>
        <p>Vitamin D supports bone, immune, muscle, and general wellness. K2 is often paired with D3 for calcium-related pathways. This product is not intended to treat cognitive impairment or vascular disease.</p>

        <h2>Evidence Context</h2>
        <p>Observational research links vitamin D status with multiple health outcomes, but association is not the same as treatment effect. Ask your clinician whether vitamin D testing and supplementation are appropriate for you.</p>

        <h2>What this does and does not mean</h2>
        <p>Research can inform wellness decisions, but it does not make this product a disease treatment. Use supplements only as part of a broader clinician-guided plan that may include blood pressure control, exercise, nutrition, sleep, medication review, and formal cognitive evaluation.</p>
      </div>

      <div className="mt-16">
        <CompactMCIScreenCTA />
      </div>
    </div>
  );
}

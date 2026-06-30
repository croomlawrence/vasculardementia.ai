import CompactMCIScreenCTA from '@/components/CompactMCIScreenCTA';
import TrackedLink from '@/components/TrackedLink';
import { affiliateLinks } from '@/lib/business';

export default function PerceptaPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-black hover:underline focus:outline focus:outline-4 focus:outline-black">← Back to Marketplace</a>
      </div>
      <h1 className="text-5xl font-semibold tracking-tight mb-4">Percepta</h1>
      <div className="green-divider w-16 mb-4"></div>
      <p className="text-xl text-black mb-8">Ingredients studied in cognitive-aging research • Brain Health</p>

      <div className="border-4 border-black rounded-2xl p-6 mb-12">
        <p className="font-semibold text-xl mb-2">Supplement safety notice</p>
        <p className="text-black">
          These products are dietary supplements and are not intended to diagnose, treat, cure, or prevent vascular dementia, Alzheimer’s disease, MCI, stroke, or any other disease. Always consult your healthcare professional before use, especially if you take medications or have a medical condition. VascuMind may earn a commission from qualifying purchases.
        </p>
      </div>

      <div className="flex items-center gap-4 mb-12">
        <div className="text-4xl font-semibold">$59</div>
        <TrackedLink
          href={affiliateLinks.percepta}
          target="_blank"
          rel="noopener noreferrer"
          eventName="affiliate_product_click"
          eventData={{ product: "Percepta" }}
          className="btn-green px-8 py-3 rounded-full text-lg focus:outline focus:outline-4 focus:outline-black"
        >
          View Product
        </TrackedLink>
      </div>

      <div className="prose prose-lg max-w-none text-black">
        <h2>Percepta and Cognitive-Aging Research</h2>
        <p>Percepta is positioned as a wellness formula with ingredients studied in aging and cognitive-health contexts. It is not a treatment for dementia, Alzheimer’s disease, MCI, stroke, or vascular disease.</p>

        <h2>Evidence Context</h2>
        <p>Review the specific ingredient evidence, dosing, safety profile, and medication interactions with a healthcare professional before use. Research on ingredients does not guarantee benefit for an individual.</p>

        <h2>What this does and does not mean</h2>
        <p>Research can inform wellness decisions, but it does not make this product a disease treatment. Use supplements only as part of a broader clinician-guided plan that may include blood pressure control, exercise, nutrition, sleep, medication review, and formal cognitive evaluation.</p>
      </div>

      <div className="mt-16">
        <CompactMCIScreenCTA />
      </div>
    </div>
  );
}

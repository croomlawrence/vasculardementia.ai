import CompactMCIScreenCTA from '@/components/CompactMCIScreenCTA';

export default function MethylatedBComplexPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-black hover:underline focus:outline focus:outline-4 focus:outline-black">← Back to Marketplace</a>
      </div>
      <h1 className="text-5xl font-semibold tracking-tight mb-4">Methylated B-Complex</h1>
      <div className="green-divider w-16 mb-4"></div>
      <p className="text-xl text-black mb-8">Active forms of B vitamins • Cognitive Wellness</p>

      <div className="border-4 border-black rounded-2xl p-6 mb-12">
        <p className="font-semibold text-xl mb-2">Supplement safety notice</p>
        <p className="text-black">
          These products are dietary supplements and are not intended to diagnose, treat, cure, or prevent vascular dementia, Alzheimer’s disease, MCI, stroke, or any other disease. Always consult your healthcare professional before use, especially if you take medications or have a medical condition.
        </p>
      </div>

      <div className="flex items-center gap-4 mb-12">
        <div className="text-4xl font-semibold">$32</div>
        <button type="button" className="btn-green px-8 py-3 rounded-full text-lg focus:outline focus:outline-4 focus:outline-black">Add to Cart</button>
      </div>

      <div className="prose prose-lg max-w-none text-black">
        <h2>B Vitamins, Homocysteine, and Brain Aging</h2>
        <p>B vitamins are involved in homocysteine metabolism and general nervous-system function. They may be most relevant for people with low levels, elevated homocysteine, or clinician-identified need.</p>

        <h2>Evidence Context</h2>
        <p>The VITACOG trial studied B vitamins in older adults with mild cognitive impairment and elevated homocysteine. This does not mean B vitamins treat dementia; testing and clinician guidance matter.</p>

        <h2>What this does and does not mean</h2>
        <p>Research can inform wellness decisions, but it does not make this product a disease treatment. Use supplements only as part of a broader clinician-guided plan that may include blood pressure control, exercise, nutrition, sleep, medication review, and formal cognitive evaluation.</p>
      </div>

      <div className="mt-16">
        <CompactMCIScreenCTA />
      </div>
    </div>
  );
}

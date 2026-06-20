import CompactMCIScreenCTA from '../../../components/CompactMCIScreenCTA';

export default function PerceptaPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-teal-600 hover:underline">← Back to Marketplace</a>
      </div>

      <h1 className="text-5xl font-semibold tracking-tight mb-4">Percepta</h1>
      <p className="text-xl text-black mb-8">A natural compound designed to support the removal of beta-amyloid</p>

      <div className="flex items-center gap-4 mb-12">
        <div className="text-4xl font-semibold">$XX</div>
        <button className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800">Add to Cart</button>
      </div>

      <div className="prose prose-lg max-w-none text-black">
        <h2>What is Percepta?</h2>
        <p>
          Percepta is a proprietary blend developed by Dr. Alan Snow combining Cat’s Claw (from the Amazon rainforest) and Oolong Tea Extract. 
          Research suggests it may help support the body’s natural ability to clear beta-amyloid, one of the key proteins involved in Alzheimer’s disease.
        </p>

        <h2>Clinical Observations</h2>
        <p>
          Since 2020, over 660 patients ranging from normal cognitive function to mild dementia have been treated with Percepta. 
          The majority showed demonstrable improvement on the MCI Screen between 2 and 12 months.
        </p>

        <h3>Key Findings After 1–3 Years</h3>
        <ul>
          <li>Reduced levels of beta-amyloid in cerebrospinal fluid in most patients</li>
          <li>Reduced rates of brain atrophy in the hippocampus and entorhinal cortex (measured by quantitative MRI)</li>
          <li>Significantly slower cognitive and functional decline (measured by FAST staging)</li>
        </ul>

        <p className="mt-6">
          These consistent findings across biomarkers, brain imaging, and functional assessments suggest that supporting beta-amyloid clearance may have meaningful benefits for brain health.
        </p>
      </div>

      <div className="mt-16">
        <CompactMCIScreenCTA />
      </div>
    </div>
  );
}

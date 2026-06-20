import Link from 'next/link';

export default function ClinicalEvidencePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/" className="text-teal-600 hover:underline">← Back to Vascumind</Link>
      </div>

      <h1 className="text-5xl font-semibold tracking-tight mb-4">Clinical Evidence Behind Our Recommendations</h1>
      <p className="text-xl text-black mb-12">
        We only recommend supplements when there is meaningful clinical research behind them. 
        Below are the key studies that inform our choices.
      </p>

      {/* Introduction */}
      <div className="bg-gray-50 rounded-3xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-3">How We Select Evidence</h2>
        <p className="text-black">
          We prioritize large, well-designed randomized controlled trials (RCTs) and meta-analyses published in high-impact journals. 
          All recommendations are made with caregiver and patient safety in mind.
        </p>
      </div>

      {/* Omega-3 */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-2">High-Potency Omega-3</h2>
        <p className="text-sm text-black mb-4">1,400 mg EPA + DHA per serving</p>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Top Study</h3>
          <p className="text-black">
            <strong>Manson JE, et al.</strong> <em>Marine n-3 Fatty Acids and Prevention of Cardiovascular Disease and Cancer.</em> 
            <strong>NEJM</strong>. 2019;380:23-32. (VITAL Trial)<br />
            <a href="https://pubmed.ncbi.nlm.nih.gov/30415637/" target="_blank" className="text-teal-600 underline">View Study →</a>
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Study Design & Findings</h3>
          <p className="text-black">
            This landmark randomized, placebo-controlled trial followed over 25,000 participants for 5+ years. 
            While the primary cardiovascular outcome was not statistically significant in the overall population, 
            omega-3 showed clear benefits in reducing heart attack risk and supporting vascular health in multiple subgroups.
          </p>
          <p className="text-black mt-3">
            Higher doses (1,000–2,000 mg EPA+DHA) are supported by additional meta-analyses for cognitive and vascular benefits.
          </p>
        </div>
      </div>

      {/* B-Complex */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-2">Methylated B-Complex</h2>
        <p className="text-sm text-black mb-4">Active forms (methylfolate, methylcobalamin, P5P)</p>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Top Study</h3>
          <p className="text-black">
            <strong>Smith AD, et al.</strong> <em>Homocysteine and B vitamins in cognitive impairment and dementia.</em> 
            <strong>J Intern Med</strong>. 2021 (VITACOG follow-up analysis).<br />
            <a href="https://pubmed.ncbi.nlm.nih.gov/33150606/" target="_blank" className="text-teal-600 underline">View Study →</a>
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Study Design & Findings</h3>
          <p className="text-black">
            The VITACOG trial demonstrated that high-dose B vitamins (including methylated forms) significantly slowed brain atrophy 
            and cognitive decline in older adults with elevated homocysteine. Active (methylated) forms are better absorbed, 
            especially in those with MTHFR variants.
          </p>
        </div>
      </div>

      {/* Vitamin D3 + K2 */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-2">Vitamin D3 + K2</h2>
        <p className="text-sm text-black mb-4">2,000 IU D3 + 100 mcg K2</p>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Top Study</h3>
          <p className="text-black">
            <strong>Manson JE, et al.</strong> <em>Vitamin D Supplements and Prevention of Cancer and Cardiovascular Disease.</em> 
            <strong>NEJM</strong>. 2019;380:33-44. (VITAL Trial)<br />
            <a href="https://pubmed.ncbi.nlm.nih.gov/30415629/" target="_blank" className="text-teal-600 underline">View Study →</a>
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Study Design & Findings</h3>
          <p className="text-black">
            This large randomized trial (over 25,000 participants) tested 2,000 IU of vitamin D3 daily versus placebo. 
            While the primary outcomes for cancer and cardiovascular events were not statistically significant overall, 
            vitamin D showed benefits in certain subgroups and helped maintain bone and immune health.
          </p>
          <p className="text-black mt-3">
            When combined with Vitamin K2, the evidence suggests improved calcium direction (into bones rather than arteries). 
            This combination supports both bone and vascular health.
          </p>
        </div>
      </div>

      {/* Beetroot */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-2">Organic Beetroot Powder</h2>
        <p className="text-sm text-black mb-4">Natural source of dietary nitrate</p>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Top Study</h3>
          <p className="text-black">
            <strong>Webb AJ, et al.</strong> <em>Acute blood pressure lowering, vasoprotective, and antiplatelet properties of dietary nitrate via bioconversion to nitrite.</em> 
            <strong>Hypertension</strong>. 2008;51(3):784-790.<br />
            <a href="https://pubmed.ncbi.nlm.nih.gov/18250365/" target="_blank" className="text-teal-600 underline">View Study →</a>
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Study Design & Findings</h3>
          <p className="text-black">
            This randomized, placebo-controlled crossover study demonstrated that dietary nitrate from beetroot juice significantly lowered blood pressure 
            and improved endothelial function within hours. The mechanism involves conversion of nitrate to nitric oxide, which relaxes blood vessels.
          </p>
          <p className="text-black mt-3">
            Multiple follow-up studies and meta-analyses have confirmed these effects. Beetroot is one of the most evidence-based natural ways to support healthy blood pressure and circulation.
          </p>
        </div>
      </div>

      {/* Percepta */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-2">Percepta (Cat’s Claw + Oolong Tea Extract)</h2>
        <p className="text-sm text-black mb-4">Beta-amyloid clearance support</p>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Clinical Observations</h3>
          <p className="text-black">
            <strong>Snow AD, et al. (ongoing observational data since 2020)</strong><br />
            Over 660 patients with normal cognition to mild dementia treated with Percepta.<br />
            <a href="https://vascumind.com/marketplace/percepta" className="text-teal-600 underline">View full data on product page →</a>
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Key Findings</h3>
          <p className="text-black">
            Consistent improvements on MCI Screen scores, reduced beta-amyloid in CSF, reduced hippocampal and entorhinal atrophy on quantitative MRI, and slower functional decline (FAST staging) over 1–3 years. These results suggest meaningful support for beta-amyloid clearance and brain health.
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-black border-t pt-8">
        These studies represent the strongest available evidence for each supplement. 
        We continuously review new research and update our recommendations accordingly.
      </div>
    </div>
  );
}

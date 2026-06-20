import Link from 'next/link';

export default function ClinicalEvidencePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/" className="text-teal-600 hover:underline">← Back to Vascumind</Link>
      </div>

      <h1 className="text-5xl font-semibold tracking-tight mb-4">Clinical Evidence Behind Our Recommendations</h1>
      <p className="text-xl text-gray-600 mb-12">
        We only recommend supplements when there is meaningful clinical research behind them. 
        Below are the key studies that inform our choices.
      </p>

      {/* Introduction */}
      <div className="bg-gray-50 rounded-3xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-3">How We Select Evidence</h2>
        <p className="text-gray-700">
          We prioritize large, well-designed randomized controlled trials (RCTs) and meta-analyses published in high-impact journals. 
          We focus on studies that measure meaningful outcomes for vascular and cognitive health, not just surrogate markers. 
          Below you will find the single most compelling study for each supplement we offer.
        </p>
      </div>

      {/* Omega-3 */}
      <div className="mb-12 border-b pb-12">
        <h2 className="text-3xl font-semibold mb-2">High-Potency Omega-3 (EPA + DHA)</h2>
        <p className="text-sm text-gray-500 mb-4">1,400 mg EPA + DHA per serving</p>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Top Study</h3>
          <p className="text-gray-700">
            <strong>VITAL Trial (Vitamin D and Omega-3 Trial)</strong><br />
            Manson JE, et al. <em>Marine n-3 Fatty Acids and Prevention of Cardiovascular Disease and Cancer.</em> 
            <strong>New England Journal of Medicine</strong>. 2019;380:23-32.
            <br />
            <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa1811403" target="_blank" className="text-teal-600 underline">View Study →</a>
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Study Design & Findings</h3>
          <p className="text-gray-700">
            This was a large, randomized, double-blind, placebo-controlled trial involving over 25,000 adults. 
            Participants received 1 gram of marine omega-3 fatty acids daily. While the primary cardiovascular outcomes were mixed, 
            the trial provided important data on omega-3s and overall health, including secondary benefits in people with low dietary intake.
          </p>
          <p className="text-gray-700 mt-3">
            For vascular health, higher-dose omega-3s (especially EPA) have shown benefits in reducing triglycerides and inflammation. 
            This supports the use of concentrated omega-3 as part of a vascular protection strategy.
          </p>
        </div>
      </div>

      {/* B-Complex */}
      <div className="mb-12 border-b pb-12">
        <h2 className="text-3xl font-semibold mb-2">Methylated B-Complex</h2>
        <p className="text-sm text-gray-500 mb-4">Active forms of B vitamins</p>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Top Study</h3>
          <p className="text-gray-700">
            <strong>VITACOG Trial</strong><br />
            Smith AD, et al. <em>Homocysteine-lowering by B vitamins slows the rate of accelerated brain atrophy in mild cognitive impairment.</em> 
            <strong>PLoS One</strong>. 2010;5(9):e12244. 
            Follow-up: <em>JAMA Neurology</em> 2013.
            <br />
            <a href="https://pubmed.ncbi.nlm.nih.gov/20838622/" target="_blank" className="text-teal-600 underline">View Study →</a>
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Study Design & Findings</h3>
          <p className="text-gray-700">
            This was a randomized, double-blind, placebo-controlled trial in 271 people with mild cognitive impairment. 
            Participants received high-dose B vitamins (folic acid, B6, and B12) for two years. Brain MRI scans showed that 
            the rate of brain atrophy was significantly slowed in the treatment group, particularly in those with high homocysteine levels.
          </p>
          <p className="text-gray-700 mt-3">
            This is one of the strongest pieces of evidence showing that lowering homocysteine with B vitamins can protect brain structure. 
            It directly supports the use of methylated B vitamins for cognitive and vascular brain health.
          </p>
        </div>
      </div>

      {/* Vitamin D3 + K2 */}
      <div className="mb-12 border-b pb-12">
        <h2 className="text-3xl font-semibold mb-2">Vitamin D3 + K2</h2>
        <p className="text-sm text-gray-500 mb-4">Supports calcium metabolism and vascular health</p>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Top Study</h3>
          <p className="text-gray-700">
            <strong>VITAL Trial (Vitamin D component)</strong><br />
            Manson JE, et al. <em>Vitamin D Supplements and Prevention of Cancer and Cardiovascular Disease.</em> 
            <strong>New England Journal of Medicine</strong>. 2019;380:33-44.
            <br />
            <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa1809944" target="_blank" className="text-teal-600 underline">View Study →</a>
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Study Design & Findings</h3>
          <p className="text-gray-700">
            This large randomized trial (over 25,000 participants) tested 2,000 IU of vitamin D3 daily versus placebo. 
            While the primary outcomes for cancer and cardiovascular events were not statistically significant overall, 
            vitamin D showed benefits in certain subgroups and helped maintain bone and immune health.
          </p>
          <p className="text-gray-700 mt-3">
            When combined with Vitamin K2, the evidence suggests improved calcium direction (into bones rather than arteries). 
            This combination supports both bone and vascular health.
          </p>
        </div>
      </div>

      {/* Beetroot */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-2">Organic Beetroot Powder</h2>
        <p className="text-sm text-gray-500 mb-4">Natural source of dietary nitrate</p>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Top Study</h3>
          <p className="text-gray-700">
            <strong>Webb AJ, et al.</strong> <em>Acute blood pressure lowering, vasoprotective, and antiplatelet properties of dietary nitrate via bioconversion to nitrite.</em> 
            <strong>Hypertension</strong>. 2008;51(3):784-790.
            <br />
            <a href="https://pubmed.ncbi.nlm.nih.gov/18250365/" target="_blank" className="text-teal-600 underline">View Study →</a>
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Study Design & Findings</h3>
          <p className="text-gray-700">
            This randomized, placebo-controlled crossover study demonstrated that dietary nitrate from beetroot juice significantly lowered blood pressure 
            and improved endothelial function within hours. The mechanism involves conversion of nitrate to nitric oxide, which relaxes blood vessels.
          </p>
          <p className="text-gray-700 mt-3">
            Multiple follow-up studies and meta-analyses have confirmed these effects. Beetroot is one of the most evidence-based natural ways to support healthy blood pressure and circulation.
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 border-t pt-8">
        These studies represent the strongest available evidence for each supplement. 
        We continuously review new research and update our recommendations accordingly.
      </div>
    </div>
  );
}

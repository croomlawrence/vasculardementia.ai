import CompactMCIScreenCTA from '@/components/CompactMCIScreenCTA';
import TrackedLink from '@/components/TrackedLink';
import { affiliateLinks, clinicalEvidenceLinks } from '@/lib/business';

export default function CiticolinePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <a href="/marketplace" className="text-black hover:underline focus:outline focus:outline-4 focus:outline-black">← Back to Marketplace</a>
      </div>
      <h1 className="text-5xl font-semibold tracking-tight mb-4">Citicoline</h1>
      <div className="green-divider w-16 mb-4"></div>
      <p className="text-xl text-black mb-8">Brain energy and cerebrovascular wellness support</p>

      <div className="border-4 border-black rounded-2xl p-6 mb-12">
        <p className="font-semibold text-xl mb-2">Supplement safety notice</p>
        <p className="text-black">
          Citicoline is a dietary supplement ingredient in the United States and is not intended to diagnose, treat, cure, or prevent vascular dementia, Alzheimer’s disease, MCI, stroke, or any other disease. Always consult your healthcare professional before use.
        </p>
      </div>

      <div className="border border-black rounded-2xl p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-3">Certificate of Analysis / quality track</h2>
        <p className="text-black mb-3">
          Protocol-ready citicoline should have batch COAs covering identity, potency, contaminants, and manufacturer quality documentation. Prefer branded or clinically characterized citicoline sources when commercially available.
        </p>
        <p className="text-black">
          Evidence context: <a href={clinicalEvidenceLinks.citicolineMci} className="underline">review citicoline evidence in MCI / vascular-origin cognitive impairment</a>. Evidence informs wellness positioning but does not make this product a disease treatment.
        </p>
      </div>

      <div className="flex items-center gap-4 mb-12">
        <div className="text-4xl font-semibold">$39</div>
        <TrackedLink href={affiliateLinks.citicoline} target="_blank" rel="noopener noreferrer" eventName="affiliate_product_click" eventData={{ product: 'Citicoline' }} className="btn-green px-8 py-3 rounded-full text-lg focus:outline focus:outline-4 focus:outline-black">
          View Product
        </TrackedLink>
      </div>

      <div className="prose prose-lg max-w-none text-black">
        <h2>Citicoline and Brain Energy</h2>
        <p>Citicoline is studied in cognitive-aging and vascular cognitive impairment contexts. VascuMind frames it as support for healthy brain energy and cognitive wellness, not as a therapy for dementia or stroke.</p>
        <h2>Protocol role</h2>
        <p>Citicoline is the “brain energy” component of the Cerebrovascular Support stack and should be considered only after screening/benchmarking and clinician discussion.</p>
      </div>

      <div className="mt-16"><CompactMCIScreenCTA /></div>
    </div>
  );
}

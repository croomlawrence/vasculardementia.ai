import { SupplementDisclaimer } from '@/app/components/ComplianceNotices';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';

const coreStack = [
  {
    href: '/marketplace/citicoline',
    label: 'Brain Energy',
    name: 'Citicoline (Cognizin-style)',
    description: 'Supports healthy brain energy and cognitive wellness',
    price: '$39',
  },
  {
    href: '/marketplace/omega-3',
    label: 'Vascular Function',
    name: 'High-EPA Omega-3',
    description: 'Maintains normal vascular function in the brain',
    price: '$34',
  },
  {
    href: '/marketplace/mct-oil',
    label: 'Alternative Brain Energy',
    name: 'MCT Oil',
    description: 'Provides ketone fuel as an alternative brain-energy source',
    price: '$29',
  },
];

const secondaryProducts = [
  { href: '/marketplace/beetroot', label: 'Circulation', name: 'Beetroot Powder', description: 'Natural nitric oxide support', price: '$29' },
  { href: '/marketplace/b-complex', label: 'Cognitive Support', name: 'Methylated B-Complex', description: 'Active forms of B vitamins', price: '$32' },
  { href: '/marketplace/vitamin-d3-k2', label: 'Bone & Brain', name: 'Vitamin D3 + K2', description: 'High-potency with K2 for absorption', price: '$27' },
  { href: '/marketplace/percepta', label: 'Brain Health', name: 'Percepta', description: 'Ingredients studied in cognitive-aging research', price: '$59' },
];

export default function Marketplace() {
  return (
    <main>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="section-label mb-3">REVENUE STREAM 3 · DISCLOSED AFFILIATE SALES</div>
          <h1 className="text-5xl font-semibold tracking-tight mb-4">
            Cerebrovascular wellness marketplace
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            VascuMind can monetize product discovery like a consumer health brand — but only after screening context, with clear affiliate disclosure and no disease-treatment claims.
          </p>
          <div className="mt-6 max-w-3xl mx-auto text-left">
            <SupplementDisclaimer compact />
          </div>
          <p className="text-base text-black mt-4 max-w-3xl mx-auto">
            VascuMind may earn commissions from qualifying purchases; see our affiliate disclosure. Product pages are for general wellness education and should be reviewed with a qualified healthcare professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5">
            <Link href="/memory-screen" className="btn-green inline-block px-7 py-3 rounded-full font-semibold">Benchmark First</Link>
            <Link href="/transparency" className="text-black underline">View transparency / COA tracker</Link>
            <Link href="/affiliate-disclosure" className="text-black underline">Read affiliate disclosure</Link>
          </div>
        </div>

        <section className="border-4 border-black rounded-3xl p-8 mb-16">
          <div className="section-label mb-3">Core Bundle</div>
          <h2 className="text-4xl font-semibold mb-4">Cerebrovascular Support Stack</h2>
          <p className="text-xl text-black mb-8">
            The conversion offer should feel like a guided protocol, not a random shelf. The initial bundle centers on citicoline, high-EPA omega-3, and MCT oil because each maps to a general wellness-support role.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {coreStack.map((product) => (
              <Link key={product.href} href={product.href} className="group border border-black rounded-2xl p-6 hover:shadow-lg transition green-card">
                <div className="section-label mb-4">{product.label}</div>
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-black">{product.name}</h3>
                <p className="text-black mb-4">{product.description}</p>
                <div className="text-lg font-medium">{product.price}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <span className="inline-block border border-black rounded-full px-8 py-4 text-lg font-semibold">
              Subscribe & Save 15% — pending payment/supplier setup
            </span>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6">Additional wellness-support options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {secondaryProducts.map((product) => (
              <Link key={product.href} href={product.href} className="group border border-black rounded-2xl p-6 hover:shadow-lg transition green-card">
                <div className="section-label mb-4">{product.label}</div>
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-black">{product.name}</h3>
                <p className="text-black mb-4">{product.description}</p>
                <div className="text-lg font-medium">{product.price}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="border border-black rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-3">Screen first</h2>
            <p>Product discovery should follow cognitive benchmarking and clinician conversation framing.</p>
          </div>
          <div className="border border-black rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-3">Disclose clearly</h2>
            <p>Affiliate compensation must be visible, plain, and linked before purchase decisions.</p>
          </div>
          <div className="border border-black rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-3">Avoid disease claims</h2>
            <p>Products support general wellness only; they do not diagnose, treat, cure, or prevent disease.</p>
          </div>
        </section>

        <LeadForm leadType="affiliate-interest" title="Request supplier or affiliate follow-up" submitLabel="Request Affiliate Follow-Up" />
      </div>
    </main>
  );
}

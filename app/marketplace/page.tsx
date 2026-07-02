import type { Metadata } from "next";
import { SupplementDisclaimer } from '@/app/components/ComplianceNotices';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import TrackedLink from '@/components/TrackedLink';

export const metadata: Metadata = {
  title: "Wellness Support for Vascular & Cognitive Health | VascuMind",
  description:
    "Review optional wellness-support products for vascular and cognitive wellness with supplement disclaimers, clinician-discussion framing, affiliate disclosure, and COA transparency.",
};

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
    description: 'Supports general vascular and cognitive wellness',
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
          <div className="section-label mb-3">OPTIONAL WELLNESS SUPPORT</div>
          <h1 className="text-5xl font-semibold tracking-tight mb-4">
            Wellness support to review with your clinician.
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            If you or a loved one has vascular dementia, stroke-related cognitive impairment, or vascular disease, medical care comes first. Supplements and wellness products should only be considered as optional support and reviewed with a qualified healthcare professional, especially when medications are involved.
          </p>
          <div className="mt-6 max-w-3xl mx-auto text-left">
            <SupplementDisclaimer compact />
          </div>
          <p className="text-base text-black mt-4 max-w-3xl mx-auto">
            VascuMind may earn commissions from qualifying purchases; see our affiliate disclosure. Product pages are for general wellness education and should not be interpreted as treatment for vascular dementia, stroke, MCI, Alzheimer’s disease, or any medical condition.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5">
            <TrackedLink href="/memory-screen" eventName="cta_memory_screen_click" eventData={{ sourcePath: "/marketplace", ctaLabel: "Create Baseline First" }} className="btn-green inline-block px-7 py-3 rounded-full font-semibold">Create Baseline First</TrackedLink>
            <Link href="/protocol" className="text-black underline">See full Protocol</Link>
            <Link href="/transparency" className="text-black underline">View transparency / COA tracker</Link>
            <Link href="/affiliate-disclosure" className="text-black underline">Read affiliate disclosure</Link>
          </div>
        </div>

        <section className="border-4 border-black rounded-3xl p-8 mb-16">
          <div className="section-label mb-3">CORE WELLNESS BUNDLE</div>
          <h2 className="text-4xl font-semibold mb-4">Cerebrovascular wellness-support bundle</h2>
          <p className="text-xl text-black mb-8">
            The VascuMind bundle centers on citicoline, high-EPA omega-3, and MCT oil because each maps to a general wellness-support role. This is not a disease-treatment protocol; it is an optional support layer to review after screening and clinician discussion.
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
              Bundle / subscription setup pending supplier and payment review
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
            <h2 className="text-2xl font-semibold mb-3">Medical care first</h2>
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

        <LeadForm leadType="affiliate-interest" title="Request wellness-support follow-up" submitLabel="Request Follow-Up" />
      </div>
    </main>
  );
}

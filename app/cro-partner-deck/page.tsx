import Link from "next/link";

const slides = [
  ["Problem", "CROs and sponsors need vascular-specific cognitive candidates, but recruitment often mixes Alzheimer’s, MCI, vascular impairment, and nonspecific memory complaints."],
  ["VascuMind pipeline", "A focused funnel educates users, routes them through screening and benchmarking, and captures consented trial-interest leads with vascular context."],
  ["Recruitment value", "A pre-screened, vascular-specific pipeline can reduce broad recruitment, site burden, and low-fit screening volume."],
  ["Data posture", "Share only consented data. Use de-identification or limited datasets where appropriate. Do not transfer direct identifiers without explicit consent and privacy review."],
  ["Commercial model", "Pilot/license pricing can anchor against the MoCA benchmark: approximately $35,000 license plus $35/test, with premium justified by vascular fit and workflow value."],
];

export default function CroPartnerDeckPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="text-center mb-16">
        <div className="section-label mb-3">CRO PARTNER PITCH</div>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">Pre-screened vascular cognitive trial-readiness pipeline</h1>
        <p className="text-2xl text-black max-w-4xl mx-auto">A partner-safe pitch narrative for CROs and sponsors.</p>
      </section>
      <section className="space-y-8 mb-16">
        {slides.map(([title, body], index) => (
          <div key={title} className="border-4 border-black rounded-3xl p-8">
            <div className="section-label mb-3">Slide {index + 1}</div>
            <h2 className="text-4xl font-semibold mb-4">{title}</h2>
            <p className="text-2xl text-black">{body}</p>
          </div>
        ))}
      </section>
      <div className="text-center"><Link href="/cro-licensing" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">Request CRO Licensing Packet</Link></div>
    </main>
  );
}

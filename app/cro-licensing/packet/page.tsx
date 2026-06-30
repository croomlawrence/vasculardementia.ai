import Link from "next/link";
import { croBenchmarks } from "@/lib/business";

const sections = [
  {
    title: "Problem",
    body: "Vascular cognitive impairment, mixed dementia, and MCI trial programs need earlier, more operationally useful cognitive screening than generic late-stage dementia tools can provide."
  },
  {
    title: "VascuMind / Acurist fit",
    body: "VascuMind acts as the vascular cognitive education and trial-readiness funnel, while Acurist/MCI Screen supports structured cognitive screening workflows."
  },
  {
    title: "Commercial model",
    body: `MoCA benchmark: approximately ${croBenchmarks.mocaLicense} plus ${croBenchmarks.mocaPerTest}. VascuMind should anchor at parity or premium when supported by evidence and implementation scope.`
  },
  {
    title: "Pilot structure",
    body: "A pilot should define indication, site count, participant volume, screening workflow, data handoff, reporting cadence, and compliance requirements before launch."
  }
];

export default function CROLicensingPacketPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <section className="text-center mb-14">
        <div className="section-label mb-3">LICENSING PACKET</div>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">VascuMind CRO Licensing One-Pager</h1>
        <p className="text-2xl text-black max-w-4xl mx-auto">
          A concise commercial packet for CROs, sponsors, and trial networks evaluating vascular cognitive screening and trial-readiness infrastructure.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-14">
        {sections.map((section) => (
          <div key={section.title} className="border border-black rounded-3xl p-8">
            <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>
            <p className="text-xl text-black">{section.body}</p>
          </div>
        ))}
      </section>

      <section className="border-4 border-black rounded-3xl p-8 md:p-12 mb-14">
        <h2 className="text-4xl font-semibold mb-6">Suggested licensing tiers</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-lg">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="py-3 pr-4">Tier</th>
                <th className="py-3 pr-4">License</th>
                <th className="py-3 pr-4">Per-test</th>
                <th className="py-3 pr-4">Best fit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black"><td className="py-3 pr-4 font-semibold">Pilot</td><td className="py-3 pr-4">$35k–$50k</td><td className="py-3 pr-4">$35–$50</td><td className="py-3 pr-4">Single-study feasibility</td></tr>
              <tr className="border-b border-black"><td className="py-3 pr-4 font-semibold">Standard</td><td className="py-3 pr-4">$75k</td><td className="py-3 pr-4">$50–$75</td><td className="py-3 pr-4">Active trial program</td></tr>
              <tr><td className="py-3 pr-4 font-semibold">Enterprise</td><td className="py-3 pr-4">Custom</td><td className="py-3 pr-4">Custom</td><td className="py-3 pr-4">Multi-study or multi-region deployment</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="border border-black rounded-3xl p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Next step</h2>
        <p className="text-xl text-black mb-6">Request a structured licensing discussion to define indication, sites, participant volume, timeline, and implementation scope.</p>
        <Link href="/cro-licensing" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">
          Request Licensing Packet
        </Link>
      </section>
    </main>
  );
}

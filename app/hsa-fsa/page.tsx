import { clinicalEvidenceLinks } from "@/lib/business";

export default function HsaFsaPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <section className="mb-12">
        <div className="section-label mb-3">FINANCIAL OPERATIONS</div>
        <h1 className="text-5xl font-semibold tracking-tight mb-6">HSA/FSA access is a partnership track, not a live claim</h1>
        <p className="text-2xl text-black">
          Supplements are generally not automatically HSA/FSA eligible. A customer may need a Letter of Medical Necessity from a qualified healthcare professional or third-party qualification workflow.
        </p>
      </section>
      <section className="border-4 border-black rounded-3xl p-8 mb-12">
        <h2 className="text-3xl font-semibold mb-4">Recommended path</h2>
        <ol className="list-decimal pl-6 space-y-3 text-xl">
          <li>Evaluate third-party administrators such as <a className="underline" href={clinicalEvidenceLinks.truemed}>Truemed</a>.</li>
          <li>Do not claim VascuMind supplements are HSA/FSA eligible until a partner workflow is live and reviewed.</li>
          <li>Use partner-issued qualification and Letter of Medical Necessity workflows where appropriate.</li>
          <li>Have counsel review all checkout, reimbursement, and email language before launch.</li>
        </ol>
      </section>
      <section className="border border-black rounded-3xl p-8">
        <h2 className="text-3xl font-semibold mb-4">Website copy rule</h2>
        <p className="text-xl text-black">Use: “HSA/FSA support under review.” Do not use: “HSA/FSA eligible” until the partner integration is active and compliant.</p>
      </section>
    </main>
  );
}

const rows = [
  ['Citicoline', 'Pending manufacturer COA', 'Identity, potency, contaminants, branded-source documentation'],
  ['High-EPA Omega-3', 'Pending manufacturer COA', 'EPA/DHA potency, oxidation markers, heavy metals, purity'],
  ['MCT Oil', 'Pending manufacturer COA', 'Fatty-acid composition, rancidity/oxidation markers, contaminants'],
  ['Beetroot Powder', 'Pending manufacturer COA', 'Dietary nitrate content, microbial testing, heavy metals'],
  ['Methylated B-Complex', 'Pending manufacturer COA', 'Active forms, dosage verification, heavy metals, allergens'],
];

export default function TransparencyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <section className="mb-12">
        <div className="section-label mb-3">TRANSPARENCY / COA TRACKER</div>
        <h1 className="text-5xl font-semibold tracking-tight mb-6">Certificates of Analysis and supplier documentation</h1>
        <p className="text-2xl text-black">
          This page is the public tracker for batch-level Certificates of Analysis. Products should not be treated as protocol-ready until manufacturer documentation is received and reviewed.
        </p>
      </section>

      <section className="border-4 border-black rounded-3xl p-8 mb-12">
        <h2 className="text-3xl font-semibold mb-4">COA status</h2>
        <div className="space-y-4">
          {rows.map(([ingredient, status, requirements]) => (
            <div key={ingredient} className="border border-black rounded-2xl p-5">
              <h3 className="text-2xl font-semibold">{ingredient}</h3>
              <p className="text-xl text-black"><strong>Status:</strong> {status}</p>
              <p className="text-black"><strong>Required documentation:</strong> {requirements}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border border-black rounded-3xl p-8">
        <h2 className="text-3xl font-semibold mb-4">Compliance boundary</h2>
        <p className="text-xl text-black">
          COAs support identity, purity, and quality documentation. They do not prove that a supplement diagnoses, treats, cures, or prevents any disease.
        </p>
      </section>
    </main>
  );
}

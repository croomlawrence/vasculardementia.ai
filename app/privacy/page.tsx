export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-semibold tracking-tight mb-6">Privacy Notice</h1>
      <div className="green-divider w-16 mb-8"></div>
      <div className="space-y-6 text-xl text-black">
        <p>VascuMind is designed to collect the minimum information needed to respond to inquiries, route business leads, and improve the educational website experience.</p>
        <p>Do not submit emergency symptoms or sensitive medical records through website forms. If symptoms are sudden or severe, call emergency services immediately.</p>
        <p>Information submitted through forms may be used to contact you about memory screening, clinical-trial matching, CRO licensing, or related VascuMind services. CRM routing is intended for business operations and follow-up.</p>
        <p>Clinical-trial matching requires explicit opt-in consent. VascuMind should not share direct identifiers with a CRO, sponsor, or trial partner without additional explicit consent and privacy review.</p>
        <p>Local/on-prem lead scoring, when used, is for follow-up prioritization and operational triage only. It is not medical advice or clinical guidance.</p>
        <p>This notice is a plain-language operational placeholder and should be reviewed by counsel before scaled collection of health-related data, paid testing workflows, clinical-trial matching, or partner data-sharing.</p>
      </div>
    </main>
  );
}

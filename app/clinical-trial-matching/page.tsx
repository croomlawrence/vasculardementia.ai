import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Research Options for Vascular Dementia & Post-Stroke Cognitive Decline | VascuMind",
  description:
    "Opt in to research-awareness follow-up for vascular dementia, vascular cognitive impairment, and post-stroke cognitive decline. VascuMind does not determine trial eligibility.",
};

export default function ClinicalTrialMatchingPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="text-center mb-16">
        <div className="section-label mb-3">CONSENTED RESEARCH OPTIONS</div>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">Explore whether current vascular cognitive research may be relevant.</h1>
        <p className="text-2xl text-black max-w-4xl mx-auto">
          After a cognitive baseline, patients and caregivers who want research options can opt in to VascuMind reviewing whether vascular dementia, vascular cognitive impairment, or post-stroke cognitive studies may be worth discussing with clinicians or study teams.
        </p>
      </section>

      <section className="border-4 border-black rounded-3xl p-8 mb-16 text-center">
        <h2 className="text-4xl font-semibold mb-4">Research awareness, not trial eligibility.</h2>
        <p className="text-xl text-black max-w-4xl mx-auto">
          Complete the consent form below only if you want follow-up. VascuMind will use the information to evaluate whether research-related follow-up may be appropriate. Eligibility, enrollment, and medical decisions are determined by clinicians and study teams.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="border border-black rounded-3xl p-8"><h2 className="text-2xl font-semibold mb-3">Opt in</h2><p>Research follow-up requires explicit consent. Do not submit emergency symptoms or medical records.</p></div>
        <div className="border border-black rounded-3xl p-8"><h2 className="text-2xl font-semibold mb-3">Review carefully</h2><p>Any follow-up is informational and operational only. It does not provide diagnosis, treatment, or medical advice.</p></div>
        <div className="border border-black rounded-3xl p-8"><h2 className="text-2xl font-semibold mb-3">Share only with permission</h2><p>Identifiable information should not be shared with sponsors, CROs, or study partners without additional explicit consent and privacy review.</p></div>
      </section>

      <LeadForm leadType="clinical-trial-match" title="Request research-options follow-up" submitLabel="Request Research Follow-Up" patientResearchFields />
    </main>
  );
}

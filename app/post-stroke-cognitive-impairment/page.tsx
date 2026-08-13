import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Post-Stroke Cognitive Impairment Guide",
  description: "A plain-language guide to post-stroke cognitive impairment, caregiver questions, and VascuMind’s free vascular cognitive pattern check.",
  alternates: { canonical: "/post-stroke-cognitive-impairment" },
};

export default function PostStrokeCognitiveImpairmentPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="section-label mb-3">Post-stroke cognitive impairment</div>
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">After stroke, cognition can change in ways families notice first.</h1>
      <p className="text-2xl text-black mb-8">Memory, attention, processing speed, planning, mood, sleep, and confusion can all be part of the post-stroke conversation. VascuMind helps organize what to ask next.</p>
      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="border border-black rounded-3xl p-8"><h2 className="text-3xl font-semibold mb-3">What to document</h2><ul className="list-disc pl-6 space-y-2"><li>When changes started</li><li>Whether worsening happened in steps</li><li>Stroke/TIA and vascular history</li><li>Medications, sleep, mood, and rehabilitation context</li></ul></div>
        <div className="border border-black rounded-3xl p-8"><h2 className="text-3xl font-semibold mb-3">What to ask</h2><ul className="list-disc pl-6 space-y-2"><li>Is formal cognitive screening appropriate?</li><li>Should vascular risk factors be reviewed?</li><li>Would repeat tracking help?</li><li>Are additional evaluations needed?</li></ul></div>
      </section>
      <Link href="/hachinski" className="btn-green inline-block px-8 py-4 rounded-full text-lg font-semibold">Start Free Pattern Check</Link>
    </main>
  );
}

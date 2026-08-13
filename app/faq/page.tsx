import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | VascuMind',
  description: 'Find answers to frequently asked questions about the VascuMind protocol, the MCI Screen, costs, and data privacy.',
};

const faqs = [
  {
    question: "Is this a diagnosis?",
    answer: "No. The VascuMind Protocol is an educational and informational screening tool. It is not a substitute for a diagnosis or medical advice from a qualified healthcare provider. Its purpose is to provide you with a high-quality, organized baseline to facilitate a better conversation with your doctor.",
  },
  {
    question: "Why does the MCI Screen cost $99?",
    answer: "The $99 fee covers the cost of a live, 12-minute session with a trained, US-based proctor who administers the test over the phone. This controlled, one-on-one process is what ensures the test is objective and scientifically valid, unlike free, automated web quizzes. It also includes your personalized report and baseline score.",
  },
  {
    question: "Do you sell my data?",
    answer: "No. Your personal health information is kept private and secure. We will never share your identifiable data or results with a third party, including our research partners, without your explicit, opt-in consent for a specific study. You are always in control.",
  },
    {
    question: "Do I have to buy supplements?",
    answer: "No. The wellness and supplement recommendations are a completely optional pathway for those interested in supporting their vascular health through nutrition.",
  },
  {
    question: "Is VascuMind covered by insurance?",
    answer: "The $99 fee for the MCI Screen is HSA/FSA eligible. We provide a receipt for you to submit for reimbursement. We do not directly bill insurance at this time.",
  },
];

export default function FaqPage() {
  return (
    <main className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 gradient-text">Frequently Asked Questions</h1>
        </div>

        <div className="space-y-10">
          {faqs.map((faq) => (
            <div key={faq.question} className="card">
              <h2 className="text-2xl font-bold mb-3 text-black">{faq.question}</h2>
              <p className="text-lg text-black">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

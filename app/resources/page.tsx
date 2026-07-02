import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources | VascuMind',
  description: 'Explore articles and resources on vascular cognitive health, brain wellness, and memory support.',
};

const articles = [
  {
    title: "What is Mild Cognitive Impairment (MCI)? A Complete Patient's Guide",
    href: "/resources/what-is-mild-cognitive-impairment",
    description: "A complete guide to understanding MCI, its symptoms, causes, and the importance of early, accurate detection."
  },
  {
    title: "MCI vs. Normal Aging: How to Tell the Difference",
    href: "/resources/mci-vs-normal-aging",
    description: "Understand the key differences between Mild Cognitive Impairment (MCI) and the normal memory lapses that come with age."
  },
  {
    title: "What to Do After an MCI Diagnosis: A 5-Step Plan",
    href: "/resources/what-to-do-after-mci-diagnosis",
    description: "A diagnosis of MCI can be overwhelming. Here is a 5-step plan to help you take control and move forward with hope."
  },
  {
    title: "How is MCI Diagnosed? A Guide to Cognitive Testing",
    href: "/resources/how-is-mci-diagnosed",
    description: "Learn about the process of diagnosing MCI, from clinical interviews to objective tests like the MCI Screen."
  },
  {
    title: "What is Vascular Cognitive Health? A Complete Guide",
    href: "/resources/what-is-vascular-cognitive-health",
    description: "A comprehensive guide to understanding vascular cognitive health, its importance, risk factors, and how you can support it."
  },
  {
    title: "A Patient's Guide to the Hachinski Score",
    href: "/resources/guide-to-hachinski-score",
    description: "Demystify this important clinical tool and understand how it helps doctors assess the role of vascular factors in cognitive health."
  },
  {
    title: "The Heart-Brain Connection: How Your Circulation Affects Your Mind",
    href: "/resources/heart-brain-connection",
    description: "Learn how blood flow delivers vital oxygen and nutrients to your brain, and what happens when that flow is compromised."
  },
  {
    title: "5 Lifestyle Changes to Support Healthy Brain Circulation",
    href: "/resources/improve-brain-circulation",
    description: "Discover actionable, evidence-based advice on diet, exercise, and habits that support long-term vascular wellness."
  }
];

export default function ResourcesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-semibold tracking-tight mb-4 text-center">Resources</h1>
      <p className="text-xl text-gray-700 mb-12 text-center">Your hub for understanding and supporting your vascular cognitive health.</p>

      <div className="space-y-10">
        {articles.map((article) => (
          <Link key={article.title} href={article.href} className="block border rounded-lg p-8 hover:shadow-lg">
            <h2 className="text-3xl font-semibold mb-3">{article.title}</h2>
            <p className="text-lg text-gray-700">{article.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

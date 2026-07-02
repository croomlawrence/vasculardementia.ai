import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources | VascuMind',
  description: 'Explore articles and resources on vascular cognitive health, brain wellness, and memory support.',
};

// Dummy data for now - this will be replaced with a dynamic system later
const articles = [
  {
    title: "A Patient\'s Guide to the Hachinski Score",
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

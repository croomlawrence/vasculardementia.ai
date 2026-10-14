import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News from Hemostemix",
  description:
    "On October 7, 2026, Hemostemix said it got approval in The Bahamas to run a first-stage study. This is a study approval. It is not FDA approval.",
  alternates: { canonical: "/news" },
};

const releaseUrl =
  "https://hemostemix.com/latest-news/hemostemix-announces-full-larta-approval-manufacturing-progress-and-financing-update";

export default function NewsPage() {
  return (
    <main className="bg-white">
      <article className="news-article mx-auto px-6 pt-20 pb-28 md:pt-28 md:pb-36">
        <p className="mb-8">
          <Link href="/" className="text-link">
            Home
          </Link>
        </p>
        <p className="section-label mb-4">News</p>
        <h1 className="text-5xl md:text-6xl mb-8">News from Hemostemix</h1>
        <p>
          On October 7, 2026, Hemostemix said it got approval in The Bahamas to run a first-stage study. The approval came from the National Longevity and Regenerative Therapy Board of The Bahamas (LARTA Board) and its Ethics Committee. The study will look at VesCell™, which Hemostemix calls an investigational cell therapy made from a person&apos;s own blood. Hemostemix says the study is for angina, vascular dementia and pain. This is a study approval. It is not FDA approval, and it does not show that VesCell works. Our memory screen is not connected to this study and does not qualify anyone for it or for any treatment. Read the full release from Hemostemix (link:{" "}
          <a href={releaseUrl} rel="noopener noreferrer">
            {releaseUrl}
          </a>
          ). Disclosure: VascuMind&apos;s owner also works with Hemostemix.
        </p>
      </article>
    </main>
  );
}

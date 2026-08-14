import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import Disclaimer from "./components/Disclaimer";
import MarketingPixels from "./components/MarketingPixels";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = "https://www.vascumind.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VascuMind | Free Vascular Cognitive Pattern Check",
    template: "%s | VascuMind",
  },
  description:
    "Start with a free vascular cognitive pattern check for memory changes after stroke, TIA, blood pressure, diabetes, PAD, or other vascular risk factors, then create a $99 cognitive baseline for clinician discussion.",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "VascuMind",
    title: "VascuMind | Free Vascular Cognitive Pattern Check",
    description:
      "A clearer first step for families worried about memory changes after stroke, TIA, or vascular risk factors. Educational only; not a diagnosis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VascuMind | Free Vascular Cognitive Pattern Check",
    description:
      "Start with a free vascular cognitive pattern check, then create a structured cognitive baseline for clinician discussion.",
  },
};

const navLinks = [
  ["Start Here", "/what-we-offer"],
  ["Free Pattern Check", "/hachinski"],
  ["Cognitive Baseline", "/memory-screen"],
  ["Stroke/TIA Memory", "/memory-changes-after-stroke-or-tia"],
  ["Science", "/science"],
  ["Research Options", "/clinical-trial-matching"],
  ["For Sponsors", "/cro-licensing"],
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VascuMind",
    url: siteUrl,
    description: "Educational vascular cognitive health tools and clinician conversation support.",
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <MarketingPixels />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <nav className="border-b bg-white sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-6 min-h-16 py-3 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
            <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8">
              <Link href="/" className="font-semibold text-xl">VascuMind®</Link>
              <div className="flex flex-wrap gap-4 xl:gap-6 text-base">
                {navLinks.map(([label, href]) => (
                  <Link key={href} href={href} className="hover:underline">{label}</Link>
                ))}
              </div>
            </div>
            <Link href="/hachinski" className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition border border-black text-center">
              Start Free Check
            </Link>
          </div>
        </nav>
        {children}
        <Disclaimer />
        <Analytics />
        <footer className="bg-black text-white py-12 mt-auto">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-10">
              <div>
                <div className="font-semibold text-xl mb-3 text-white">VascuMind®</div>
                <p className="text-sm text-white">Educational tools for vascular dementia, post-stroke cognitive changes, and caregiver navigation.</p>
              </div>
              <div>
                <div className="font-semibold mb-3 text-sm tracking-widest text-white">PATIENTS & CAREGIVERS</div>
                <div className="space-y-2 text-base">
                  <Link href="/" className="block hover:underline">Home</Link>
                  <Link href="/what-we-offer" className="block hover:underline">Start Here</Link>
                  <Link href="/protocol" className="block hover:underline">VascuMind Protocol</Link>
                  <Link href="/hachinski" className="block hover:underline">Free Pattern Check</Link>
                  <Link href="/memory-screen" className="block hover:underline">Cognitive Baseline</Link>
                  <Link href="/memory-changes-after-stroke-or-tia" className="block hover:underline">Memory After Stroke or TIA</Link>
                  <Link href="/alzheimers-blood-test-vs-cognitive-screening" className="block hover:underline">Blood Test vs Screening</Link>
                  <Link href="/memory-after-stroke" className="block hover:underline">Memory After Stroke</Link>
                  <Link href="/caregiver-guide-memory-after-stroke" className="block hover:underline">Caregiver Guide</Link>
                  <Link href="/marketplace" className="block hover:underline">Wellness Support</Link>
                </div>
              </div>
              <div>
                <div className="font-semibold mb-3 text-sm tracking-widest text-white">RESEARCH & PARTNERS</div>
                <div className="space-y-2 text-base">
                  <Link href="/science" className="block hover:underline">Science & Validation</Link>
                  <Link href="/research/clinical-evidence" className="block hover:underline">What May Be Actionable</Link>
                  <Link href="/research/vascular-dementia-clinical-trials" className="block hover:underline">Clinical Trials</Link>
                  <Link href="/clinical-trial-matching" className="block hover:underline">Research Options</Link>
                  <Link href="/cro-licensing" className="block hover:underline">For Research Partners</Link>
                  <Link href="/cro-licensing/packet" className="block hover:underline">Licensing Packet</Link>
                  <Link href="/hsa-fsa" className="block hover:underline">HSA/FSA Status</Link>
                </div>
              </div>
              <div>
                <div className="font-semibold mb-3 text-sm tracking-widest text-white">LEGAL</div>
                <div className="space-y-2 text-base">
                  <div>© VascuMind 2026</div>
                  <Link href="/privacy" className="block hover:underline">Privacy</Link>
                  <Link href="/terms" className="block hover:underline">Terms</Link>
                  <Link href="/affiliate-disclosure" className="block hover:underline">Affiliate Disclosure</Link>
                  <Link href="/compliance" className="block hover:underline">Compliance</Link>
                  <div>This site is educational only and does not constitute medical advice.</div>
                </div>
              </div>
            </div>
            <div className="border-t border-white pt-6 text-base text-center text-white">
              VascuMind® is not a substitute for professional medical care. Call emergency services for sudden or severe neurologic symptoms.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

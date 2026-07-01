import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import Disclaimer from "./components/Disclaimer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vascumind.com"),
  title: "VascuMind | Vascular Dementia & Post-Stroke Cognitive Support",
  description:
    "VascuMind helps patients and caregivers understand vascular dementia, post-stroke cognitive changes, and vascular cognitive impairment with education, pattern-check tools, cognitive baseline options, and clinician discussion support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="border-b">
          <div className="max-w-6xl mx-auto px-6 min-h-16 py-3 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
              <Link href="/" className="font-semibold text-xl">VascuMind®</Link>
              <div className="flex flex-wrap gap-4 lg:gap-6 text-base">
                <Link href="/what-we-offer" className="hover:underline">Start Here</Link>
                <Link href="/hachinski" className="hover:underline">Free Pattern Check</Link>
                <Link href="/memory-screen" className="hover:underline">Cognitive Baseline</Link>
                <Link href="/research/clinical-evidence" className="hover:underline">What May Be Actionable</Link>
                <Link href="/clinical-trial-matching" className="hover:underline">Research Options</Link>
                <Link href="/marketplace" className="hover:underline">Wellness Support</Link>
              </div>
            </div>
            <Link 
              href="/hachinski"
              className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition border border-black text-center"
            >
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
                <div className="font-semibold text-xl mb-3">VascuMind®</div>
                <p className="text-sm">Educational tools for vascular dementia, post-stroke cognitive changes, and caregiver navigation.</p>
              </div>
              <div>
                <div className="font-semibold mb-3 text-sm tracking-widest">PATIENTS & CAREGIVERS</div>
                <div className="space-y-2 text-base">
                  <Link href="/" className="block hover:underline">Home</Link>
                  <Link href="/what-we-offer" className="block hover:underline">Start Here</Link>
                  <Link href="/protocol" className="block hover:underline">VascuMind Protocol</Link>
                  <Link href="/hachinski" className="block hover:underline">Free Pattern Check</Link>
                  <Link href="/memory-screen" className="block hover:underline">Cognitive Baseline</Link>
                  <Link href="/caregiver-triage" className="block hover:underline">Caregiver Safety Guide</Link>
                  <Link href="/marketplace" className="block hover:underline">Wellness Support</Link>
                </div>
              </div>
              <div>
                <div className="font-semibold mb-3 text-sm tracking-widest">RESEARCH & PARTNERS</div>
                <div className="space-y-2 text-base">
                  <Link href="/research/clinical-evidence" className="block hover:underline">What May Be Actionable</Link>
                  <Link href="/research/vascular-dementia-clinical-trials" className="block hover:underline">Clinical Trials</Link>
                  <Link href="/clinical-trial-matching" className="block hover:underline">Research Options</Link>
                  <Link href="/cro-licensing" className="block hover:underline">For Research Partners</Link>
                  <Link href="/cro-partner-deck" className="block hover:underline">CRO Partner Deck</Link>
                  <Link href="/hsa-fsa" className="block hover:underline">HSA/FSA Status</Link>
                </div>
              </div>
              <div>
                <div className="font-semibold mb-3 text-sm tracking-widest">LEGAL</div>
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
            <div className="border-t border-white pt-6 text-base text-center">
              VascuMind® is not a substitute for professional medical care. Call emergency services for sudden or severe neurologic symptoms.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

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
  title: "VascuMind® | vascumind.com",
  description: "Advanced diagnostics and emerging therapies for vascular dementia — one focused hub.",
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
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="font-semibold text-xl">VascuMind®</Link>
              <div className="flex gap-6 text-base">
                <Link href="/marketplace" className="hover:underline">Marketplace</Link>
                <Link href="/hachinski" className="hover:underline">Diagnostics</Link>
                <Link href="/research/vascular-dementia-clinical-trials" className="hover:underline">Research</Link>
                <Link href="/what-we-offer" className="hover:underline">What We Offer</Link>
              </div>
            </div>
            <Link 
              href="https://www.acurist.ai" target="_blank" rel="noopener noreferrer" 
              className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition border border-black"
            >
              Start Memory Screen
            </Link>
          </div>
        </nav>
        {children}

        <Disclaimer />

        <Analytics />

        {/* Footer */}
        <footer className="bg-black text-white py-12 mt-auto">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-10">
              <div>
                <div className="font-semibold text-xl mb-3">VascuMind®</div>
                <p className="text-sm">Educational tools for vascular brain health.</p>
              </div>
              <div>
                <div className="font-semibold mb-3 text-sm tracking-widest">EXPLORE</div>
                <div className="space-y-2 text-base">
                  <Link href="/" className="block hover:underline">Home</Link>
                  <Link href="/hachinski" className="block hover:underline">Diagnostics</Link>
                  <Link href="/marketplace" className="block hover:underline">Marketplace</Link>
                  <Link href="/what-we-offer" className="block hover:underline">What We Offer</Link>
                </div>
              </div>
              <div>
                <div className="font-semibold mb-3 text-sm tracking-widest">RESEARCH</div>
                <div className="space-y-2 text-base">
                  <Link href="/research/vascular-dementia-clinical-trials" className="block hover:underline">Clinical Trials</Link>
                  <Link href="/research/clinical-evidence" className="block hover:underline">Clinical Evidence</Link>
                </div>
              </div>
              <div>
                <div className="font-semibold mb-3 text-sm tracking-widest">LEGAL</div>
                <div className="space-y-2 text-base">
                  <div>© VascuMind 2026</div>
                  <div>This site is for educational purposes only and does not constitute medical advice.</div>
                  <div>Always consult your physician.</div>
                </div>
              </div>
            </div>
            <div className="border-t border-white pt-6 text-base text-center">
              VascuMind® is not a substitute for professional medical care. All information is provided for educational purposes.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import Disclaimer from "./components/Disclaimer";
import MarketingPixels from "./components/MarketingPixels";
import NavDropdown from "./components/NavDropdown";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = "https://www.vascumind.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VascuMind | Free Ischemic Pattern Check",
    template: "%s | VascuMind",
  },
  description:
    "Start with a free ischemic pattern check for memory changes after stroke, TIA, blood pressure, diabetes, PAD, or other vascular risk factors, then create a $99 memory baseline for clinician discussion.",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "VascuMind",
    title: "VascuMind | Free Ischemic Pattern Check",
    description:
      "A clearer first step for families worried memory changes may relate to blood flow, stroke, TIA, or vascular risk factors. Educational only; not a diagnosis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VascuMind | Free Ischemic Pattern Check",
    description:
      "Start with a free ischemic pattern check, then create a structured memory baseline for clinician discussion.",
  },
};

const caregiverLinks = [
  ["Start Here", "/what-we-offer"],
  ["Free Ischemic Pattern Check", "/hachinski"],
  ["$99 Memory Baseline", "/memory-screen"],
  ["Stroke/TIA Memory", "/memory-changes-after-stroke-or-tia"],
  ["Blood Test vs Memory Screen", "/alzheimers-blood-test-vs-cognitive-screening"],
  ["Caregiver Guide", "/caregiver-guide-memory-after-stroke"],
  ["Wellness Support", "/marketplace"],
];

const organizationLinks = [
  ["Clinical Trial Matching", "/clinical-trial-matching"],
  ["Clinical Trials", "/research/vascular-dementia-clinical-trials"],
  ["For Research Partners", "/cro-licensing"],
  ["Licensing Packet", "/cro-licensing/packet"],
  ["Science & Validation", "/science"],
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VascuMind",
    url: siteUrl,
    description: "Educational ischemic and vascular memory-health tools and clinician conversation support.",
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <Script id="google-tag-manager">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PTS44QT6');
        `}
      </Script>
      <body className="min-h-full flex flex-col">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PTS44QT6"
        height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
        <MarketingPixels />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <nav className="site-nav border-b bg-white sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-6 min-h-16 py-3 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10">
              <Link href="/" className="font-semibold text-xl">VascuMind®</Link>
              <div className="flex flex-wrap gap-3 lg:gap-6 text-base items-center">
                <NavDropdown summary="For Caregivers">
                  {caregiverLinks.map(([label, href]) => (
                    <Link key={href} href={href}>{label}</Link>
                  ))}
                </NavDropdown>
                <NavDropdown summary="For Organizations">
                  {organizationLinks.map(([label, href]) => (
                    <Link key={href} href={href}>{label}</Link>
                  ))}
                </NavDropdown>
                <Link href="/about" className="hover:underline font-semibold">About</Link>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/hachinski" className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition border border-black text-center">
                Free Check
              </Link>
              <Link href="/memory-screen" className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition border border-black text-center">
                Memory Baseline
              </Link>
            </div>
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
                <p className="text-sm text-white">Educational tools for ischemic and vascular memory changes, post-stroke cognitive concerns, and caregiver navigation.</p>
              </div>
              <div>
                <div className="font-semibold mb-3 text-sm tracking-widest text-white">FOR CAREGIVERS</div>
                <div className="space-y-2 text-base">
                  <Link href="/" className="block hover:underline">Home</Link>
                  {caregiverLinks.map(([label, href]) => (
                    <Link key={href} href={href} className="block hover:underline">{label}</Link>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-semibold mb-3 text-sm tracking-widest text-white">FOR ORGANIZATIONS</div>
                <div className="space-y-2 text-base">
                  {organizationLinks.map(([label, href]) => (
                    <Link key={href} href={href} className="block hover:underline">{label}</Link>
                  ))}
                  <Link href="/hsa-fsa" className="block hover:underline">HSA/FSA Status</Link>
                </div>
              </div>
              <div>
                <div className="font-semibold mb-3 text-sm tracking-widest text-white">COMPANY & LEGAL</div>
                <div className="space-y-2 text-base">
                  <div>© VascuMind 2026</div>
                  <Link href="/about" className="block hover:underline">About VascuMind</Link>
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
// Deploy trigger Mon Aug 17 10:42:03 EDT 2026

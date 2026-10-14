import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import Disclaimer from "./components/Disclaimer";
import MarketingPixels from "./components/MarketingPixels";
import SiteHeader from "./components/SiteHeader";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const display = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
});

const siteUrl = "https://www.vascumind.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VascuMind | Could Blood Flow Be Affecting Your Memory?",
    template: "%s | VascuMind",
  },
  description:
    "Start the memory screen or get a free guide of questions for a doctor visit. For families noticing memory changes after stroke, TIA, blood pressure, diabetes, or heart disease. For learning only. Not a diagnosis.",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "VascuMind",
    title: "VascuMind | Could Blood Flow Be Affecting Your Memory?",
    description:
      "Start the memory screen or get a free guide of questions for a doctor visit. For learning only. Not a diagnosis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VascuMind | Could Blood Flow Be Affecting Your Memory?",
    description:
      "Start the memory screen or get a free guide of questions for a doctor visit. For learning only. Not a diagnosis.",
  },
};

const caregiverLinks = [
  ["Start Here", "/what-we-offer"],
  ["Free Vascular Memory Check", "/hachinski"],
  ["Memory screen", "/memory-screen"],
  ["Free guide", "/resources/5-questions-guide"],
  ["Stroke/TIA Memory", "/memory-changes-after-stroke-or-tia"],
  ["Blood Test vs Memory Screen", "/alzheimers-blood-test-vs-cognitive-screening"],
  ["Caregiver Guide", "/caregiver-guide-memory-after-stroke"],
  ["Wellness Support", "/marketplace"],
] as const;

const organizationLinks = [
  ["Clinical Trial Matching", "/clinical-trial-matching"],
  ["Clinical Trials", "/research/vascular-dementia-clinical-trials"],
  ["For Research Partners", "/cro-licensing"],
  ["Licensing Packet", "/cro-licensing/packet"],
  ["Science & Validation", "/science"],
] as const;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VascuMind",
    url: siteUrl,
    description: "Educational vascular memory-health tools and clinician conversation support.",
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}>
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
        <SiteHeader caregiverLinks={caregiverLinks} organizationLinks={organizationLinks} />
        <div id="site-main">{children}</div>
        <Disclaimer />
        <Analytics />
        <footer className="site-footer">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-10 mb-12">
              <div>
                <div className="font-semibold text-xl mb-3">VascuMind®</div>
                <p>Tools for learning about memory changes, blood flow, and questions to bring to a clinician.</p>
              </div>
              <div>
                <div className="footer-label">For caregivers</div>
                <div className="space-y-2">
                  <Link href="/" className="block">Home</Link>
                  {caregiverLinks.map(([label, href]) => (
                    <Link key={href} href={href} className="block">{label}</Link>
                  ))}
                </div>
              </div>
              <div>
                <div className="footer-label">For organizations</div>
                <div className="space-y-2">
                  {organizationLinks.map(([label, href]) => (
                    <Link key={href} href={href} className="block">{label}</Link>
                  ))}
                  <Link href="/hsa-fsa" className="block">HSA/FSA Status</Link>
                </div>
              </div>
              <div>
                <div className="footer-label">Company and legal</div>
                <div className="space-y-2">
                  <Link href="/news" className="block">News</Link>
                  <Link href="/about" className="block">About VascuMind</Link>
                  <Link href="/privacy" className="block">Privacy</Link>
                  <Link href="/terms" className="block">Terms</Link>
                  <Link href="/affiliate-disclosure" className="block">Affiliate Disclosure</Link>
                  <Link href="/compliance" className="block">Compliance</Link>
                  <p>This site is for learning only and is not medical advice.</p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/40 pt-6 text-center">
              <p>© VascuMind 2026. VascuMind® is not a substitute for professional medical care. Call emergency services for sudden or severe neurologic symptoms.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
// Deploy trigger Mon Aug 17 10:42:03 EDT 2026

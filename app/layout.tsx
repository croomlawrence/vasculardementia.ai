import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
              <div className="flex gap-6 text-sm">
                <Link href="/marketplace" className="hover:text-blue-600">Marketplace</Link>
                <Link href="/hachinski" className="hover:text-blue-600">Diagnostics</Link>
                <Link href="/research/vascular-dementia-clinical-trials" className="hover:text-blue-600">Research</Link>
                <Link href="#how-it-works" className="hover:text-blue-600">How It Works</Link>
                <Link href="#what-we-offer" className="hover:text-blue-600">What We Offer</Link>
              </div>
            </div>
            <Link 
              href="#get-started" 
              className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800"
            >
              Get Started
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

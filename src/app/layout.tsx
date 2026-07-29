import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lucaperret.ch"),
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://lucaperret.ch",
  },
  title: "Luca Perret — Builder, Maker, Co-Founder",
  description:
    "Swiss-based builder. Co-founder of EnÉquipe, selecting venues, activities and meals for corporate events across French-speaking Switzerland. Ten years at Nespresso before that. Open source and AI agents.",
  openGraph: {
    title: "Luca Perret",
    description:
      "Builder and co-founder of EnÉquipe. Open source, AI agents, and things I ship.",
    url: "https://lucaperret.ch",
    siteName: "Luca Perret",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luca Perret",
    description:
      "Builder and co-founder of EnÉquipe. Open source, AI agents, and things I ship.",
    creator: "@lucaperret",
    site: "@lucaperret",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Luca Perret",
  url: "https://lucaperret.ch",
  jobTitle: "Co-Founder",
  worksFor: {
    "@type": "Organization",
    name: "EnÉquipe",
    url: "https://enequipe.ch",
  },
  alumniOf: {
    "@type": "Organization",
    name: "Nestlé Nespresso SA",
    url: "https://www.nespresso.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bulle",
    addressCountry: "CH",
  },
  knowsAbout: [
    "Corporate Events",
    "Product Management",
    "AI Agents",
    "Full-Stack Development",
    "Digital Transformation",
    "Knowledge Management",
    "Innovation Coaching",
    "eCommerce",
    "Open Source",
  ],
  sameAs: [
    "https://www.linkedin.com/in/lucaperret/",
    "https://github.com/lucaperret",
    "https://x.com/lucaperret",
    "https://medium.com/@lucaperret",
  ],
  description:
    "Swiss-based builder and co-founder of EnÉquipe, which selects venues, activities and meals for corporate events across French-speaking Switzerland. Former full-stack developer, then ten years at Nespresso across eCommerce personalisation, data and knowledge management. Certified Front End Innovation Coach (Strategyzer). Open source contributor and AI agent builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

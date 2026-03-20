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
  alternates: {
    canonical: "https://lucaperret.ch",
  },
  title: "Luca Perret — Builder, Learner, Maker",
  description:
    "Swiss-based builder at the intersection of technology, knowledge management, and collaborative learning. Currently at Nespresso.",
  openGraph: {
    title: "Luca Perret",
    description:
      "Builder at the intersection of technology, knowledge management, and collaborative learning.",
    url: "https://lucaperret.ch",
    siteName: "Luca Perret",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luca Perret",
    description:
      "Builder at the intersection of technology, knowledge management, and collaborative learning.",
    creator: "@lucaperret",
    site: "@lucaperret",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Luca Perret",
  url: "https://lucaperret.ch",
  jobTitle: "Digital Capability Transformation Lead",
  worksFor: {
    "@type": "Organization",
    name: "Nespresso",
    url: "https://www.nespresso.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vevey",
    addressCountry: "CH",
  },
  knowsAbout: [
    "Knowledge Management",
    "Digital Transformation",
    "Collaborative Learning",
    "AI Agents",
    "Full-Stack Development",
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
    "Swiss-based builder at the intersection of technology, knowledge management, and collaborative learning. Former full-stack developer with 10 years of experience, now leading digital capability transformation at Nespresso. Certified Front End Innovation Coach (Strategyzer). Open source contributor and AI agent builder.",
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

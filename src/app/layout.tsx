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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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

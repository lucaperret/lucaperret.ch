import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — No Cookies, No Tracking | Luca Perret",
  description:
    "How lucaperret.ch handles your data — no cookies, no tracking, no personal data collected. Uses Vercel Analytics for anonymous page views.",
  alternates: {
    canonical: "https://lucaperret.ch/privacy",
  },
  openGraph: {
    title: "Privacy Policy — No Cookies, No Tracking | Luca Perret",
    description:
      "How lucaperret.ch handles your data — no cookies, no tracking, no personal data collected. Uses Vercel Analytics for anonymous page views.",
    url: "https://lucaperret.ch/privacy",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Luca Perret" }],
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:py-24 max-w-2xl mx-auto">
      <Link
        href="/"
        className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block"
      >
        &larr; Home
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        Privacy Policy
      </h1>
      <p className="text-muted mb-12">Last updated: March 2026</p>

      <div className="space-y-8 text-foreground/85 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold mb-2">The short version</h2>
          <p>
            This is a personal portfolio site. I don&apos;t track you, I
            don&apos;t use cookies, and I don&apos;t collect any personal
            information. If you have questions, you can reach me at{" "}
            <a
              href="mailto:perret.luca@gmail.com"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              perret.luca@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Analytics</h2>
          <p>
            I use{" "}
            <a
              href="https://vercel.com/docs/analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              Vercel Analytics
            </a>{" "}
            to understand which pages are visited and where traffic comes from.
            This collects aggregated, anonymous data such as page views,
            referrers, and browser/OS type. No personally identifiable
            information is collected, and no cookies are used.
          </p>
          <p className="mt-3">
            Specifically, Vercel Analytics does not collect IP addresses, does
            not use device fingerprinting, and does not perform any cross-site
            tracking. The data is aggregated and cannot be used to identify
            individual visitors.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">
            Performance monitoring
          </h2>
          <p>
            I use{" "}
            <a
              href="https://vercel.com/docs/speed-insights"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              Vercel Speed Insights
            </a>{" "}
            to measure Core Web Vitals — specifically Largest Contentful Paint
            (loading time), First Input Delay (interactivity), and Cumulative
            Layout Shift (visual stability). This data is anonymous, aggregated
            across all visitors, and used solely to keep the site fast and
            responsive.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Cookies</h2>
          <p>
            This site does not use cookies of any kind — no session cookies, no
            authentication cookies, no advertising cookies, and no third-party
            cookies. Your browser will not receive any cookie from this site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Third-party tracking</h2>
          <p>
            There are no third-party trackers, advertising scripts, or social
            media pixels on this site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">External links</h2>
          <p>
            This site contains links to external websites (LinkedIn, GitHub, etc.)
            that have their own privacy policies. I am not responsible for the
            content or privacy practices of those sites.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Your rights</h2>
          <p>
            Since this site does not collect personal data, there is nothing to
            request, correct, or delete. If you have any concerns or questions,
            you are welcome to contact me.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Changes to this policy</h2>
          <p>
            This policy may be updated from time to time. Any changes will be
            reflected on this page with an updated date. No prior notification
            will be sent, as no contact information is collected.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <p>
            If you have any questions about this policy, feel free to email me
            at{" "}
            <a
              href="mailto:perret.luca@gmail.com"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              perret.luca@gmail.com
            </a>
            .
          </p>
        </section>
      </div>

      <footer className="pt-8 mt-16 border-t border-border flex justify-between items-center">
        <Link
          href="/"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          &larr; Home
        </Link>
        <Link
          href="/contact"
          className="text-xs text-muted/60 hover:text-foreground transition-colors"
        >
          Contact
        </Link>
      </footer>
    </main>
  );
}

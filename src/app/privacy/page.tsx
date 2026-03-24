import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Luca Perret",
  description:
    "Privacy policy for lucaperret.ch — what data is collected, how it is used, and your rights.",
  alternates: {
    canonical: "https://lucaperret.ch/privacy",
  },
  openGraph: {
    title: "Privacy Policy — Luca Perret",
    description:
      "Privacy policy for lucaperret.ch — what data is collected, how it is used, and your rights.",
    url: "https://lucaperret.ch/privacy",
    type: "website",
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
            to measure web vitals (loading time, interactivity, layout
            stability). This data is anonymous and used solely to keep the site
            fast.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Cookies</h2>
          <p>This site does not use cookies.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Third-party tracking</h2>
          <p>
            There are no third-party trackers, advertising scripts, or social
            media pixels on this site.
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
    </main>
  );
}

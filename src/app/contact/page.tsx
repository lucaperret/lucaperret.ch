import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Luca Perret — Get in Touch",
  description:
    "Reach out to Luca Perret via email or social media. Based in Vevey, Switzerland — open to conversations about technology, knowledge management, and collaboration.",
  alternates: {
    canonical: "https://lucaperret.ch/contact",
  },
  openGraph: {
    title: "Contact Luca Perret — Get in Touch",
    description:
      "Reach out to Luca Perret via email or social media. Based in Vevey, Switzerland.",
    url: "https://lucaperret.ch/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:py-24 max-w-2xl mx-auto">
      <Link
        href="/"
        className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block"
      >
        &larr; Home
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        Contact
      </h1>

      <div className="space-y-6 text-foreground/85 leading-relaxed">
        <p>
          The best way to reach me is by email. I&apos;m always open to
          conversations about technology, knowledge management, AI agents, or
          collaboration opportunities.
        </p>

        <div className="space-y-3">
          <p>
            <span className="text-muted text-sm font-mono">Email</span>
            <br />
            <a
              href="mailto:perret.luca@gmail.com"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              perret.luca@gmail.com
            </a>
          </p>

          <p>
            <span className="text-muted text-sm font-mono">LinkedIn</span>
            <br />
            <a
              href="https://www.linkedin.com/in/lucaperret/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              linkedin.com/in/lucaperret
            </a>
          </p>

          <p>
            <span className="text-muted text-sm font-mono">GitHub</span>
            <br />
            <a
              href="https://github.com/lucaperret"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              github.com/lucaperret
            </a>
          </p>

          <p>
            <span className="text-muted text-sm font-mono">X</span>
            <br />
            <a
              href="https://x.com/lucaperret"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              x.com/lucaperret
            </a>
          </p>
        </div>

        <p className="text-muted text-sm">Vevey, Switzerland</p>
      </div>
    </main>
  );
}

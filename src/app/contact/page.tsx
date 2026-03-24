import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Luca Perret — Get in Touch",
  description:
    "Get in touch with Luca Perret via email, LinkedIn, GitHub, or X. Based in Vevey, Switzerland. Open to conversations about technology and collaboration.",
  alternates: {
    canonical: "https://lucaperret.ch/contact",
  },
  openGraph: {
    title: "Contact Luca Perret — Get in Touch",
    description:
      "Reach out to Luca Perret via email or social media. Based in Vevey, Switzerland.",
    url: "https://lucaperret.ch/contact",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Luca Perret" }],
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
          collaboration opportunities. Whether you want to discuss an open source
          project, share ideas about how organizations learn, or just say hello —
          I&apos;d love to hear from you. I typically respond within a few days.
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

      <div className="space-y-6 text-foreground/85 leading-relaxed mt-12">
        <div>
          <h2 className="text-lg font-semibold mb-3">What I&apos;m open to</h2>
          <ul className="space-y-2">
            <li className="flex gap-2">
              <span aria-hidden="true" className="text-muted select-none">-</span>
              Open source collaboration — especially around AI agents, MCP servers, developer tools, and CLI applications
            </li>
            <li className="flex gap-2">
              <span aria-hidden="true" className="text-muted select-none">-</span>
              Knowledge management conversations — how teams learn, share, and retain expertise in large organizations
            </li>
            <li className="flex gap-2">
              <span aria-hidden="true" className="text-muted select-none">-</span>
              Speaking about digital transformation, innovation coaching, building in public, or the intersection of AI and knowledge work
            </li>
            <li className="flex gap-2">
              <span aria-hidden="true" className="text-muted select-none">-</span>
              Side project ideas — I enjoy building tools that solve real problems and learning from other makers
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Common questions</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Where are you based?</p>
              <p className="text-muted">
                Vevey, Switzerland — on the shores of Lake Geneva, between Lausanne and Montreux. I work on-site at Nespresso headquarters and remotely on my open source projects.
              </p>
            </div>
            <div>
              <p className="font-medium">Do you freelance?</p>
              <p className="text-muted">
                Not currently. I&apos;m full-time at Nespresso as a Knowledge Management
                Expert, but I&apos;m always happy to collaborate on open source projects,
                contribute to interesting tools, or exchange ideas over email.
              </p>
            </div>
            <div>
              <p className="font-medium">What&apos;s the best way to reach you?</p>
              <p className="text-muted">
                Email works best for anything substantial. For quick messages or sharing
                links, you can also reach me on X or LinkedIn. I read everything and
                typically respond within a few days — sometimes faster if you catch my
                interest.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="pt-8 mt-16 border-t border-border flex justify-between items-center">
        <Link
          href="/about"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          &larr; About
        </Link>
        <Link
          href="/privacy"
          className="text-xs text-muted/60 hover:text-foreground transition-colors"
        >
          Privacy
        </Link>
      </footer>
    </main>
  );
}

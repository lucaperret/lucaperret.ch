import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Luca Perret — Builder, Knowledge Management Expert",
  description:
    "Swiss-based builder at the intersection of technology, knowledge management, and collaborative learning. Knowledge Management Expert at Nespresso with a decade of full-stack development experience.",
  alternates: {
    canonical: "https://lucaperret.ch/about",
  },
  openGraph: {
    title: "About Luca Perret — Builder, Knowledge Management Expert",
    description:
      "Swiss-based builder at the intersection of technology, knowledge management, and collaborative learning.",
    url: "https://lucaperret.ch/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:py-24 max-w-2xl mx-auto">
      <Link
        href="/"
        className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block"
      >
        &larr; Home
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        About
      </h1>

      <div className="space-y-6 text-foreground/85 leading-relaxed">
        <p>
          I&apos;m Luca Perret, a builder based in Vevey, Switzerland. I work at
          the intersection of technology, knowledge management, and
          collaborative learning.
        </p>

        <p>
          I spent a decade as a full-stack developer — building eCommerce
          platforms, open source tools, and shipping side projects. Then I moved
          into digital transformation, where I bring a product mindset to how
          organizations learn, innovate, and share knowledge.
        </p>

        <p>
          At{" "}
          <a
            href="https://www.nespresso.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            Nespresso
          </a>
          , I&apos;ve worn several hats over 7+ years — from frontend innovation
          and eCommerce personalization to data strategy and now knowledge
          management. Today I help experts co-create learning content, structure
          communities of practice, and coach internal venture teams. I&apos;m a
          certified Front End Innovation Coach (Strategyzer).
        </p>

        <p>
          I believe the real advantage in the AI era won&apos;t be access to
          information — it will be our ability to learn together and keep
          knowledge alive.
        </p>

        <p>
          Currently, I&apos;m focused on building AI agent tools and open source
          projects. I shipped{" "}
          <a
            href="https://tidal-cli.lucaperret.ch/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            tidal-cli
          </a>{" "}
          (a CLI and MCP server for Tidal music streaming) and{" "}
          <a
            href="https://github.com/lucaperret/agent-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            agent-skills
          </a>{" "}
          (AI agent superpowers for macOS, MCP servers, and connector
          publishing).
        </p>

        <p>
          Outside work, I practice Wing Chun, tinker with AI agents, and manage
          my mother&apos;s art career — she&apos;s a painter and sculptor whose
          work has been exhibited at the Beijing Biennale. You can see her
          portfolio at{" "}
          <a
            href="https://sylviarhud.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            sylviarhud.com
          </a>
          .
        </p>

        <p>
          <Link
            href="/"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            See my projects &rarr;
          </Link>
        </p>
      </div>
    </main>
  );
}

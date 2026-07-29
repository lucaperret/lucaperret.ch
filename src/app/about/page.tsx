import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Luca Perret — Builder, Co-Founder of EnÉquipe",
  description:
    "Co-founder of EnÉquipe, curating venues and activities for corporate events in French-speaking Switzerland. Former full-stack developer, ten years at Nespresso. Based in Bulle.",
  alternates: {
    canonical: "https://lucaperret.ch/about",
  },
  openGraph: {
    title: "About Luca Perret — Builder, Co-Founder of EnÉquipe",
    description:
      "Swiss-based builder and co-founder of EnÉquipe. Open source, AI agents, and things I ship.",
    url: "https://lucaperret.ch/about",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Luca Perret" }],
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
          I&apos;m Luca Perret, a builder based in Bulle, Switzerland. I build my
          own things now, after fifteen years building other people&apos;s.
        </p>

        <p>
          I co-founded{" "}
          <a
            href="https://enequipe.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            EnÉquipe
          </a>
          , which selects the venue, the activity and the meal for corporate
          events across French-speaking Switzerland. Organising a team event eats
          days: you call venues that never call back, you chase quotes, and you
          still don&apos;t know whether the place is any good. So we built the
          directory we wished existed, qualified one venue at a time. Not
          scraped. Called.
        </p>

        <p>
          I spent a decade as a full-stack developer — building eCommerce
          platforms, open source tools, and shipping side projects. My approach
          has always been the same: ship early, learn fast, and iterate based on
          real feedback. Then I moved into digital transformation, where I
          brought a product mindset to how organizations learn, innovate, and
          share knowledge.
        </p>

        <p>
          I spent ten years at{" "}
          <a
            href="https://www.nespresso.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            Nespresso
          </a>
          , wearing several hats — from frontend innovation and eCommerce
          personalization to data strategy and, latterly, knowledge management. I
          designed peer learning programs, helped experts co-create content, and
          coached internal venture teams using innovation frameworks. I&apos;m a
          certified Front End Innovation Coach (Strategyzer). I left in June 2026.
        </p>

        <p>
          I believe the real advantage in the AI era won&apos;t be access to
          information — it will be our ability to learn together and keep
          knowledge alive. The organizations that thrive will be the ones where
          people share what they know, learn from each other, and build on
          collective intelligence rather than individual expertise alone.
        </p>

        <p>
          Alongside EnÉquipe I&apos;m opening{" "}
          <a
            href="https://lebonboeuf.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            Le Bon Bœuf
          </a>
          , a Swiss pasture-beef burger truck, in September 2026. And I keep
          building AI agent tools and open source projects. I shipped{" "}
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
          publishing). I&apos;m particularly interested in how AI agents can
          augment knowledge workers and make expertise more accessible across
          organizations.
        </p>

        <p>
          Outside work, I practice Wing Chun — a martial art that rewards
          patience, structure, and economy of movement. I also tinker with AI
          agents and manage my mother&apos;s art career — she&apos;s a painter
          and sculptor whose work has been exhibited at the Beijing Biennale and
          sold internationally. You can see her
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

        <p className="flex gap-4">
          <Link
            href="/"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            See my projects &rarr;
          </Link>
          <Link
            href="/blog"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            Read my blog &rarr;
          </Link>
        </p>
      </div>

      <footer className="pt-8 mt-16 border-t border-border flex justify-between items-center">
        <Link
          href="/contact"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          Contact &rarr;
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

import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — AI Agents, Knowledge Management & More | Luca Perret",
  description:
    "Articles and insights on AI agents, knowledge management, open source tools, digital transformation, and the builder mindset — by Luca Perret.",
  alternates: {
    canonical: "https://lucaperret.ch/blog",
  },
  openGraph: {
    title: "Blog — AI Agents, Knowledge Management & More | Luca Perret",
    description:
      "Articles and insights on AI agents, knowledge management, open source tools, digital transformation, and the builder mindset — by Luca Perret.",
    url: "https://lucaperret.ch/blog",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Luca Perret" }],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen px-6 py-16 md:py-24 max-w-2xl mx-auto">
      <Link
        href="/"
        className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block"
      >
        &larr; Home
      </Link>

      <section aria-labelledby="blog-heading">
        <h1
          id="blog-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
        >
          Blog
        </h1>
        <p className="text-muted mb-6">
          Writing about AI agents, knowledge management, and building things.
        </p>
        <p className="text-foreground/85 leading-relaxed mb-6">
          This is where I share what I&apos;m learning and building — from
          shipping open source tools and MCP servers, to navigating knowledge
          management in a large organization, to the lessons that come from
          building side projects in public. I write for builders, learners, and
          anyone curious about what happens when technology meets human
          collaboration. Every article comes from real experience: problems I
          encountered, solutions I found, and decisions I made along the way.
          I try to be honest about what works, what doesn&apos;t, and what I&apos;m
          still figuring out.
        </p>

        <div className="mb-12">
          <h2 className="text-lg font-semibold mb-3">What to expect</h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-2">
              <span aria-hidden="true" className="text-muted select-none">-</span>
              AI agents and MCP servers — building, shipping, and integrating them into real workflows
            </li>
            <li className="flex gap-2">
              <span aria-hidden="true" className="text-muted select-none">-</span>
              Knowledge management in large organizations — communities of practice, peer learning, and expertise sharing
            </li>
            <li className="flex gap-2">
              <span aria-hidden="true" className="text-muted select-none">-</span>
              Open source tools — from idea to launch, what works and what doesn&apos;t
            </li>
            <li className="flex gap-2">
              <span aria-hidden="true" className="text-muted select-none">-</span>
              Lessons from side projects — tidal-cli, agent-skills, and everything in between
            </li>
            <li className="flex gap-2">
              <span aria-hidden="true" className="text-muted select-none">-</span>
              Digital transformation insights — bridging the gap between technology and how people actually work
            </li>
            <li className="flex gap-2">
              <span aria-hidden="true" className="text-muted select-none">-</span>
              The builder mindset — shipping fast, learning in public, and staying curious across domains
            </li>
          </ul>
        </div>

        <p className="text-foreground/85 leading-relaxed mb-12">
          New articles are published when I have something worth sharing, not
          on a fixed schedule. Quality over quantity. Want to stay updated?
          Subscribe via{" "}
          <a
            href="/feed.xml"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            RSS feed
          </a>
          , or follow me on{" "}
          <a
            href="https://x.com/lucaperret"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            X
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/lucaperret/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          .
        </p>

        {posts.length === 0 ? (
          <p className="text-muted">No articles yet. Stay tuned.</p>
        ) : (
          <div className="grid gap-6">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="border border-border rounded-lg p-5 hover:border-foreground/20 transition-colors">
                    <time
                      dateTime={post.date}
                      className="text-xs text-muted font-mono"
                    >
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <h2 className="font-medium mt-1 mb-1 group-hover:text-foreground transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted">{post.description}</p>
                    {post.tags.length > 0 && (
                      <div className="flex gap-2 mt-3">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-muted/70 border border-border rounded px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="pt-8 mt-16 border-t border-border flex justify-between items-center">
        <Link
          href="/"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          &larr; Home
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

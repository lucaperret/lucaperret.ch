import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Luca Perret",
  description:
    "Articles about AI agents, knowledge management, open source tools, and the builder mindset.",
  alternates: {
    canonical: "https://lucaperret.ch/blog",
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
        <p className="text-muted mb-12">
          Writing about AI agents, knowledge management, and building things.
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
    </main>
  );
}

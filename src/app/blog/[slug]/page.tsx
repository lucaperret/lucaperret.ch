import type { Metadata } from "next";
import Link from "next/link";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Luca Perret`,
    description: post.description,
    alternates: {
      canonical: `https://lucaperret.ch/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://lucaperret.ch/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Luca Perret",
      url: "https://lucaperret.ch",
    },
    publisher: {
      "@type": "Person",
      name: "Luca Perret",
    },
    mainEntityOfPage: `https://lucaperret.ch/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen px-6 py-16 md:py-24 max-w-2xl mx-auto">
        <Link
          href="/blog"
          className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block"
        >
          &larr; Blog
        </Link>

        <article>
          <header className="mb-10">
            <time
              dateTime={post.date}
              className="text-sm text-muted font-mono"
            >
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 mb-2">
              {post.title}
            </h1>
            <p className="text-sm text-muted mb-4">
              By{" "}
              <a href="https://lucaperret.ch" className="hover:text-foreground transition-colors">
                Luca Perret
              </a>
            </p>
            {post.tags.length > 0 && (
              <div className="flex gap-2">
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
          </header>

          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml! }}
          />
        </article>
      </main>
    </>
  );
}

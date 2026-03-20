import { getAllPosts } from "@/lib/blog";

export function GET() {
  const posts = getAllPosts();

  const items = posts
    .map(
      (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>https://lucaperret.ch/blog/${post.slug}</link>
      <guid>https://lucaperret.ch/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Luca Perret — Blog</title>
    <link>https://lucaperret.ch/blog</link>
    <description>Articles about AI agents, knowledge management, open source tools, and the builder mindset.</description>
    <language>en</language>
    <atom:link href="https://lucaperret.ch/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

import { notFound } from "next/navigation";

import { SiteShell } from "@/components/site-shell";
import { getMediumPost, getMediumPosts } from "@/lib/medium-rss";

export const revalidate = 21600;

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await getMediumPosts();

  return posts.map((post) => ({
    slug: post.slug
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getMediumPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <SiteShell active="blogs">
      <article>
        <a
          href="/blogs"
          className="text-[0.98rem] leading-7 text-zinc-500 transition hover:text-zinc-100"
        >
          back to blogs
        </a>

        <header className="mt-8">
          <h1 className="text-[2rem] leading-tight tracking-[-0.03em] text-zinc-100 sm:text-[2.6rem]">
            {post.title}
          </h1>
          <p className="mt-4 text-[1.05rem] leading-7 text-zinc-500">{post.date}</p>
        </header>

        {post.contentHtml ? (
          <div
            className="blog-content mt-12"
            dangerouslySetInnerHTML={{
              __html: post.contentHtml
            }}
          />
        ) : (
          <p className="mt-12 text-[1.16rem] leading-8 text-zinc-400">
            This post is available from Medium, but the RSS content could not be loaded right now.
          </p>
        )}

        <p className="mt-12 text-[1rem] leading-7 text-zinc-500">
          Original post on{" "}
          <a
            href={post.href}
            target="_blank"
            rel="noreferrer"
            className="text-sky-300 underline decoration-sky-300/40 underline-offset-4 transition hover:text-sky-200"
          >
            Medium
          </a>
          .
        </p>
      </article>
    </SiteShell>
  );
}

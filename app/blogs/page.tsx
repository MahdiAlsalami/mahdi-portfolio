import { SiteShell } from "@/components/site-shell";
import { getMediumPosts } from "@/lib/medium-rss";
import Link from "next/link";

export const revalidate = 60;

export default async function BlogsPage() {
  const posts = await getMediumPosts();

  return (
    <SiteShell active="blogs">
      <section>
        <h1 className="page-heading">BLOGS</h1>

        <div className="mt-10 space-y-10">
          {posts.map((post) => (
            <article key={post.href}>
              <h2 className="text-[1.55rem] leading-9">
                <Link
                  href={`/blogs/${post.slug}`}
                  className="text-sky-300 transition hover:text-sky-200"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-[1.12rem] leading-7 text-zinc-500">{post.date}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

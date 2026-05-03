import { SiteShell } from "@/components/site-shell";
import { blogItems } from "@/data/portfolio";

export default function BlogsPage() {
  return (
    <SiteShell active="blogs">
      <section>
        <h1 className="page-heading">BLOGS</h1>

        <div className="mt-10 space-y-10">
          {blogItems.map((blog) => (
            <article key={blog.href}>
              <h2 className="text-[1.55rem] leading-9">
                <a
                  href={blog.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-300 transition hover:text-sky-200"
                >
                  {blog.title}
                </a>
              </h2>
              <p className="mt-2 text-[1.12rem] leading-7 text-zinc-500">{blog.date}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

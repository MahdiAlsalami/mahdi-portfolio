import { SiteShell } from "@/components/site-shell";
import { projectItems, socialMediaContent } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <SiteShell active="projects">
      <section>
        <h1 className="page-heading">PROJECTS</h1>

        <div className="mt-10 space-y-12">
          {projectItems.map((project) => (
            <article key={project.title}>
              <h2 className="text-[1.55rem] leading-9 text-zinc-100">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-sky-300"
                >
                  {project.title}
                </a>
              </h2>
              <p className="mt-2 text-[1.18rem] leading-8 text-zinc-500">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="page-heading">SOCIAL MEDIA</h2>

        <p className="mt-10 text-[1.18rem] leading-8 text-zinc-500">
          {socialMediaContent.text}{" "}
          <a
            href={socialMediaContent.href}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-100 underline decoration-zinc-500 underline-offset-4 transition hover:text-white"
          >
            View links
          </a>
          .
        </p>
      </section>
    </SiteShell>
  );
}

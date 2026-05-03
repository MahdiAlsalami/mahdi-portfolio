import { SiteShell } from "@/components/site-shell";
import { experienceItems, leadershipItems } from "@/data/portfolio";

function LinkedOrganization({ name, href }: { name: string; href?: string }) {
  if (!href) {
    return <span>{name}</span>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-zinc-100 underline decoration-zinc-500 underline-offset-4 transition hover:text-white"
    >
      {name}
    </a>
  );
}

export default function ExperiencesPage() {
  return (
    <SiteShell active="experiences">
      <section>
        <h1 className="page-heading">EXPERIENCES</h1>

        <div className="mt-10 space-y-10">
          {experienceItems.map((item) => (
            <article
              key={`${item.title}-${item.organization}`}
              className="grid gap-1 sm:grid-cols-[minmax(0,1fr)_12rem] sm:items-baseline sm:gap-8"
            >
              <div>
                <h2 className="text-[1.08rem] leading-7 text-zinc-100 sm:text-[1.18rem]">
                  {item.title} at{" "}
                  <LinkedOrganization name={item.organization} href={item.organizationUrl} />
                </h2>
                {item.description ? (
                  <p className="mt-1 max-w-2xl text-[0.98rem] leading-7 text-zinc-500">{item.description}</p>
                ) : null}
              </div>
              <p className="whitespace-nowrap text-[0.98rem] leading-7 text-zinc-500 sm:text-right">{item.period}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="page-heading">LEADERSHIP</h2>

        <div className="mt-10 space-y-8">
          {leadershipItems.map((item) => (
            <article key={`${item.title}-${item.organization}`}>
              <h3 className="text-[1.08rem] leading-7 text-zinc-100 sm:text-[1.18rem]">{item.title}</h3>
              <p className="mt-1 text-[0.98rem] leading-7 text-zinc-500">{item.organization}</p>
              {item.period ? (
                <p className="text-[0.98rem] leading-7 text-zinc-500">{item.period}</p>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

import { AboutNatureDrift } from "@/components/about-nature-drift";
import { SiteShell } from "@/components/site-shell";
import { aboutContent, profile } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <>
      <AboutNatureDrift />
      <SiteShell
        active="about"
        top={
          <img
            src="/about-hike.jpg"
            alt="Mahdi on a hiking trail overlook"
            className="h-56 w-full object-cover object-[60%_18%] grayscale sm:h-72 lg:h-[21rem]"
          />
        }
      >
        <section className="max-w-3xl space-y-5 text-[1.12rem] leading-[1.65] tracking-[-0.015em] text-zinc-400 sm:text-[1.28rem]">
          <h1 className="text-zinc-100">{aboutContent.greeting}</h1>

          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <p>
            Connect with me{" "}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sky-300 underline decoration-sky-300/40 underline-offset-4 transition hover:text-sky-200"
            >
              here
            </a>
            .
          </p>
        </section>
      </SiteShell>
    </>
  );
}

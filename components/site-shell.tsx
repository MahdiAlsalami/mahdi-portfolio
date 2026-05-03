import Link from "next/link";
import type { ReactNode } from "react";

import { navItems, profile } from "@/data/portfolio";

import { SocialFooter } from "./social-footer";

type SiteShellProps = {
  active: (typeof navItems)[number]["label"];
  children: ReactNode;
  top?: ReactNode;
};

export function SiteShell({ active, children, top }: SiteShellProps) {
  const navLinkClass =
    "nav-link text-[1.02rem] font-semibold capitalize leading-7 text-zinc-500 transition hover:text-zinc-100 aria-[current=page]:text-zinc-100";

  return (
    <main className="relative z-10 mx-auto min-h-screen w-full max-w-6xl px-6 py-10 text-zinc-300 sm:px-10 lg:py-16">
      {top ? <div className="mb-10 lg:mb-14">{top}</div> : null}

      <div className="flex flex-col lg:grid lg:grid-cols-[11rem_1fr] lg:gap-16">
        <aside className="mb-12 lg:mb-0">
          <div className="lg:sticky lg:top-16">
            <Link href="/" className="mb-8 block text-[1.05rem] font-semibold text-zinc-100 lg:mb-12">
              {profile.name}
            </Link>
            <nav aria-label="Primary" className="flex flex-wrap gap-x-6 gap-y-2 lg:flex-col lg:gap-3">
              {navItems.map((item) =>
                item.href.startsWith("mailto:") ? (
                  <a key={item.href} href={item.href} className={navLinkClass}>
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active === item.label ? "page" : undefined}
                    className={navLinkClass}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        </aside>

        <div className="w-full max-w-[58rem]">
          {children}
          <SocialFooter />
        </div>
      </div>
    </main>
  );
}

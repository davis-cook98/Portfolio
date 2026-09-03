"use client";

import { DrawablyDivider } from "drawably/react";
import { nav, site } from "@/lib/site";
import { NavMark, TextMark } from "@/components/sketch-link";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-5 py-8 sm:px-8 sm:py-10">
      <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
        <NavMark href="/">{site.name}</NavMark>
        <nav aria-label="primary" className="flex flex-wrap items-baseline gap-x-4 gap-y-2 font-mono text-sm">
          {nav
            .filter((item) => item.href !== "/")
            .map((item) => (
              <NavMark key={item.href} href={item.href}>
                {item.label}
              </NavMark>
            ))}
        </nav>
      </header>

      <div className="py-5">
        <DrawablyDivider />
      </div>

      <main className="flex flex-1 flex-col">{children}</main>

      <div className="py-5">
        <DrawablyDivider />
      </div>

      <footer className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 font-mono text-sm">
        <p className="text-muted">{site.location}</p>
        <p className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <TextMark href={site.linkedin}>linkedin</TextMark>
          <TextMark href={site.github}>github</TextMark>
          <TextMark href={`mailto:${site.email}`}>email</TextMark>
        </p>
      </footer>
    </div>
  );
}

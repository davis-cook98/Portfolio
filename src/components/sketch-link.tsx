"use client";

import {
  DrawablyButton,
  DrawablyHighlight,
  DrawablyUnderline,
} from "drawably/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export function NavMark({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  const pathname = usePathname();
  const active =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  const Mark = active ? DrawablyHighlight : DrawablyUnderline;

  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        <Mark>{children}</Mark>
      </a>
    );
  }

  return (
    <Link href={href}>
      <Mark>{children}</Mark>
    </Link>
  );
}

export function TextMark({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  const mark = <DrawablyUnderline>{children}</DrawablyUnderline>;

  if (isExternal(href)) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {mark}
      </a>
    );
  }

  return <Link href={href}>{mark}</Link>;
}

export function RouteButton({
  href,
  children,
  variant = "outline",
}: {
  href: string;
  children: string;
  variant?: "outline" | "solid" | "scribble";
}) {
  const router = useRouter();

  return (
    <DrawablyButton
      variant={variant}
      onClick={() => {
        if (href.startsWith("mailto:")) {
          window.location.assign(href);
          return;
        }
        if (isExternal(href)) {
          window.open(href, "_blank", "noopener,noreferrer");
          return;
        }
        router.push(href);
      }}
    >
      {children}
    </DrawablyButton>
  );
}

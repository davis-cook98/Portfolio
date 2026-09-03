"use client";

import { DrawablyCircle } from "drawably/react";
import { RouteButton } from "@/components/sketch-link";

export function NotFoundView() {
  return (
    <div className="flex flex-1 flex-col justify-center gap-6 py-16">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="text-4xl font-semibold tracking-tight">
        page <DrawablyCircle>not found</DrawablyCircle>
      </h1>
      <p className="max-w-md text-lg leading-8 text-muted">
        the requested page is unavailable. maybe it was never drawn.
      </p>
      <div>
        <RouteButton href="/" variant="solid">
          go home
        </RouteButton>
      </div>
    </div>
  );
}

"use client";

import { useRef } from "react";
import {
  DrawablyArrow,
  DrawablyBadge,
  DrawablyCircle,
  DrawablyHighlight,
  DrawablyUnderline,
} from "drawably/react";
import { RouteButton } from "@/components/sketch-link";

export function HomeView() {
  const noteRef = useRef<HTMLParagraphElement>(null);
  const aboutRef = useRef<HTMLSpanElement>(null);

  return (
    <div className="flex flex-1 flex-col justify-center gap-10 py-10">
      <div className="flex flex-col gap-5">
        <p>
          <DrawablyBadge>hello</DrawablyBadge>
        </p>
        <h1 className="max-w-xl text-5xl font-semibold tracking-tight sm:text-7xl">
          davis <DrawablyCircle>cook</DrawablyCircle>
        </h1>
        <p ref={noteRef} className="max-w-md text-lg leading-8 text-muted">
          web developer at judi health. interested in{" "}
          <DrawablyHighlight>data analysis</DrawablyHighlight> and{" "}
          <DrawablyUnderline>machine learning</DrawablyUnderline>.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span ref={aboutRef}>
          <RouteButton href="/about" variant="solid">
            about
          </RouteButton>
        </span>
        <RouteButton href="/projects">projects</RouteButton>
        <RouteButton href="/quotes" variant="scribble">
          quotes
        </RouteButton>
      </div>

      <DrawablyArrow from={noteRef} to={aboutRef} />
    </div>
  );
}

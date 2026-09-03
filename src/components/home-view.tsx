"use client";

import {
  DrawablyBadge,
  DrawablyCircle,
  DrawablyHighlight,
  DrawablyUnderline,
} from "drawably/react";
import { RouteButton } from "@/components/sketch-link";

export function HomeView() {
  return (
    <div className="flex flex-col pt-6 pb-4 lg:flex-1 lg:pt-20 lg:pb-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-5">
          <p>
            <DrawablyBadge>hello</DrawablyBadge>
          </p>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            davis <DrawablyCircle>cook</DrawablyCircle>
          </h1>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-lg leading-8 text-muted lg:text-xl lg:leading-9">
            web developer at judi health. interested in{" "}
            <DrawablyHighlight>data analysis</DrawablyHighlight> and{" "}
            <DrawablyUnderline>machine learning</DrawablyUnderline>.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <RouteButton href="/about" variant="solid">
              about
            </RouteButton>
            <RouteButton href="/projects">projects</RouteButton>
            <RouteButton href="/quotes">quotes</RouteButton>
          </div>
        </div>
      </div>
    </div>
  );
}

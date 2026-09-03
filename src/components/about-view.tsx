"use client";

import {
  DrawablyCard,
  DrawablyCircle,
  DrawablyHighlight,
  DrawablyList,
} from "drawably/react";
import { facts, site } from "@/lib/site";
import { RouteButton, TextMark } from "@/components/sketch-link";

export function AboutView() {
  return (
    <div className="flex flex-col gap-8 py-4">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        about
      </h1>

      <DrawablyCard className="flex flex-col gap-5 text-lg leading-8">
        <p>
          hi. my name is davis cook. i live in{" "}
          <DrawablyHighlight>new jersey</DrawablyHighlight> and work as an
          intermediate applications developer at ups.
        </p>
        <p>
          i like projects that sit between data analysis and machine learning. i
          graduated from seton hall university in 2020 with a degree in computer
          science. while there, i had a paper accepted to{" "}
          <DrawablyCircle>dsaa 2020</DrawablyCircle> on automated intrusion
          detection.
        </p>
        <p>
          if you want to connect, find me on{" "}
          <TextMark href={site.linkedin}>linkedin</TextMark> or email{" "}
          <TextMark href={`mailto:${site.email}`}>{site.email}</TextMark>.
        </p>
      </DrawablyCard>

      <DrawablyList marker="check" className="text-base leading-8">
        {facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </DrawablyList>

      <div>
        <RouteButton href={`mailto:${site.email}`} variant="solid">
          email me
        </RouteButton>
      </div>
    </div>
  );
}

"use client";

import {
  DrawablyBadge,
  DrawablyCard,
  DrawablyCircle,
  DrawablyHighlight,
  DrawablyList,
} from "drawably/react";
import { experience, facts, site } from "@/lib/site";
import { RouteButton, TextMark } from "@/components/sketch-link";

export function AboutView() {
  return (
    <div className="flex flex-col gap-10 py-4 lg:gap-12">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        about
      </h1>

      <DrawablyCard className="flex flex-col gap-5 text-lg leading-8">
        <p>
          hi. my name is davis cook. i live in{" "}
          <DrawablyHighlight>new jersey</DrawablyHighlight> and work as a web
          developer at{" "}
          <TextMark href="https://www.judi.health/">judi health</TextMark>.
        </p>
        <p>
          i like projects that sit between data analysis and machine learning. i
          graduated from seton hall university in 2020 with a degree in computer
          science and a minor in psychology. while there, i had a paper accepted
          to <DrawablyCircle>dsaa 2020</DrawablyCircle> on automated intrusion
          detection.
        </p>
        <p>
          if you want to connect, find me on{" "}
          <TextMark href={site.linkedin}>linkedin</TextMark> or email{" "}
          <TextMark href={`mailto:${site.email}`}>{site.email}</TextMark>.
        </p>
      </DrawablyCard>

      <div className="grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-14">
        <div className="flex flex-col gap-8">
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

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold tracking-tight">experience</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {experience.map((job) => (
              <DrawablyCard
                key={`${job.company}-${job.title}`}
                className="flex flex-col gap-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {job.title}
                  </h3>
                  {job.current ? <DrawablyBadge>current</DrawablyBadge> : null}
                </div>
                <p className="font-mono text-sm text-muted">
                  {job.href ? (
                    <TextMark href={job.href}>{job.company}</TextMark>
                  ) : (
                    job.company
                  )}
                </p>
                <p className="leading-7 text-muted">{job.description}</p>
              </DrawablyCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

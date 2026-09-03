"use client";

import { DrawablyBadge, DrawablyButton, DrawablyCard } from "drawably/react";
import { projects } from "@/lib/site";

const badgeVariant = {
  published: "outline",
  ongoing: "outline",
  finished: "outline",
  "on hold": "outline",
} as const;

export function ProjectsView() {
  return (
    <div className="flex flex-col gap-8 py-4 lg:gap-10">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          projects
        </h1>
        <p className="text-muted lg:max-w-sm lg:text-right">
          things i have been drawing in code.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <DrawablyCard key={project.title} className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-semibold tracking-tight">
                {project.title}
              </h2>
              <div className="flex flex-wrap items-center gap-2">
                <DrawablyBadge>{project.category}</DrawablyBadge>
                <DrawablyBadge variant={badgeVariant[project.status]}>
                  {project.status}
                </DrawablyBadge>
              </div>
            </div>
            <p className="flex-1 leading-7 text-muted">{project.description}</p>
            {project.href ? (
              <div>
                <DrawablyButton
                  variant="outline"
                  onClick={() =>
                    window.open(project.href, "_blank", "noopener,noreferrer")
                  }
                >
                  open
                </DrawablyButton>
              </div>
            ) : null}
          </DrawablyCard>
        ))}
      </div>
    </div>
  );
}

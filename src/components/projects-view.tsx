"use client";

import { DrawablyBadge, DrawablyButton, DrawablyCard } from "drawably/react";
import { projects } from "@/lib/site";

const badgeVariant = {
  published: "scribble",
  ongoing: "scribble",
  finished: "outline",
  "on hold": "outline",
} as const;

export function ProjectsView() {
  return (
    <div className="flex flex-col gap-8 py-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          projects
        </h1>
        <p className="text-muted">things i have been drawing in code.</p>
      </div>

      <div className="flex flex-col gap-6">
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
            <p className="leading-7 text-muted">{project.description}</p>
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

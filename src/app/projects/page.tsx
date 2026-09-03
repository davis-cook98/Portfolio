import type { Metadata } from "next";
import { ProjectsView } from "@/components/projects-view";

export const metadata: Metadata = {
  title: "projects",
  description:
    "research, school, and personal projects by davis cook — intrusion detection, analysis, and this website.",
};

export default function ProjectsPage() {
  return <ProjectsView />;
}

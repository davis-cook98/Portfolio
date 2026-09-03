import type { Metadata } from "next";
import { AboutView } from "@/components/about-view";

export const metadata: Metadata = {
  title: "about",
  description:
    "davis cook is an applications developer in new jersey working on data analysis, systems, and machine learning.",
};

export default function AboutPage() {
  return <AboutView />;
}

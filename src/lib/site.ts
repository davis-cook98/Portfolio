export const site = {
  name: "davis cook",
  shortName: "dc",
  role: "web developer",
  location: "new jersey",
  company: "judi health",
  email: "daviscook@outlook.com",
  linkedin: "https://www.linkedin.com/in/davis-cook/",
  github: "https://github.com/davis-cook98",
  description:
    "web developer at judi health. data analysis, systems, and machine learning.",
} as const;

export const nav = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/quotes", label: "quotes" },
] as const;

export const experience = [
  {
    title: "web developer",
    company: "judi health",
    href: "https://www.judi.health/",
    dates: "dec 2025 – present",
    current: true,
  },
  {
    title: "web developer",
    company: "pharmacy investigators",
    href: "https://piconsulting.org/",
    dates: "jul 2022 – dec 2025",
    current: false,
    description:
      "supported .net and react + flask apps, worked with end users on improvements, and managed the company's aws infrastructure.",
  },
  {
    title: "intermediate applications developer",
    company: "ups",
    href: null,
    dates: "jul 2019 – jul 2022",
    current: false,
    description:
      "agile team worked on an etl pipeline for package data, delivered to external customers. started as a software engineer co-op.",
  },
] as const;

export const facts = [
  "based in new jersey",
  "web developer at judi health",
  "computer science + psychology, seton hall 2020",
  "dsaa 2020 paper on intrusion detection",
] as const;

export const projects = [
  {
    title: "intrusion detection baselines",
    status: "published",
    category: "research",
    href: "https://doi.org/10.1109/dsaa49011.2020.00102",
    description:
      "dsaa 2020 paper on multiclass classification baselines for anomaly-based network intrusion detection. the model distinguishes legitimate, direct, and obfuscated traffic at up to 95% accuracy.",
  },
  {
    title: "this website",
    status: "ongoing",
    category: "personal",
    href: "https://github.com/davis-cook98/Portfolio",
    description:
      "a notebook of a site. rebuilt on next.js with hand-drawn chrome that re-sketches on every visit.",
  },
  {
    title: "automated programming",
    status: "finished",
    category: "school",
    href: null,
    description:
      "simplifying the scripting-to-function process. machine learning recognizes the inputs and outputs of scripts and produces a usable, savable function.",
  },
  {
    title: "text analysis",
    status: "finished",
    category: "school",
    href: null,
    description:
      "sentiment analysis of public opinion on charter schools, using forty years of newspaper articles and python.",
  },
  {
    title: "twitter analysis",
    status: "on hold",
    category: "personal",
    href: "https://github.com/davis-cook98/TwitterAnalysis",
    description:
      "sentiment analysis on the twitter stream. parked after the api revoked credentials.",
  },
  {
    title: "stock tracker",
    status: "finished",
    category: "personal",
    href: "https://github.com/davis-cook98/Stock-Tracker",
    description: "a small program for tracking stocks, written to learn by doing.",
  },
  {
    title: "small projects",
    status: "finished",
    category: "personal",
    href: "https://github.com/davis-cook98/Personal-Work",
    description:
      "scratchpad for libraries and skills. i prefer to learn while building, so this folder keeps growing.",
  },
] as const;

export { quotes } from "./quotes";

export type ProjectStatus = (typeof projects)[number]["status"];

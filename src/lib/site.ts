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
    current: true,
    description:
      "building software for unified health benefit administration — pharmacy, medical, vision, and dental.",
  },
  {
    title: "intermediate applications developer",
    company: "ups",
    href: null,
    current: false,
    description: "applications development on air, fleet, and freight systems.",
  },
  {
    title: "application developer",
    company: "ups",
    href: null,
    current: false,
    description:
      "started here after graduating, writing and shipping internal applications.",
  },
  {
    title: "academic ambassador",
    company: "seton hall university",
    href: null,
    current: false,
    description:
      "outreach to high school students interested in computer science.",
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

export const quotes = [
  {
    text: "simplicity is the ultimate sophistication.",
    author: "leonardo da vinci",
  },
  {
    text: "i intend to live life, not just exist.",
    author: "george takei",
  },
  {
    text: "in the middle of every difficulty lies opportunity.",
    author: "albert einstein",
  },
  {
    text: "design is not just what it looks like and feels like. design is how it works.",
    author: "steve jobs",
  },
] as const;

export type ProjectStatus = (typeof projects)[number]["status"];

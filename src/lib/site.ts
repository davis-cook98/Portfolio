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
  {
    text: "the best way to predict the future is to invent it.",
    author: "alan kay",
  },
  {
    text: "perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
    author: "antoine de saint-exupéry",
  },
  {
    text: "programs must be written for people to read, and only incidentally for machines to execute.",
    author: "harold abelson",
  },
  {
    text: "the details are not the details. they make the design.",
    author: "charles eames",
  },
  {
    text: "good design is as little design as possible.",
    author: "dieter rams",
  },
  {
    text: "not everything that can be counted counts, and not everything that counts can be counted.",
    author: "william bruce cameron",
  },
  {
    text: "we shape our tools and thereafter our tools shape us.",
    author: "john culkin",
  },
  {
    text: "life is trying things to see if they work.",
    author: "ray bradbury",
  },
] as const;

export type ProjectStatus = (typeof projects)[number]["status"];

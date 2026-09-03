import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://daviscook.info";

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/about/`, lastModified: new Date() },
    { url: `${base}/projects/`, lastModified: new Date() },
    { url: `${base}/quotes/`, lastModified: new Date() },
  ];
}

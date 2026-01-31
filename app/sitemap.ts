import type { MetadataRoute } from "next";

const SITE_URL = "https://rudrasankha.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1 },
    { url: `${SITE_URL}/resume`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${SITE_URL}/Resume.pdf`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${SITE_URL}/projects`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${SITE_URL}/projects/1`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${SITE_URL}/projects/2`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${SITE_URL}/projects/3`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${SITE_URL}/projects/4`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${SITE_URL}/projects/5`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${SITE_URL}/projects/6`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${SITE_URL}/projects/7`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${SITE_URL}/projects/8`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
  ];
}

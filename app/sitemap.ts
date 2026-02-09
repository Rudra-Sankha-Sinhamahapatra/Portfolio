import type { MetadataRoute } from "next";

const SITE_URL = "https://rudrasankha.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1 },
    { url: `${SITE_URL}/resume`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${SITE_URL}/Resume.pdf`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${SITE_URL}/projects`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${SITE_URL}/projects/encorp-ai`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${SITE_URL}/projects/better-uptime`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${SITE_URL}/projects/w8w`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${SITE_URL}/projects/adda-ai`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${SITE_URL}/projects/trading-pro`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${SITE_URL}/projects/xemen`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${SITE_URL}/projects/bodhi`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${SITE_URL}/projects/wiz`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
  ];
}

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://rudrasankha.com", lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: "https://rudrasankha.com/resume", lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: "https://rudrasankha.com/Resume.pdf", lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: "https://rudrasankha.com/projects", lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: "https://rudrasankha.com/projects/1", lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: "https://rudrasankha.com/projects/2", lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: "https://rudrasankha.com/projects/3", lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: "https://rudrasankha.com/projects/4", lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: "https://rudrasankha.com/projects/5", lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: "https://rudrasankha.com/projects/6", lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: "https://rudrasankha.com/projects/7", lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: "https://rudrasankha.com/projects/8", lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  ];
}

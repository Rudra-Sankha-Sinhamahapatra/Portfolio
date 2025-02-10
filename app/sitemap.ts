import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://rudrasankha.com", lastModified: new Date() },
    { url: "https://cool.rudrasankha.com", lastModified: new Date() },
  ];
}

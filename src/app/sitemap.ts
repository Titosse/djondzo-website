import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { solutions } from "@/data/solutions";
import { posts } from "@/data/posts";
export default function sitemap(): MetadataRoute.Sitemap {
  const core = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    {
      path: "/funcionalidades",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    { path: "/precos", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contactos", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
  ];
  return [
    ...core.map((r) => ({
      url: `${siteConfig.url}${r.path}`,
      lastModified: new Date(),
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...solutions.map((s) => ({
      url: `${siteConfig.url}/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.82,
    })),
    ...posts.map((p) => ({
      url: `${siteConfig.url}/blog/${p.slug}`,
      lastModified: new Date(`${p.publishedAt}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.72,
    })),
  ];
}

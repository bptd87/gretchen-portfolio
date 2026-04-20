import type { MetadataRoute } from "next";
import { getProjectSlug, projects } from "@/content/projects";

const siteUrl = "https://www.gretchenugalde.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/resume`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/portfolio/${getProjectSlug(project)}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...projectRoutes];
}

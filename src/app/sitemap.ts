import { MetadataRoute } from "next";
import { projectsData } from "@/data/projects";
import { newsData } from "@/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://arya-uganda.org";

  const staticPages = [
    "",
    "/about",
    "/programmes",
    "/projects",
    "/impact",
    "/news",
    "/partners",
    "/resources",
    "/get-involved",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectPages = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const newsPages = newsData.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages, ...newsPages];
}

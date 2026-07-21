import type { MetadataRoute } from "next";
import { getHonorImageSeoEntries } from "@/lib/honors-seo";
import { siteConfig, sitePages } from "@/lib/seo";
import { projects, blogPosts } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const honorImages = getHonorImageSeoEntries().map((image) => image.loc);

  const staticRoutes: MetadataRoute.Sitemap = sitePages.map((page) => ({
    url: `${siteConfig.url}${page.path === "/" ? "" : page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    ...(page.path === "/honors" && honorImages.length
      ? { images: honorImages }
      : {}),
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}

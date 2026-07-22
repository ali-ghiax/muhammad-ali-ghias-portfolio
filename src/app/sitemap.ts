import type { MetadataRoute } from "next";
import { siteConfig, sitePages } from "@/lib/seo";

/** Sitemap lists only primary portfolio pages — no PDFs, blog posts, or detail URLs. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitePages.map((page) => ({
    url: `${siteConfig.url}${page.path === "/" ? "" : page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}

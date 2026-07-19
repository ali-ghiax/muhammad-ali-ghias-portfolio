import { siteConfig, sitePages } from "@/lib/seo";
import { projects, blogPosts } from "@/data/portfolio";

/** All public absolute URLs for sitemaps and Google indexing files. */
export function getSiteUrls(): string[] {
  const staticUrls = sitePages.map(
    (page) => `${siteConfig.url}${page.path === "/" ? "" : page.path}`
  );

  const projectUrls = projects.map(
    (project) => `${siteConfig.url}/projects/${project.slug}`
  );

  const blogUrls = blogPosts.map((post) => `${siteConfig.url}/blog/${post.slug}`);

  return [...staticUrls, ...projectUrls, ...blogUrls];
}

import { blogPosts } from "@/data/portfolio";
import { getBlogKeywordChips, getCuratedArticles } from "@/lib/blog-feed";
import { BlogView } from "@/components/blog/blog-view";

/** Rebuild curated feed at most once per day */
export const revalidate = 86400;

export default async function BlogPage() {
  const { articles, syncedAt } = await getCuratedArticles(16);

  return (
    <BlogView
      originalPosts={blogPosts.map((p) => ({
        id: p.id,
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        category: p.category,
        date: p.date,
        readTime: p.readTime,
      }))}
      curated={articles}
      keywords={getBlogKeywordChips()}
      syncedAt={syncedAt}
    />
  );
}

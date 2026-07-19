export type CuratedArticle = {
  id: number;
  title: string;
  description: string;
  url: string;
  tag: string;
  readingTimeMinutes: number;
  reactions: number;
  publishedAt: string;
  coverImage: string | null;
};

/** Tags aligned with MAG profile — web, React/Next, design, Microsoft ecosystem */
const PROFILE_TAGS = [
  "react",
  "nextjs",
  "typescript",
  "javascript",
  "nodejs",
  "webdev",
  "css",
  "design",
  "github",
  "microsoft",
] as const;

const KEYWORD_CHIPS = [
  "junior software engineer",
  "React Next.js TypeScript",
  "Node.js JavaScript",
  "graphic design",
  "responsive UI",
  "Microsoft Learn MLSA",
  "GitHub student developer",
  "freelance design",
] as const;

type DevToArticle = {
  id: number;
  title: string;
  description: string;
  url: string;
  tag_list: string[];
  reading_time_minutes: number;
  public_reactions_count: number;
  published_at: string;
  cover_image: string | null;
};

async function fetchTagTop(tag: string, days = 7, perPage = 8): Promise<DevToArticle[]> {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?tag=${encodeURIComponent(tag)}&top=${days}&per_page=${perPage}`,
      {
        next: { revalidate: 86400, tags: ["blog-feed"] },
        headers: { Accept: "application/json" },
      }
    );
    if (!res.ok) return [];
    return (await res.json()) as DevToArticle[];
  } catch {
    return [];
  }
}

export function getBlogKeywordChips() {
  return [...KEYWORD_CHIPS];
}

export async function getCuratedArticles(limit = 16): Promise<{
  articles: CuratedArticle[];
  syncedAt: string;
}> {
  const batches = await Promise.all(
    PROFILE_TAGS.map((tag) => fetchTagTop(tag, 7, 6))
  );

  const byId = new Map<number, CuratedArticle>();

  for (const batch of batches) {
    for (const article of batch) {
      if (byId.has(article.id)) continue;
      const primaryTag =
        article.tag_list?.find((t) =>
          PROFILE_TAGS.includes(t.toLowerCase() as (typeof PROFILE_TAGS)[number])
        ) ||
        article.tag_list?.[0] ||
        "webdev";

      byId.set(article.id, {
        id: article.id,
        title: article.title,
        description: article.description || "",
        url: article.url,
        tag: primaryTag,
        readingTimeMinutes: article.reading_time_minutes || 1,
        reactions: article.public_reactions_count || 0,
        publishedAt: article.published_at,
        coverImage: article.cover_image,
      });
    }
  }

  const articles = [...byId.values()]
    .sort((a, b) => b.reactions - a.reactions || b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit);

  return {
    articles,
    syncedAt: new Date().toISOString(),
  };
}

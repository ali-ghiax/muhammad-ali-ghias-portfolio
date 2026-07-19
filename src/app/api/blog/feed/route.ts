import { NextResponse } from "next/server";
import { getCuratedArticles, getBlogKeywordChips } from "@/lib/blog-feed";

export const revalidate = 86400;

export async function GET() {
  const { articles, syncedAt } = await getCuratedArticles(20);
  return NextResponse.json({
    ok: true,
    source: "dev.to",
    profileTags: [
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
    ],
    keywords: getBlogKeywordChips(),
    syncedAt,
    count: articles.length,
    articles,
  });
}

import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

/**
 * Daily refresh hook for the curated blog feed.
 * Secure with CRON_SECRET on Vercel (optional but recommended).
 */
export async function GET(request: Request) {
  const auth = request.headers.get("authorization");
  const secret = process.env.CRON_SECRET;

  if (secret && auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  revalidateTag("blog-feed", "max");
  revalidatePath("/blog");

  return NextResponse.json({
    ok: true,
    revalidated: true,
    tag: "blog-feed",
    path: "/blog",
    at: new Date().toISOString(),
  });
}

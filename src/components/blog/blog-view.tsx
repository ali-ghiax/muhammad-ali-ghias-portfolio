"use client";

import Link from "next/link";
import { Calendar, Clock, ArrowRight, ExternalLink, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/layout/animations";
import type { CuratedArticle } from "@/lib/blog-feed";

type OriginalPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

type BlogViewProps = {
  originalPosts: OriginalPost[];
  curated: CuratedArticle[];
  keywords: string[];
  syncedAt: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogView({
  originalPosts,
  curated,
  keywords,
  syncedAt,
}: BlogViewProps) {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute inset-0 bg-radial" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <AnimatedSection>
            <div className="max-w-3xl mb-10 sm:mb-14">
              <Badge variant="glow" className="mb-4">
                Blog · Auto-updated daily
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-4 sm:mb-6">
                Engineering insights &{" "}
                <span className="text-gradient">ranked articles</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-4">
                Original notes on web development, React/Next.js, graphic design, and MLSA campus
                leadership — plus a daily feed of well-ranked community articles targeting
                keywords like{" "}
                <strong className="text-foreground font-medium">
                  full stack software engineer
                </strong>
                , React/TypeScript, and creative tech.
              </p>
              <p className="text-sm text-muted-foreground">
                Curated feed refreshes every 24 hours · Last sync{" "}
                {formatDate(syncedAt)}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-12 sm:mb-16">
              {keywords.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border bg-card/50 px-3 py-1 text-xs sm:text-sm text-muted-foreground"
                >
                  {chip}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Original posts */}
          <AnimatedSection>
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-2">
                From <span className="text-gradient">MAG</span>
              </h2>
              <p className="text-sm text-muted-foreground">
                Original writing from Muhammad Ali Ghias
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-16 sm:mb-20">
            {originalPosts.map((post) => (
              <StaggerItem key={post.id}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <Card hover className="h-full p-5 sm:p-6 group">
                    <div className="flex flex-wrap items-center gap-2 mb-3 text-xs text-muted-foreground">
                      <Badge variant="outline">Original</Badge>
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-border text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.date)}
                      </span>
                      <span className="inline-flex items-center gap-1 text-primary">
                        Read more
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Curated feed */}
          <AnimatedSection>
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-2">
                Top-ranked <span className="text-gradient">industry reads</span>
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl">
                Auto-pulled from DEV.to top weekly articles for React, Next.js, TypeScript,
                JavaScript, Node.js, webdev, design, GitHub, and Microsoft — sorted by community
                reactions.
              </p>
            </div>
          </AnimatedSection>

          {curated.length === 0 ? (
            <p className="text-muted-foreground text-sm mb-16">
              Curated feed is warming up. Check back shortly, or open{" "}
              <Link href="/api/blog/feed" className="text-primary underline">
                /api/blog/feed
              </Link>
              .
            </p>
          ) : (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-16 sm:mb-20">
              {curated.map((article) => (
                <StaggerItem key={article.id}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card hover className="h-full p-5 sm:p-6 group">
                      <div className="flex flex-wrap items-center gap-2 mb-3 text-xs text-muted-foreground">
                        <Badge variant="outline">Curated</Badge>
                        <Badge variant="outline" className="capitalize">
                          {article.tag}
                        </Badge>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readingTimeMinutes} min read
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {article.reactions}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-border text-xs text-muted-foreground">
                        <span>{formatDate(article.publishedAt)}</span>
                        <span className="inline-flex items-center gap-1 text-primary">
                          View
                          <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Card>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              Want to <span className="text-gradient">collaborate</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Building web apps, brand systems, or campus tech programs? Let&apos;s talk.
            </p>
            <Link href="/contact">
              <Button size="lg" className="glow-primary">
                Get in touch
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

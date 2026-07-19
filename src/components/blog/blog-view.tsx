"use client";

import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Code,
} from "lucide-react";
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
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute inset-0 bg-radial" />

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Hero — centered like reference */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/25 mb-4">
                Blog · Auto-updated daily
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Engineering insights &{" "}
                <span className="text-gradient">ranked articles</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                Original notes on full-stack web apps, React, Next.js, TypeScript, graphic design,
                and MLSA campus leadership — plus a daily feed of well-ranked community articles
                targeting keywords like{" "}
                <strong className="text-foreground font-medium">
                  software engineer
                </strong>
                , React/Next.js, and visual design.
              </p>
              <p className="text-sm text-muted-foreground inline-flex items-center justify-center gap-2 flex-wrap">
                <TrendingUp className="w-4 h-4 text-primary shrink-0" />
                Curated feed refreshes every 24 hours · Last sync {formatDate(syncedAt)}
              </p>
            </div>
          </AnimatedSection>

          {/* Keyword chips */}
          <AnimatedSection delay={0.05}>
            <div className="flex flex-wrap justify-center gap-2 mb-14 max-w-4xl mx-auto">
              {keywords.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded-md px-2.5 py-1 border border-border text-muted-foreground bg-transparent text-xs font-normal"
                >
                  {chip}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* From MAG */}
          <AnimatedSection>
            <h2 className="text-2xl font-display font-bold mb-6">From Muhammad Ali Ghias</h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {originalPosts.map((post) => (
              <StaggerItem key={post.id}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="rounded-xl transition-all duration-200 bg-card border border-border hover:border-primary/35 hover:shadow-md h-full group cursor-pointer overflow-hidden">
                    <div className="h-40 relative overflow-hidden bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Code className="w-14 h-14 text-primary/30 transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <span className="absolute top-3 right-3 inline-flex items-center rounded-md px-2.5 py-1 font-medium border border-primary/20 bg-primary/10 text-primary text-[10px]">
                        Original
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4 flex-wrap text-xs text-muted-foreground">
                        <span className="inline-flex items-center rounded-md px-2.5 py-1 border border-border">
                          {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                          Read more
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Top-ranked industry reads */}
          <AnimatedSection>
            <div className="mb-6">
              <h2 className="text-2xl font-display font-bold mb-2">
                Top-ranked industry reads
              </h2>
              <p className="text-muted-foreground text-sm max-w-2xl">
                Auto-pulled from DEV.to top weekly articles for React, Next.js, TypeScript,
                JavaScript, Node.js, webdev, CSS, design, GitHub, and Microsoft — sorted by
                community reactions.
              </p>
            </div>
          </AnimatedSection>

          {curated.length === 0 ? (
            <p className="text-muted-foreground text-sm mb-8">
              Curated feed is syncing. Refresh in a moment.
            </p>
          ) : (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {curated.map((article) => (
                <StaggerItem key={article.id}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <div className="rounded-xl transition-all duration-200 bg-card border border-border hover:border-primary/35 hover:shadow-md h-full group cursor-pointer overflow-hidden">
                      <div className="h-40 relative overflow-hidden bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15">
                        {article.coverImage ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={article.coverImage}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover opacity-80"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Code className="w-14 h-14 text-primary/30 transition-transform duration-500 group-hover:scale-110" />
                          </div>
                        )}
                        <span className="absolute top-3 right-3 inline-flex items-center rounded-md px-2.5 py-1 font-medium border border-border text-muted-foreground text-[10px] bg-background/80">
                          Curated
                        </span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4 flex-wrap text-xs text-muted-foreground">
                          <span className="inline-flex items-center rounded-md px-2.5 py-1 border border-border capitalize">
                            {article.tag}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readingTimeMinutes} min read
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {article.reactions}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {article.description}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="text-xs text-muted-foreground">
                            {formatDate(article.publishedAt)}
                          </span>
                          <span className="flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                            View
                            <ExternalLink className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <AnimatedSection>
            <div className="rounded-xl glass-card p-12 border border-border bg-card/40">
              <h2 className="text-3xl font-display font-bold mb-4">
                Want to <span className="text-gradient">collaborate</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Building web apps, brand systems, or campus tech programs? Let&apos;s talk.
              </p>
              <Link href="/contact">
                <span className="inline-flex items-center rounded-md font-medium transition-colors bg-primary/10 text-primary border border-primary/25 text-lg px-6 py-3 cursor-pointer hover:bg-primary/15">
                  Get in touch
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

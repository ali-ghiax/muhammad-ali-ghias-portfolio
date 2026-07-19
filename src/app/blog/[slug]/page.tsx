"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/portfolio";
import { AnimatedSection } from "@/components/layout/animations";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPost({ params }: PageProps) {
  const slug = "slug" in params ? params.slug : params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mb-8">
              <Badge variant="glow" className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Card className="p-8 md:p-12">
              <article className="prose prose-invert max-w-none">
                {post.content.split('\n').map((line, index) => {
                  if (line.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gradient">{line.slice(3)}</h2>;
                  }
                  if (line.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{line.slice(4)}</h3>;
                  }
                  if (line.startsWith('1. ') || line.startsWith('- ')) {
                    return <li key={index} className="text-muted-foreground ml-4">{line.slice(2)}</li>;
                  }
                  if (line.trim() === '') {
                    return <br key={index} />;
                  }
                  return <p key={index} className="text-muted-foreground mb-4">{line}</p>;
                })}
              </article>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Share this article:</span>
                <button className="p-2 rounded-lg hover:bg-card transition-colors">
                  <Share2 className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <Card variant="gradient" className="p-12">
              <h2 className="text-2xl font-display font-bold mb-4">
                Enjoyed this <span className="text-gradient">Article</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Check out more articles or get in touch for collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/blog">
                  <Badge variant="outline" className="text-lg px-6 py-3 cursor-pointer">
                    More Articles
                  </Badge>
                </Link>
                <Link href="/contact">
                  <Badge variant="glow" className="text-lg px-6 py-3 cursor-pointer">
                    Get In Touch
                  </Badge>
                </Link>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
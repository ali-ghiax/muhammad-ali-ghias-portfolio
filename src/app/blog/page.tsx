"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Code, Cpu, Shield, Zap, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/portfolio";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/layout/animations";

const categoryIcons: Record<string, typeof Code> = {
  "Web Dev": Code,
  "AI": Cpu,
  "Security": Shield,
  "Performance": Zap,
  "Updates": Sparkles,
};

const categoryColors: Record<string, string> = {
  "Web Dev": "#00f0ff",
  "AI": "#ff00aa",
  "Security": "#7b2fff",
  "Performance": "#00ff88",
  "Updates": "#00f0ff",
};

export default function Blog() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute inset-0 bg-radial" />
        
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge variant="glow" className="mb-4">Blog</Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Insights & <span className="text-gradient">Articles</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Thoughts on web development, AI, security, and best practices for building modern applications.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => {
              const Icon = categoryIcons[post.category] || Code;
              const color = categoryColors[post.category] || "#00f0ff";
              
              return (
                <StaggerItem key={post.id}>
                  <Link href={`/blog/${post.slug}`}>
                    <Card hover className="h-full group cursor-pointer overflow-hidden">
                      <div 
                        className="h-48 relative overflow-hidden"
                        style={{ 
                          background: `linear-gradient(135deg, ${color}15, ${color}05)` 
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon 
                            className="w-16 h-16 transition-transform duration-500 group-hover:scale-110" 
                            style={{ color, opacity: 0.3 }} 
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge 
                            style={{ 
                              backgroundColor: `${color}20`, 
                              color,
                              borderColor: `${color}40`
                            }}
                          >
                            {post.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </div>
                          <span className="flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">More articles coming soon!</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <span className="text-sm text-muted-foreground">Subscribe to updates</span>
              <Badge variant="outline" className="text-xs">Coming Soon</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <Card variant="gradient" className="p-12">
              <h2 className="text-3xl font-display font-bold mb-4">
                Want to <span className="text-gradient">Collaborate</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Have a question or want to discuss a topic? Let&apos;s connect.
              </p>
              <Link href="/contact">
                <Badge variant="glow" className="text-lg px-6 py-3 cursor-pointer">
                  Get In Touch
                </Badge>
              </Link>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
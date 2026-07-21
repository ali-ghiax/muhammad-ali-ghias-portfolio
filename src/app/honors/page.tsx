"use client";

import Link from "next/link";
import { Award, Calendar, ExternalLink, Medal, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { honors, linkedInHonorsUrl } from "@/data/honors";
import { AnimatedSection } from "@/components/layout/animations";
import { cn } from "@/lib/utils";

const categoryMeta = {
  leadership: { label: "Leadership", icon: Medal },
  competition: { label: "Competition", icon: Trophy },
  achievement: { label: "Achievement", icon: Award },
} as const;

export default function HonorsPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 relative border-b border-border/60">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <AnimatedSection>
            <div className="mb-6 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Recognition</p>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-5">
                Honors & <span className="text-gradient">awards</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Leadership, design, and learning milestones recognized by Microsoft and university
                competitions — aligned with my{" "}
                <a
                  href={linkedInHonorsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  LinkedIn honors
                </a>
                .
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {honors.map((honor, index) => {
              const meta = categoryMeta[honor.category];
              const Icon = meta.icon;

              return (
                <AnimatedSection key={honor.id} delay={Math.min(index * 0.08, 0.24)}>
                  <Card className="p-6 sm:p-8 hover:border-primary/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                      <div
                        className={cn(
                          "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary"
                        )}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {meta.label}
                          </Badge>
                          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5" />
                            {honor.date}
                          </span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-display font-semibold mb-1">
                          {honor.title}
                        </h2>
                        <p className="text-secondary font-medium mb-3">{honor.issuer}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {honor.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/60">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold mb-4">
              Explore more <span className="text-gradient">credentials</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              See certifications, Microsoft badges, and Credly achievements alongside this recognition.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/certifications">
                <Button size="lg" className="glow-primary">
                  View certifications
                </Button>
              </Link>
              <a href={linkedInHonorsUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2">
                  LinkedIn honors
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

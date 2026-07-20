"use client";

import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { courses, personalInfo } from "@/data/portfolio";
import { AnimatedSection } from "@/components/layout/animations";

export default function CertificationsPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <AnimatedSection>
            <div className="mb-14 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Credentials</p>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-5">
                Certifications & <span className="text-gradient">learning</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Design specializations, Adobe tools, and {personalInfo.stats.systemsShipped}+
                Microsoft Learn badges from continuous learning.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {courses.map((course, index) => (
              <AnimatedSection key={course.id} delay={index * 0.08}>
                <div className="h-full border border-border bg-card/50 p-6 hover:border-primary/35 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 shrink-0 bg-primary/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h2 className="text-lg font-display font-semibold">{course.title}</h2>
                        <Badge variant="outline" className="text-xs">
                          {course.period}
                        </Badge>
                      </div>
                      <p className="text-sm text-primary mb-2">{course.institution}</p>
                      <p className="text-sm text-muted-foreground">{course.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/60">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold mb-4">
              Want to <span className="text-gradient">collaborate</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Web development, graphic design, or campus tech workshops — let&apos;s talk.
            </p>
            <Link href="/contact">
              <Button size="lg" className="glow-primary group">
                Get in touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
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
                Credentials from{" "}
                <a
                  href="https://www.linkedin.com/in/mghias/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  LinkedIn
                </a>
                , plus {personalInfo.stats.systemsShipped}+ Microsoft Learn badges.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {courses.map((course, index) => (
              <AnimatedSection key={course.id} delay={index * 0.05}>
                <article className="group h-full overflow-hidden border border-border bg-card/50 hover:border-primary/35 transition-colors flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted border-b border-border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={course.image}
                      alt={`${course.title} certificate`}
                      className="h-full w-full object-contain object-center bg-white p-3 transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h2 className="text-lg sm:text-xl font-display font-semibold">
                        {course.title}
                      </h2>
                      <Badge variant="outline" className="text-xs">
                        {course.period}
                      </Badge>
                    </div>
                    <p className="text-sm text-primary mb-2">{course.institution}</p>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{course.description}</p>
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      View certificate
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>
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

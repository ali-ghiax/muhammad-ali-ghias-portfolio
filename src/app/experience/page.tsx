"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { experience, personalInfo } from "@/data/portfolio";
import { AnimatedSection } from "@/components/layout/animations";
import { cn } from "@/lib/utils";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 relative border-b border-border/60">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <AnimatedSection>
            <div className="mb-6 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Experience</p>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-5">
                Professional <span className="text-gradient">journey</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Roles across full-stack development, graphic design, campus leadership, and freelance
                creative work — {personalInfo.stats.yearsExperience}+ years building digital impact.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />
            <div className="space-y-10">
              {experience.map((exp, index) => (
                <AnimatedSection key={exp.id} delay={index * 0.1}>
                  <div
                    className={cn(
                      "flex items-start gap-8",
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    )}
                  >
                    <div
                      className={cn(
                        "flex-1",
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      )}
                    >
                      <Card
                        className={cn(
                          "p-6 hover:border-primary/30 transition-colors",
                          index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                        )}
                      >
                        <div className="flex items-center gap-2 text-primary mb-2 md:justify-start">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <h2 className="text-xl font-display font-semibold mb-1">{exp.role}</h2>
                        <p className="text-secondary font-medium mb-1">{exp.company}</p>
                        <p className="text-xs text-muted-foreground mb-3">{exp.location}</p>
                        <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                        {exp.highlights && (
                          <ul className="space-y-1.5 text-sm text-muted-foreground">
                            {exp.highlights.map((h) => (
                              <li key={h} className="flex gap-2 md:justify-start">
                                <span className="text-primary mt-1">▹</span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </Card>
                    </div>
                    <div className="w-3 h-3 mt-8 rounded-full bg-primary ring-4 ring-background z-10 shrink-0" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/60">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold mb-4">
              Ready to <span className="text-gradient">collaborate</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let&apos;s discuss web development, design, or campus tech collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact">
                <Button size="lg" className="glow-primary">
                  Get in touch
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline">
                  See projects
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

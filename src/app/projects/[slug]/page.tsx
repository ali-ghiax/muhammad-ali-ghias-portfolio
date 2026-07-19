"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, GitBranch, CheckCircle, TrendingUp, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";
import { AnimatedSection, FadeIn } from "@/components/layout/animations";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectCaseStudy({ params }: PageProps) {
  const { slug } = use(params);
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  const metrics = [
    { icon: TrendingUp, label: "Results", value: project.results.metric1, color: "text-primary" },
    { icon: Zap, label: "Performance", value: project.results.metric2, color: "text-secondary" },
    { icon: Users, label: "Impact", value: project.results.metric3, color: "text-accent" },
    { icon: CheckCircle, label: "Achievement", value: project.results.metric4, color: "text-green-500" },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <Badge 
                  className="mb-4"
                  style={{ 
                    backgroundColor: `${project.color}20`, 
                    color: project.color,
                    borderColor: `${project.color}40`
                  }}
                >
                  {project.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {project.description}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <Card className="p-8 mb-8">
                  <div 
                    className="w-full h-80 rounded-xl flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)` 
                    }}
                  >
                    <div className="text-center">
                      <div 
                        className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${project.color}20` }}
                      >
                        <span className="text-3xl" style={{ color: project.color }}>⚡</span>
                      </div>
                      <p className="text-muted-foreground">Project Preview</p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="mb-12">
                  <h2 className="text-2xl font-display font-bold mb-6">
                    The <span className="text-gradient">Challenge</span>
                  </h2>
                  <Card className="p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.problem}
                    </p>
                  </Card>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="mb-12">
                  <h2 className="text-2xl font-display font-bold mb-6">
                    <span className="text-gradient">Objectives</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.objectives.map((objective, index) => (
                      <Card key={index} className="p-4 flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs text-primary font-bold">{index + 1}</span>
                        </div>
                        <p className="text-muted-foreground">{objective}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="mb-12">
                  <h2 className="text-2xl font-display font-bold mb-6">
                    Technical <span className="text-gradient">Architecture</span>
                  </h2>
                  <Card className="p-6">
                    <div className="flex flex-wrap gap-4 justify-center">
                      {project.techStack.map((tech, index) => (
                        <div 
                          key={tech}
                          className="px-4 py-2 rounded-lg border border-border bg-card/50"
                        >
                          <span 
                            className="text-sm font-medium"
                            style={{ color: index === 0 ? project.color : undefined }}
                          >
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 p-4 rounded-lg bg-border/30 text-center">
                      <p className="text-sm text-muted-foreground">
                        Modern • Scalable • Secure • Performant
                      </p>
                    </div>
                  </Card>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="mb-12">
                  <h2 className="text-2xl font-display font-bold mb-6">
                    <span className="text-gradient">Challenges</span> & Solutions
                  </h2>
                  <div className="space-y-6">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="p-4 border-l-4 border-red-500">
                          <h4 className="font-semibold mb-2 text-red-400">Challenge</h4>
                          <p className="text-sm text-muted-foreground">{challenge}</p>
                        </Card>
                        <Card className="p-4 border-l-4 border-green-500">
                          <h4 className="font-semibold mb-2 text-green-400">Solution</h4>
                          <p className="text-sm text-muted-foreground">{project.solutions[index]}</p>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <div className="mb-12">
                  <h2 className="text-2xl font-display font-bold mb-6">
                    Results & <span className="text-gradient">Impact</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(project.results).map(([key, value]) => (
                      <Card key={key} className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <CheckCircle className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </p>
                            <p className="text-lg font-semibold text-foreground">{value}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <AnimatedSection>
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Project Stats</h3>
                    <div className="space-y-4">
                      {metrics.map((metric, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className={cn("w-10 h-10 rounded-lg bg-card flex items-center justify-center", metric.color)}>
                            <metric.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">{metric.label}</p>
                            <p className="text-sm font-medium">{metric.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Links</h3>
                    <div className="space-y-3">
                      {project.liveUrl ? (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/30 transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <ExternalLink className="w-4 h-4 text-primary" />
                            <span className="text-sm">Live Demo</span>
                          </span>
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </a>
                      ) : null}
                      {project.githubUrl ? (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/30 transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <GitBranch className="w-4 h-4 text-primary" />
                            <span className="text-sm">Source Code</span>
                          </span>
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </a>
                      ) : null}
                    </div>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <Card variant="gradient" className="p-12">
              <h2 className="text-2xl font-display font-bold mb-4">
                Interested in Similar <span className="text-gradient">Work</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let&apos;s discuss how I can help build something amazing for you.
              </p>
              <Link href="/contact">
                <Button size="lg" className="glow-primary">
                  Get In Touch
                </Button>
              </Link>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
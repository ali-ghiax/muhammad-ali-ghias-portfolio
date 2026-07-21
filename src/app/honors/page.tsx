"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Award, Calendar, ChevronLeft, ChevronRight, ExternalLink, Medal, Trophy, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { honors, linkedInHonorsUrl, type Honor, type HonorImage } from "@/data/honors";
import { AnimatedSection } from "@/components/layout/animations";
import { cn } from "@/lib/utils";

const categoryMeta = {
  leadership: { label: "Leadership", icon: Medal },
  competition: { label: "Competition", icon: Trophy },
  achievement: { label: "Achievement", icon: Award },
} as const;

type LightboxState = {
  images: HonorImage[];
  index: number;
};

function getHonorImages(honor: Honor): HonorImage[] {
  if (honor.images?.length) return honor.images;
  if (honor.image) {
    return [{ src: honor.image, alt: honor.imageAlt ?? honor.title }];
  }
  return [];
}

function HonorMedia({
  honor,
  onImageClick,
}: {
  honor: Honor;
  onImageClick: (images: HonorImage[], index: number) => void;
}) {
  const images = getHonorImages(honor);
  if (!images.length) return null;

  if (images.length > 1) {
    return (
      <div className="grid grid-cols-2 gap-2 p-3 sm:p-4 bg-muted/20">
        {images.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => onImageClick(images, index)}
            className="group relative overflow-hidden bg-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Open image: ${item.alt}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              className="h-full w-full object-cover aspect-[4/5] sm:aspect-[3/4] transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
          </button>
        ))}
      </div>
    );
  }

  const item = images[0];
  return (
    <button
      type="button"
      onClick={() => onImageClick(images, 0)}
      className="group relative h-full w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={`Open image: ${item.alt}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.alt}
        className="h-full w-full object-contain bg-white p-3 transition-transform duration-300 group-hover:scale-[1.01]"
      />
      <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
    </button>
  );
}

function ImageLightbox({
  state,
  onClose,
  onPrev,
  onNext,
}: {
  state: LightboxState;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const { images, index } = state;
  const current = images[index];
  const hasMultiple = images.length > 1;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 rounded-full border border-white/20 bg-black/50 p-2 text-white transition-colors hover:bg-black/70 cursor-pointer"
        aria-label="Close image preview"
      >
        <X className="h-5 w-5" />
      </button>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 sm:left-6 z-10 rounded-full border border-white/20 bg-black/50 p-2 text-white transition-colors hover:bg-black/70 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 sm:right-6 z-10 rounded-full border border-white/20 bg-black/50 p-2 text-white transition-colors hover:bg-black/70 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <div
        className="relative max-h-full max-w-5xl w-full flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current.src}
          alt={current.alt}
          className="max-h-[80vh] w-auto max-w-full object-contain"
        />
        <p className="max-w-2xl text-center text-sm text-white/80 px-4">{current.alt}</p>
        {hasMultiple && (
          <p className="text-xs text-white/60">
            {index + 1} / {images.length}
          </p>
        )}
      </div>
    </div>
  );
}

export default function HonorsPage() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openLightbox = (images: HonorImage[], index: number) => {
    setLightbox({ images, index });
  };

  const closeLightbox = () => setLightbox(null);

  const showPrev = () => {
    setLightbox((prev) =>
      prev
        ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length }
        : null
    );
  };

  const showNext = () => {
    setLightbox((prev) =>
      prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null
    );
  };

  useEffect(() => {
    if (!lightbox) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
        return;
      }
      if (event.key === "ArrowLeft") {
        setLightbox((prev) =>
          prev
            ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length }
            : null
        );
      }
      if (event.key === "ArrowRight") {
        setLightbox((prev) =>
          prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightbox]);

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
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-8">
            {honors.map((honor, index) => {
              const meta = categoryMeta[honor.category];
              const Icon = meta.icon;
              const hasMedia = Boolean(honor.image || honor.images?.length);
              const hasGallery = Boolean(honor.images?.length);

              return (
                <AnimatedSection key={honor.id} delay={Math.min(index * 0.08, 0.24)}>
                  <Card className="overflow-hidden hover:border-primary/30 transition-colors">
                    <div
                      className={cn(
                        "flex flex-col",
                        hasMedia && !hasGallery && "md:flex-row md:items-stretch"
                      )}
                    >
                      {hasMedia && !hasGallery && (
                        <div className="md:w-2/5 border-b md:border-b-0 md:border-r border-border bg-muted/20 aspect-[16/10] md:aspect-auto md:min-h-[240px]">
                          <HonorMedia honor={honor} onImageClick={openLightbox} />
                        </div>
                      )}

                      <div className="flex-1 p-6 sm:p-8">
                        <div className="flex items-start gap-4">
                          {!hasMedia && (
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                              <Icon className="h-6 w-6" />
                            </div>
                          )}

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
                      </div>

                      {hasGallery && (
                        <div className="border-t border-border">
                          <HonorMedia honor={honor} onImageClick={openLightbox} />
                        </div>
                      )}
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

      {lightbox && (
        <ImageLightbox
          state={lightbox}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </div>
  );
}

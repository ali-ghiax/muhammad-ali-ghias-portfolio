"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Medal,
  Sparkles,
  Trophy,
  X,
  ZoomIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { honors, linkedInHonorsUrl, type Honor, type HonorImage } from "@/data/honors";
import { AnimatedSection } from "@/components/layout/animations";
import { cn } from "@/lib/utils";

const categoryMeta = {
  leadership: {
    label: "Leadership",
    icon: Medal,
    accent: "text-primary",
    badge: "border-primary/25 bg-primary/10 text-primary",
    ring: "ring-primary/20",
    glow: "from-primary/10 via-transparent to-transparent",
  },
  competition: {
    label: "Competition",
    icon: Trophy,
    accent: "text-accent",
    badge: "border-accent/30 bg-accent/10 text-accent",
    ring: "ring-accent/20",
    glow: "from-accent/10 via-transparent to-transparent",
  },
  achievement: {
    label: "Achievement",
    icon: Award,
    accent: "text-secondary",
    badge: "border-secondary/25 bg-secondary/10 text-secondary",
    ring: "ring-secondary/20",
    glow: "from-secondary/10 via-transparent to-transparent",
  },
} as const;

const honorAnimation = {
  duration: 0.4,
  viewportMargin: "-80px",
  y: 28,
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

function staggerDelay(index: number, step = 0.06, max = 0.24) {
  return Math.min(index * step, max);
}

function BentoGallery({
  images,
  onImageClick,
  className,
}: {
  images: HonorImage[];
  onImageClick: (images: HonorImage[], index: number) => void;
  className?: string;
}) {
  if (!images.length) return null;

  if (images.length === 1) {
    const item = images[0];
    return (
      <button
        type="button"
        onClick={() => onImageClick(images, 0)}
        className={cn(
          "group relative w-full overflow-hidden rounded-xl border border-border bg-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          className
        )}
        aria-label={`Open image: ${item.alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.src}
          alt={item.alt}
          className="aspect-[4/3] w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <GalleryOverlay />
      </button>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-4 sm:grid-rows-2 gap-2 sm:gap-3",
        "h-[220px] sm:h-[240px] md:h-[260px]",
        className
      )}
    >
      {images.map((item, index) => (
        <button
          key={item.src}
          type="button"
          onClick={() => onImageClick(images, index)}
          className={cn(
            "group relative h-full min-h-0 overflow-hidden rounded-lg sm:rounded-xl border border-border/80 bg-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            index === 0 && "sm:col-span-2 sm:row-span-2",
            index > 0 && "aspect-square sm:aspect-auto"
          )}
          aria-label={`Open image: ${item.alt}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.src}
            alt={item.alt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <GalleryOverlay compact={index > 0} />
        </button>
      ))}
    </div>
  );
}

function GalleryOverlay({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span
        className={cn(
          "absolute bottom-2 right-2 flex items-center justify-center rounded-full bg-black/55 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-90",
          compact ? "h-7 w-7" : "h-9 w-9"
        )}
      >
        <ZoomIn className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
      </span>
    </>
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
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/92 backdrop-blur-sm p-4 sm:p-8 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 rounded-full border border-white/15 bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 cursor-pointer"
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
            className="absolute left-3 sm:left-8 z-10 rounded-full border border-white/15 bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 cursor-pointer"
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
            className="absolute right-3 sm:right-8 z-10 rounded-full border border-white/15 bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <div
        className="relative max-h-full max-w-6xl w-full flex flex-col items-center gap-4 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden rounded-lg border border-white/10 bg-black/40 shadow-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[78vh] w-auto max-w-full object-contain"
          />
        </div>
        <p className="max-w-2xl text-center text-sm sm:text-base text-white/85 px-4 leading-relaxed">
          {current.alt}
        </p>
        {hasMultiple && (
          <div className="flex items-center gap-2">
            {images.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-6 bg-white" : "w-1.5 bg-white/35"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function HonorShowcase({
  honor,
  index,
  onImageClick,
}: {
  honor: Honor;
  index: number;
  onImageClick: (images: HonorImage[], index: number) => void;
}) {
  const meta = categoryMeta[honor.category];
  const Icon = meta.icon;
  const images = getHonorImages(honor);
  const isReversed = index % 2 === 1;

  return (
    <article id={honor.id} className="scroll-mt-28">
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border/80 glass-card shadow-sm transition-shadow duration-300 hover:shadow-[0_20px_60px_-24px_rgba(13,148,136,0.25)]",
          "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/40 before:to-transparent"
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60",
            meta.glow
          )}
        />

        <div className="relative grid lg:grid-cols-2 gap-0">
          <div
            className={cn(
              "flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12",
              isReversed && "lg:order-2"
            )}
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-background/80 shadow-sm",
                  meta.badge
                )}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="outline" className={cn("text-xs font-medium", meta.badge)}>
                    {meta.label}
                  </Badge>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 shrink-0" />
                    {honor.date}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold leading-tight mb-2">
                  {honor.title}
                </h2>
                <p className="text-sm sm:text-base font-medium text-secondary">{honor.issuer}</p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              {honor.description}
            </p>

            {images.length > 0 && (
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80">
                {images.length} photos · click to expand
              </p>
            )}
          </div>

          {images.length > 0 && (
            <div
              className={cn(
                "border-t lg:border-t-0 lg:border-l border-border/60 p-4 sm:p-6 lg:p-8 bg-muted/15",
                isReversed && "lg:order-1 lg:border-l-0 lg:border-r"
              )}
            >
              <BentoGallery images={images} onImageClick={onImageClick} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function HonorsPage() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const stats = useMemo(() => {
    const totalPhotos = honors.reduce((acc, honor) => acc + getHonorImages(honor).length, 0);
    const leadership = honors.filter((h) => h.category === "leadership").length;
    const competition = honors.filter((h) => h.category === "competition").length;
    const achievement = honors.filter((h) => h.category === "achievement").length;
    return { total: honors.length, totalPhotos, leadership, competition, achievement };
  }, []);

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

  const scrollToHonor = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
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
      <section className="py-16 sm:py-20 relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 hero-mesh opacity-70" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <AnimatedSection duration={honorAnimation.duration} viewportMargin={honorAnimation.viewportMargin} y={honorAnimation.y}>
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-end mb-12">
              <div className="max-w-3xl">
                <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-primary mb-4">
                  <Sparkles className="h-3.5 w-3.5" />
                  Recognition
                </p>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-5 leading-[1.05]">
                  Honors & <span className="text-gradient">awards</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Leadership, design, and learning milestones recognized by Microsoft, CUSIT, and
                  province-level competitions — curated from my{" "}
                  <a
                    href={linkedInHonorsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline underline-offset-4"
                  >
                    LinkedIn honors
                  </a>
                  .
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:min-w-[320px]">
                {[
                  { value: stats.total, label: "Honors" },
                  { value: stats.totalPhotos, label: "Photos" },
                  { value: stats.leadership + stats.competition + stats.achievement, label: "Categories" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border/80 bg-card/70 backdrop-blur-sm px-3 py-4 sm:px-4 text-center"
                  >
                    <p className="text-2xl sm:text-3xl font-display font-bold text-foreground">{stat.value}</p>
                    <p className="text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {honors.map((honor) => {
                const meta = categoryMeta[honor.category];
                const Icon = meta.icon;
                return (
                  <button
                    key={honor.id}
                    type="button"
                    onClick={() => scrollToHonor(honor.id)}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-2 sm:px-4 text-sm cursor-pointer transition-all hover:border-primary/40 hover:bg-card hover:shadow-sm"
                  >
                    <Icon className={cn("h-4 w-4 shrink-0", meta.accent)} />
                    <span className="font-medium truncate max-w-[200px] sm:max-w-none">{honor.title}</span>
                  </button>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection duration={honorAnimation.duration} viewportMargin={honorAnimation.viewportMargin} y={honorAnimation.y}>
            <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">Award showcase</h2>
                <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
                  Each honor includes ceremony photos, certificates, and recognition materials.
                  Select any image for a full-size view.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {stats.leadership > 0 && (
                  <span className={cn("rounded-full border px-2.5 py-1", categoryMeta.leadership.badge)}>
                    {stats.leadership} Leadership
                  </span>
                )}
                {stats.competition > 0 && (
                  <span className={cn("rounded-full border px-2.5 py-1", categoryMeta.competition.badge)}>
                    {stats.competition} Competition
                  </span>
                )}
                {stats.achievement > 0 && (
                  <span className={cn("rounded-full border px-2.5 py-1", categoryMeta.achievement.badge)}>
                    {stats.achievement} Achievement
                  </span>
                )}
              </div>
            </div>
          </AnimatedSection>

          <div className="space-y-10 sm:space-y-14">
            {honors.map((honor, index) => (
              <AnimatedSection
                key={honor.id}
                delay={staggerDelay(index)}
                duration={honorAnimation.duration}
                viewportMargin={honorAnimation.viewportMargin}
                y={honorAnimation.y}
              >
                <HonorShowcase honor={honor} index={index} onImageClick={openLightbox} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 border-t border-border/60 relative">
        <div className="absolute inset-0 bg-radial opacity-40" />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <AnimatedSection duration={honorAnimation.duration} viewportMargin={honorAnimation.viewportMargin} y={honorAnimation.y}>
            <div className="rounded-2xl border border-border/80 glass-card p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3">
                Explore more <span className="text-gradient">credentials</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Certifications, Microsoft Learn badges, and Credly achievements complement this
                recognition.
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

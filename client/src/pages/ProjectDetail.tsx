"use client";

import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Pause, Play, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeInImg, FadeInNextImage } from "@/components/FadeInMedia";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { resolveProjectMedia } from "@/content/media";
import { getProjectById, getProjectSlug, projects } from "@/content/projects";
import { Button } from "@/components/ui/button";

function renderDesignParagraph(paragraph: string, useDropcap: boolean) {
  if (!useDropcap) {
    return paragraph;
  }

  const trimmed = paragraph.trimStart();
  const leadingWhitespace = paragraph.slice(0, paragraph.length - trimmed.length);
  const firstLetter = trimmed.charAt(0);
  const rest = trimmed.slice(1);

  return (
    <>
      {leadingWhitespace}
      <span aria-hidden="true" className="project-dropcap-letter">
        {firstLetter}
      </span>
      <span>{rest}</span>
    </>
  );
}

function ProjectSlideshow({
  images,
  title,
  description,
  imageAltLabel,
  altTexts,
  roundedClassName = "rounded-[0.65rem]",
  objectClassName = "object-contain",
  maxHeightClassName = "max-h-[78vh]",
  frameHeightClassName,
  autoplayMs = 5200,
  initialDelayMs = 1800,
  onImageClick,
}: {
  images: string[];
  title?: string;
  description?: string;
  imageAltLabel: string;
  altTexts?: string[];
  roundedClassName?: string;
  objectClassName?: string;
  maxHeightClassName?: string;
  frameHeightClassName?: string;
  autoplayMs?: number;
  initialDelayMs?: number;
  onImageClick: (image: string) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hasStartedRef = useRef(false);

  const currentImage = images[currentIndex];
  const getAltText = (index: number) => altTexts?.[index] ?? `${imageAltLabel} ${index + 1}`;
  const showControls = images.length > 1;

  const transitionToIndex = (nextIndex: number) => {
    setPreviousIndex(currentIndex);
    setCurrentIndex(nextIndex);
  };

  const goToPrevious = () => {
    transitionToIndex((currentIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    transitionToIndex((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    if (images.length <= 1 || isPaused || isHovered) return;

    const delay = hasStartedRef.current ? autoplayMs : initialDelayMs;
    const timeout = window.setTimeout(() => {
      hasStartedRef.current = true;
      goToNext();
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [autoplayMs, currentIndex, images.length, initialDelayMs, isHovered, isPaused]);

  useEffect(() => {
    if (previousIndex === null) return;

    const timeout = window.setTimeout(() => {
      setPreviousIndex(null);
    }, 1400);

    return () => window.clearTimeout(timeout);
  }, [previousIndex]);

  return (
    <section
      className="group/carousel space-y-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-end justify-between gap-4">
        <div>
          {title && (
            <h2 className="text-2xl font-serif italic text-foreground sm:text-3xl">
              {title}
            </h2>
          )}
          {description && (
            <p
              className={`font-editorial max-w-xl text-[1.02rem] leading-8 text-foreground/72 ${
                title ? "mt-2" : ""
              }`}
            >
              {description}
            </p>
          )}
        </div>
        {showControls && (
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-9 w-9 rounded-full border-border bg-background/90 text-foreground opacity-0 transition-opacity duration-300 group-hover/carousel:opacity-100"
            onClick={() => setIsPaused((paused) => !paused)}
            aria-label={isPaused ? `Play ${title ?? "project"} slideshow` : `Pause ${title ?? "project"} slideshow`}
          >
            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </Button>
        )}
      </div>
      <div
        className={`relative overflow-hidden bg-secondary shadow-[0_18px_50px_rgba(94,74,30,0.07)] ${roundedClassName}`}
      >
        <div className={frameHeightClassName ? `relative ${frameHeightClassName}` : "relative"}>
          {previousIndex !== null && previousIndex !== currentIndex && (
            <motion.img
              key={`previous-${images[previousIndex]}`}
              src={images[previousIndex]}
              alt={getAltText(previousIndex)}
              className={`pointer-events-none absolute z-10 block ${
                frameHeightClassName
                  ? "left-1/2 top-0 h-full max-w-full -translate-x-1/2"
                  : `inset-0 w-full ${maxHeightClassName}`
              } ${
                frameHeightClassName ? "" : ""
              } ${objectClassName}`}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.25, ease: "easeInOut" }}
            />
          )}
          <AnimatePresence mode="sync">
            <motion.div
              key={currentImage}
              className={`relative z-0 cursor-pointer ${
                frameHeightClassName
                  ? "mx-auto h-full max-w-full"
                  : `w-full ${maxHeightClassName}`
              }`}
              onClick={() => onImageClick(currentImage)}
              initial={{ opacity: previousIndex === null ? 1 : 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 1.25, ease: "easeInOut" }}
            >
              <FadeInImg
                src={currentImage}
                alt={getAltText(currentIndex)}
                resetKey={currentImage}
                className={`block ${
                  frameHeightClassName
                    ? "mx-auto h-full max-w-full"
                    : `w-full ${maxHeightClassName}`
                } ${objectClassName}`}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {showControls && (
          <>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full border-border bg-background/90 text-foreground opacity-0 transition-opacity duration-300 group-hover/carousel:opacity-100"
              onClick={goToPrevious}
              aria-label={`Previous ${(title ?? "project").toLowerCase()} image`}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full border-border bg-background/90 text-foreground opacity-0 transition-opacity duration-300 group-hover/carousel:opacity-100"
              onClick={goToNext}
              aria-label={`Next ${(title ?? "project").toLowerCase()} image`}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
    </section>
  );
}

function ProjectMasonryGallery({
  images,
  title,
  description,
  altTexts,
  imageAltLabel,
  onImageClick,
}: {
  images: string[];
  title?: string;
  description?: string;
  altTexts?: string[];
  imageAltLabel: string;
  onImageClick: (image: string) => void;
}) {
  const getAltText = (index: number) => altTexts?.[index] ?? `${imageAltLabel} ${index + 1}`;

  return (
    <section className="space-y-4">
      {(title || description) && (
        <div>
          {title && (
            <h2 className="text-2xl font-serif italic text-foreground sm:text-3xl">
              {title}
            </h2>
          )}
          {description && (
            <p
              className={`font-editorial max-w-xl text-[1.02rem] leading-8 text-foreground/72 ${
                title ? "mt-2" : ""
              }`}
            >
              {description}
            </p>
          )}
        </div>
      )}
      <div className="columns-1 gap-5 md:columns-2">
        {images.map((image, index) => (
          <div
            key={image}
            className="mb-5 break-inside-avoid cursor-pointer overflow-hidden rounded-[0.65rem] bg-secondary shadow-[0_18px_50px_rgba(94,74,30,0.07)]"
            onClick={() => onImageClick(image)}
          >
            <FadeInImg
              src={image}
              alt={getAltText(index)}
              className="block w-full object-contain"
              resetKey={image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const hasMountedRef = useRef(false);
  const slug = Array.isArray(id) ? id[0] : id;
  const project = slug ? getProjectById(slug) : undefined;
  const resolvedProject = project ? resolveProjectMedia(project) : undefined;

  useEffect(() => {
    if (!project) return;

    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [project?.id, project]);

  if (!project || !resolvedProject) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center px-4 pt-20">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-serif">Project Not Found</h1>
            <Link href="/" className="text-accent transition-colors hover:text-foreground">
              Back to Portfolio
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const projectMeta = [resolvedProject.theatre, resolvedProject.year].filter(Boolean);
  const relatedProjects = projects
    .filter((entry) => entry.id !== project.id)
    .map((entry) => resolveProjectMedia(entry));
  const designStatementAfterProduction =
    resolvedProject.layout?.designStatementAfterProduction ?? false;
  const designStatementParagraphs = resolvedProject.designStatement
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const hasDesignStatement = designStatementParagraphs.length > 0;
  const renderingBlocks =
    resolvedProject.galleries.renderingBlocks && resolvedProject.galleries.renderingBlocks.length > 0
      ? resolvedProject.galleries.renderingBlocks
      : resolvedProject.galleries.renderings && resolvedProject.galleries.renderings.length > 0
        ? [
            {
              title: "Renderings",
              description: "Scenic renderings and visual development for the production.",
              images: resolvedProject.galleries.renderings,
            },
          ]
        : [];
  const lightboxImages = [
    ...renderingBlocks.flatMap((block) => block.images),
    ...(resolvedProject.galleries.production ?? []),
    ...(resolvedProject.galleries.research ?? []),
    ...(resolvedProject.galleries.drafting ?? []),
  ];
  const lightboxImage =
    lightboxIndex !== null ? lightboxImages[lightboxIndex] ?? null : null;
  const openLightbox = (image: string) => {
    const imageIndex = lightboxImages.indexOf(image);
    if (imageIndex >= 0) {
      setLightboxIndex(imageIndex);
    }
  };
  const closeLightbox = () => setLightboxIndex(null);
  const goToPreviousLightboxImage = () => {
    if (lightboxImages.length <= 1 || lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length);
  };
  const goToNextLightboxImage = () => {
    if (lightboxImages.length <= 1 || lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % lightboxImages.length);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
      if (event.key === "ArrowLeft") {
        goToPreviousLightboxImage();
      }
      if (event.key === "ArrowRight") {
        goToNextLightboxImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, lightboxImages.length]);

  const creditEntries = [
    { label: "Director", value: resolvedProject.credits.director },
    { label: "Dramaturgy", value: resolvedProject.credits.dramaturgy },
    { label: "Choreographer", value: resolvedProject.credits.choreographer },
    { label: "Music Director", value: resolvedProject.credits.musicDirector },
    { label: "Composer", value: resolvedProject.credits.composer },
    { label: "Scenic Designer", value: resolvedProject.credits.scenicDesigner },
    { label: "Costume Designer", value: resolvedProject.credits.costumeDesigner },
    { label: "Lighting Designer", value: resolvedProject.credits.lightingDesigner },
    { label: "Sound Designer", value: resolvedProject.credits.soundDesigner },
    { label: "Projection Designer", value: resolvedProject.credits.projectionDesigner },
    { label: "Stage Manager", value: resolvedProject.credits.stageManager },
    { label: "Photography", value: resolvedProject.credits.photography },
  ].filter((entry) => entry.value);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <div key={resolvedProject.id} className="project-page-fade">
            <section className="px-4 pb-10 pt-16 sm:px-6 sm:pb-14 lg:px-8">
              <div className="container">
                <div className="mx-auto max-w-4xl text-center">
                  <p className="mb-5 text-[0.7rem] uppercase tracking-[0.46em] text-accent">
                    Scenic Design Portfolio
                  </p>
                  <h1 className="text-[3.9rem] font-serif leading-[0.92] tracking-[-0.04em] text-foreground sm:text-[5.7rem] md:text-[6.5rem]">
                    <span className="italic">{resolvedProject.title}</span>
                  </h1>
                  <div className="gold-rule mx-auto mt-8 h-px w-28" />
                  {projectMeta.length > 0 && (
                    <p className="mx-auto mt-7 max-w-3xl text-[0.78rem] uppercase tracking-[0.32em] text-muted-foreground sm:text-[0.84rem]">
                      {projectMeta.join(" / ")}
                    </p>
                  )}
                  <p className="font-editorial mx-auto mt-8 max-w-2xl text-[1.12rem] leading-[1.95] text-foreground/78 sm:text-[1.24rem]">
                    {resolvedProject.description}
                  </p>
                </div>
              </div>
            </section>

            <section className="px-4 pb-18 pt-2 sm:px-6 lg:px-8">
              <div className="container">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start lg:gap-14">
                  <div className="space-y-12">
                {renderingBlocks.map((block, index) =>
                  block.title === '1/2" Scale Model' ? (
                    <section
                      key={`${block.title ?? "renderings"}-${index}`}
                      className="space-y-4"
                    >
                      {block.title && (
                        <h2 className="text-2xl font-serif italic text-foreground sm:text-3xl">
                          {block.title}
                        </h2>
                      )}
                      {block.description && (
                        <p className="font-editorial max-w-xl text-[1.02rem] leading-8 text-foreground/72">
                          {block.description}
                        </p>
                      )}
                      <div className="flex justify-center">
                        <FadeInImg
                          src={block.images[0]}
                          alt={
                            block.altTexts?.[0] ?? `${resolvedProject.title} rendering 1`
                          }
                          className="block h-[76vh] max-w-full cursor-pointer rounded-[0.65rem] object-contain shadow-[0_18px_50px_rgba(94,74,30,0.07)]"
                          onClick={() => openLightbox(block.images[0])}
                          resetKey={block.images[0]}
                        />
                      </div>
                    </section>
                  ) : block.mode === "masonry" ? (
                    <ProjectMasonryGallery
                      key={`${block.title ?? "renderings"}-${index}`}
                      images={block.images}
                      title={block.title}
                      description={block.description}
                      altTexts={block.altTexts}
                      imageAltLabel={`${resolvedProject.title} rendering`}
                      onImageClick={openLightbox}
                    />
                  ) : (
                    <ProjectSlideshow
                      key={`${block.title ?? "renderings"}-${index}`}
                      images={block.images}
                    title={block.title ?? "Renderings"}
                    description={block.description}
                    imageAltLabel={`${resolvedProject.title} rendering`}
                    altTexts={block.altTexts}
                    objectClassName="object-contain"
                    frameHeightClassName={
                      block.title === '1/2" Scale Model' ? "h-[72vh]" : undefined
                    }
                    autoplayMs={5600 + index * 900}
                    initialDelayMs={1200 + index * 1100}
                    onImageClick={openLightbox}
                    />
                  ),
                )}

              {!designStatementAfterProduction && hasDesignStatement && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-serif italic text-foreground sm:text-3xl">
                    Design Statement
                  </h2>
                  <div className="soft-panel rounded-[1.5rem] px-6 py-7 sm:px-8">
                    <div className="space-y-5">
                      {designStatementParagraphs.map((paragraph, index) => (
                        <p
                          key={paragraph}
                          className="font-editorial text-[1.08rem] leading-[1.95] text-foreground/82 sm:text-[1.18rem]"
                        >
                          {renderDesignParagraph(paragraph, index === 0)}
                        </p>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {resolvedProject.galleries.production && resolvedProject.galleries.production.length > 0 && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-serif italic text-foreground sm:text-3xl">
                    Production Photos
                  </h2>
                  <div className="space-y-5">
                    {resolvedProject.galleries.production.map((image, index) => (
                      <div
                        key={index}
                        className="relative cursor-pointer overflow-hidden rounded-[0.65rem] bg-secondary shadow-[0_18px_50px_rgba(94,74,30,0.07)]"
                        onClick={() => openLightbox(image)}
                      >
                        <FadeInImg
                          src={image}
                          alt={
                            resolvedProject.galleryAltText?.production?.[index] ??
                            `${resolvedProject.title} production photo ${index + 1}`
                          }
                          className="block max-h-[82vh] w-full object-contain"
                          resetKey={image}
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {designStatementAfterProduction && hasDesignStatement && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-serif italic text-foreground sm:text-3xl">
                    Design Statement
                  </h2>
                  <div className="soft-panel rounded-[1.5rem] px-6 py-7 sm:px-8">
                    <div className="space-y-5">
                      {designStatementParagraphs.map((paragraph, index) => (
                        <p
                          key={paragraph}
                          className="font-editorial text-[1.08rem] leading-[1.95] text-foreground/82 sm:text-[1.18rem]"
                        >
                          {renderDesignParagraph(paragraph, index === 0)}
                        </p>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {resolvedProject.galleries.research && resolvedProject.galleries.research.length > 0 && (
                <ProjectSlideshow
                  images={resolvedProject.galleries.research}
                  title="Research"
                  imageAltLabel={`${resolvedProject.title} research image`}
                  altTexts={resolvedProject.galleryAltText?.research}
                  autoplayMs={7600}
                  initialDelayMs={2800}
                  onImageClick={openLightbox}
                />
              )}

              {resolvedProject.galleries.drafting && resolvedProject.galleries.drafting.length > 0 && (
                <ProjectSlideshow
                  images={resolvedProject.galleries.drafting}
                  title="Drafting"
                  imageAltLabel={`${resolvedProject.title} drafting image`}
                  altTexts={resolvedProject.galleryAltText?.drafting}
                  roundedClassName="rounded-none"
                  autoplayMs={9200}
                  initialDelayMs={4300}
                  onImageClick={openLightbox}
                />
              )}

                  </div>

                  <aside className="sticky top-24 self-start">
                    <div className="soft-panel rounded-[0.65rem] px-6 py-7">
                      <p className="text-[0.72rem] uppercase tracking-[0.35em] text-accent">
                        Creative Team
                      </p>
                      <div className="mt-5 space-y-4">
                        {creditEntries.map((entry) => (
                          <div key={entry.label} className="border-b border-border/70 pb-4 last:border-b-0 last:pb-0">
                            <p className="text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground">
                              {entry.label}
                            </p>
                            <p
                              className={`mt-1 leading-7 ${
                                entry.label === "Scenic Designer"
                                  ? "font-medium text-foreground"
                                  : "text-foreground/88"
                              }`}
                            >
                              {entry.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </aside>

                </div>
              </div>
            </section>

            <section className="px-4 pb-18 pt-6 sm:px-6 lg:px-8">
              <div className="container">
                <div className="mx-auto max-w-4xl text-center">
                  <p className="mb-4 text-[0.7rem] uppercase tracking-[0.46em] text-accent">
                    Portfolio
                  </p>
                  <h2 className="text-[2.6rem] font-serif leading-[0.95] tracking-[-0.04em] text-foreground sm:text-[3.5rem]">
                    Continue <span className="italic">Exploring</span>
                  </h2>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                  {relatedProjects.map((entry) => (
                    <Link key={entry.id} href={`/portfolio/${getProjectSlug(entry)}`}>
                      <div className="group cursor-pointer">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-[0.65rem] bg-secondary shadow-[0_18px_50px_rgba(94,74,30,0.07)] transition-transform duration-300 group-hover:-translate-y-1">
                          <FadeInNextImage
                            src={entry.cardImage ?? entry.heroImage}
                            alt={
                              entry.cardAltText ?? `${entry.title} - Scenic Design by Gretchen Ugalde`
                            }
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="pt-5 text-center">
                          <h3 className="font-serif text-[1.35rem] leading-[1.08] tracking-[-0.03em] text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[1.55rem]">
                            {entry.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
        </div>
      </main>

      <Footer />

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute right-4 top-4 text-white transition-colors hover:text-accent"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>
          {lightboxImages.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white transition-colors hover:text-accent"
                onClick={(event) => {
                  event.stopPropagation();
                  goToPreviousLightboxImage();
                }}
                aria-label="Previous project image"
              >
                <ArrowLeft className="h-8 w-8" />
              </button>
              <button
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-white transition-colors hover:text-accent"
                onClick={(event) => {
                  event.stopPropagation();
                  goToNextLightboxImage();
                }}
                aria-label="Next project image"
              >
                <ArrowRight className="h-8 w-8" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm uppercase tracking-[0.28em] text-white/75">
                {lightboxIndex !== null ? `${lightboxIndex + 1} / ${lightboxImages.length}` : null}
              </div>
            </>
          )}
          <FadeInImg
            src={lightboxImage}
            alt="Full size"
            className="max-h-full max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
            resetKey={lightboxImage}
          />
        </div>
      )}
    </div>
  );
}

"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeInNextImage } from "@/components/FadeInMedia";
import { resolveMediaUrl } from "@/content/media";
import { Link } from "wouter";
import { getProjectSlug, projects } from "@/content/projects";

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <section className="px-4 pb-14 pt-18 sm:px-6 sm:pb-18 lg:px-8">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-5 text-[0.7rem] uppercase tracking-[0.46em] text-accent">
                Scenic Design Portfolio
              </p>
              <h1 className="text-[3.9rem] font-serif leading-[0.92] tracking-[-0.04em] text-foreground sm:text-[5.8rem] md:text-[7rem]">
                <span className="block">Gretchen</span>
                <span className="block italic">Ugalde</span>
              </h1>
              <div className="gold-rule mx-auto mt-8 h-px w-28" />
              <p className="font-editorial mx-auto mt-8 max-w-2xl text-[1.12rem] leading-[1.95] text-foreground/78 sm:text-[1.25rem]">
                Scenic designer crafting theatrical worlds with elegance, narrative clarity, and a deep attention to atmosphere.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 pt-2 sm:px-6 sm:pb-20 lg:px-8">
          <div className="container">
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Link key={project.id} href={`/portfolio/${getProjectSlug(project)}`}>
                  <div className="group cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[0.65rem] bg-secondary shadow-[0_18px_50px_rgba(94,74,30,0.07)] transition-transform duration-300 group-hover:-translate-y-1">
                      <FadeInNextImage
                        src={resolveMediaUrl(project.cardImage ?? project.heroImage) ?? project.cardImage ?? project.heroImage}
                        alt={
                          project.cardAltText ??
                          `${project.title} - Scenic Design by Gretchen Ugalde`
                        }
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={72}
                        priority={index < 3}
                        loading={index < 6 ? "eager" : "lazy"}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="pt-5 text-center">
                      <h3 className="font-serif text-[1.35rem] leading-[1.08] tracking-[-0.03em] text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[1.55rem]">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

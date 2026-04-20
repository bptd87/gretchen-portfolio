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
        <section className="px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8">
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
                        loading={index < 3 ? undefined : "lazy"}
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

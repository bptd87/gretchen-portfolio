"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects, getProjectSlug } from "@/data/projects";
import { ExternalLink, Mail, Phone } from "lucide-react";
import { Link } from "wouter";

const resumePath = "/gretchen-ugalde-resume.pdf";

const scenicDesignCredits = [
  ["How I Became A Pirate", "Kari Hayter", "South Coast Repertory Theatre"],
  ["Noises Off", "Eli Simon", "University of California, Irvine"],
  ["Translating Ngugi (Co-Design with Ashley Mendez)", "S.Ama Wray", "University of California, Irvine"],
  ["The Little Mermaid", "Scott Koonce", "University of Missouri"],
  ["Baskerville: A Sherlock Holmes Mystery", "Brandon V. Riley", "University of Missouri"],
  ["Gloria", "Andrew Borba", "University of California, Irvine"],
  ["Lucky Stiff", "Brandon McShaffrey", "Maples Repertory Theatre"],
  ["The Importance of Being Earnest", "Jef Awada", "Maples Repertory Theatre"],
  ["The Bald Soprano", "Mihai Maniutiu", "University of California, Irvine"],
  ["Vanya & Sonia & Masha & Spike", "Jim Bray", "Okoboji Summer Theatre"],
  ["Promises, Promises", "Bernie Monroe", "Okoboji Summer Theatre"],
  ["Side by Side by Sondheim", "Bernie Monroe", "Conservatory for the Performing Arts"],
  ["Painting Churches", "Courtney Crouse", "Okoboji Summer Theatre"],
  ["A Comedy of Tenors", "Stephens Brotebeck", "Okoboji Summer Theatre"],
  ["9 to 5", "Bernie Monroe", "Conservatory for the Performing Arts"],
  ["Ripcord", "Peter Reynolds", "Maples Repertory Theatre"],
  ["Gods of Comedy", "Stephen Brotebeck", "Okoboji Summer Theatre"],
  ["Grease", "Stephen Brotebeck", "Okoboji Summer Theatre"],
  ["Living Out", "Jane Page", "University of California, Irvine"],
  ["Tea", "Kelley Ho", "University of California, Irvine"],
  ["Love's Labour's Lost", "Andrew Borba", "University of California, Irvine"],
] as const;

const assistantCredits = [
  ["Hamlet (Scenic Apprentice)", "Clint Ramos", "Mark Taper Forum"],
  ["South Pacific", "Arnel Sancianco", "The Muny"],
  ["A Chorus Line", "Miguel Urbino", "Samsung Performing Arts, TGA Manila"],
  ["Shrek (Associate)", "Efren Delgadillo Jr.", "Oregon Shakespeare Festival"],
  ["Comedy of Errors (Associate)", "Efren Delgadillo Jr.", "Oregon Shakespeare Festival"],
  ["The Merry Wives of Windsor (Associate)", "Efren Delgadillo Jr.", "Oregon Shakespeare Festival"],
  ["Much Ado About Nothing (Associate)", "Efren Delgadillo Jr.", "Oregon Shakespeare Festival"],
  ["Jane Eyre (Associate)", "Efren Delgadillo Jr.", "Oregon Shakespeare Festival"],
  ["9 to 5 (Associate)", "Brandon PT Davis", "University of Missouri"],
  ["The Importance of Being Earnest", "Leah Ramillano", "University of California, Irvine"],
  ["Company", "Brandon PT Davis", "University of California, Irvine"],
  ["Refugee Hotel", "Fernando Penaloza", "University of California, Irvine"],
  ["Legally Blonde", "Tyler Scrivner", "University of California, Irvine"],
] as const;

function normalizeTitle(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function getPortfolioProject(title: string) {
  const normalized = normalizeTitle(title);

  return projects.find((project) => {
    const projectTitle = normalizeTitle(project.title);

    if (projectTitle === normalized) return true;

    if (normalized === "comedy of tenors" && projectTitle === "a comedy of tenors") {
      return true;
    }

    return false;
  });
}

function ResumeProductionCell({ production }: { production: string }) {
  const project = getPortfolioProject(production);

  if (!project) {
    return (
      <p className="font-editorial text-[1.02rem] leading-7 text-foreground">
        {production}
      </p>
    );
  }

  return (
    <div className="group relative w-fit max-w-full">
      <Link
        href={`/portfolio/${getProjectSlug(project)}`}
        className="font-editorial inline-flex items-center gap-2 text-[1.02rem] leading-7 text-foreground transition-colors hover:text-accent"
      >
        <span>{production}</span>
        <span className="font-sans text-[0.64rem] uppercase tracking-[0.24em] text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View Project
        </span>
      </Link>

      <div className="pointer-events-none absolute left-full top-1/2 z-20 ml-6 hidden w-52 overflow-hidden rounded-[1rem] border border-border/80 bg-white/92 opacity-0 shadow-[0_24px_60px_rgba(90,73,33,0.16)] backdrop-blur-md transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 lg:block">
        <img
          src={project.cardImage}
          alt={project.cardAltText ?? `${project.title} portfolio cover image`}
          className="h-36 w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <section className="px-4 pb-10 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-[0.72rem] uppercase tracking-[0.42em] text-accent">
              Resume
            </p>
            <h1 className="mt-4 text-5xl font-serif leading-none text-foreground sm:text-7xl">
              <span>Gretchen </span>
              <span className="italic">Ugalde</span>
            </h1>
            <div className="gold-rule mx-auto mt-6 h-px w-40" />
            <p className="font-editorial mx-auto mt-7 max-w-2xl text-[1.15rem] leading-[1.9] text-foreground/80 sm:text-[1.28rem]">
              Scenic designer with professional work spanning regional theatre, graduate training, and collaborative production across new work, musicals, and classical storytelling.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a
                href="tel:9253243410"
                className="inline-flex items-center gap-3 transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 text-accent" />
                925.324.3410
              </a>
              <a
                href="mailto:gretch.ugalde@gmail.com"
                className="inline-flex items-center gap-3 transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 text-accent" />
                gretch.ugalde@gmail.com
              </a>
              <a
                href="https://www.gretchenugalde.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 transition-colors hover:text-accent"
              >
                <ExternalLink className="h-4 w-4 text-accent" />
                gretchenugalde.com
              </a>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 font-sans text-sm uppercase tracking-[0.24em] text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                <ExternalLink className="h-4 w-4" />
                Download PDF
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="soft-panel rounded-[1.35rem] p-8 sm:p-10">
              <p className="text-[0.72rem] uppercase tracking-[0.35em] text-accent">
                Scenic Design
              </p>
              <div className="mt-6 space-y-3">
                <div className="hidden grid-cols-[1.5fr_1fr_1.1fr] gap-6 border-b border-border/70 pb-3 font-sans text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground md:grid">
                  <p>Production</p>
                  <p>Director</p>
                  <p>Company</p>
                </div>
                {scenicDesignCredits.map(([production, director, company]) => (
                  <div
                    key={production}
                    className="grid gap-1 border-b border-border/50 py-3 md:grid-cols-[1.5fr_1fr_1.1fr] md:gap-6"
                  >
                    <ResumeProductionCell production={production} />
                    <p className="text-sm leading-7 text-foreground/72">
                      <span className="font-sans mr-2 text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground md:hidden">
                        Director
                      </span>
                      {director}
                    </p>
                    <p className="text-sm leading-7 text-foreground/72">
                      <span className="font-sans mr-2 text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground md:hidden">
                        Company
                      </span>
                      {company}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="soft-panel rounded-[1.35rem] p-8 sm:p-10">
              <p className="text-[0.72rem] uppercase tracking-[0.35em] text-accent">
                Associate & Assistant Scenic Design
              </p>
              <div className="mt-6 space-y-3">
                <div className="hidden grid-cols-[1.5fr_1fr_1.1fr] gap-6 border-b border-border/70 pb-3 font-sans text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground md:grid">
                  <p>Production</p>
                  <p>Designer</p>
                  <p>Company</p>
                </div>
                {assistantCredits.map(([production, designer, company]) => (
                  <div
                    key={production}
                    className="grid gap-1 border-b border-border/50 py-3 md:grid-cols-[1.5fr_1fr_1.1fr] md:gap-6"
                  >
                    <ResumeProductionCell production={production} />
                    <p className="text-sm leading-7 text-foreground/72">
                      <span className="font-sans mr-2 text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground md:hidden">
                        Designer
                      </span>
                      {designer}
                    </p>
                    <p className="text-sm leading-7 text-foreground/72">
                      <span className="font-sans mr-2 text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground md:hidden">
                        Company
                      </span>
                      {company}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="soft-panel rounded-[1.35rem] p-8">
              <h2 className="text-3xl font-serif italic text-foreground">
                Education
              </h2>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="font-sans text-[0.72rem] uppercase tracking-[0.3em] text-accent">
                    2026
                  </p>
                  <p className="mt-2 text-lg font-medium text-foreground">
                    Master of Fine Arts in Scenic Design
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    University of California, Irvine
                  </p>
                </div>
                <div>
                  <p className="font-sans text-[0.72rem] uppercase tracking-[0.3em] text-accent">
                    2019
                  </p>
                  <p className="mt-2 text-lg font-medium text-foreground">
                    Bachelor of Arts in Drama, Emphasis in Scenic Design
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    University of California, Irvine
                  </p>
                </div>
              </div>
            </div>

            <div className="soft-panel rounded-[1.35rem] p-8">
              <h2 className="text-3xl font-serif italic text-foreground">
                References
              </h2>
              <p className="mt-4 font-editorial text-[1.02rem] leading-8 text-foreground/78">
                Available upon request.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <section className="px-4 pb-12 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[0.72rem] uppercase tracking-[0.42em] text-accent">
              About
            </p>
            <h1 className="mt-4 text-5xl font-serif leading-none text-foreground sm:text-7xl">
              <span>Gretchen </span>
              <span className="italic">Ugalde</span>
            </h1>
            <div className="gold-rule mx-auto mt-6 h-px w-40" />
            <p className="font-editorial mx-auto mt-7 max-w-xl text-[1.2rem] leading-[1.85] text-foreground/80 sm:text-[1.35rem]">
              A scenic designer shaped by cross-cultural storytelling, visual atmosphere, and a love of theatre that feels deeply lived-in.
            </p>
          </div>
        </section>

        <section className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid items-start gap-12 md:grid-cols-2">
              <div className="space-y-8">
                <div className="soft-panel aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663337866878/WLZvgHRSbZmeHpcZ.jpg"
                    alt="Gretchen Ugalde - Scenic Designer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="soft-panel overflow-hidden rounded-[1.5rem]">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663337866878/RCPTDoElJmQieRNt.jpg"
                    alt="Gretchen Ugalde with her grandmother"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="border-t border-border/70 px-6 py-5 text-center">
                    <p className="text-sm italic text-muted-foreground">
                      With my granny - my biggest inspiration and supporter
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-serif text-foreground sm:text-4xl">
                  <span>Gretchen </span>
                  <span className="italic">Ugalde</span>
                </h2>
                <p className="text-[0.72rem] uppercase tracking-[0.35em] text-accent">
                  Scenic Designer
                </p>

                <div className="font-editorial space-y-4 text-[1.08rem] leading-[1.95] text-foreground/82">
                  <p>
                    Hey there! I'm Gretchen Ugalde, a scenic designer with roots in both Cebu City, Philippines, and the Bay Area.
                  </p>

                  <p>
                    Growing up, I bounced between both worlds every few years, but what remained constant was that I found my footing again through the moments I would watch movies with my father, consume art, and talk to locals about life experiences. These experiences taught me the universal power of storytelling.
                  </p>

                  <p>
                    My passion for design took off in college, where I immersed myself in theatre. Since then, I've continued working on my craft with Okoboji Summer Theatre, Maples Repertory Theatre, and Stephens College in central Missouri.
                  </p>

                  <p>
                    Currently, I'm pursuing my MFA at UC Irvine. My goal for the future is to tell many stories across the country and beyond. Most importantly, stories that my granny will love! The good thing is that she loves every story she experiences!
                  </p>

                  <p>
                    When I'm not designing, you can catch me hunting for trinkets at HomeGoods or TJ Maxx!
                  </p>
                </div>

                <div className="soft-panel rounded-[1.4rem] px-6 py-7">
                  <h3 className="mb-4 text-xl font-serif italic text-foreground">
                    Get in Touch
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-accent" />
                      <a
                        href="mailto:contact@gretchenugalde.com"
                        className="hover:text-accent transition-colors"
                      >
                        contact@gretchenugalde.com
                      </a>
                    </p>
                    <div>
                      <Link
                        href="/resume"
                        className="inline-flex rounded-full border border-accent/70 px-5 py-2.5 font-sans text-[0.74rem] uppercase tracking-[0.24em] text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                      >
                        View Resume
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center text-3xl font-serif italic text-foreground sm:text-4xl">
              Experience & Education
            </h2>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="soft-panel rounded-[1.4rem] p-8">
                <h3 className="mb-4 text-xl font-serif italic text-foreground">
                  Education
                </h3>
                <ul className="space-y-3 leading-7 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">MFA in Scenic Design</strong>
                    <br />
                    UC Irvine (Current)
                  </li>
                  <li>
                    <strong className="text-foreground">Bachelor of Arts in Drama</strong>
                    <br />
                    University of California, Irvine
                  </li>
                </ul>
              </div>

              <div className="soft-panel rounded-[1.4rem] p-8">
                <h3 className="mb-4 text-xl font-serif italic text-foreground">
                  Professional Experience
                </h3>
                <ul className="space-y-3 leading-7 text-muted-foreground">
                  <li>Okoboji Summer Theatre</li>
                  <li>Maples Repertory Theatre</li>
                  <li>Stephens College</li>
                  <li>Various Regional Productions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-serif italic text-foreground sm:text-4xl">
              Let's Connect
            </h2>
            <p className="font-editorial mx-auto mb-8 max-w-xl text-[1.12rem] leading-[1.9] text-foreground/78 sm:text-[1.2rem]">
              Follow my journey and see behind-the-scenes content from my latest projects.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://www.instagram.com/gretchenugalde"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-accent/70 px-6 py-3 text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
              <a
                href="https://www.pinterest.com/gretchenugalde"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-accent/70 px-6 py-3 text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
                Pinterest
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

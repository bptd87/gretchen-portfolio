import Image from "next/image";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { resolveMediaUrl } from "@/content/media";
import { ChevronDown, Image as ImageIcon } from "lucide-react";
import { getFeaturedProjects, getProjectSlug } from "@/content/projects";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-secondary to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,oklch(0.55_0.15_70_/_0.08),transparent_60%)]" />
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-32">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-foreground mb-6 tracking-tight leading-none">
              GRETCHEN UGALDE
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 tracking-widest uppercase font-light">
              Scenic Designer
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Creating immersive theatrical environments that bring stories to life through innovative design and meticulous attention to detail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/portfolio" className="px-8 py-4 bg-accent text-accent-foreground font-medium uppercase tracking-wider hover:bg-foreground hover:text-background transition-all duration-300 beveled-gold rounded-lg">
                View Portfolio
              </Link>
              <Link href="/about" className="px-8 py-4 border-2 border-accent text-accent font-medium uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-all duration-300 beveled rounded-lg">
                About Me
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-accent" />
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-serif text-foreground mb-4">
                Featured Work
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A selection of recent theatrical productions showcasing diverse design approaches and creative solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                  <Link
                  key={project.id}
                  href={`/portfolio/${getProjectSlug(project)}`}
                  className="group relative aspect-[4/3] bg-secondary overflow-hidden border border-border hover:border-accent transition-all duration-300 beveled rounded-lg"
                >
                  <div className="absolute inset-0">
                    {project.heroImage ? (
                      <Image
                        src={resolveMediaUrl(project.heroImage) ?? project.heroImage}
                        alt={`${project.title} scenic design`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background flex items-center justify-center">
                        <ImageIcon className="w-16 h-16 text-border" strokeWidth={1} />
                      </div>
                    )}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <span className="text-xs text-accent uppercase tracking-wider mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-serif text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-secondary">{project.theatre}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/portfolio" className="inline-block px-8 py-3 border-2 border-accent text-accent font-medium uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-all duration-300 beveled rounded-lg">
                View All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-serif text-foreground mb-6">
              Let's Create Something Extraordinary
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Interested in collaborating on your next theatrical production? I'd love to hear about your project and explore how we can bring your vision to the stage.
            </p>
            <Link href="/about" className="inline-block px-8 py-4 bg-accent text-accent-foreground font-medium uppercase tracking-wider hover:bg-foreground hover:text-background transition-all duration-300 beveled-gold rounded-lg">
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

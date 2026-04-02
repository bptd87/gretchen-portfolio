import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const newsArticles = [
  {
    title: "Upcoming Production Announcement",
    excerpt: "Excited to announce my involvement in an upcoming theatrical production. Stay tuned for more details about this exciting new project.",
    date: "February 10, 2026",
    readTime: "2 min read",
    category: "Announcement",
  },
  {
    title: "Design Workshop Highlights",
    excerpt: "Recently participated in a collaborative workshop exploring innovative approaches to sustainable set design and eco-friendly materials.",
    date: "January 28, 2026",
    readTime: "4 min read",
    category: "Workshop",
  },
  {
    title: "Behind the Scenes: GREASE Production",
    excerpt: "A look behind the curtain at the design process for our recent production of GREASE, from initial sketches to final set construction.",
    date: "January 15, 2026",
    readTime: "5 min read",
    category: "Production",
  },
  {
    title: "New Year, New Projects",
    excerpt: "Looking ahead to 2026 with several exciting theatrical collaborations in the pipeline. Here's what's coming up this season.",
    date: "January 1, 2026",
    readTime: "3 min read",
    category: "Update",
  },
];

export default function News() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary">
          <div className="container">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-foreground mb-8 text-center">
              News & Updates
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center leading-relaxed">
              Stay updated with the latest announcements, production insights, and behind-the-scenes stories from my scenic design work.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-5xl mx-auto">
            <div className="bg-secondary border border-border overflow-hidden beveled rounded-lg">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Placeholder */}
                <div className="aspect-[16/10] md:aspect-auto bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                      <Calendar className="w-10 h-10 text-accent" />
                    </div>
                    <p className="text-sm text-muted-foreground">Featured Article</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs uppercase tracking-wider rounded-full">
                      Featured
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {newsArticles[0].date}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">
                    {newsArticles[0].title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {newsArticles[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{newsArticles[0].readTime}</span>
                    </div>
                    <span>•</span>
                    <span>{newsArticles[0].category}</span>
                  </div>
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium uppercase tracking-wider hover:bg-foreground hover:text-background transition-all duration-300 beveled-gold rounded-lg w-fit">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Articles Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-12 text-center">
              Recent Articles
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.slice(1).map((article, index) => (
                <article
                  key={index}
                  className="bg-card border border-border overflow-hidden hover:border-accent transition-all duration-300 cursor-pointer beveled rounded-lg group"
                >
                  {/* Image Placeholder */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-accent/10 to-secondary flex items-center justify-center border-b border-border">
                    <Calendar className="w-12 h-12 text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-accent uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                      <button className="text-accent hover:text-foreground transition-colors text-sm font-medium flex items-center gap-1">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-6">
              Stay in the Loop
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Follow me on social media for the latest updates, behind-the-scenes content, and announcements about upcoming productions.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://www.instagram.com/gretchenugalde"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent text-accent-foreground font-medium uppercase tracking-wider hover:bg-foreground hover:text-background transition-all duration-300 beveled-gold rounded-lg"
              >
                Follow on Instagram
              </a>
              <a
                href="https://www.pinterest.com/gretchenugalde"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-accent text-accent font-medium uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-all duration-300 beveled rounded-lg"
              >
                View on Pinterest
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

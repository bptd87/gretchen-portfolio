import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <nav className="container">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex flex-col group">
            <span className="text-[1.9rem] font-serif leading-none tracking-[-0.03em] text-foreground transition-colors group-hover:text-accent sm:text-[2.2rem]">
              Gretchen <span className="italic">Ugalde</span>
            </span>
            <span className="font-sans mt-1 text-[0.62rem] uppercase tracking-[0.42em] text-muted-foreground">
              SCENIC DESIGNER
            </span>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm uppercase tracking-[0.28em] transition-colors ${
                  isActive(link.href)
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground transition-colors hover:text-accent md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-border/70 py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-sans text-sm uppercase tracking-[0.28em] transition-colors ${
                    isActive(link.href)
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

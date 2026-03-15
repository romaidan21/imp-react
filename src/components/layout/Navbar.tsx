import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Menu, X, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/events", label: t("nav.events") },
    { href: "/documents", label: t("nav.documents") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-3"
          : "bg-primary text-white py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Scale className={cn("h-8 w-8", isScrolled ? "text-primary" : "text-white")} />
            <div className="flex flex-col">
              <span className={cn(
                "font-serif font-bold text-xl leading-tight tracking-tight",
                isScrolled ? "text-primary" : "text-white"
              )}>
                IMP
              </span>
              <span className={cn(
                "text-[10px] uppercase tracking-wider font-semibold opacity-80",
                isScrolled ? "text-primary" : "text-white"
              )}>
                Law Office
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  isScrolled ? "text-gray-600" : "text-white/90",
                  location === link.href && (isScrolled ? "text-primary font-bold" : "text-white font-bold")
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1 bg-black/10 rounded-sm p-1">
              <button
                onClick={() => setLang("uk")}
                className={cn(
                  "px-2 py-1 text-xs font-bold rounded-sm transition-all",
                  lang === "uk"
                    ? (isScrolled ? "bg-primary text-white" : "bg-white text-primary")
                    : (isScrolled ? "text-gray-500 hover:text-primary" : "text-white/70 hover:text-white")
                )}
              >
                UA
              </button>
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "px-2 py-1 text-xs font-bold rounded-sm transition-all",
                  lang === "en"
                    ? (isScrolled ? "bg-primary text-white" : "bg-white text-primary")
                    : (isScrolled ? "text-gray-500 hover:text-primary" : "text-white/70 hover:text-white")
                )}
              >
                EN
              </button>
            </div>

            <Link href="/contact">
              <Button variant={isScrolled ? "default" : "accent"} size="sm">
                {t("btn.consultation")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={cn("h-6 w-6", isScrolled ? "text-primary" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-primary" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 flex flex-col p-4 gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "p-3 text-lg font-medium rounded-sm transition-colors",
                location === link.href ? "bg-primary/5 text-primary" : "text-gray-700 hover:bg-gray-50"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="h-px bg-gray-100 my-2" />
          <div className="flex justify-center gap-4 pb-4">
            <button
              onClick={() => setLang("uk")}
              className={cn("px-4 py-2 font-bold rounded-sm", lang === "uk" ? "bg-primary text-white" : "bg-gray-100 text-gray-600")}
            >
              Українська
            </button>
            <button
              onClick={() => setLang("en")}
              className={cn("px-4 py-2 font-bold rounded-sm", lang === "en" ? "bg-primary text-white" : "bg-gray-100 text-gray-600")}
            >
              English
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

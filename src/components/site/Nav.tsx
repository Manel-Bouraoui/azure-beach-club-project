import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { brand, nav, hero } = siteConfig;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-solid py-3" : "py-6",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 group">
          {brand.logoUrl ? (
            <img src={brand.logoUrl} alt={`${brand.name} ${brand.suffix}`} className="h-8 w-auto" />
          ) : (
            <>
              <span
                className={cn(
                  "font-display text-2xl tracking-wide transition-colors",
                  scrolled ? "text-foreground" : "text-white",
                )}
              >
                {brand.name}
              </span>
              <span
                className={cn(
                  "text-xs uppercase tracking-[0.3em] transition-colors",
                  scrolled ? "text-muted-foreground" : "text-white/70",
                )}
              >
                {brand.suffix}
              </span>
            </>
          )}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-accent",
                  scrolled ? "text-foreground/80" : "text-white/85",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={hero.primaryCta.href}
          className="hidden md:inline-flex items-center rounded-full border border-accent/60 bg-accent/10 px-5 py-2 text-sm font-medium text-accent backdrop-blur-md transition hover:bg-accent hover:text-accent-foreground"
        >
          Reserve
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "md:hidden rounded-full p-2 transition",
            scrolled ? "text-foreground" : "text-white",
          )}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 mt-3 rounded-2xl glass-solid p-6 animate-in fade-in slide-in-from-top-2">
          <ul className="flex flex-col gap-4">
            {nav.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-foreground/90 hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

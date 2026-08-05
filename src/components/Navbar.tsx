import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";
import type { Theme } from "../hooks/useTheme";
import { profile } from "../data/resume";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar({ theme, toggleTheme }: { theme: Theme; toggleTheme: () => void }) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = links.map((l) => l.href.substring(1));
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[500] transition-all duration-300 ${
        scrolled
          ? "border-b border-card-border bg-white/80 shadow-sm backdrop-blur-xl dark:bg-slate-900/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4">
        <a href="#hero" className="group flex items-center gap-3 font-display text-lg font-bold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-lavender via-sky to-cyan font-mono text-sm font-bold text-white shadow-md transition-transform group-hover:scale-105">
            MT
          </span>
          <div className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight text-text-primary group-hover:text-cyan transition-colors">
              {profile.name}
            </span>
            <span className="text-[10.5px] font-medium font-mono text-text-muted">
              {profile.title}
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const isActive = activeSection === l.href.substring(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-sm font-semibold transition-colors duration-200 ${
                  isActive ? "text-cyan" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-[2.5px] w-full rounded-full bg-gradient-to-r from-lavender to-cyan" />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-card-border bg-card-bg text-text-secondary shadow-sm backdrop-blur-md transition-all hover:border-cyan/40 hover:bg-white hover:text-cyan dark:hover:bg-slate-800"
          >
            {theme === "dark" ? <Sun size={17} className="text-amber" /> : <Moon size={17} className="text-lavender" />}
          </button>

          {/* Resume direct download link */}
          <a
            href={profile.socials.resumeUrl}
            download="Maitri_Thummar_Resume.pdf"
            className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-sky via-cyan to-mint px-4 py-2 font-mono text-xs font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan/20 active:translate-y-0 md:flex"
          >
            <Download size={14} /> Resume
          </a>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-card-border bg-card-bg text-text-primary md:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {open && (
        <div className="flex flex-col gap-2 border-b border-card-border bg-white/95 px-6 py-5 shadow-xl backdrop-blur-2xl dark:bg-slate-900/95 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-text-secondary hover:bg-sky-light hover:text-cyan"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.socials.resumeUrl}
            download="Maitri_Thummar_Resume.pdf"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky to-cyan py-2.5 font-mono text-xs font-semibold text-white"
          >
            <Download size={14} /> Download Resume PDF
          </a>
        </div>
      )}
    </nav>
  );
}

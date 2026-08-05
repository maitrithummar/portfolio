import { profile } from "../data/resume";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-card-border/80 bg-white/40 py-10 backdrop-blur-md dark:bg-slate-900/40">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <span className="font-display font-bold text-text-primary text-base">
            {profile.name}
          </span>
          <p className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} Maitri Thummar. Crafted with React & ASP.NET expertise.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs font-semibold text-text-secondary">
          <a href="#about" className="transition-colors hover:text-cyan">
            About
          </a>
          <a href="#skills" className="transition-colors hover:text-cyan">
            Skills
          </a>
          <a href="#experience" className="transition-colors hover:text-cyan">
            Experience
          </a>
          <a href="#education" className="transition-colors hover:text-cyan">
            Education
          </a>
          <a href="#contact" className="transition-colors hover:text-cyan">
            Contact
          </a>
          <a
            href={profile.socials.resumeUrl}
            download="Maitri_Thummar_Resume.pdf"
            className="rounded-lg bg-sky-light px-2.5 py-1 text-sky hover:underline"
          >
            Resume PDF
          </a>
        </div>
      </div>
    </footer>
  );
}

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Download, ArrowRight, Code2, Database, Layers, Sparkles, Terminal, Cpu } from "lucide-react";
import { profile } from "../data/resume";

const nameChars = [...profile.name];

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[95vh] items-center overflow-hidden pt-[140px] pb-16">
      {/* Background Floating Pastel Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-20 h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-lavender/30 to-sky/30 blur-3xl opacity-70"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 -right-20 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-mint/25 via-cyan/25 to-pink/20 blur-3xl opacity-70"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-10 left-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-peach/20 to-lavender/25 blur-3xl opacity-60"
        />
      </div>

      <div className="relative mx-auto grid max-w-[1120px] grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Left Column: Text & CTAs */}
        <div>
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-card-border bg-card-bg px-4 py-2 text-xs font-semibold shadow-sm backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint" />
            </span>
            <span className="font-mono tracking-wider text-text-secondary uppercase">
              Available for Full Stack Roles
            </span>
          </motion.div>

          {/* Name Title */}
          <h1 className="mb-3 font-display text-[clamp(42px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight" aria-label={profile.name}>
            {nameChars.map((ch, i) => (
              <motion.span
                key={i}
                className="inline-block bg-gradient-to-r from-text-primary via-slate-800 to-text-primary bg-clip-text dark:from-white dark:to-slate-200"
                initial={{ opacity: 0, y: 25, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.5, delay: i * 0.03, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </h1>

          {/* Tagline / Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6 flex flex-wrap items-center gap-2 font-mono text-base font-semibold text-cyan"
          >
            <span className="flex items-center gap-1.5 rounded-lg bg-cyan-light/70 px-3 py-1 text-cyan dark:bg-cyan-dim">
              <Terminal size={16} /> {profile.title}
            </span>
            <span className="text-text-muted">|</span>
            <span className="text-text-secondary text-sm font-normal">{profile.tagline}</span>
          </motion.div>

          {/* Profile Summary */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8 max-w-[560px] text-base leading-relaxed text-text-secondary"
          >
            {profile.summary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-10 flex flex-wrap gap-4"
          >
            <a
              href="#experience"
              className="group flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-sky via-cyan to-mint px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan/30"
            >
              View Experience <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={profile.socials.resumeUrl}
              download="Maitri_Thummar_Resume.pdf"
              className="flex items-center gap-2.5 rounded-xl border border-card-border bg-card-bg px-6 py-3.5 text-sm font-semibold text-text-primary shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-lavender hover:bg-lavender-light/50 hover:text-lavender dark:hover:bg-slate-800"
            >
              <Download size={16} className="text-lavender" /> Download Resume
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-xl border border-card-border bg-card-bg px-5 py-3.5 text-sm font-semibold text-text-secondary shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-peach hover:text-peach"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Quick Contact Specs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-6 border-t border-card-border/80 pt-6"
          >
            <div className="flex items-center gap-2 text-xs font-medium text-text-muted">
              <MapPin size={15} className="text-cyan" /> {profile.location}
            </div>
            <a href={`tel:${profile.phoneHref}`} className="flex items-center gap-2 text-xs font-medium text-text-muted hover:text-cyan transition-colors">
              <Phone size={15} className="text-sky" /> {profile.phone}
            </a>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-xs font-medium text-text-muted hover:text-cyan transition-colors">
              <Mail size={15} className="text-lavender" /> {profile.email}
            </a>
          </motion.div>
        </div>

        {/* Right Column: 3D Animated Glass Developer Workspace Card (REPLACES old stack flowchart) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative"
        >
          {/* Outer Glass Card Window */}
          <div className="glass-card relative overflow-hidden rounded-3xl p-6 shadow-2xl">
            {/* Header controls bar */}
            <div className="mb-4 flex items-center justify-between border-b border-card-border/70 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-2 font-mono text-xs font-semibold text-text-muted">
                  FullStackWorkspace.cs
                </span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-cyan-light px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-cyan">
                <Sparkles size={12} /> Active Stack
              </div>
            </div>

            {/* Code / Visual Window */}
            <div className="rounded-2xl bg-slate-900 p-5 font-mono text-xs leading-relaxed text-slate-200 shadow-inner">
              <div className="mb-2 text-slate-500">// Maitri Thummar — Core Full Stack Pipeline</div>
              <div className="text-purple-400">
                <span className="text-pink-400">public class</span> <span className="text-emerald-300">PortfolioModule</span> : <span className="text-sky-300">ApiController</span>
              </div>
              <div className="text-slate-300">{"{"}</div>
              <div className="pl-4">
                <span className="text-sky-400">[HttpGet]</span>
                <br />
                <span className="text-pink-400">public</span> <span className="text-amber-300">IHttpActionResult</span> GetStackInfo() {"{"}
              </div>
              <div className="pl-8 text-cyan-300">
                return Ok(new {"{"}
                <br />
                <span className="pl-4 text-emerald-300">Frontend</span> = <span className="text-amber-200">"React.js + JavaScript"</span>,
                <br />
                <span className="pl-4 text-emerald-300">Backend</span> = <span className="text-amber-200">"ASP.NET MVC + C#"</span>,
                <br />
                <span className="pl-4 text-emerald-300">Database</span> = <span className="text-amber-200">"SQL Server Stored Procedures"</span>
                <br />
                {"}"});
              </div>
              <div className="pl-4 text-slate-300">{"}"}</div>
              <div className="text-slate-300">{"}"}</div>
            </div>

            {/* Floating Tech Badges Overlay */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <TechPill icon={<Code2 size={15} />} title="React.js UI" subtitle="Component Migration" color="lavender" />
              <TechPill icon={<Cpu size={15} />} title="ASP.NET MVC" subtitle="C# & Web API" color="sky" />
              <TechPill icon={<Database size={15} />} title="SQL Server" subtitle="Stored Procedures" color="mint" />
              <TechPill icon={<Layers size={15} />} title="RESTful APIs" subtitle="JSON & Endpoints" color="peach" />
            </div>

            {/* Ambient Corner Accent */}
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-cyan/30 to-lavender/30 blur-2xl" />
          </div>

          {/* Floating Pill Accent Top Right */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 rounded-2xl border border-white/60 bg-white/90 px-4 py-2 shadow-lg backdrop-blur-md dark:bg-slate-800/90"
          >
            <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
              ✓ 1 Year Full Stack Exp.
            </span>
          </motion.div>

          {/* Floating Pill Accent Bottom Left */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-4 rounded-2xl border border-white/60 bg-white/90 px-4 py-2 shadow-lg backdrop-blur-md dark:bg-slate-800/90"
          >
            <span className="font-mono text-xs font-bold text-lavender">
              B.C.A • 8.22 CGPA
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TechPill({
  icon,
  title,
  subtitle,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  color: "lavender" | "sky" | "mint" | "peach";
}) {
  const colorMap = {
    lavender: "bg-lavender-light text-lavender border-lavender/30",
    sky: "bg-sky-light text-sky border-sky/30",
    mint: "bg-mint-light text-mint border-mint/30",
    peach: "bg-peach-light text-peach border-peach/30",
  };

  return (
    <div className={`flex items-center gap-3 rounded-xl border p-3 shadow-sm transition-transform hover:scale-[1.02] ${colorMap[color]}`}>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/80 shadow-xs dark:bg-slate-800">
        {icon}
      </div>
      <div>
        <div className="font-mono text-xs font-bold leading-tight">{title}</div>
        <div className="text-[10.5px] opacity-80">{subtitle}</div>
      </div>
    </div>
  );
}

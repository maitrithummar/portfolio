import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./About";
import { education } from "../data/resume";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="relative py-24 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent dark:via-slate-900/50">
      <div className="mx-auto max-w-[1120px] px-6">
        <Eyebrow index="04" label="Education" />
        
        <Reveal>
          <h2 className="mb-4 font-display text-[clamp(30px,3.8vw,44px)] font-bold tracking-tight text-text-primary">
            Academic Foundation
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-12 max-w-[620px] text-base leading-relaxed text-text-secondary">
            Formal education in computer applications with a focus on software engineering fundamentals.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.div
            whileHover={{ y: -4 }}
            className="glass-card relative overflow-hidden rounded-3xl p-8 shadow-xl transition-all duration-300 hover:border-lavender/40"
          >
            {/* Background Pastel Watermark */}
            <div className="pointer-events-none absolute -bottom-10 -right-10 opacity-10">
              <GraduationCap size={200} className="text-lavender" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-card-border/80 pb-6">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-lavender via-sky to-cyan text-white shadow-md">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <span className="inline-block rounded-lg bg-lavender-light px-3 py-1 font-mono text-xs font-bold text-lavender mb-2">
                    Undergraduate Degree
                  </span>
                  <h3 className="font-display text-2xl font-bold text-text-primary">
                    {education.degree}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-3 font-semibold text-cyan text-sm">
                    <span>{education.school}</span>
                    <span className="text-text-muted font-normal">•</span>
                    <span className="flex items-center gap-1 text-text-muted font-normal text-xs">
                      <MapPin size={13} /> {education.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 font-mono text-sm font-bold text-white shadow-md">
                  <Award size={18} /> {education.cgpa}
                </div>
                <span className="mt-1.5 font-mono text-xs font-semibold text-text-muted">
                  <Calendar size={13} className="inline mr-1 text-sky" /> {education.years}
                </span>
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="mt-6">
              <h4 className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                Highlights & Focus Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {education.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 rounded-xl border border-card-border bg-white/60 p-3.5 text-xs font-medium text-text-secondary shadow-xs dark:bg-slate-800/60"
                  >
                    <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0 text-cyan" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

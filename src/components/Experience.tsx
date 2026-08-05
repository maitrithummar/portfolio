import { Reveal } from "./Reveal";
import { Eyebrow } from "./About";
import { experience } from "../data/resume";
import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronRight } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-[1120px] px-6">
        <Eyebrow index="03" label="Experience" />
        
        <Reveal>
          <h2 className="mb-4 font-display text-[clamp(30px,3.8vw,44px)] font-bold tracking-tight text-text-primary">
            Professional Work Experience
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-16 max-w-[620px] text-base leading-relaxed text-text-secondary">
            Hands-on full stack development across product-based software and enterprise client solutions.
          </p>
        </Reveal>

        {/* Vertical Animated Timeline */}
        <div className="relative pl-6 sm:pl-10">
          {/* Vertical Connecting Gradient Line */}
          <div className="absolute top-2 bottom-2 left-2.5 sm:left-4 w-1 rounded-full bg-gradient-to-b from-lavender via-cyan to-mint shadow-xs opacity-80" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <Reveal key={job.branch} delay={index * 0.15}>
                <div className="relative">
                  {/* Timeline Pulse Node Indicator */}
                  <div className="absolute -left-6 sm:-left-10 top-1.5 flex h-6 w-6 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-40" />
                    <span className="relative flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-cyan shadow-md dark:border-slate-900">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                  </div>

                  {/* Job Card */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="glass-card overflow-hidden rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:border-cyan/40"
                  >
                    {/* Header info */}
                    <div className="mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-card-border/80 pb-5">
                      <div>
                        <div className="mb-1 flex items-center gap-2">
                          <span className="rounded-lg bg-sky-light px-3 py-1 font-mono text-xs font-bold text-sky dark:bg-sky/20">
                            {job.role}
                          </span>
                          <span className="font-mono text-xs text-text-muted">
                            • {job.branch}
                          </span>
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary mt-1">
                          {job.company}
                        </h3>
                      </div>

                      <div className="flex flex-col items-start sm:items-end gap-1 font-mono text-xs font-semibold text-text-muted">
                        <div className="flex items-center gap-1.5 text-cyan">
                          <Calendar size={14} /> {job.date}
                        </div>
                        <div className="flex items-center gap-1 text-text-muted">
                          <MapPin size={13} /> {job.location}
                        </div>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <div className="space-y-3.5">
                      {job.bullets.map((bullet, bi) => (
                        <div key={bi} className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary">
                          <ChevronRight size={16} className="mt-1 flex-shrink-0 text-cyan" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges Footer */}
                    <div className="mt-8 border-t border-card-border/70 pt-5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[11px] font-bold text-text-muted uppercase tracking-wider mr-1">
                          Tech Stack:
                        </span>
                        {job.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-lg border border-card-border bg-white/70 px-3 py-1 font-mono text-xs font-semibold text-text-primary shadow-2xs dark:bg-slate-800/70"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

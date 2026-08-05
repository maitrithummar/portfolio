import { Reveal } from "./Reveal";
import { profile } from "../data/resume";
import { motion } from "framer-motion";
import { User, Award, CheckCircle2, GraduationCap, Building2, Briefcase } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-[1120px] px-6">
        <Eyebrow index="01" label="About Me" />
        
        <Reveal>
          <h2 className="mb-4 font-display text-[clamp(30px,3.8vw,44px)] font-bold tracking-tight text-text-primary">
            Engineering reliable web applications across the full stack.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-12 max-w-[700px] text-base leading-relaxed text-text-secondary">
            Passionate about crafting modular front-end interfaces and robust backend APIs that deliver tangible value for real-world products.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Personal Intro & Bio Cards (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal delay={0.15}>
              <div className="glass-card rounded-3xl p-8 shadow-xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lavender-light text-lavender">
                    <User size={20} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-text-primary">Professional Journey</h3>
                </div>

                <div className="space-y-4 text-[15px] leading-relaxed text-text-secondary">
                  {profile.about.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 border-t border-card-border/80 pt-6">
                  <h4 className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                    Core Technical Competencies
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {profile.highlights.map((h) => (
                      <span
                        key={h}
                        className="flex items-center gap-1.5 rounded-xl border border-card-border bg-white/60 px-3.5 py-1.5 font-mono text-xs font-semibold text-text-primary shadow-xs dark:bg-slate-800/60"
                      >
                        <CheckCircle2 size={13} className="text-mint" /> {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Spec / Quick Facts Grid (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Quick Stats Grid */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {profile.stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -4 }}
                    className="glass-card flex flex-col justify-center rounded-2xl p-5 shadow-lg"
                  >
                    <span className="font-display text-3xl font-extrabold bg-gradient-to-r from-sky via-cyan to-mint bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <span className="mt-1 font-mono text-xs font-semibold text-text-muted">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            {/* Structured Profile Spec Card */}
            <Reveal delay={0.25}>
              <div className="glass-card overflow-hidden rounded-3xl p-6 shadow-xl">
                <div className="mb-5 flex items-center justify-between border-b border-card-border pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan">
                      Profile Specifications
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-text-muted">Surat, Gujarat</span>
                </div>

                <div className="divide-y divide-card-border/60">
                  <SpecRow icon={<Briefcase size={15} className="text-sky" />} label="Current Role" value={profile.title} />
                  <SpecRow icon={<Building2 size={15} className="text-lavender" />} label="Company" value="Evaan Softtech Pvt. Ltd." />
                  <SpecRow icon={<GraduationCap size={15} className="text-peach" />} label="Education" value="B.C.A (Vanita Vishram Univ)" />
                  <SpecRow icon={<Award size={15} className="text-mint" />} label="Academic Score" value="8.22 CGPA" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-3.5 text-xs">
      <div className="flex items-center gap-2.5 font-mono text-text-muted">
        {icon}
        <span>{label}</span>
      </div>
      <span className="font-semibold text-text-primary text-right">{value}</span>
    </div>
  );
}

export function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-3 flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-widest text-cyan">
      <span className="h-0.5 w-6 rounded-full bg-gradient-to-r from-sky to-cyan" />
      {index} — {label}
    </div>
  );
}

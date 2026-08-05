import { useState } from "react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./About";
import { motion, AnimatePresence } from "framer-motion";
import { skillGroups } from "../data/resume";
import { Code2, Layout, Server, Database, Layers, GitBranch, Cpu, CheckCircle } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code2 size={18} className="text-sky" />,
  Frontend: <Layout size={18} className="text-lavender" />,
  Backend: <Server size={18} className="text-peach" />,
  Databases: <Database size={18} className="text-mint" />,
  "APIs & Concepts": <Layers size={18} className="text-pink" />,
  "Tooling & Version Control": <GitBranch size={18} className="text-amber" />,
};

const categoryBadgeColors: Record<string, string> = {
  Languages: "bg-sky-light text-sky border-sky/30",
  Frontend: "bg-lavender-light text-lavender border-lavender/30",
  Backend: "bg-peach-light text-peach border-peach/30",
  Databases: "bg-mint-light text-mint border-mint/30",
  "APIs & Concepts": "bg-pink-light text-pink border-pink/30",
  "Tooling & Version Control": "bg-amber-dim text-amber border-amber/30",
};

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", ...skillGroups.map((g) => g.category)];

  const filteredGroups =
    activeTab === "All"
      ? skillGroups
      : skillGroups.filter((g) => g.category === activeTab);

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent dark:via-slate-900/50">
      <div className="mx-auto max-w-[1120px] px-6">
        <Eyebrow index="02" label="Skills & Expertise" />
        
        <Reveal>
          <h2 className="mb-4 font-display text-[clamp(30px,3.8vw,44px)] font-bold tracking-tight text-text-primary">
            Technical Toolkit & Proficiency
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-10 max-w-[620px] text-base leading-relaxed text-text-secondary">
            End-to-end full stack capabilities spanning ASP.NET MVC, C#, SQL Server, REST APIs, and modern React.js front-end development.
          </p>
        </Reveal>

        {/* Category Tabs Filter */}
        <Reveal delay={0.15}>
          <div className="mb-12 flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative rounded-xl px-4 py-2.5 font-mono text-xs font-semibold transition-all duration-200 ${
                  activeTab === cat
                    ? "bg-gradient-to-r from-sky via-cyan to-mint text-white shadow-md shadow-cyan/20 scale-[1.02]"
                    : "border border-card-border bg-card-bg text-text-secondary hover:border-cyan/40 hover:bg-white hover:text-text-primary dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Skill Groups Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredGroups.map((group) => (
              <div
                key={group.category}
                className="glass-card flex flex-col justify-between overflow-hidden rounded-3xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-cyan/40"
              >
                <div>
                  {/* Category Header */}
                  <div className="mb-5 flex items-center justify-between border-b border-card-border/80 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-xs dark:bg-slate-800">
                        {categoryIcons[group.category] ?? <Cpu size={18} className="text-cyan" />}
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-text-primary">
                          {group.category}
                        </h3>
                        <span className="font-mono text-[10.5px] text-text-muted">
                          {group.items.length} Technologies
                        </span>
                      </div>
                    </div>
                    <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold ${categoryBadgeColors[group.category]}`}>
                      CORE
                    </span>
                  </div>

                  {/* Skills List with Progress Bars */}
                  <div className="space-y-4">
                    {group.items.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-semibold">
                          <span className="flex items-center gap-1.5 text-text-primary font-body">
                            <CheckCircle size={13} className="text-cyan" />
                            {skill.name}
                          </span>
                          <span className="font-mono text-[11px] text-text-muted">{skill.desc}</span>
                        </div>
                        {/* Progress Meter Bar */}
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-card-border/60">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-sky via-cyan to-mint"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./About";
import { profile } from "../data/resume";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Copy,
  Check,
  ExternalLink,
  Send,
} from "lucide-react";

function LinkedinIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setToastMessage(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-[1120px] px-6">
        <Eyebrow index="05" label="Contact Information" />

        <Reveal>
          <h2 className="mb-4 font-display text-[clamp(30px,3.8vw,44px)] font-bold tracking-tight text-text-primary">
            Let's Connect & Build Together
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-14 max-w-[620px] text-base leading-relaxed text-text-secondary">
            Open for full-time Full Stack Developer roles, technical inquiries, or project opportunities. Reach out directly using any of the channels below.
          </p>
        </Reveal>

        {/* Contact Information Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Email */}
          <Reveal delay={0.15}>
            <ContactCard
              icon={<Mail size={22} className="text-lavender" />}
              title="Email Address"
              value={profile.email}
              badge="Primary Contact"
              color="lavender"
              primaryAction={
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-1.5 font-mono text-xs font-bold text-lavender hover:underline"
                >
                  <Send size={13} /> Click to Email
                </a>
              }
              onCopy={() => copyToClipboard(profile.email, "Email")}
              isCopied={copiedField === "Email"}
            />
          </Reveal>

          {/* Card 2: Phone */}
          <Reveal delay={0.2}>
            <ContactCard
              icon={<Phone size={22} className="text-sky" />}
              title="Phone Number"
              value={profile.phone}
              badge="Direct Line"
              color="sky"
              primaryAction={
                <a
                  href={`tel:${profile.phoneHref}`}
                  className="flex items-center gap-1.5 font-mono text-xs font-bold text-sky hover:underline"
                >
                  <Phone size={13} /> Click to Call
                </a>
              }
              onCopy={() => copyToClipboard(profile.phone, "Phone")}
              isCopied={copiedField === "Phone"}
            />
          </Reveal>

          {/* Card 3: Location */}
          <Reveal delay={0.25}>
            <ContactCard
              icon={<MapPin size={22} className="text-mint" />}
              title="Location"
              value={profile.location}
              badge="Base"
              color="mint"
              primaryAction={
                <span className="font-mono text-xs font-semibold text-text-muted">
                  Gujarat, India
                </span>
              }
            />
          </Reveal>

          {/* Card 4: LinkedIn */}
          <Reveal delay={0.3}>
            <ContactCard
              icon={<LinkedinIcon size={22} className="text-sky" />}
              title="LinkedIn"
              value="Maitri Thummar"
              badge="Professional Profile"
              color="sky"
              primaryAction={
                <a
                  href={profile.socials.linkedin || "https://linkedin.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs font-bold text-sky hover:underline"
                >
                  Open LinkedIn <ExternalLink size={13} />
                </a>
              }
            />
          </Reveal>

          {/* Card 5: GitHub */}
          <Reveal delay={0.35}>
            <ContactCard
              icon={<GithubIcon size={22} className="text-peach" />}
              title="GitHub"
              value="Code Repositories"
              badge="Developer Profile"
              color="peach"
              primaryAction={
                <a
                  href={profile.socials.github || "https://github.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs font-bold text-peach hover:underline"
                >
                  Open GitHub <ExternalLink size={13} />
                </a>
              }
            />
          </Reveal>

          {/* Card 6: Resume Download */}
          <Reveal delay={0.4}>
            <ContactCard
              icon={<Download size={22} className="text-pink" />}
              title="Curriculum Vitae"
              value="Maitri_Thummar_Resume.pdf"
              badge="Official PDF"
              color="pink"
              primaryAction={
                <a
                  href={profile.socials.resumeUrl}
                  download="Maitri_Thummar_Resume.pdf"
                  className="flex items-center gap-1.5 font-mono text-xs font-bold text-pink hover:underline"
                >
                  Download PDF <Download size={13} />
                </a>
              }
            />
          </Reveal>
        </div>
      </div>

      {/* Copy Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-8 left-1/2 z-[2000] flex items-center gap-2.5 rounded-2xl border border-cyan/40 bg-white/95 px-6 py-3.5 shadow-2xl backdrop-blur-2xl dark:bg-slate-900/95"
          >
            <Check size={18} className="text-mint" />
            <span className="font-mono text-xs font-bold text-text-primary">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  value,
  badge,
  color,
  primaryAction,
  onCopy,
  isCopied,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  badge: string;
  color: "lavender" | "sky" | "mint" | "peach" | "pink";
  primaryAction: React.ReactNode;
  onCopy?: () => void;
  isCopied?: boolean;
}) {
  const borderHoverClass = {
    lavender: "hover:border-lavender/40",
    sky: "hover:border-sky/40",
    mint: "hover:border-mint/40",
    peach: "hover:border-peach/40",
    pink: "hover:border-pink/40",
  }[color];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`glass-card flex flex-col justify-between rounded-3xl p-6 shadow-xl transition-all duration-300 ${borderHoverClass}`}
    >
      <div>
        {/* Card Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-xs dark:bg-slate-800">
            {icon}
          </div>
          <span className="rounded-full bg-card-border/60 px-3 py-1 font-mono text-[10.5px] font-bold text-text-muted">
            {badge}
          </span>
        </div>

        {/* Title & Value */}
        <h3 className="mb-1 font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
          {title}
        </h3>
        <p className="mb-6 font-display text-base font-bold text-text-primary truncate">
          {value}
        </p>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between border-t border-card-border/70 pt-4">
        {primaryAction}

        {onCopy && (
          <button
            onClick={onCopy}
            className="flex items-center gap-1 rounded-lg border border-card-border bg-white/70 px-2.5 py-1.5 font-mono text-[11px] font-semibold text-text-secondary transition-all hover:bg-white hover:text-cyan dark:bg-slate-800 dark:hover:bg-slate-700"
            title="Copy to clipboard"
          >
            {isCopied ? <Check size={13} className="text-mint" /> : <Copy size={13} />}
            {isCopied ? "Copied" : "Copy"}
          </button>
        )}
      </div>
    </motion.div>
  );
}

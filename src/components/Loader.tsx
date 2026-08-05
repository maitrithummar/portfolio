import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "../data/resume";
import { Sparkles } from "lucide-react";

export function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center gap-4 bg-white/95 backdrop-blur-3xl dark:bg-slate-900/95"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-lavender via-sky to-cyan font-mono text-base font-bold text-white shadow-xl animate-pulse">
            MT
          </div>
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-cyan">
            <Sparkles size={14} /> Loading {profile.name}'s Portfolio ...
          </div>
          <div className="h-1 w-60 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
            <motion.div
              className="h-full bg-gradient-to-r from-lavender via-sky via-cyan to-mint"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.85, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

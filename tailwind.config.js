/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-alt": "var(--bg-alt)",
        "bg-elevated": "var(--bg-elevated)",
        cyan: "var(--cyan)",
        "cyan-dim": "var(--cyan-dim)",
        "cyan-light": "var(--cyan-light)",
        lavender: "var(--lavender)",
        "lavender-light": "var(--lavender-light)",
        sky: "var(--sky-blue)",
        "sky-light": "var(--sky-light)",
        mint: "var(--mint)",
        "mint-light": "var(--mint-light)",
        peach: "var(--peach)",
        "peach-light": "var(--peach-light)",
        pink: "var(--pink)",
        "pink-light": "var(--pink-light)",
        amber: "var(--amber)",
        "amber-dim": "var(--amber-dim)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "card-bg": "var(--card-bg)",
        "card-border": "var(--card-border)",
        "diff-add": "var(--diff-add)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
    },
  },
  plugins: [],
};

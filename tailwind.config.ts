import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#fdfcfa",
          100: "#faf7f2",
          200: "#f3ede4",
          300: "#e9e0d2",
        },
        noir: {
          DEFAULT: "#171310",
          soft: "#2b241d",
          muted: "#5c5248",
        },
        gold: {
          50: "#faf5ec",
          100: "#f3e8d3",
          200: "#e6d0a6",
          300: "#d4b077",
          400: "#c29455",
          500: "#b07f3f",
          600: "#96682f",
          700: "#7a5227",
        },
        copper: {
          400: "#c98a5e",
          500: "#b3714a",
          600: "#95583a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "76rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(23,19,16,0.04), 0 8px 24px rgba(23,19,16,0.06)",
        "card-hover":
          "0 2px 4px rgba(23,19,16,0.06), 0 16px 40px rgba(23,19,16,0.12)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;

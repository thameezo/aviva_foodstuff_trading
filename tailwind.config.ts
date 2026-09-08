import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#122A40",
          soft: "#2C4A66"
        },
        wheat: {
          DEFAULT: "#C08A2E",
          light: "#E0B563"
        },
        paper: "#F6F3EC",
        line: "#DAD3C2",
        sky: "#E7EEF3",
        rust: "#9B3B27"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"]
      },
      maxWidth: {
        content: "1200px"
      },
      borderRadius: {
        card: "1.25rem",
        pill: "999px"
      },
      boxShadow: {
        card: "0 1px 2px rgba(18,42,64,0.04), 0 8px 24px -12px rgba(18,42,64,0.12)",
        "card-hover": "0 4px 10px rgba(18,42,64,0.06), 0 20px 40px -16px rgba(18,42,64,0.18)"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Palette derived from the AVIVA logo: deep navy ring/wordmark,
        // sky-blue inner ring and wheat detail, on white.
        ink: {
          DEFAULT: "#122A40",
          soft: "#54718C"
        },
        accent: {
          DEFAULT: "#2C6E9E",
          light: "#3F87BA",
          dim: "#EAF3FA"
        },
        paper: "#FFFFFF",
        line: "#DCE6ED",
        sky: "#F2F6FA",
        rust: "#D9432B"
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      },
      maxWidth: {
        content: "1200px"
      },
      borderRadius: {
        card: "1.5rem",
        pill: "999px"
      },
      boxShadow: {
        card: "0 1px 2px rgba(18,42,64,0.04), 0 8px 24px -12px rgba(18,42,64,0.10)",
        "card-hover": "0 4px 10px rgba(18,42,64,0.05), 0 24px 48px -16px rgba(18,42,64,0.16)"
      }
    }
  },
  plugins: []
};

export default config;

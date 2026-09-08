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
          DEFAULT: "#1D1D1F",
          soft: "#6E6E73"
        },
        accent: {
          DEFAULT: "#2E6BFF",
          light: "#5B8CFF",
          dim: "#EEF3FF"
        },
        paper: "#FFFFFF",
        line: "#E4E4E7",
        sky: "#F5F5F7",
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
        card: "0 1px 2px rgba(29,29,31,0.04), 0 8px 24px -12px rgba(29,29,31,0.10)",
        "card-hover": "0 4px 10px rgba(29,29,31,0.05), 0 24px 48px -16px rgba(29,29,31,0.16)"
      }
    }
  },
  plugins: []
};

export default config;

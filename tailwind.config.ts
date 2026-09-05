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
      }
    }
  },
  plugins: []
};

export default config;

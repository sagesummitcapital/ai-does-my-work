import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand
        brand: {
          green: "#1DBF73",       // primary deep green (used on white)
          "green-bright": "#3EF3A2",
          "green-deep": "#0E7C4A",
          "green-ink": "#063D24",
        },
        // Light theme surfaces
        canvas: "#FFFFFF",
        paper: "#FAFBFC",
        haze: "#F3F6F4",
        ink: {
          DEFAULT: "#0A0F0C",
          1: "#0A0F0C",
          2: "#2A3530",
          3: "#5E6A65",
          4: "#8C9692",
        },
        line: {
          DEFAULT: "rgba(10,15,12,0.08)",
          2: "rgba(10,15,12,0.12)",
          strong: "rgba(10,15,12,0.18)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
      },
      maxWidth: {
        container: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;

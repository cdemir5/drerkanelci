import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D63384",
          dark: "#AB2370",
          light: "#E91E8C",
          50: "#FDF2F8",
          100: "#FCE7F3",
          200: "#FBCFE8",
          300: "#F9A8D4",
          400: "#F472B6",
          500: "#D63384",
          600: "#AB2370",
          700: "#8B1A5A",
          800: "#6B1444",
          900: "#4A0E2E",
        },
        secondary: {
          DEFAULT: "#F06BAF",
          dark: "#D63384",
          light: "#F9A8D4",
          50: "#FFF1F9",
          100: "#FFE4F3",
          200: "#FECDE8",
          300: "#F9A8D4",
          400: "#F472B6",
          500: "#F06BAF",
          600: "#D63384",
          700: "#AB2370",
          800: "#8B1A5A",
          900: "#6B1444",
        },
        dark: "#1A1A2E",
        light: "#F8F9FA",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-links": "#D63384",
            "--tw-prose-headings": "#1A1A2E",
            "--tw-prose-bold": "#1A1A2E",
            "--tw-prose-bullets": "#D63384",
            a: { fontWeight: "600", textDecoration: "none" },
            "a:hover": { textDecoration: "underline" },
          },
        },
      },
    },
  },
  // Blog content uses the `article` class. The plugin is renamed from
  // `prose` so the existing (currently inert) `prose` classes in
  // DiseasePageLayout keep their current look.
  plugins: [typography({ className: "article" })],
};
export default config;

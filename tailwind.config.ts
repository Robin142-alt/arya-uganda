import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        arya: {
          forest: {
            DEFAULT: "#1F5A45",
            50: "#f0f7f4",
            100: "#dbeef5",
            200: "#b5dcd0",
            300: "#86c2ad",
            400: "#4ca182",
            500: "#1F5A45",
            600: "#184937",
            700: "#143c2e",
            800: "#102f24",
            900: "#0b2019",
            950: "#06130e",
          },
          ochre: {
            DEFAULT: "#D99A32",
            50: "#fdf8ee",
            100: "#faeed5",
            200: "#f4dcab",
            300: "#ecc476",
            400: "#e3ad44",
            500: "#D99A32",
            600: "#bd7a24",
            700: "#9d5d20",
            800: "#804a1f",
            900: "#693d1d",
          },
          charcoal: {
            DEFAULT: "#18211D",
            50: "#f6f7f6",
            100: "#e2e6e3",
            200: "#c4cbc6",
            300: "#9daaa1",
            400: "#6e7f74",
            500: "#4a594f",
            600: "#37443b",
            700: "#2a352e",
            800: "#1f2722",
            900: "#18211D",
            950: "#0d1210",
          },
          ivory: {
            DEFAULT: "#FAF7EF",
            light: "#FDFCF7",
            dark: "#F0EBE0",
          },
          terracotta: {
            DEFAULT: "#B75D3E",
            light: "#CF7454",
            dark: "#96452B",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;

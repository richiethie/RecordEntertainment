import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: {
          DEFAULT: "#181818",
          50: "#252525",
          100: "#202020",
          200: "#181818",
          300: "#151515",
          400: "#121212",
          500: "#0f0f0f",
        },
        primary: {
          DEFAULT: "#22c55e", // green-500
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
      },
      fontFamily: {
        sans: ['"Stack Sans Text"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;


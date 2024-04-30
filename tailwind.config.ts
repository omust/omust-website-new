import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

/** @type {import('tailwindcss').Config} */
//tailwind.config.js
//FreeBSD-licensed CSS animation by Animista
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "tracking-in-contract":
          "tracking-in-contract 3.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.5s   both",
      },
      keyframes: {
        "tracking-in-contract": {
          "0%": {
            "letter-spacing": "1em",
            opacity: "0",
          },
          "40%": {
            opacity: ".6",
          },
          to: {
            "letter-spacing": "normal",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};

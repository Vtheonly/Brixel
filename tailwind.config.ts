// tailwind.config.ts
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
        brand: {
          primary: "#F72585",     // Bright Pink (for highlights, active links)
          secondary: "#F25F18",   // Bright Orange (for buttons)
          dark: "#2B2D42",        // Dark Blue/Black (for text, footers)
          magenta: "#B5179E",     // Deep Pink/Magenta (for sections)
          light: "#FFFFFF",
          "light-gray": "#F8F9FA", // Light background for cards/sections
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
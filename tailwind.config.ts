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
        primary: {
          DEFAULT: "#FF6B35",
          dark: "#E55A2B",
          light: "#FF8F66",
        },
        neutral: {
          white: "#FFFFFF",
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0A0A0A",
        },
      },
      fontFamily: {
        heading: ["var(--font-geist)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["clamp(0.75rem, 2vw, 0.875rem)", { lineHeight: "1.5" }],
        sm: ["clamp(0.875rem, 2.5vw, 1rem)", { lineHeight: "1.5" }],
        base: ["clamp(1rem, 3vw, 1.125rem)", { lineHeight: "1.5" }],
        lg: ["clamp(1.125rem, 3.5vw, 1.25rem)", { lineHeight: "1.5" }],
        xl: ["clamp(1.25rem, 4vw, 1.5rem)", { lineHeight: "1.4" }],
        "2xl": ["clamp(1.5rem, 5vw, 2rem)", { lineHeight: "1.3" }],
        "3xl": ["clamp(2rem, 6vw, 3rem)", { lineHeight: "1.2" }],
        "4xl": ["clamp(2.5rem, 7vw, 4rem)", { lineHeight: "1.1" }],
        "5xl": ["clamp(3rem, 8vw, 5rem)", { lineHeight: "1" }],
        "6xl": ["clamp(3.5rem, 10vw, 6rem)", { lineHeight: "1" }],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-up": "fadeUp 0.5s ease-out",
        "slide-in": "slideIn 0.3s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;

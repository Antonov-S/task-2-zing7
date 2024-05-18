import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        xl: "0rem"
      },
      center: true,
      screens: {
        sm: "1140px"
      }
    },
    extend: {
      colors: {
        accent: "#150050",
        yellow: "#FFE377",
        green: "#00CC61",
        bgGreen: "#EBFBF3",
        smoke: "#F4F4F4",
        "gray-custom": {
          100: "#DCDCDC",
          200: "#777777",
          300: "#787878",
          500: "#404040",
          600: "#3B3A40"
        }
      },
      backgroundImage: {
        bg: "url('/bg.svg')"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1280px",
      },
    },
    extend: {
      fontFamily: {
        plusJakarta: ["Plus Jakarta Sans", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        primary1: "#4475F2",
        primary2: "#4737FF",
        primary3: "#4F7DF3",
        secondary1: "#789DFC",
        secondary2: "#BCB6FD",
        secondary3: "#A6BBF2",
        muted1: "#D9E3FC",
        muted2: "#E1DFF6",
        muted3: "#CFD9F5",
        lightgray: "#969BAB",
        verylightgray: "#9A9EA6",
        gray: "#474A57",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

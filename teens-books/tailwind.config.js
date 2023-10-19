/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";

export default {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_b2": "#000000b2", "900_e5": "#000000e5" },
        gray: { 900: "#0b1236",950: "#DBD2D2"},
        orange: { 700: "#e48900" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [forms],
}


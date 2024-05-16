import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspect_ratio from "@tailwindcss/aspect-ratio";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#e1251b",
        secondary: "#4d4f51",
      },
      animation: {
        gradient: "gradient 20s linear infinite",
        pulse: "pulse 5s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
    },
  },
  plugins: [forms, typography, aspect_ratio],
};

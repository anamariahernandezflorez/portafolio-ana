/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ¡Esta línea es crucial!
  ],
  theme: {
    extend: {
      colors: {
        marfil: "#F4F1EA",
        tinta: "#1E1D1B",
        teal: {
          DEFAULT: "#1B5E6B",
          light: "#D4E4E3",
        },
        coral: "#D97757",
        sage: "#6F8578",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
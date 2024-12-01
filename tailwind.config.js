/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // adding dots to the background
      backgroundImage: {
        dots: "radial-gradient(circle, #ebebebff 1.5px, transparent 1px)",
      },

      // gap between the dots
      backgroundSize: {
        "dot-spacing": "20px 20px",
      },
    },
  },
  plugins: [],
};

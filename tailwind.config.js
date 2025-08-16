/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        "primary-dark": "#2563eb",
        secondary: "#06b6d4",
        accent: "#8b5cf6",
        "dark-bg": "#0f172a",
        "darker-bg": "#020617",
        "card-bg": "rgba(30, 41, 59, 0.6)",
        "text-light": "#f8fafc",
        "text-lighter": "#e2e8f0",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}
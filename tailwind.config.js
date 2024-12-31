/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
        colors: {
            "cblue": "#014bad",
            "cwhite": "#f4f5f0",
        },
        fontFamily: {
            "font1": "Monument Extended",
            "font2": "DM Sans"
        }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}

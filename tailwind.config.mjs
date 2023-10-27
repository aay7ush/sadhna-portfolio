/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        "clr-primary": "#231f20",
        "clr-secondary": "rgba(17, 17, 17, 0.8)",
        "clr-yellow": "#ffc930",
        "clr-blue": "#61ccff",
      },
    },
  },
  plugins: [],
}

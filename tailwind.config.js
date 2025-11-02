/** @type {import('tailwindcss').Config} */
module.exports = {
  // This is the CRITICAL part. It tells Tailwind to scan:
  // - Your main index.html file
  // - ALL .vue, .js, .ts, .jsx, and .tsx files inside your 'src' directory
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
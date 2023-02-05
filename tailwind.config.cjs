/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify body instead of root because MUI dialog is placed outside of root
  important: '#body',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
}

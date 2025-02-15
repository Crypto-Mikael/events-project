import material from 'tailwind-material';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {},
  },
  plugins: [material({ primary: '#0078D4' })],
}

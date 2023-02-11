/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');
/* eslint-enable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'oxanium': ['var(--font-oxanium)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

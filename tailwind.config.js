/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'desaturate-dark-cyan': "hsl(180, 29%, 50%)",
        'light-gray-cyan': {
          1: "hsl(180, 52%, 96%)",
          2: "hsl(180, 31%, 95%)"
        },
        'dark-gray-cyan': "hsl(180, 8%, 52%)",
        'very-dark-gray-cyan': "hsl(180, 14%, 20%)"
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        "primary-black": "rgb(31, 31, 31)",
        "secondary-black": "rgb(113 113 122)",
        "primary-purple": "rgb(217 70 239)",
        "secondary-purple": "rgb(240 171 252)",
        "primary-cyan": "rgb(34 211 238)",
        "secondary-cyan": "rgb(165 243 252)",
      },
    },
  },
  plugins: [],
};

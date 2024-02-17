/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#215fa6',
      'onPrimary': '#ffffff',
      'primaryContainer': '#d5e3ff',
      'onPrimaryContainer': '#001c3b',
      'secondary': '#555f71',
      'onSecondary': '#ffffff',
      'secondaryContainer': '#d9e3f8',
      'onSecondaryContainer': '#121c2b',
      'surface': '#fdfbff',
      'surfaceVariant': '#e0e2ec'
    },
  },
  plugins: [],
};

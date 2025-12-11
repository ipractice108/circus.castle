import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        circus: {
          black: '#0A0A0A',
          darkGray: '#121212',
          orange: '#FF5722',
          cyan: '#00BCD4',
          magenta: '#E91E63',
          white: '#FFFFFF',
          lightGray: '#B0B0B0',
        },
      },
      fontFamily: {
        heading: ['var(--font-oswald)', 'Oswald', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-circus': 'linear-gradient(135deg, #FF5722 0%, #E91E63 50%, #00BCD4 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;

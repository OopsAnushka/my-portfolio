// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Define a new custom font family
        // playwrite: ['var(--font-playwrite-au-qld)', 'cursive'],
        // You can also make it the default sans font if you wish
         sans: ['Barrio', 'cursive'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};

export default config;
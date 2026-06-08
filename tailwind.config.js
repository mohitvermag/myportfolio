/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 24px 80px rgba(2, 8, 23, 0.45)',
      },
      colors: {
        ink: '#050816',
        panel: '#07111f',
        pearl: '#f7f2e8',
        ember: '#f4a261',
        citrine: '#f2cc67',
        mint: '#7bd7bd',
        steel: '#8fb8de',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

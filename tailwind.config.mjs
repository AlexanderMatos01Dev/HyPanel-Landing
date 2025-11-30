/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        hypanel: {
          bg: '#0B0F19',
          card: '#0F1623',
          border: '#2A3B4C',
          accent: '#EDA333',
          blue: '#4DA6FF',
          text: '#E0E6ED',
          muted: '#8B9BB4',
        }
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInOutY: {
          '0%, 100%': { opacity: '1', transform: 'translateY(0)' },
          '40%': { opacity: '1', transform: 'translateY(0)' },
          '50%': { opacity: '0', transform: 'translateY(-10px)' },
          '90%': { opacity: '0', transform: 'translateY(10px)' },
        },
        textSlideIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'fade-in-out-y': 'fadeInOutY 4s linear infinite',
        'text-slide-in': 'textSlideIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};

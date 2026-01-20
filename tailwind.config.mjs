/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'steel': {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d9d9de',
          300: '#b8b8c1',
          400: '#91919f',
          500: '#737384',
          600: '#5d5d6c',
          700: '#4c4c58',
          800: '#41414b',
          900: '#393941',
          950: '#18181b',
        },
        'laser': {
          DEFAULT: '#ff3d00',
          glow: '#ff6b3d',
          dim: '#cc3100',
        },
        'precision': {
          cyan: '#00d4ff',
          green: '#00ff88',
        }
      },
      fontFamily: {
        'display': ['Oswald', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'body': ['Barlow', 'sans-serif'],
      },
      animation: {
        'scan-line': 'scanLine 3s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'laser-cut': 'laserCut 1.5s ease-out forwards',
      },
      keyframes: {
        scanLine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', filter: 'blur(20px)' },
          '50%': { opacity: '1', filter: 'blur(30px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        laserCut: {
          '0%': { width: '0%', opacity: '1' },
          '100%': { width: '100%', opacity: '1' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(255,61,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,61,0,0.03) 1px, transparent 1px)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

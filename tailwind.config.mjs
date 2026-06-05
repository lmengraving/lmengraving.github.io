/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Neutral ramp aligned to the "Spec Sheet" template palette
        // (--bg #161619 · --bg-1 #1c1c20 · --line #2c2c33 · --line-2 #41414b
        //  · --ink-3 #6c727d · --ink-2 #a8aeb8 · --ink #eef1f5), interpolated
        // for the in-between stops.
        'steel': {
          50: '#f7f8fb',
          100: '#eef1f5',
          200: '#cbcfd6',
          300: '#a8aeb8',
          400: '#8a909a',
          500: '#6c727d',
          600: '#565964',
          700: '#41414b',
          800: '#2c2c33',
          900: '#1c1c20',
          950: '#161619',
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

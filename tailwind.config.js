/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        bg:      '#0D0E1A',
        bg2:     '#111320',
        surface: '#161828',
        border:  '#1E2035',
        accent:  '#52B2BF',
        text:    '#DDE0F0',
        muted:   '#5A5F80',
        muted2:  '#3A3F5C',
      },
    },
  },
  plugins: [],
}

import type {Config} from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', {lineHeight: '1rem'}],
      sm: ['0.875rem', {lineHeight: '1.5rem'}],
      base: ['1rem', {lineHeight: '1.5rem'}],
      lg: ['1.125rem', {lineHeight: '2rem'}],
      xl: ['1.25rem', {lineHeight: '1.75rem'}],
      '2xl': ['1.5rem', {lineHeight: '2rem'}],
      '3xl': ['2rem', {lineHeight: '3rem'}],
      '4xl': ['2.5rem', {lineHeight: '3rem'}],
      '5xl': ['3rem', {lineHeight: '1'}],
      '6xl': ['3.75rem', {lineHeight: '1'}],
      '7xl': ['4.5rem', {lineHeight: '1'}],
      '8xl': ['6rem', {lineHeight: '1'}],
      '9xl': ['8rem', {lineHeight: '1'}],
    },
    extend: {
      colors: ({colors}) => ({
        gray: colors.neutral,
      }),
      fontFamily: {
        sans: ['Open Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
} satisfies Config


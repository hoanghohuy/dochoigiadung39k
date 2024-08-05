import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    screens: {
      xl: { max: '1392px' },
      lg: { max: '1200px' },
      md: { max: '1000px' },
      sm: { max: '767px' },
      sx: { max: '540px' },
  },
  },
  plugins: [],
}
export default config

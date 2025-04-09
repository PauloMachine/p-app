/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["'Space Grotesk'", 'sans-serif']
      },
      colors: {
        primary: '#B9FF66',
        secondary: '#191A23',
        tertiary: '#F3F3F3',
        dark: '#292A32'
      },
      screens: {
        lx: '1145px'
      },
      boxShadow: {
        dark: '0px 5px 0px 0px #191A23'
      }
    }
  },
  plugins: []
}

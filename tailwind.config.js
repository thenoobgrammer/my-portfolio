module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fill: {
      primary: '#569DAA',
      secondary: '#56aa8d',
      accent: '#9384D1'
    },
    fontFamily: {
      primary: ['roboto', 'sans-serif'],
      secondary: '"Roboto Slab"',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      xs: '430px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#569DAA',
        secondary: '#56aa8d',
        accent: '#577D86',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/coding.png')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fill: {
      primary: '#569DAA',
      secondary: '#87CBB9',
      accent: '#9384D1'
    },
    fontFamily: {
      primary: ['nunito', 'sans-serif'],
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
        secondary: '#C9A7EB',
        accent: '#577D86',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};

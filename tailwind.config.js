module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: {
    container: false
  },
  theme: {
    screens: {
      xs: '375px',
      sm: '735px',
      md: '1070px',
      lg: '1280px',
      xl: '1440px'
    },
    colors: {
      'moon': '#73737D',
      'black': '#000000',
      'kepler': '#08080B',
      'gray': '#08080b26',
      'gray-light': '#FAFAFA',
    },
    fontFamily: {
      sans: ['SFProDisplay'],
      serif: ['Merriweather'],
    },
    spacing: {
      '0.5': '2.5px',
      '1': '5px',
      '2': '10px',
      '3': '15px',
      '4': '20px',
      '5': '25px',
      '6': '30px',
      '7': '35px',
      '8': '40px',
      '9': '45px',
      '10': '50px',
      '11': '55px',
      '11': '55px',
      '12': '60px',
      '14': '70px',
      '16': '80px',
      '18': '90px',
      '20': '100px',
      '24': '120px',
      '32': '160px',
      '36': '180px',
      '40': '200px',
      '44': '220px',
      '48': '240px',
      '52': '260px',
      '56': '280px',
      '60': '300px',
      '64': '320px',
      '72': '360px',
      '80': '400px',
      '96': '480px'
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xs': {
            maxWidth: '567px',
          },
          '@screen sm': {
            maxWidth: '850px',
          },
          '@screen md': {
            maxWidth: '1220px',
          },
          '@screen lg': {
            maxWidth: '1220px',
          },
          '@screen xl': {
            maxWidth: '1220px',
          },
        }
      })
    }
  ],
}

module.exports = {
  purge: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Genesis Sans"'],
        body: ['"Genesis Sans"', 'sans-serif'],
      },
      screens: {
        xl: '1300px',
        '2xl': '1300px',
      },
      container: {
        center: true,
        padding: '1.25rem',
      },
      borderRadius: {
        50: '50%',
        '10px': '10px',
        '20px': '20px',
      },
      colors: {
        white_rgba_48: 'rgba(255,255,255,.48)',
        black_rgba_10: 'rgba(0,0,0,.1)',
        black_rgba_20: 'rgba(0,0,0,.2)',
        black_rgba_30: 'rgba(0,0,0,.3)',
        black_rgba_40: 'rgba(0,0,0,.4)',
        black_rgba_60: 'rgba(0,0,0,.6)',
        black_rgba_70: 'rgba(0,0,0,.7)',
        main_rgba_90: 'rgba(248, 149, 32, .9)',
        main_rgba_10: 'rgba(248, 149, 32, .1)',
        main: {
          main: '#F89520',
          blue: '#3276E3',
          black: '#231F20',
          black_60: '#7B7979',
          black_10: '#E9E9E9',
          black_20: '#D3D2D2',
          gray_80: '#CCCCCC',
          gray_79: '#7B7979',
          gray_81: '#939598',
          gray_light: 'rgba(211, 210, 210, .2)',
          red: '#DA1E1E',
          green: '#17C108',
          green1: '#88CD2F',
          yellow1: '#e5b419',
        },
      },
      spacing: {
        0.02: '2%',
        '200%': '200%',
        '10px': '10px',
        '6px': '6px',
        '7px': '7px',
        '90vh': '90vh',
        0.5: '0.125rem', //2px
        1.25: '0.3125rem', //5px
        2.5: '.625rem', //10px
        3.5: '0.875rem', //14px
        4.5: '1.125rem', //18px
        5.5: '1.375rem', //22px
        7.5: '1.875rem', //30px
        10.5: '2.625rem', //42px
        12.5: '3.125rem', //50px
        15: '4rem', //64px
        17: '4.25rem', //68px
        16.5: '4.375rem', //70px
        22.5: '5.625rem', //90px
        30: '7.5rem', //120px
        32.5: '8.125rem', //130px
        42.5: '10.625rem', //170px
        72: '18.75rem', //300px
        77.5: '19.375rem', //310px
        81.25: '20.3125rem', //325px
        hd: '56px',
        hd_lg: '117px',
      },
      maxWidth: {
        300: '300px',
        350: '350px',
        360: '360px',
        375: '375px',
        395: '395px',
        400: '400px',
        472: '472px',
        483: '483px',
        500: '500px',
        524: '524px',
        626: '626px',
        634: '634px',
        640: '640px',
        734: '734px',
        972: '972px',
        920: '920px',
        1040: '1040px',
      },
      height: {
        44: '44px',
      },
      maxHeight: {
        345: '345px',
        460: '460px',
        600: '600px',
        800: '800px',
      },
      minWidth: {
        30: '30px',
        92: '92px',
        118: '118px',
        133: '133px',
        156: '156px',
        160: '160px',
        167: '167px',
        300: '300px',
        360: '360px',
      },
      lineHeight: {
        5.5: '1.375rem',
      },
      fontSize: {
        '22px': '1.375rem',
        '32px': '2rem',
      },
      letterSpacing: {
        base: '0.3px',
      },
      translate: {
        '100vh': '100vh',
      },
    },
  },
  variants: {},
  plugins: [],
}

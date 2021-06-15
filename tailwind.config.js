const TWColors = require('tailwindcss/colors');
// //  As specified on Colors.pdf
const colors = {
  purple: {
    100: '#CDB8F2',
    200: '#A781E3',
    300: '#8751D6',
    400: '#6926C7',
    500: '#5100B9',
    600: '#5000B3',
    700: '#4C00A3',
    800: '#44008C',
    900: '#37006E',
    DEFAULT: '#5100B9',
  },
  purpleLight: {
    25: '#F7F5FA',
    50: '#EDE0FF',
    75: '#E4D1FF',
    DEFAULT: '#EDE0FF',
  },
  orange: {
    50: '#FFEFE6',
    100: '#FCD2C7',
    200: '#FAB19D',
    300: '#F59173',
    400: '#F2754B',
    500: '#EF5A24',
    600: '#E65319',
    700: '#D1490F',
    800: '#B33C05',
    900: '#8A2E00',
    DEFAULT: '#EF5A24',
  },
  yellow: {
    50: '#FFF3E0',
    100: '#FFE7CC',
    200: '#FCD6A7',
    300: '#FCC883',
    400: '#FAB95F',
    500: '#F9AE3B',
    600: '#F0A42B',
    700: '#DB951A',
    800: '#BD7F0B',
    900: '#946300',
    DEFAULT: '#F9AE3B',
  },
  green: {
    50: '#E2F1E9',
    100: '#B4E0C4',
    200: '#80C299',
    300: '#55A374',
    400: '#328555',
    500: '#186539',
    600: '#105931',
    700: '#094D29',
    800: '#044021',
    900: '#00331A',
    DEFAULT: '#186539',
  },
  red: {
    50: '#FEEFEF',
    100: '#F0BBBE',
    200: '#E08B8F',
    300: '#CF5F63',
    400: '#BF393C',
    500: '#B01919',
    600: '#AB1411',
    700: '#A10F0A',
    800: '#910A03',
    900: '#7D0800',
    DEFAULT: '#B01919',
  },
  black: '#000',
  white: '#fff',
  gray: TWColors.trueGray,
};

module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      primary: colors.purple['500'],
      secondary: colors.orange['500'],
      tertiary: colors.yellow['500'],
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

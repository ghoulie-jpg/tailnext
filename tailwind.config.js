const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');


const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.blue,
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
        sans: ['var(--sc-font-family-p, MontserratRegular)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: 'var(--sc-font-size-p, 15px)',
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
        // You can add or override default Tailwind font weights here
      },
      carousel: {
        styles: {
          base: {
            carousel: {
              position: "relative",
              width: "40px",
              height: "30px",
              overflowX: "overflow-x-hidden",
              display: "flex",
            },
            slide: {
              width: "100%", // Keep slide width relative to the carousel
              height: "100%", // Keep slide height relative to the carousel
              display: "inline-block",
              flex: "flex-none",
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',

});

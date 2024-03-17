/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '560px',
      'md': '800px',
      '2md': '1000px',
      'lg': '1200px',
      'xl': '1400px',
      '2xl': '1600px',
      'maxW': '1700px',
      'max-sm': { 'max': '559px' },
      'max-md': { 'max': '799px' },
      'max-2md': { 'max': '999px' },
      'max-lg': { 'max': '1199px' },
      'max-xl': { 'max': '1399px' },
      'max-2xl': { 'max': '1699px' },
    },
    extend: {
    },
    theme: {
      fontSize: {
        xsss:['8px', '12px'],
        xss:['10px', '14px'],
        xs:['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['36px', '40px'],
        '5xl': ['48px', '16px'],
        '6xl': ['58px', '16px'],
        '7xl': ['72px', '16px'],
        '8xl': ['96px', '16px'],
        '9xl': ['128px', '16px'],
      }
    }
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
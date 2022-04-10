module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    backgroundImage: {
      "bg-hero-1": "url('https://cdn.shopify.com/s/files/1/0610/1870/1985/files/hero-1_jpg.webp?v=1649522164')",
      "bg-hero-2": "url('https://cdn.shopify.com/s/files/1/0610/1870/1985/files/hero-2_jpg.webp?v=1649551282')"
    },
    screens:{
      "sm": "420px",
      "md": "768px",
      "xl": "1280px"
    },
    flex: {
      'half': '50%',
      'more-than-half': '66%'
    },
    maxWidth: {
      '1/2': '50%',
      'more-than-half': '66%'
    },
    fontFamily: {
      'site': ['"Nunito Sans"']
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            hr: {
              borderColor: theme('colors.gray.200'),
              borderTopWidth: '1px',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            'ol > li::before': {
              color: theme('colors.gray.900'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.900'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

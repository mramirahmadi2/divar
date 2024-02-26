// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                // sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
        screens: {
            // '2xl': {'max': '1535px'},
            // // => @media (max-width: 1535px) { ... }
      
            // 'xl': {'max': '1279px'},
            // // => @media (max-width: 1279px) { ... }
      
            // 'lg': {'max': '1023px'},
            // // => @media (max-width: 1023px) { ... }
      
            // 'md': {'max': '767px'},
            // // => @media (max-width: 767px) { ... }
      
            // 'sm': {'max': '639px'},
            // // => @media (max-width: 639px) { ... }
            'mo': {'max':'730px'},
            'de':{'min': '730px'}
          }
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [
        require("daisyui"),
        require('@tailwindcss/forms')
    ],
}

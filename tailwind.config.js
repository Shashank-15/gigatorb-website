/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const rotateX = plugin(function ({ addUtilities }) {
    addUtilities({
        '.rotate-y-180': {
            transform: 'rotateY(180deg)',
        },
    });
});
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1142px',
        },
        fontFamily: {
            mulish: ['Mulish', 'sans-serif'],
            reey: ['reey', 'sans-serif'],
            
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: '#08111F',
            primary: '#47BDFF',
            secondary: '#B476E5',
            gray: {
                DEFAULT: '#7780A1',
                dark: '#1C2331',
            },
        },
        extend: {
            animation: {
                'spin-slow': 'spin 5s linear infinite',
                 "typing": "typing 2s steps(10) , blink .7s infinite",
                 "pulse":  "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                 
            },
            keyframes: {
                typing: {
                  "0%": {
                    width: "0%",
                    visibility: "hidden"
                  },
                  "100%": {
                    width: "100%"
                  }  
                },
                blink: {
                  "50%": {
                    borderColor: "transparent"
                  },
                  "100%": {
                    borderColor: "white"
                  }  
                },
                pulse : {
                    "0%" :  {
                      opacity: "1"
                    },
                    "50%" : {
                      opacity: "0.5"
                    },
                    "100%": {
                        opacity: "1"
                    }
                  },
                  bounce: {
                    "0%, 20%, 50%, 80%, 100%": {
                      transform: "translateY(0)",
                      animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
                    },
                    "40%": {
                      transform: "translateY(-30px)",
                      animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
                    },
                    "60%": {
                      transform: "translateY(-15px)",
                      animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
                    },
                  },

              },
    
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray'),
                        fontSize: '1.125rem',
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/line-clamp'), rotateX, require('@tailwindcss/typography')],
};

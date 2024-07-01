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
            },
            blue: {
                50: '#E3F2FD',
                100: '#BBDEFB',
                200: '#90CAF9',
                300: '#64B5F6',
                400: '#42A5F5',
                500: '#2196F3',
                DEFAULT: '#2196F3',
                600: '#1E88E5',
                700: '#1976D2',
                800: '#1565C0',
                900: '#0D47A1',
                A100: '#82B1FF',
                A200: '#448AFF',
                A400: '#2979FF',
                A700: '#2962FF',
              },
        },
        extend: {
            animation: {
                'spin-slow': 'spin 5s linear infinite',
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

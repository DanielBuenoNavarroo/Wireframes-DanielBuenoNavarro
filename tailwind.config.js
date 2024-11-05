/** @type {import('tailwindcss').Config} */

const disabledCss = {
    'code::before': false,
    'code::after': false,
    'blockquote p:first-of-type::before': false,
    'blockquote p:last-of-type::after': false,
    pre: false,
    code: false,
    'pre code': false,
}
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {css: disabledCss},
                sm: {css: disabledCss},
                lg: {css: disabledCss},
                xl: {css: disabledCss},
                '2xl': {css: disabledCss},
            },
            keyframes: {
                squish: {
                    '50%': {scale: '1.4 0.6'}
                }
            },
            animation: {
                'squish': 'squish 250ms ease-in-out',
            }
        },
    },
    plugins: [],
}


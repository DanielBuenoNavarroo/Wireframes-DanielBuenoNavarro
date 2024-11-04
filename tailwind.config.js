/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
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


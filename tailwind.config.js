/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'RoadMap-custom-gradient': 'linear-gradient(180deg, rgba(133, 82, 37, 0), #f93 15%, #ff7c33 50%, #c63e3e 68%, #007aff 85%, rgba(11, 37, 65, 0))',
            },
            boxShadow: {
                'RoadMapTitle': '0 11px 4px 0 rgba(0, 0, 0, 0.45)',
                'RoadMapContent': '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
                'ProductPillars': 'inset 0px 0px 11px 7px rgba(0,0,0,1)',
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

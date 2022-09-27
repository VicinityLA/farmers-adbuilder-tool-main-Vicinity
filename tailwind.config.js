/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{html,vue}',
        './components/**/*.{html,vue}',
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                farmer: {
                    red: '#e01933',
                    dark: '#003087',
                    gray: '#b6b6b6',
                    DEFAULT: '#158fef',
                }
            }
        },
        fontFamily: {
            sans: ['Slate', 'sans-serif'],
            heading: ['Slate', 'sans-serif'],
        },
        aspectRatio: {
            '8/11' : '8.5 / 11'
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp')
    ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
        colors: {
            'latte': '#d5c9c9',
            'pale-yellow': '#ffffbf',
            'pale-brown': '#b39898',
            'med-brown': '#6b5b5b',
            'pink-main': '#ffbebe',
            'dark-pink': '#f38c8c',
            'light-pink': '#ffd9d9',
            'pink-white': '#ffecec',
            'ivory': '#fff6f6',
            'bright-orange': '#ff540a'
            // 'bright-orange': '#fd631a'
        },
        fontFamily: {
            'bubble': ['kimi-header', 'Bubblegum Sans']
        }
    },
  },
  plugins: [],
}


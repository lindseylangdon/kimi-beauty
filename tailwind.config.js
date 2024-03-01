/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
        colors: {
            'pale-brown': '#b39898',
            'med-brown': '#6b5b5b',
            'pink-main': '#ffbebe',
            'light-pink': '#ffd9d9',
            'pink-white': '#ffecec',
            'ivory': '#fff6f6',
            'bright-orange': '#fd631a'
        },
        fontFamily: {
            'bubble': ['kimi-header', 'Bubblegum Sans']
        }
    },
  },
  plugins: [],
}


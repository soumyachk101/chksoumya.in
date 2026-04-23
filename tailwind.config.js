/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#fdfbf7",
                foreground: "#2d2d2d",
                muted: "#e5e0d8",
                accent: "#ff4d4d",
                secondary: "#2d5da1",
                border: "#2d2d2d",
                paper: "#fdfbf7",
                pencil: "#2d2d2d",
                "post-it": "#fff9c4"
            },
            fontFamily: {
                sans: ['Patrick Hand', 'cursive'],
                heading: ['Kalam', 'cursive'],
            },
            boxShadow: {
                'hard': '4px 4px 0px 0px #2d2d2d',
                'hard-lg': '8px 8px 0px 0px #2d2d2d',
                'hard-sm': '2px 2px 0px 0px #2d2d2d',
                'hard-hover': '2px 2px 0px 0px #2d2d2d',
            },
            borderRadius: {
                'wobbly': '255px 15px 225px 15px / 15px 225px 15px 255px',
                'wobbly-md': '15px 255px 15px 225px / 255px 15px 225px 15px',
                'wobbly-sm': '225px 15px 255px 15px / 15px 255px 15px 225px',
            }
        },
    },
    plugins: [],
}

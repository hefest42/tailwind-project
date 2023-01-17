const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        //prettier-ignore
        screens: {
            "xs": "550px",
            "sm": "640px",
            "md": "768px",
            "lg": "1024px",
            "xl": "1280px",
            "2xl": "1536px",
        },
        colors: {
            "background-black": "#001219ff",
            "dark-blue": "#005f73ff",
            "light-blue": "#0a9396ff",
            "lightest-blue": "#94d2bdff",
            "medium-champagne": "#e9d8a6ff",
            "dark-yellow": "#ee9b00ff",
            "light-orange": "#ca6702ff",
            "dark-orange": "#bb3e03ff",
            "bright-red": "#ae2012ff",
            "dark-red": "#9b2226ff",
            "skeleton-dark": "rgb(51 65 85)",
            "skeleton-light": "rgb(100 116 139)",
        },
    },
    plugins: [],
};

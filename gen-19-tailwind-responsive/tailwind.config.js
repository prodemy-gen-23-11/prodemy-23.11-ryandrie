/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            colors: { gainsboro: "#dcdcdc" },
            fontFamily: {
                impact: "Impact,Haettenschweiler,Arial Narrow Bold,sans-serif",
                franklin:
                    "Franklin Gothic Medium, Arial Narrow, Arial,sans-serif",
                couriernew: "Courier New, Courier, monospace",
                poppins: "Poppins, sans-serif",
            },
        },
    },
    plugins: [],
};

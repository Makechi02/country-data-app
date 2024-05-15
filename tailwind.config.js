/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				light_gray: "hsl(0, 0%, 98%)",
				dark_gray: "hsl(0, 0%, 52%)",
				dark_blue: "hsl(200, 15%, 8%)"
			},
			fontFamily: {
				nunito_sans: ['var(--font-nunito-sans)'],
			},
			gridTemplateColumns: {
				countries_cols: "repeat(auto-fill, minmax(250px, 1fr))",
				border_cols: "repeat(auto-fill, minmax(100px, 1fr))"
			}
		},
	},
	plugins: [],
}
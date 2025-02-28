const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./templates/**/*.html", "./templates/**/*.twig", "./src/**/*.js"],
	theme: {
		container: {
			center: true,
		},
		colors: {
			black: "#000",
			pink: {
				200: "var(--pink-200)",
				400: "var(--pink-400)",
				800: "var(--pink-800)",
			},
			green: {
				400: "var(--green-400)",
			},
		},
		fontFamily: {
			sans: ["ranch-water", ...defaultTheme.fontFamily.sans],
			serif: ["montaga", ...defaultTheme.fontFamily.sans],
			display: ["rattlesnake", ...defaultTheme.fontFamily.sans],
		},
		extend: {
			maxWidth: {
				"9xl": "1536px",
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

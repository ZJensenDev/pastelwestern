module.exports = {
	content: ["./templates/**/*.html", "./templates/**/*.twig", "./src/**/*.js"],
	theme: {
		extend: {
			maxWidth: {
				"9xl": "1536px",
			},
			colors: {
				error: {
					DEFAULT: "#F72C25",
					dark: "#FE938C",
					"light-contrast": "#973321",
					"dark-contrast": "#FE938C",
					"light-hover": "#B61F1A",
					"dark-hover": "#F5B4AF",
				},
				success: {
					DEFAULT: "#337357",
					dark: "#D1F0B1",
					"dark-contrast": "#D1F0B1",
					"light-contrast": "#2C634C",
					"light-hover": "#215E44",
					"dark-hover": "#E0F3CD",
				},
				accent: {
					DEFAULT: "#EA8A1D",
					dark: "#EA8A1D",
					"dark-contrast": "#EA8A1D",
					"light-contrast": "#75430B",
					hover: "#D57405",
				},
				background: {
					DEFAULT: "#FEFEFA",
					dark: "#191919",
					"light-contrast": "#FFFFFF",
					"dark-contrast": "#000000",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
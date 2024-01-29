const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
		"./src/screens/public/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	darkMode: "class",
	plugins: [
		nextui({
			themes: {
				light: {
					colors: {
						background: "#E0F2F1",
						content1: {
							DEFAULT: "#F2F2F2",
						},
						content2: {
							DEFAULT: "#FF9843",
						},
						content3: {
							DEFAULT: "#dadada",
						},
						content4: {
							DEFAULT: "#0070f0",
						},
						foreground: {
							DEFAULT: "#394240",
							foreground: "#FFFFFF",
						},
						primary: {
							100: "#B2EBF2",
							200: "#80DEEA",
							300: "#4DD0E1",
							400: "#26C6DA",
							500: "#00BCD4",
							600: "#00ACC1",
							700: "#0097A7",
							800: "#00838F",
							900: "#006064",
						},
						secondary: {
							100: "#C8E6C9",
							200: "#A5D6A7",
							300: "#81C784",
							400: "#66BB6A",
							500: "#4CAF50",
							600: "#43A047",
							700: "#388E3C",
							800: "#2E7D32",
							900: "#1B5E20",
						},
						danger: {
							100: "#FFCDD2",
							200: "#EF9A9A",
							300: "#E57373",
							400: "#EF5350",
							500: "#F44336",
							600: "#E53935",
							700: "#D32F2F",
							800: "#C62828",
							900: "#B71C1C",
						},
					},
				},
			},
		}),
	],
};

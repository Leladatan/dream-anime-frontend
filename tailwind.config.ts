import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/views/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				zentry: ["zentry", "sans-serif"],
				general: ["general", "sans-serif"],
				"circular-web": ["circular-web", "sans-serif"],
				"robert-medium": ["robert-medium", "sans-serif"],
				"robert-regular": ["robert-regular", "sans-serif"],
			},
			colors: {
				blue: {
					50: "#DFDFf0",
					75: "#DFDFF2",
					100: "#F0F2FA",
					200: "#010101",
					300: "#4FB7DD",
				},
				violet: {
					300: "",
				},
				yellow: {
					100: "#8E983F",
					300: "#EDFF66",
				},
			},
		},
	},
	plugins: [],
} satisfies Config;

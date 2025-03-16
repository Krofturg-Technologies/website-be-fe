import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#00EAA3",
				secondary: "#001B42",
				grey: {
					"25": "#FCFCFD",
					"50": "#F9FAFB",
					"100": "#F2F4F7",
					"200": "#E4E7EC",
					"300": "#D0D5DD",
					"400": "#98A2B3",
					"500": "#667085",
					"600": "#475467",
					"700": "#344054",
					"800": "#1D2939",
					"900": "#101828",
				},
				status: {
					success: {
						"10": "#F3FEF3",
						"100": "#0D6211",
					},
					warning: {
						"10": "#FFF9EE",
						"100": "#FFA301",
					},
					error: {
						"10": "#FEE4E5",
						"100": "#D94143",
					},
					information: {
						"10": "#F2F8FF",
						"100": "#004FA9",
					},
				},
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "6rem",
				},
			},
			fontFamily: {
				Inter: ["var(--font-inter)"],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

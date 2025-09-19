import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		useCache: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.ctfassets.net",
			},
		],
	},
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{
						key: "X-Frame-Options",
						value: "DENY", // Prevents clickjacking
					},
					{
						key: "Content-Security-Policy",
						value: "frame-ancestors 'none';", // Sets CSP
					},
					{
						key: "Strict-Transport-Security",
						value: "max-age=63072000; includeSubDomains; preload", // Enables HSTS
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff", // Prevents MIME type sniffing
					},
				],
			},
		];
	},
	/* config options here */
	webpack(config) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule: any) =>
			rule.test?.test?.(".svg")
		);

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				resourceQuery: { not: /url/ }, // exclude if *.svg?url
				use: ["@svgr/webpack"],
			}
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
};

export default nextConfig;

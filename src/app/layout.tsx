import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { cn } from "@/lib/utils";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import { ViewTransitions } from "next-view-transitions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProviderWrapper from "@/store/provider-wrapper";
import CookiesBanner from "@/components/global/cookies-banner";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Krofturg | Navigating security risks with confidence",
		template: "Krofturg | %s",
	},
	description:
		"Krofturg Technologies specializes in helping businesses navigate security risks with confidence.",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://krofturg.com",
		title: "Krofturg",
		description:
			"Krofturg Technologies specializes in helping businesses navigate security risks with confidence.",
		images: [
			{
				url: "https://krofturg-website.vercel.app/assets/images/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Krofturg",
			},
		],
		siteName: "Krofturg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ViewTransitions>
			<html lang='en'>
				<body className={cn(inter.variable, "antialiased")}>
					<ProviderWrapper>
						<ToastContainer closeButton={false} position='bottom-center' />
						<Navigation />
						<main className='pt-16 xl:pt-[140px]'>{children}</main>
						<CookiesBanner />
						<Footer />
					</ProviderWrapper>
				</body>
			</html>
		</ViewTransitions>
	);
}

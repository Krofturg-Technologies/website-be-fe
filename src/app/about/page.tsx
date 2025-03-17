import AboutHero from "@/components/about/about-hero";
import OurTeam from "@/components/about/our-team";
import VisionValues from "@/components/about/vision-values";
import { Metadata } from "next";

const AboutPage = () => {
	return (
		<>
			<AboutHero />
			{/* <Partners /> */}
			<VisionValues />
			<OurTeam />
			{/* <Testimonials /> */}
		</>
	);
};

export default AboutPage;

export const metadata: Metadata = {
	title: "About Us",
};

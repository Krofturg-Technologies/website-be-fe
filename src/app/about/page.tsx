import AboutHero from "@/components/about/about-hero";
import OurTeam from "@/components/about/our-team";
import VisionValues from "@/components/about/vision-values";
import Partners from "@/components/home/partners";
import Testimonials from "@/components/home/testimonials";

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

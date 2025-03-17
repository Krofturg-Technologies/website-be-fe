import ServicesHero from "@/components/services/services-hero";
import ServicesList from "@/components/services/services-list";
import { Metadata } from "next";

const ServicesPage = () => {
	return (
		<>
			<ServicesHero />
			<ServicesList />
		</>
	);
};

export default ServicesPage;

export const metadata: Metadata = {
	title: "Services",
};

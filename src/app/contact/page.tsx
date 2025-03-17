import ContactHero from "@/components/contact/contact-hero";
import Map from "@/components/contact/map";
import { Metadata } from "next";

const ContactPage = () => {
	return (
		<>
			<ContactHero />
			<Map />
		</>
	);
};

export default ContactPage;

export const metadata: Metadata = {
	title: "Contact Us",
};

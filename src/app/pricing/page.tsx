import FAQSection from "@/components/faq/faq-section";
import Pricing from "@/components/pricing";
import FeatureCategory from "@/components/pricing/feature-category";
import { FAQResponse } from "../faq/page";
import { client } from "../../../contentful/client";
import { Metadata } from "next";

const PricingPage = async () => {
	const response: FAQResponse = await client.getEntries({
		content_type: "faq",
	});

	return (
		<>
			<Pricing />
			{/* <FeatureCategory /> */}
			<FAQSection faqs={response} />
		</>
	);
};

export default PricingPage;

export const metadata: Metadata = {
	title: "Pricing",
};

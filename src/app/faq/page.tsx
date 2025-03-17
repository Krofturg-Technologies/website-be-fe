import FAQSection from "@/components/faq/faq-section";
import GetToKnowUs from "@/components/faq/faq-section/get-to-know-us";
import { client } from "../../../contentful/client";
import { Document } from "@contentful/rich-text-types";
import { Metadata } from "next";

export type FAQResponse = {
	items: {
		fields: {
			question: string;
			answer: Document;
		};
		metadata: {
			tags: {
				sys: {
					id: string;
				};
			}[];
		};
	}[];
	total: number;
};

const FAQPage = async () => {
	const response: FAQResponse = await client.getEntries({
		content_type: "faq",
	});

	return (
		<>
			<FAQSection faqs={response} />
			<GetToKnowUs />
		</>
	);
};

export default FAQPage;

export const metadata: Metadata = {
	title: "FAQS",
};

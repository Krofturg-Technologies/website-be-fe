import HaveQuestions from "@/components/faq/have-questions";
import WebinarsBlock, {
	Webinar,
} from "@/components/resources/webinars/webinars-block";
import WebinarsHero from "@/components/resources/webinars/webinars-hero";
import { client } from "../../../../contentful/client";
import { Metadata } from "next";

export type WebinarResponse = {
	items: {
		fields: Webinar;
	}[];
};

const WebinarsPage = async () => {
	const response: WebinarResponse = await client?.getEntries({
		content_type: "webinar",
	});

	return (
		<>
			<WebinarsHero />
			<WebinarsBlock webinars={response.items} />
			<section className='mb-8 xl:mb-16'>
				<div className='container'>
					<HaveQuestions />
				</div>
			</section>
		</>
	);
};

export default WebinarsPage;

export const metadata: Metadata = {
	title: "Resources | Webinars",
};

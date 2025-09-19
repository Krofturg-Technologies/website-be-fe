"use cache";

import CaseStudiesHero from "@/components/resources/case-studies/case-studies-hero";
import { client } from "../../../../contentful/client";
import CaseStudiesBlock, {
	CaseStudies,
} from "@/components/resources/case-studies/case-studies-block";
import { Metadata } from "next";
import { cacheLife } from "next/dist/server/use-cache/cache-life";

export type WebinarResponse = {
	items: {
		fields: CaseStudies;
	}[];
};

const CaseStudiesPage = async () => {
	const response: WebinarResponse = await client?.getEntries({
		content_type: "caseStudies",
	});

	cacheLife("minutes");

	return (
		<>
			<CaseStudiesHero />
			<CaseStudiesBlock caseStudies={response.items} />
		</>
	);
};

export default CaseStudiesPage;

export const metadata: Metadata = {
	title: "Resources | Case Studies",
};

import CaseStudiesHero from "@/components/resources/case-studies/case-studies-hero";
import { client } from "../../../../contentful/client";
import CaseStudiesBlock, {
	CaseStudies,
} from "@/components/resources/case-studies/case-studies-block";

export type WebinarResponse = {
	items: {
		fields: CaseStudies;
	}[];
};

const CaseStudiesPage = async () => {
	const response: WebinarResponse = await client?.getEntries({
		content_type: "caseStudies",
	});

	return (
		<>
			<CaseStudiesHero />
			<CaseStudiesBlock caseStudies={response.items} />
		</>
	);
};

export default CaseStudiesPage;

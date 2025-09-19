"use cache";

import { client } from "../../../../contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { cacheLife } from "next/dist/server/use-cache/cache-life";

export type LegalResponse = {
	items: {
		fields: {
			body: Document;
		};
	}[];
};

const LegalContent = async ({ id }: { id: string }) => {
	const response: LegalResponse = await client.getEntries({
		content_type: id,
	});

	const options = {};

	cacheLife("minutes");

	return (
		<article className='w-fit mt-8 xl:mt-16'>
			<div className='prose'>
				{documentToReactComponents(response.items[0].fields.body, options)}
			</div>
		</article>
	);
};

export default LegalContent;

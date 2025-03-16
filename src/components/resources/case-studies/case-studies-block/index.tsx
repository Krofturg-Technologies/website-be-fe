"use client";

import Button from "@/components/global/button";
import { format } from "date-fns/format";
import Image from "next/image";

export type CaseStudies = {
	title: string;
	description: string;
	date: string;
	document: {
		fields: {
			file: {
				url: string;
			};
			title: string;
		};
	};
	image: {
		fields: {
			file: {
				url: string;
			};
			title: string;
		};
	};
};

const CaseStudiesBlock = ({
	caseStudies,
}: {
	caseStudies: {
		fields: CaseStudies;
	}[];
}) => {
	const handleDownload = (url: string) => {
		const link = document.createElement("a");
		link.href = url;
		link.target = "_blank";
		link.download = url.split("/").pop() || "document";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<section className='pb-8 xl:pb-16'>
			<div className='container'>
				<div className='grid xl:grid-cols-3 gap-5 mt-5 xl:mt-10'>
					{caseStudies.map((item, index) => {
						const { title, description, date, image, document } = item.fields;
						return (
							<article
								key={title + index}
								className='rounded-2xl overflow-hidden bg-[#F9FAFB] shadow'>
								<div>
									<Image
										width={488}
										height={224}
										src={"https:" + image.fields.file.url}
										alt=''
										className='w-full rounded-t-2xl'
									/>
								</div>
								<div className='p-3 xl:p-5 h-full space-y-3 xl:space-y-4'>
									<div className='space-y-3 xl:space-y-4'>
										<div className='flex items-center space-x-2'>
											<div className='bg-gray-200 px-2 py-1 rounded-[10px] uppercase font-medium text-sm text-gray-900'>
												Case Studies
											</div>
											<div className='text-sm text-gray-900'>
												{format(new Date(date), "dd MMMM, yyyy")}
											</div>
										</div>
										<h3 className='font-semibold text-xl xl:text-2xl text-gray-900'>
											{title}
										</h3>
										<div className='text-sm flex-1 text-gray-600 line-clamp-3'>
											{description}
										</div>
										<Button
											onClick={() =>
												handleDownload("https:" + document.fields.file.url)
											}
											theme='outline'
											className='w-full'>
											Get Document
										</Button>
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default CaseStudiesBlock;

"use client";

import { format } from "date-fns/format";

export type Webinar = {
	title: string;
	description: string;
	date: string;
	url: string;
};

const WebinarsBlock = ({
	webinars,
}: {
	webinars: {
		fields: Webinar;
	}[];
}) => {
	return (
		<section className='pt-8 xl:pt-16'>
			<div className='container'>
				<h2 className='text-xl xl:text-4xl font-semibold text-grey-900'>
					Previous Events
				</h2>

				<div className='grid xl:grid-cols-3 gap-5 mt-5 xl:mt-10'>
					{webinars.map((item, index) => {
						const { title, description, date, url } = item.fields;
						return (
							<article
								key={title + index}
								className='rounded-2xl overflow-hidden bg-[#F9FAFB] shadow'>
								<div>
									<iframe
										className='w-full aspect-video'
										src={url}
										title='YouTube video player'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
										referrerPolicy='strict-origin-when-cross-origin'
										allowFullScreen></iframe>
								</div>
								<div className='p-3 xl:p-5 flex flex-col h-full space-y-3 xl:space-y-4 relative'>
									<div className='space-y-3 xl:space-y-4'>
										<div className='flex items-center space-x-2'>
											<div className='bg-gray-200 px-2 py-1 rounded-[10px] uppercase font-medium text-sm text-gray-900'>
												Webinar
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

export default WebinarsBlock;

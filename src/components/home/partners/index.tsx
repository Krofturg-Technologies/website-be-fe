"use client";

import Icons from "@/components/icons";
import Marquee from "react-fast-marquee";

const Partners = () => {
	const partners = [
		<img
			src='/assets/icons/png/trello.png'
			className='w-[70px] h-6 xl:w-[125px] xl:h-9'
		/>,
		<img
			src='/assets/icons/png/jira.png'
			className='w-16 h-6 xl:w-[88px] xl:h-9'
		/>,
		<img
			src='/assets/icons/png/slack.png'
			className='w-[82px] h-6 xl:w-[123px] xl:h-9'
		/>,
		<img
			src='/assets/icons/png/notion.png'
			className='w-16 h-6 xl:w-[99px] xl:h-9'
		/>,
		<img
			src='/assets/icons/png/airtable.png'
			className='w-[90px] h-6 xl:w-[163px] xl:h-9'
		/>,
		<img
			src='/assets/icons/png/asana.png'
			className='w-[100px] h-6 xl:w-[180px] xl:h-9'
		/>,
	];

	return (
		<section>
			<div className='container py-8 xl:py-16 xl:border-b xl:border-grey-200'>
				<h2 className='text-center text-lg font-medium'>
					Trusted by <span className='text-primary'>thousands</span> of security
					teams across the globe
				</h2>
				<div className='border hidden xl:block mt-6 border-grey-200 rounded-[30px] px-12 py-11'>
					<Marquee autoFill>
						{partners.map((partner, index) => {
							return (
								<div className='mx-8' key={index}>
									{partner}
								</div>
							);
						})}
					</Marquee>
				</div>
				<div className='mt-8 grid grid-cols-3 xl:hidden items-center justify-center flex-wrap gap-x-5 gap-y-4'>
					{partners.map((partner, index) => {
						return (
							<div className='flex justify-center items-center' key={index}>
								{partner}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Partners;

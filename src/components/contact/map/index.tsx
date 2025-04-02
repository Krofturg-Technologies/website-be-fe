"use client";

import Icons from "@/components/icons";
import Image from "next/image";

const Map = () => {
	const list = [
		{
			title: "Support",
			description: "Our friendly team is here to help.",
			href: "mailto:info@krofturg.com",
			icon: <Icons.SupportIcon />,
		},
		{
			title: "Sales",
			description: "Questions or queries? Get in touch!",
			href: "mailto:sales@krofturg.com",
			icon: <Icons.SalesIcon />,
		},
		{
			title: "Phone",
			description: "Mon-Fri from 8am to 5pm.",
			href: "tel:+37258972732",
			icon: <Icons.PhoneIcon />,
		},
	];
	return (
		<section>
			<div className='container'>
				<div className='hidden xl:block'>
					<div className='text-center py-16'>
						<div className='text-sm xl:text-base font-semibold text-primary'>
							Contact us
						</div>
						<h1 className='text-3xl xl:text-4xl font-semibold mt-3 text-grey-900'>
							We’d love to hear from you
						</h1>
						<p className='text-base mt-4 xl:mt-5'>
							We have offices and teams all around the world.
						</p>
					</div>
					<div className='py-16'>
						<Image
							width={1216}
							height={488}
							alt=''
							src='/assets/images/map.png'
							className='w-full'
						/>
					</div>
				</div>
			</div>
			<div className='bg-[#E8FFF8] py-10 xl:py-20'>
				<div className='container grid xl:grid-cols-3 gap-y-10 xl:gap-x-20'>
					{list.map((item, index) => {
						return (
							<div
								key={index}
								className='flex flex-col justify-center items-center text-center'>
								{item.icon}
								<h3 className='mb-2 mt-4 text-[#001B42] font-semibold text-xl'>
									{item.title}
								</h3>
								<p className='text-grey-600 mb-4'>{item.description}</p>
								<a
									href={item.href}
									target='_blank'
									className='text-[#001B42] font-medium'>
									{item.href.split(":")[1]}
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Map;

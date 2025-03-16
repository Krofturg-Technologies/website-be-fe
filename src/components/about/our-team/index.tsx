"use client";

import Icons from "@/components/icons";
import Image from "next/image";

const OurTeam = () => {
	const list = [
		"Industry-Leading Expertise – Our team brings years of experience in risk management, incident response training, and vendor lifecycle management, ensuring your organization stays protected against cyber threats.",
		"Collaborative & Client-Focused – We work closely with businesses to develop custom security solutions tailored to their unique challenges, providing hands-on support every step of the way.",
		"Innovation-Driven – Our cutting-edge Vendor Lifecycle Management (VLM) tool empowers organizations to effectively manage vendors, assess security risks, and minimize their attack surface.",
	];

	return (
		<section id='team' className='py-10 xl:py-16'>
			<div className='container grid xl:grid-cols-2 xl:gap-x-10 items-center'>
				<Image
					width={656}
					height={501}
					alt=''
					src='/assets/images/our-team-image.webp'
					className='w-full rounded-[20px]'
				/>
				<div>
					<h1 className='text-3xl xl:text-4xl font-semibold mt-3 text-grey-900'>
						Our Team
					</h1>
					<p className='text-base mt-4 xl:mt-6'>
						We are a team of dedicated cybersecurity experts committed to
						helping businesses stay secure in an ever-evolving digital
						landscape.
					</p>
					<ul className='mt-4 xl:mt-14 space-y-4'>
						{list.map((item, index) => {
							return (
								<li key={index} className='flex space-x-3 xl:space-x-6'>
									<Icons.CubeIcon />
									<p className='w-[calc(100%-24px)]'>{item}</p>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default OurTeam;

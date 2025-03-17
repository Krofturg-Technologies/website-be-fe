"use client";

import Button from "@/components/global/button";
import Icons from "@/components/icons";
import { Link } from "next-view-transitions";
import Image from "next/image";

const ServicesHero = () => {
	const list = [
		"Stay ahead of evolving threats with our cutting-edge risk management strategies.",
		"Enhance operational resilience with our expert-driven security assessments.",
	];

	return (
		<section className='py-10 xl:py-16'>
			<div className='container grid xl:grid-cols-2 gap-x-20'>
				<div>
					<div className='text-sm xl:text-base text-grey-400'>Services</div>
					<h1 className='text-3xl xl:text-4xl font-semibold mt-3 text-grey-900'>
						Take your Technical capabilities to new heights.
					</h1>
					<Image
						width={662}
						height={500}
						alt=''
						src='/assets/images/services-hero-image.webp'
						className='w-full xl:hidden mt-4'
					/>
					<p className='text-base mt-4 xl:mt-6'>
						At Krofturg Technologies, we empower organizations to secure their
						digital environments with tailored, reliable, and innovative
						solutions. Whether you're looking to strengthen your defenses,
						assess risks, or ensure compliance, we provide comprehensive
						cybersecurity services designed to protect what matters most.
					</p>
					<p className='text-base mt-4 xl:mt-6'>Need assistance?</p>
					<ul className='mt-4 space-y-4'>
						{list.map((item, index) => {
							return (
								<li key={index} className='flex space-x-3 xl:space-x-6'>
									<Icons.CubeIcon />
									<p className='w-[calc(100%-24px)]'>{item}</p>
								</li>
							);
						})}
					</ul>
					<div className='xl:flex items-center mt-10 max-xl:space-y-3 xl:space-x-3'>
						<Link href='/contact' passHref className='block'>
							<Button className='max-xl:w-full'>Contact us</Button>
						</Link>
						<Link
							href='/services/request-a-service-quote'
							passHref
							className='block'>
							<Button className='max-xl:w-full' theme='outline'>
								Request a Quote
							</Button>
						</Link>
					</div>
				</div>
				<Image
					width={662}
					height={500}
					alt=''
					src='/assets/images/services-hero-image.webp'
					className='w-full hidden xl:block'
				/>
			</div>
		</section>
	);
};

export default ServicesHero;

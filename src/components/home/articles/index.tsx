"use client";

import Button from "@/components/global/button";
import Icons from "@/components/icons";
import { Link } from "next-view-transitions";
import Image from "next/image";

const Articles = () => {
	const articles = [
		{
			title: "Cybersecurity Knowledge",
			description:
				"Stay informed with the latest cybersecurity trends, best practices, and expert insights. Our resources provide valuable knowledge to help you stay ahead of evolving threats.",
			image: "/assets/images/article-1.jpg",
			icon: <Icons.CyberSecurityIcon />,
			href: "/resources/blog",
		},
		{
			title: "Webinars/Live Demos",
			description:
				"Join our live sessions and webinars to see our cybersecurity solutions in action. Get a firsthand look at how we help organizations strengthen their security posture.",
			image: "/assets/images/article-1.jpg",
			icon: <Icons.WebinarsIcon />,
			href: "/resources/webinars",
		},
		{
			title: "Case Studies",
			description:
				"Explore real-world examples of how our services have helped businesses achieve stronger security and better risk management.",
			image: "/assets/images/article-1.jpg",
			icon: <Icons.CaseStudiesIcon />,
			href: "/resources/case-studies",
		},
	];

	return (
		<section className='py-10 xl:py-16'>
			<div className='container'>
				<div className='text-center'>
					<h2 className='text-3xl xl:text-4xl text-grey-900 font-semibold'>
						An Innovative way to do your Vendor Lifecycle Management
					</h2>
					<p className='mt-6'>
						Seamlessly manage your vendors from onboarding to offboarding,
						ensuring security and compliance at every stage.
					</p>
					<div className='mt-10 hidden xl:flex justify-center'>
						<Image
							width={821}
							height={561}
							alt=''
							src='/assets/images/articles-image.webp'
						/>
					</div>
				</div>
				<div className='grid xl:grid-cols-3 gap-y-5 xl:gap-10 mt-16'>
					{articles.map((article, index) => (
						<Link href={article.href} passHref key={index} className='block'>
							<div
								key={index}
								className='bg-[#F5F8FC] overflow-hidden p-2.5 rounded-2xl'>
								<div className='p-2.5 xl:p-5 bg-white rounded-lg'>
									<div className='flex items-center justify-between w-full'>
										{article.icon}
										<span>
											<Icons.ArrowIcon />
										</span>
									</div>
									<div className='mt-3'>
										<h3 className='text-base xl:text-2xl text-grey-900 font-semibold'>
											{article.title}
										</h3>
										<p className='mt-4 text-sm xl:text-base text-grey-600'>
											{article.description}
										</p>
									</div>
								</div>
								<div className='mt-5 relative h-[165px] ml-5'>
									<div className='overflow-hidden w-[96%] rounded-[14px] absolute h-[120px] z-20'>
										<Image
											width={800}
											height={533}
											alt=''
											src={article.image}
											className='transition-all hover:scale-[1.2] w-[96%] absolute h-[120px] z-20'
										/>
									</div>
									<div className='rounded-[14px] border z-10 border-[#B9C8DE] top-4 left-4 absolute bg-[#DCFFF5] w-[96%] h-[120px]'></div>
									<div className='rounded-[14px] border border-[#B9C8DE] top-8 left-8 absolute w-[96%] h-[120px]'></div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default Articles;

"use client";

import Button from "@/components/global/button";
import Icons from "@/components/icons";
import { useHash } from "@/hooks/use-hash";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Footer = () => {
	const pathname = usePathname();

	const hash = useHash();

	const list = [
		{
			title: "About",
			items: [
				{ name: "Our story", href: "/about#about" },
				{ name: "Team", href: "/about#team" },
				{ name: "Values", href: "/about#values" },
			],
		},
		{
			title: "Product",
			items: [
				{
					name: "Vendor lifecycle management tool",
					href: "/products/vendor-lifecycle-management-tool",
				},
				{
					name: "Security Questionnaires",
					href: "/products/security-questionnaires",
				},
			],
		},
		{
			title: "Services",
			items: [
				{
					name: "ISO 27001 Services",
					href: "/services#iso-27001",
				},
				{
					name: "Vulnerability assessment",
					href: "/services#vulnerability-assessment",
				},
				{
					name: "Cyber breach simulations",
					href: "/services#cyber-breach-simulations",
				},
				{ name: "Security assesments", href: "/services#security-assessments" },
				{ name: "Cyber strategy", href: "/services#cyber-strategy" },
			],
		},
		{
			title: "Support",
			items: [
				{ name: "FAQs", href: "/faq" },
				{ name: "Contact us", href: "/contact" },
			],
		},
		{
			title: "Legal",
			items: [
				{ name: "Privacy Policy", href: "/legal/privacy-policy" },
				{ name: "Terms & Conditions", href: "/legal/terms-and-conditions" },
			],
		},
	];

	const socialLinks = [
		{
			title: "LinkedIn",
			icon: <Icons.LinkedInIcon />,
			href: "https://www.linkedin.com/company/krofturg-technologies/",
		},
		{
			title: "Instagram",
			icon: <Icons.InstagramIcon />,
			href: "https://www.instagram.com/krofturg/",
		},
		{
			title: "X",
			icon: <Icons.XIcon />,
			href: "https://x.com/krofturg",
		},
	];

	return (
		<footer className='py-10 xl:py-16 bg-[#001B42]'>
			<div className='container'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl font-semibold text-white'>
						Join <span className='text-primary'>businesses</span> already
						growing with Krofturg
					</h2>
					<p className='mt-4 text-grey-400'>
						Experience the power of our innovative solutions and take your
						business to the next level. Join us today!
					</p>
					<div className='mt-10 flex justify-center'>
						<Link href='/contact' className='max-xl:w-full'>
							<Button className='max-xl:w-full'>Get started today</Button>
						</Link>
					</div>
				</div>
				<div className='grid grid-cols-2 xl:grid-cols-5 xl:pt-10 gap-6'>
					{list.map((item) => {
						return (
							<div key={item.title}>
								<div className='text-white font-semibold'>{item.title}</div>
								<ul className='mt-3 space-y-3'>
									{item.items.map((link) => {
										return (
											<li key={link.name}>
												<Link
													className={cn(
														"text-xs hover:text-grey-200 transition-all text-gray-400",
														{
															"text-primary font-medium": (
																pathname + hash || ""
															).includes(link.href),
														}
													)}
													href={link.href}>
													{link.name}
												</Link>
											</li>
										);
									})}
								</ul>
							</div>
						);
					})}
				</div>
				<div className='mt-10 max-xl:border-t-2 max-xl:border-white max-xl:pt-7 xl:pb-7 xl:border-b border-[#2E3144] max-xl:space-y-6 xl:flex items-center justify-between'>
					<Icons.LogoWhiteIcon className='w-[160px] h-10' />
					<ul className='flex items-center space-x-4'>
						{socialLinks.map((link) => {
							return (
								<li key={link.title}>
									<a href={link.href} target='_blank'>
										{link.icon}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				<div className='text-xs text-grey-400 max-xl:space-y-6 xl:flex pt-7 justify-between space-x-0'>
					<div>
						<span className='text-white font-semibold'>
							Krofturg Technologies
						</span>{" "}
						specializes in helping businesses navigate security risks with
						confidence.
					</div>
					<div>
						Copyright ©️ 2024 Krofturg Technologies. All Rights Reserved
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

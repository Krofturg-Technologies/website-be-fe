"use client";

import Button from "@/components/global/button";
import Icons from "@/components/icons";
import { AnimatePresence } from "framer-motion";
import MobileNavigation from "../mobile-navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import NavigationLink from "../navigation-link";
import { Squash as Hamburger } from "hamburger-react";

export type NavigationLinkType = {
	label: string;
	href?: string;
	description?: string;
	icon?: React.ReactNode;
	children?: NavigationLinkType[];
};

const Navigation = () => {
	const [showMobileNav, setShowMobileNav] = useState(false);

	const links: NavigationLinkType[] = [
		{ href: "/about", label: "About Us" },
		{
			label: "Products",
			href: "/products",
			children: [
				{
					label: "Vendor Lifecycle Management Tool",
					description: "Manage your vendors with ease",
					href: "/products/vendor-lifecycle-management-tool",
					icon: <Icons.PeopleIcon />,
				},
				{
					label: "Security Questionnaire",
					description: "Automate your vendor risk assessments",
					href: "/products/security-questionnaires",
					icon: <Icons.ChatIcon />,
				},
			],
		},
		{ href: "/services", label: "Services" },
		{ href: "/pricing", label: "Pricing" },
		{
			label: "Resources",
			href: "/resources",
			children: [
				{
					label: "Blog",
					description: "Read our latest articles",
					href: "/resources/blog",
					icon: <Icons.BookIcon />,
				},
				{
					label: "Webinars",
					description: "Join our upcoming webinars",
					href: "/resources/webinars",
					icon: <Icons.PlayIcon className='stroke-primary' />,
				},
				{
					label: "Case Studies",
					description: "Read our customer success stories",
					href: "/resources/case-studies",
					icon: <Icons.FileIcon />,
				},
			],
		},
		{ href: "/faq", label: "FAQ" },
		{ href: "/contact", label: "Contact Us" },
	];

	const topLinks: NavigationLinkType[] = [
		{ href: "/login", label: "Login" },
		{ href: "/contact", label: "Support" },
		{ href: "/get-a-demo", label: "Get a Demo" },
	];

	return (
		<div className='relative'>
			<nav
				className={cn(
					"w-full bg-white fixed z-50 transition-all border-b border-secondary/20 duration-500",
					{}
				)}>
				<div className='bg-grey-100 hidden xl:block'>
					<ul className='flex container justify-end items-center space-x-7 py-2'>
						{topLinks.map((link) => {
							return (
								<li key={link.label} className='flex items-center justify-end'>
									<Link
										href={link.href!}
										className='text-sm font-medium text-secondary'>
										{link.label}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div className='container py-4 xl:py-8 flex items-center justify-between'>
					<Link href='/'>
						<Icons.LogoIcon className='w-32 xl:w-[140px] h-8 xl:h-9' />
					</Link>
					<ul className='hidden xl:flex items-center space-x-9'>
						{links.map((link) => (
							<NavigationLink key={link.label + "desktop"} link={link} />
						))}
					</ul>
					<div className='hidden xl:flex items-center space-x-3'>
						<Link href='/free-trial' passHref>
							<Button theme='outline'>Free Trial</Button>
						</Link>
						<Link href='/marketplace' passHref>
							<Button>Join Marketplace</Button>
						</Link>
					</div>
					<div className='xl:hidden'>
						<Hamburger
							size={24}
							color='#667085'
							toggled={showMobileNav}
							toggle={setShowMobileNav}
						/>
					</div>
				</div>
			</nav>
			<AnimatePresence initial={false}>
				{showMobileNav && (
					<MobileNavigation
						setShowMobileNav={setShowMobileNav}
						showMobileNav={showMobileNav}
						links={links}
					/>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Navigation;

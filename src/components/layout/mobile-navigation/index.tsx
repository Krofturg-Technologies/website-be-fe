"use client";

import Icons from "@/components/icons";
import { motion } from "framer-motion";
import { NavigationLinkType } from "../navigation";
import Button from "@/components/global/button";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import NavigationLink from "../navigation-link";

type Props = {
	showMobileNav: boolean;
	setShowMobileNav: (value: boolean) => void;
	links: NavigationLinkType[];
};

const MobileNavigation = ({ setShowMobileNav, links }: Props) => {
	return (
		<motion.nav
			initial={{ x: "100%", opacity: 0 }}
			animate={{ x: 0, opacity: 1, transition: { type: "just" } }}
			exit={{ x: 100, opacity: 0, transition: { type: "just", delay: 0.1 } }}
			className='bg-white overflow-auto border-t border-secondary/20 flex flex-col justify-between space-y-8 py-5 h-[calc(100svh-80px)] w-[calc(100%-0px)] z-50 fixed top-20 right-0'>
			<div className='h-full justify-between flex flex-col'>
				<div className='container flex flex-col justify-between'>
					<ul className='mt-4'>
						{links.map((link, index) => {
							return (
								<NavigationLink
									key={link.label + "mobile" + index}
									link={link}
									onClick={() => setShowMobileNav(false)}
								/>
							);
						})}
					</ul>
				</div>
				<div className='container border-t border-secondary/20'>
					<div className='mt-6 mb-10 flex flex-col space-y-3'>
						<a
							onClick={() => setShowMobileNav(false)}
							href=''
							className='text-base text-[#667085]'>
							Login
						</a>
						<Link
							onClick={() => setShowMobileNav(false)}
							href='/contact'
							className='text-base text-[#667085]'>
							Support
						</Link>
						<Link
							onClick={() => setShowMobileNav(false)}
							href='/get-a-demo'
							className='text-base text-[#667085]'>
							Get a Demo
						</Link>
					</div>
					<div className='space-y-3 pb-4'>
						<Link
							onClick={() => setShowMobileNav(false)}
							href='/marketplace'
							className='block'
							passHref>
							<Button className='w-full'>Join Marketplace</Button>
						</Link>
						<Link
							onClick={() => setShowMobileNav(false)}
							href='/free-trial'
							className='block'
							passHref>
							<Button className='w-full border border-gray-900 bg-white'>
								Free Trial
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default MobileNavigation;

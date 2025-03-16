import Icons from "@/components/icons";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NavigationLinkType } from "../navigation";
import { usePathname } from "next/navigation";

type NavigationLinkProps = {
	link: NavigationLinkType;
	onClick?: () => void;
};

const SubNavigationLink = ({
	link,
	onClick,
}: {
	link: NavigationLinkType;
	onClick?: () => void;
}) => {
	const pathname = usePathname();

	const isActive = link.href && pathname.includes(link.href);

	return (
		<motion.div
			initial={{ x: 100, opacity: 0.5 }}
			animate={{
				x: 0,
				opacity: 1,
				transition: { delay: 0.1 },
			}}
			exit={{
				x: 100,
				opacity: 0,
				transition: { delay: 0.1 },
			}}
			key={link.label}>
			<Link
				onClick={onClick}
				href={link.href!}
				className='group flex items-center space-x-4'>
				<div className='size-12 bg-[#E8FFF8] rounded-full flex items-center justify-center'>
					{link.icon}
				</div>
				<div>
					<h6
						className={cn(
							"group-hover:text-[#00A271] text-secondary font-medium transition-all w-fit rounded",
							{
								"text-[#00A271]": isActive,
							}
						)}>
						{link.label}
					</h6>
					<p
						className={cn("group-hover:text-[#00A271] text-sm", {
							"text-[#00A271]/70": isActive,
						})}>
						{link.description}
					</p>
				</div>
			</Link>
		</motion.div>
	);
};

const NavigationLink = ({ link, onClick }: NavigationLinkProps) => {
	const [showDropdown, setShowDropdown] = useState(false);

	const pathname = usePathname();

	const isActive = link.href && pathname.includes(link.href);

	if (link.children) {
		return (
			<>
				<li
					className='hidden xl:block'
					onMouseEnter={() => setShowDropdown(true)}
					onMouseLeave={() => setShowDropdown(false)}>
					<div
						className={cn(
							"font-medium flex h-[18px] relative items-center space-x-1 text-sm text-grey-500",
							{
								"active-link font-semibold": isActive,
							}
						)}>
						<span>{link.label}</span>
						<div
							className={cn("transition-all", {
								"rotate-180": showDropdown,
							})}>
							<Icons.CaretIcon />
						</div>
					</div>
					<AnimatePresence initial={false}>
						{showDropdown && (
							<motion.div
								initial={{ y: 30, opacity: 0.5 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: 30, opacity: 0, transition: { delay: 0.1 } }}
								className='w-screen bg-white absolute text-left left-0 top-[145px] drop-shadow-md'>
								<div className='w-full'>
									<div
										className={cn("grid py-8 container gap-x-10 gap-y-8", {
											"grid-cols-2": link.children?.length === 2,
											"grid-cols-3": link.children!?.length > 2,
										})}>
										{link.children?.map((link) => {
											return <SubNavigationLink key={link.label} link={link} />;
										})}
									</div>
									<div className='py-7 text-center bg-[#E8FFF8]'>
										<p className='font-medium text-[#001B42]'>
											Ready to get started?{" "}
											<Link href='/contact' className='text-primary'>
												Sign up for free
											</Link>
										</p>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</li>
				<li
					className='py-3 xl:hidden'
					onClick={() => setShowDropdown((state) => !state)}>
					<div className='flex items-center justify-between'>
						<span
							className={cn("text-grey-900", {
								"text-primary": isActive,
							})}>
							{link.label}
						</span>
						<div
							className={cn("transition-all", {
								"rotate-180": showDropdown,
							})}>
							<Icons.CaretIcon />
						</div>
					</div>
					<div
						className={cn(
							"h-0 overflow-hidden space-y-2.5 transition-all duration-300 ease-in-out",
							{
								"py-4": showDropdown,
								"h-[130px]": showDropdown && link.children?.length === 2,
								"h-[195px]": showDropdown && link.children?.length === 3,
								"h-[260px]": showDropdown && link.children?.length === 4,
							}
						)}>
						{link.children?.map((link) => {
							return (
								<SubNavigationLink
									key={link.label + "mobile"}
									link={link}
									onClick={onClick}
								/>
							);
						})}
					</div>
				</li>
			</>
		);
	}

	return (
		<>
			<li className='hidden xl:block'>
				<Link
					href={link.href!}
					className={cn("font-medium relative text-sm text-grey-500", {
						"active-link font-semibold": isActive,
					})}>
					{link.label}
				</Link>
			</li>
			<li className='py-3 xl:hidden'>
				<Link
					onClick={onClick}
					href={link.href!}
					passHref
					className={cn("text-grey-900", {
						"text-primary": isActive,
					})}>
					{link.label}
				</Link>
			</li>
		</>
	);
};

export default NavigationLink;

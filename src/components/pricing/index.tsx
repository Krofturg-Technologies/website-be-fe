"use client";

import { cn } from "@/lib/utils";
import Icons from "../icons";
import Button from "../global/button";
import { Link } from "next-view-transitions";

export const pricing = [
	{
		title: "Free Trial",
		description:
			"Try the Vendor Lifecycle and Risk Management (VLRM) tool for free.",
		benefitsDescription: "Our Free Plan includes:",
		backgroundColor: "bg-[#001B42]",
		titleColor: "text-white",
		descriptionColor: "text-grey-300",
		benefits: [
			[
				"14-day free trial",
				"Full access to all VLRM features",
				"Onboarding guidance",
				"Limited vendor tracking None",
			],
			"⁠⁠Community support.",
		],
		cta: "Get Started",
		href: "/free-trial",
		buttonType: "outline",
	},
	{
		title: "Enterprise",
		description: "Comprehensive VLRM solution for enterprise-level needs.",
		benefitsDescription: "Plan includes:",
		backgroundColor: "bg-[#001B42]",
		titleColor: "text-white",
		descriptionColor: "text-grey-300",
		benefits: [
			[
				"Advanced VLRM tools",
				"⁠Custom vendor management",
				"⁠Dedicated customer support",
				"Real-time alerts",
			],
			"⁠Teams, Slack, Email, and more.",
			"Dedicated Success Manager.",
		],
		cta: "Contact Sales",
		href: "/contact",
		buttonType: "outline",
	},
	{
		title: "Get Security Questionnaires",
		description: "Get started with Supply Chain Risk Management",
		benefitsDescription: "Plan includes:",
		backgroundColor: "bg-primary",
		titleColor: "text-[#001B42]",
		descriptionColor: "text-grey-600",
		benefits: [
			"Simplified access to detailed security assessments.",
			[
				"⁠Pre-designed questionnaires for vendor security",
				"Easy export for compliance reviews",
			],
			"⁠Email",
			"Basic Email Support.",
		],
		cta: "Get Started",
		href: "/contact",
		buttonType: "primary",
	},
];

const Pricing = () => {
	return (
		<section className='py-10 xl:py-16'>
			<div className='container'>
				<div className='text-center'>
					<div className='text-grey-400'>Pricing</div>
					<h2 className='mt-3 font-semibold text-3xl xl:text-4xl text-grey-900'>
						Flexible Plans Tailored to Your Needs
					</h2>
					<p className='mt-4 xl:mt-6 xl:text-xl'>
						Discover the perfect solution to enhance your vendor management and
						risk mitigation strategy.
					</p>
				</div>
				<div className='mt-10 xl:mt-20'>
					<ul className='grid xl:grid-cols-3 gap-y-6 xl:gap-x-8'>
						{pricing.map((price) => {
							return (
								<li
									key={price.title}
									className='border relative border-grey-300 bg-grey-25 rounded-[20px]'>
									<div
										className={cn(
											price.backgroundColor,
											"px-4 py-5 min-h-36 xl:p-8 rounded-[20px]"
										)}>
										<h4
											className={cn(
												"text-xl xl:text-2xl text-white font-semibold mb-2",
												price.titleColor
											)}>
											{price.title}
										</h4>
										<p
											className={cn(
												"text-grey-300 text-sm",
												price.descriptionColor
											)}>
											{price.description}
										</p>
									</div>
									<div className='px-4 py-5 xl:p-8 flex xl:mb-28 flex-col'>
										<div className='flex-1 h-full'>
											<div className='text-grey-600 font-semibold'>
												{price.benefitsDescription}
											</div>
											<ul className='space-y-4 mt-6'>
												{price.benefits.map((benefit, index) => {
													return (
														<li key={index} className='flex space-x-6'>
															<Icons.CheckIcon />
															<div className='w-[calc(100%-24px)]'>
																{typeof benefit === "string" ? (
																	<>
																		<p className='text-grey-600'>{benefit}</p>
																	</>
																) : (
																	<>
																		<ul className='space-y-2'>
																			{benefit.map((item, index) => {
																				return (
																					<li
																						key={index}
																						className='list-inside list-disc'>
																						{item}
																					</li>
																				);
																			})}
																		</ul>
																	</>
																)}
															</div>
														</li>
													);
												})}
											</ul>
										</div>
										<div className='xl:absolute max-xl:mt-12 bottom-5 xl:bottom-8 left-0 right-0 xl:px-8'>
											<Link href={price.href}>
												<Button className='w-full' theme='outline'>
													{price.cta}
												</Button>
											</Link>
										</div>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Pricing;

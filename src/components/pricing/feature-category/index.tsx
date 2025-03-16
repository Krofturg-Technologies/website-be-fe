import { cn } from "@/lib/utils";

type ListItem = {
	plan: string;
	description: string;
	features: string[];
	integration: string;
	support: string;
};

const FeatureCategory = () => {
	const list: ListItem[] = [
		{
			plan: "Free Trial",
			description:
				"Try the Vendor Lifecycle and Risk Management (VLRM) tool for free.",
			features: [
				"14-day free trial",
				"Full access to all VLRM features",
				"Onboarding guidance",
				"Limited vendor tracking None",
			],
			integration: "None",
			support: "⁠⁠Community support",
		},
		{
			plan: "Enterprise",
			description: "Comprehensive VLRM solution for enterprise-level needs.",
			features: [
				"Advanced VLRM tools",
				"⁠Custom vendor management",
				"⁠Dedicated customer support",
				"Real-time alerts",
			],
			integration: "Teams, Slack, Email, and more.",
			support: "⁠Dedicated Success Manager",
		},
		{
			plan: "Security Questionnaires Only",
			description: "Simplified access to detailed security assessments.",
			features: [
				"⁠Pre-designed questionnaires for vendor security",
				"Easy export for compliance reviews",
			],
			integration: "Email",
			support: "⁠⁠Basic Email Support",
		},
	];

	const headings = [
		{ title: "Plans", key: "plan" },
		{ title: "Description", key: "description" },
		{ title: "Core Features", key: "features" },
		{ title: "Integration", key: "integration" },
		{ title: "Support", key: "support" },
	];

	return (
		<section className='py-8 xl:py-16 hidden xl:block'>
			<div className='container'>
				<h3 className='mb-5 font-semibold text-grey-900 text-2xl'>
					Feature Category
				</h3>
				<div>
					{headings.map((heading, index) => {
						return (
							<div
								key={index + heading.title}
								className={cn("grid p-5 items-center grid-cols-9 gap-x-6", {
									"bg-[#F2F4F7]": index % 2 === 0,
								})}>
								<h2
									className='col-span-3 text-gray-900 font-medium'
									key={index}>
									{heading.title}
								</h2>
								{list.map((item, index) => {
									if (item[heading.key as keyof ListItem] instanceof Array) {
										return (
											<ul className='col-span-2' key={index}>
												{Array.isArray(item[heading.key as keyof ListItem]) &&
													(item[heading.key as keyof ListItem] as string[]).map(
														(feature: string, index: number) => {
															return (
																<li
																	className='list-disc list-outside'
																	key={index}>
																	{feature}
																</li>
															);
														}
													)}
											</ul>
										);
									}
									return (
										<div className='col-span-2'>
											{item[heading.key as keyof ListItem]}
										</div>
									);
								})}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default FeatureCategory;

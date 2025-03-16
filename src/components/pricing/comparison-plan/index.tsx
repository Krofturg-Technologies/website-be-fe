import Button from "@/components/global/button";
import { cn } from "@/lib/utils";
import { ButtonTheme } from "../../../../types/global/ButtonProps";

const ComparisonPlan = () => {
	const pricing = [
		{
			title: "Free Trial",
			description: "Unlimited access to your own security rating",
			cta: "Get Started",
			href: "/free-trial",
			buttonType: "outline",
		},
		{
			title: "Enterprise",
			description: "Continuously monitor your entire supply chain",
			cta: "Contact Sales",
			href: "/contact",
			buttonType: "outline",
		},
		{
			title: "Get Security Questionnaires",
			description: "Get started with Supply Chain Risk Management",
			cta: "Get Started",
			href: "/contact",
			buttonType: "primary",
		},
	];

	return (
		<section className='py-10 xl:py-16'>
			<div className='container'>
				<div className='text-center'>
					<div className='text-primary font-semibold'>Pricing</div>
					<h2 className='mt-3 font-semibold text-3xl xl:text-4xl text-grey-900'>
						Comparison plan
					</h2>
					<p className='mt-4 xl:mt-6 xl:text-xl'>
						Simple pricing with no hidden fees. It’s free to start. No trial, no
						contract, no risk
					</p>
				</div>
				<div className='mt-10 xl:mt-20'>
					<ul className='grid xl:grid-cols-3 gap-y-6 xl:gap-x-8'>
						{pricing.map((price) => {
							return (
								<li
									key={price.title}
									className='border relative border-grey-300 bg-grey-25 rounded-[20px]'>
									<div className={cn("px-4 py-5 xl:p-8 rounded-[20px]")}>
										<h4
											className={cn(
												"text-xl xl:text-2xl text-grey-900 font-semibold mb-2"
											)}>
											{price.title}
										</h4>
										<p className={cn("text-grey-600 text-sm")}>
											{price.description}
										</p>
									</div>
									<div className='px-4 pb-5 xl:p-8'>
										<Button
											className='w-full'
											theme={price.buttonType as ButtonTheme}>
											{price.cta}
										</Button>
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

export default ComparisonPlan;

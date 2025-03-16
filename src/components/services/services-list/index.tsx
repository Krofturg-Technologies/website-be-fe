"use client";

import Button from "@/components/global/button";
import Icons from "@/components/icons";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import Image from "next/image";

const ServicesList = () => {
	const list = [
		{
			title: "Vulnerability Assessment & Penetration Testing (VAPT)",
			id: "vulnerability-assessment",
			description:
				"Proactively identify and resolve system vulnerabilities with our industry-leading VAPT services. Our ethical hacking approach ensures your defenses are strong enough to withstand real-world threats.",
			image: "/assets/images/vulnerability-accessment.jpg",
			list: [
				"Stay ahead of attackers with actionable insights",
				"Improve system security with expert remediation guidance.",
			],
		},
		{
			title: "ISO 27001 Services",
			id: "iso-27001",
			description:
				"Achieve and maintain ISO 27001 certification with ease. Krofturg provides end-to-end support, from gap assessments to audits, ensuring your Information Security Management System (ISMS) aligns with global standards.",
			image: "/assets/images/iso.jpg",
			list: [
				"Enhance compliance and protect sensitive data.",
				"Reduce risks while building customer trust.",
			],
		},
		{
			title: "Breach Simulations & Tabletop Exercises",
			id: "cyber-breach-simulations",
			description:
				"Prepare your teams for the unexpected with our breach simulation and tabletop exercises. These hands-on scenarios are designed to test your organization’s response capabilities and improve incident readiness.",
			image: "/assets/images/breach-simulation.jpg",
			list: [
				"Identify gaps in your incident response strategy.",
				"Build confidence through simulated real-world attacks.",
			],
		},
		{
			title: "Cyber Strategy and Governance Development)",
			id: "cyber-strategy",
			description:
				"Develop a robust cybersecurity strategy with our expert guidance. Krofturg assists organizations in building governance frameworks that ensure accountability, compliance, and resilience in a rapidly changing cyber environment.",
			image: "/assets/images/cyber-strategy.jpg",
			list: [
				"Align security goals with business objectives.",
				"Strengthen governance to mitigate risks effectively.",
			],
		},
		{
			title: "Security Training for Executives and the C-Suite",
			id: "security-assessments",
			description:
				"Empower your leadership team with tailored cybersecurity training. We focus on equipping executives with the knowledge they need to make informed decisions and lead effectively in a cyber-resilient organization.",
			image: "/assets/images/security-training.jpg",
			list: [
				"Improve awareness of emerging cyber threats.",
				"Foster a culture of security from the top down.",
			],
		},
	];

	return (
		<section className='max-xl:pb-10'>
			<div className='container max-xl:space-y-12'>
				{list.map((item, index) => {
					return (
						<div
							id={item.id}
							key={index}
							className='grid max-xl:rounded-2xl max-xl:bg-[#F9FAFB] xl:grid-cols-2 items-center xl:gap-x-20 xl:py-16'>
							<Image
								width={662}
								height={500}
								alt=''
								src={item.image}
								className={cn("w-full rounded-2xl ", {
									"xl:order-2": index % 2 !== 0,
								})}
							/>
							<div className='max-xl:p-3'>
								<h1 className='text-3xl xl:text-4xl font-semibold mt-3 text-grey-900'>
									{item.title}
								</h1>
								<p className='text-base mt-4 xl:mt-6'>{item.description}</p>
								<ul className='mt-4 space-y-4'>
									{item.list.map((item, i) => {
										return (
											<li
												key={index + i}
												className='flex space-x-3 xl:space-x-6'>
												<Icons.CubeIcon />
												<p className='w-[calc(100%-24px)]'>{item}</p>
											</li>
										);
									})}
								</ul>
								<div className='mt-10 w-full xl:flex'>
									<Link href='/contact' passHref>
										<Button theme='outline' className='max-xl:w-full'>
											Request a Consultation
										</Button>
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ServicesList;

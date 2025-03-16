"use client";

import Button from "@/components/global/button";
import Icons from "@/components/icons";
import { Link } from "next-view-transitions";
import Image from "next/image";

const Services = () => {
	const services = [
		{
			title: "Breach Simulations and table top exercises",
			description:
				"Prepare your organization for real-world attacks with simulated breaches that test your systems and response plans. Our expert-led simulations ensure you’re ready for any cyber threat.",
			image: "/assets/images/services-1.png",
		},
		{
			title: "VAPT (Vulnerability Assessment and Penetration Testing)",
			description:
				"Identify and fix vulnerabilities before they become risks. Our comprehensive assessments and penetration tests reveal weaknesses in your infrastructure, helping you strengthen security defenses.",
			image: "/assets/images/services-2.png",
		},
		{
			title: "Security Training for Executives and  C-suite",
			description:
				"Empower your leadership and teams with the knowledge and skills needed to protect your organization. Our training programs are tailored for executives and staff to tackle modern cybersecurity challenges.",
			image: "/assets/images/services-3.png",
		},
		{
			title: "Security Compliance Services",
			description:
				"Achieve and maintain security compliance and certification (e.g. ISO 27001, GDPR) with expert guidance. We provide full support, from policy development to audit assistance, ensuring your organization meets global security standards.",
			image: "/assets/images/services-4.png",
		},
		{
			title: "Cyber Strategy and Governance development",
			description:
				"Build a robust cybersecurity strategy that aligns with your business goals. Our customized approach helps you navigate the evolving threat landscape and strengthen your overall security posture.",
			image: "/assets/images/services-5.png",
		},
		{
			title: "Risk Assessment and Management",
			description:
				"Understand, evaluate, and mitigate risks across your organization with our tailored risk assessment services. We help you identify vulnerabilities, assess potential impacts, and develop actionable mitigation plans to safeguard your operations and assets.",
			image: "/assets/images/services-6.png",
		},
	];

	return (
		<section className='py-9'>
			<div className='container text-center'>
				<div className='text-base text-grey-400'>Services</div>
				<h2 className='mt-3 text-3xl xl:text-4xl font-semibold text-grey-900'>
					Complete visibility of your third party risk
				</h2>
				<p className='text-base text-grey-400 mt-4 xl:mt-6'>
					Comprehensive Cybersecurity services  to Safeguard Your Business and
					Optimize Vendor Relationships
				</p>
				<div className='grid xl:grid-cols-3 gap-y-5 xl:gap-10 mt-10'>
					{services.map((service, index) => {
						return (
							<article
								className='bg-[#F9FAFB] rounded-2xl overflow-hidden text-left'
								key={index}>
								<div className='overflow-hidden rounded-2xl'>
									<Image
										width={409}
										height={224}
										src={service.image}
										alt={service.title + " " + "image"}
										className='w-full transition-all hover:scale-[1.2] rounded-2xl'
									/>
								</div>
								<div className='p-3 xl:p-5'>
									<h3 className='text-lg xl:text-xl font-semibold text-grey-900'>
										{service.title}
									</h3>
									<p className='mt-2 text-sm xl:text-base text-grey-400'>
										{service.description}
									</p>
								</div>
							</article>
						);
					})}
				</div>
				<div className='mt-10 flex justify-center'>
					<Link className='block' href='/services' passHref>
						<Button className='text-secondary' theme='plain'>
							<div className='flex items-center space-x-2'>
								<span>Read More</span>
								<Icons.ArrowIcon />
							</div>
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Services;

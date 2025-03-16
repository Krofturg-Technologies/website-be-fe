"use client";

import Icons from "@/components/icons";

const VisionValues = () => {
	const values = [
		{
			title: "Excellence",
			description:
				"At Krofturg Technologies, we are committed to excellence in everything we do. From the quality of our services to the support we provide, we focus on delivering the highest standards to ensure your business thrives.",
			icon: <Icons.CyberSecurityIcon />,
		},
		{
			title: "Innovation",
			description:
				"Innovation drives us to continuously improve and adapt. We embrace new technologies and creative solutions to stay ahead of the curve and provide you with the best, most efficient security and risk management tools.",
			icon: <Icons.CyberSecurityIcon />,
		},
		{
			title: "Security",
			description:
				"Security is at the core of our business. We prioritize the protection of your data and systems, implementing robust security measures to ensure your information stays safe and secure, both internally and externally.",
			icon: <Icons.CyberSecurityIcon />,
		},
		{
			title: "Experience",
			description:
				"With years of experience in the cybersecurity and vendor risk management field, our team has the expertise to address your unique challenges. We provide trusted solutions backed by knowledge and hands-on experience, making us a reliable partner for your business.",
			icon: <Icons.CyberSecurityIcon />,
		},
	];

	return (
		<section id='values' className='py-10 xl:py-16'>
			<div className='container'>
				<div className='text-center max-w-[708px] mx-auto'>
					<div className='text-sm xl:text-base text-grey-400'>Our Vision</div>
					<p className='xl:text-2xl xl:font-semibold mt-3 text-grey-900'>
						To provide our customers with the technology and capability needed
						to protect operations, safeguard data, and strengthen partnerships.
					</p>
				</div>
				<div className='text-center mt-10 xl:mt-16'>
					<div className='text-sm xl:text-base text-grey-400'>Our Values</div>
					<h1 className='xl:text-2xl xl:font-semibold mt-3 text-grey-900'>
						How we work at Krofturg Technologies
					</h1>
					{/* <p className='text-base mt-4 xl:mt-6'>
						Our shared values keep us connected and guide us as one team.
					</p> */}
				</div>
				<div className='mt-10 flex flex-col items-center'>
					<ul className='grid xl:grid-cols-2 xl:gap-x-6 gap-y-8'>
						{values.map((item, index) => {
							return (
								<li
									key={index}
									className='space-y-3 xl:space-y-4 max-w-[507px] text-center'>
									<div className='flex justify-center'>{item.icon}</div>
									<h3 className='text-2xl font-semibold text-grey-900'>
										{item.title}
									</h3>
									<p>{item.description}</p>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default VisionValues;

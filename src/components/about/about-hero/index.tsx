import Image from "next/image";

const AboutHero = () => {
	return (
		<section id='about' className='py-10 xl:py-16'>
			<div className='container text-center'>
				<div className='text-sm xl:text-base text-grey-400'>About Us</div>
				<h1 className='text-3xl xl:text-4xl font-semibold mt-3 text-grey-900'>
					About Krofturg Technologies
				</h1>
				<p className='text-base mt-4 xl:mt-6 max-w-[968px] mx-auto'>
					Krofturg Technologies is a forward-thinking IT company dedicated to
					helping businesses navigate the ever-evolving landscape of
					cybersecurity. We specialize in providing tailored security risk
					management, vendor lifecycle management, and cyber resilience
					solutions that empower organizations to protect their operations and
					data. Our approach is simple—offering reliable, innovative, and
					scalable solutions that help our clients stay secure, compliant, and
					resilient in the face of today’s digital challenges.
				</p>
				<Image
					width={1312}
					height={700}
					alt=''
					src='/assets/images/about-hero.webp'
					className='mt-6 xl:mt-10 w-full'
				/>
			</div>
		</section>
	);
};

export default AboutHero;

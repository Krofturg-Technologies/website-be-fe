import Image from "next/image";

const CaseStudiesHero = () => {
	return (
		<div className='py-8 xl:py-16'>
			<div className='container'>
				<div className='text-center max-w-[1086px] mx-auto'>
					<div className='text-grey-400'>Case Studies</div>
					<h2 className='mt-3 font-semibold text-3xl xl:text-4xl text-grey-900'>
						Krofturg Technologies Case Studies
					</h2>
					<p className='mt-4 xl:mt-6 xl:text-xl'>
						Explore how Krofturg Technologies has helped businesses of all sizes
						strengthen their defenses and manage risks effectively. Our case
						studies highlight real-world examples of how our tailored risk
						management, vendor lifecycle management, and cyber resilience
						solutions have made a difference for our clients.
					</p>
				</div>
				<Image
					width={952 * 3}
					height={481 * 3}
					src='/assets/images/case-studies-hero-image.webp'
					alt=''
					className='w-full mt-10 xl:mt-16'
				/>
			</div>
		</div>
	);
};

export default CaseStudiesHero;

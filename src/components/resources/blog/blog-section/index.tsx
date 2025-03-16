import Image from "next/image";

const BlogSection = () => {
	return (
		<div className='py-8 xl:py-16'>
			<div className='container'>
				<div className='text-center max-w-[1086px] mx-auto'>
					<div className='text-grey-400'>Blog</div>
					<h2 className='mt-3 font-semibold text-3xl xl:text-4xl text-grey-900'>
						Krofturg Technologies Blog
					</h2>
					<p className='mt-4 xl:mt-6 xl:text-xl'>
						Welcome to the Krofturg Technologies Blog! Here, we share valuable
						insights, updates, and best practices on vendor risk management,
						cyber resilience, and the latest trends in the cybersecurity world.
						Our blog also provides practical guides and tips on how to use our
						tools effectively, from setting up your{" "}
						<b>Vendor Lifecycle Management Tool</b> to customizing risk
						assessments /our Questionnaires and staying compliant. Stay tuned!
					</p>
				</div>
				<Image
					width={952 * 3}
					height={481 * 3}
					src='/assets/images/blog-hero-image.webp'
					alt=''
					className='w-full mt-10 xl:mt-16'
				/>
			</div>
		</div>
	);
};

export default BlogSection;

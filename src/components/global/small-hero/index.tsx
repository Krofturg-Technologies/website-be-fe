type Props = {
	title: string;
	description: string;
};

const SmallHero = ({ title, description }: Props) => {
	return (
		<section className='py-20 xl:py-28 bg-[url(/assets/images/small-hero-bg.webp)] bg-cover bg-no-repeat bg-center'>
			<div className='container text-center'>
				<h1 className='text-3xl xl:text-4xl font-semibold text-white'>
					{title}
				</h1>
				<p className='text-base xl:text-xl text-white mt-5 xl:mt-6'>
					{description}
				</p>
			</div>
		</section>
	);
};

export default SmallHero;

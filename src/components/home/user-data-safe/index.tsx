import Image from "next/image";

const UserDataSafe = () => {
	return (
		<section className='py-10 xl:py-16'>
			<div className='container max-xl:space-y-8 grid xl:grid-cols-5 xl:gap-x-20 items-center'>
				<div className='max-xl:w-full xl:col-span-2'>
					<Image
						width={498}
						height={326}
						alt=''
						src='/assets/images/user-data-safe.png'
						className='w-full'
					/>
				</div>
				<div className='xl:col-span-3'>
					<h2 className='mb-6 font-semibold text-3xl text-grey-900'>
						Keeping user data safe is important to us
					</h2>
					<p>
						We prioritize protecting the privacy, integrity, and availability of
						our information assets to meet legal, regulatory, and contractual
						obligations, and to maintain our reputation. reduction.
					</p>
					<p className='mt-4'>
						Our Integrated Management Systems (ISO 27001) align with our goals,
						enabling secure information sharing, efficient electronic
						operations, and risk.
					</p>
				</div>
			</div>
		</section>
	);
};

export default UserDataSafe;

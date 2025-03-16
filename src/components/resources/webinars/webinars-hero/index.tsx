"use client";

import Button from "@/components/global/button";
import Icons from "@/components/icons";

const WebinarsHero = () => {
	return (
		<section className='py-10 xl:py-24 bg-[url("/assets/images/webinars-background.webp")] bg-cover bg-no-repeat'>
			<div className='container text-center space-y-3 xl:space-y-6'>
				<h1 className='text-2xl xl:text-4xl font-semibold text-white'>
					Krofturg Webinars
				</h1>
				<p className='text-base xl:text-xl text-white'>
					At Krofturg, we help businesses strengthen their defenses with
					tailored risk management, vendor lifecycle management, and cyber
					resilience solutions.
				</p>
				<div className='flex justify-center'>
					<Button className='bg-white'>
						<div className='flex items-center space-x-2'>
							<Icons.PlayIcon className='stroke-gray-900' />
							<span>Watch Webinars</span>
						</div>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default WebinarsHero;

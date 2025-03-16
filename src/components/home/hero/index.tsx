"use client";

import Button from "@/components/global/button";
import Icons from "@/components/icons";
import { Link } from "next-view-transitions";
import Image from "next/image";

const Hero = () => {
	return (
		<div className='pt-10 xl:pt-20 hero-bg'>
			<div className='container text-center'>
				<h1 className='text-3xl xl:text-[60px] text-secondary font-semibold xl:leading-[72px]'>
					Navigating security risks with <br />
					<span className='text-primary'>confidence</span>
				</h1>
				<p className='mt-5'>
					Powerful, intuitive solutions to help you mitigate risks, improve
					compliance, and drive smarter vendor decisions. <br /> Trusted by
					leaders in tech and finance.
				</p>
				<div className='xl:flex mt-8 xl:mt-10 justify-center items-center max-xl:space-y-3 xl:space-x-3'>
					<Link href='/get-a-demo' className='block'>
						<Button className='max-xl:w-full'>Get a Demo</Button>
					</Link>
					<Link href='/services/request-a-service-quote' className='block'>
						<Button className='max-xl:w-full bg-[#F4F9FF] text-secondary'>
							<div className='flex items-center space-x-2'>
								<span>Request a Service Quote</span>
								<Icons.ArrowIcon />
							</div>
						</Button>
					</Link>
				</div>
				<Image
					width={952 * 3}
					height={481 * 3}
					src='/assets/images/hero-image.webp'
					alt=''
					className='w-full mt-10 xl:mt-16'
				/>
			</div>
		</div>
	);
};

export default Hero;

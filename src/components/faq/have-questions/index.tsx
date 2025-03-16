"use client";

import Button from "@/components/global/button";
import Icons from "@/components/icons";
import { Link } from "next-view-transitions";
import Image from "next/image";

const HaveQuestions = () => {
	return (
		<div>
			<div className='bg-gradient-to-t from-[#007451] to-[#A9FFE5] mt-10 xl:mt-20 py-10 px-5 rounded-2xl text-center'>
				<Image
					width={120}
					height={56}
					src='/assets/images/faq-avatars.png'
					alt=''
					className='mx-auto'
				/>
				<div className='font-semibold text-xl text-white mt-5'>
					Still have questions?
				</div>
				<p className='text-white mt-3'>
					Can’t find the answer you’re looking for? Please chat to our friendly
					team.
				</p>
				<div className='mt-5 flex justify-center'>
					<Link passHref href='/contact' className='block max-xl:w-full'>
						<Button className='max-xl:w-full'>
							<div className='flex items-center space-x-2'>
								<span>Get in Touch</span>
								<Icons.ArrowIcon />
							</div>
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HaveQuestions;

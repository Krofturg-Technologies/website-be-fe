import Button from "@/components/global/button";
import { Link } from "next-view-transitions";
import Image from "next/image";

const GetToKnowUs = () => {
	return (
		<section className='py-10 xl:py-16'>
			<div className='container max-xl:space-y-8 grid xl:grid-cols-2 xl:gap-x-20 items-center'>
				<div className=''>
					<div className='text-sm xl:text-base mb-3'>Get to know us</div>
					<h2 className='mb-6 font-semibold text-3xl text-grey-900'>
						We’re just getting started
					</h2>
					<Image
						width={498}
						height={326}
						alt=''
						src='/assets/images/get-to-know-us.png'
						className='w-full xl:hidden mb-6'
					/>
					<p>
						At Krofturg Technologies, we’re just getting started, and we’re
						excited to grow with you! Our goal is to make things easier for
						businesses by providing straightforward solutions for managing
						security and risks.
					</p>
					<p className='mt-4'>
						We focus on delivering great service and simple, effective
						technology that helps organizations stay secure.
					</p>
					<div className='xl:flex mt-8 xl:mt-10 items-center max-xl:space-y-3 xl:space-x-3'>
						<Link href='/about' passHref className='block'>
							<Button theme='outline' className='max-xl:w-full'>
								About us
							</Button>
						</Link>
						<Link
							href='https://www.linkedin.com/company/krofturg-technologies/jobs/'
							passHref
							target='_blank'
							className='block'>
							<Button className='max-xl:w-full'>See open roles</Button>
						</Link>
					</div>
				</div>
				<div className='max-xl:w-full hidden xl:block'>
					<Image
						width={498}
						height={326}
						alt=''
						src='/assets/images/get-to-know-us.png'
						className='w-full'
					/>
				</div>
			</div>
		</section>
	);
};

export default GetToKnowUs;

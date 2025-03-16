"use client";

import Button from "@/components/global/button";
import Icons from "@/components/icons";
import { productsData } from "@/data/products";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { useParams } from "next/navigation";

const ProductsHero = () => {
	const params = useParams();

	const data = productsData?.find((product) => product.slug === params.id)!;

	return (
		<section className='py-10 xl:py-16'>
			<div className='container grid xl:grid-cols-2 gap-x-20'>
				<div>
					<div className='text-sm xl:text-base text-grey-400'>Products</div>
					<h1 className='text-3xl xl:text-4xl font-semibold mt-3 text-grey-900'>
						{data?.title}
					</h1>
					<Image
						width={662}
						height={500}
						alt=''
						src='/assets/images/products-hero.webp'
						className='w-full xl:hidden mt-4'
					/>
					<p className='text-base mt-4 xl:mt-6'>{data?.description}</p>
					<p className='text-base mt-4 xl:mt-6'>Key Features:</p>
					<ul className='mt-4 space-y-4'>
						{data?.keyFeatures?.map((item, index) => {
							return (
								<li key={index} className='flex space-x-3 xl:space-x-6'>
									<Icons.CubeIcon />
									<p className='w-[calc(100%-24px)]'>{item}</p>
								</li>
							);
						})}
					</ul>
					{data.slug === "vendor-lifecycle-management-tool" && (
						<p className='mt-4'>Take control of your vendor relationships.</p>
					)}
					<div className='xl:flex items-center mt-10 max-xl:space-y-3 xl:space-x-3'>
						<Link href={data.primaryCTA.href} passHref className='block'>
							<Button className='max-xl:w-full'>{data.primaryCTA.label}</Button>
						</Link>
						<Link href={data.secondaryCTA.href} passHref className='block'>
							<Button className='max-xl:w-full' theme='outline'>
								{data.secondaryCTA.label}
							</Button>
						</Link>
					</div>
				</div>
				<Image
					width={662}
					height={500}
					alt=''
					src={data.image}
					priority
					className='w-full hidden xl:block rounded-3xl'
				/>
			</div>
		</section>
	);
};

export default ProductsHero;

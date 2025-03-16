"use client";

import Button from "@/components/global/button";
import Icons from "@/components/icons";
import { productsData } from "@/data/products";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useParams } from "next/navigation";

const ProductsFeatures = () => {
	const params = useParams();

	const data = productsData.find((product) => product.slug === params.id)!;

	return (
		<section className='max-xl:pb-10'>
			<div className='container text-center'>
				<h1 className='text-3xl xl:text-4xl font-semibold mt-3 text-grey-900'>
					{data?.featuresTitle}
				</h1>
				<p className='text-base mt-4 xl:mt-6'>{data?.featuresDescription}</p>
			</div>
			<div className='container max-xl:space-y-12 mt-8 xl:mt-16'>
				{data.features.map((item, index) => {
					return (
						<div
							key={index}
							className='grid max-xl:rounded-2xl max-xl:bg-[#F9FAFB] xl:grid-cols-2 items-center xl:gap-x-20 xl:py-16'>
							<Image
								width={662}
								height={500}
								alt=''
								src={item.image}
								className={cn("w-full", {
									"xl:order-2": index % 2 !== 0,
								})}
							/>
							<div className='max-xl:p-3'>
								<h1 className='text-3xl xl:text-4xl font-semibold mt-3 text-grey-900'>
									{item.title}
								</h1>
								<ul className='mt-4 space-y-4'>
									{item.description.map((item, i) => {
										return (
											<li
												key={index + i}
												className='flex space-x-3 xl:space-x-6'>
												<p className='w-[calc(100%-24px)]'>{item}</p>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ProductsFeatures;

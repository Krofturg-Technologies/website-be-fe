"use client";

import Icons from "@/components/icons";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	const items = [
		{
			name: "George Wellis",
			title: "Growth Manager, CanadaVisa",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		},
		{
			name: "George Wellis",
			title: "Growth Manager, CanadaVisa",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		},
		{
			name: "George Wellis",
			title: "Growth Manager, CanadaVisa",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		},
	];

	return (
		<section className='bg-[#001C46] py-10 xl:py-16 xl:bg-[url(/assets/images/testimonial-bg.png)] bg-cover bg-center bg-no-repeat'>
			<div className='container'>
				<div className='text-center font-semibold text-3xl mb-10 text-white'>
					What our customers are <span className='text-primary'>saying...</span>
				</div>
				<Carousel setApi={setApi}>
					<CarouselContent>
						{items.map((item, index) => {
							return (
								<CarouselItem key={index}>
									<div className='xl:bg-[#E8FFF8] grid items-center xl:grid-cols-5 xl:p-8 rounded-[52px] xl:gap-x-11'>
										<div className='col-span-3'>
											<div className='max-xl:flex justify-center'>
												<Icons.RatingIcon />
											</div>
											<p className='max-xl:text-center max-xl:text-white mt-5'>
												{item.description}
											</p>
											<div className='xl:hidden flex justify-center mt-8'>
												<Image
													width={390}
													height={340}
													src='/assets/images/testimonial.png'
													alt={item.name + " " + "image"}
													className='size-16 rounded-full'
												/>
											</div>
											<h5 className='mt-5 max-xl:text-center text-xs font-bold text-white xl:text-grey-900'>
												{item.name}
											</h5>
											<div className='text-xs max-xl:text-center max-xl:text-grey-400 mt-0.5'>
												{item.title}
											</div>
										</div>
										<Image
											width={390}
											height={340}
											src='/assets/images/testimonial.png'
											alt={item.name + " " + "image"}
											className='w-full hidden xl:block col-span-2'
										/>
									</div>
								</CarouselItem>
							);
						})}
					</CarouselContent>
				</Carousel>
				<div className='mt-10 hidden xl:flex justify-center'>
					{Array.from({ length: count }).map((_, index) => {
						return (
							<button
								key={index}
								onClick={() => api?.scrollTo(index)}
								className={cn("w-16 h-0.5 rounded bg-[#E6E6E933]/20 mx-2", {
									"bg-[#00EAA3]": current === index + 1,
								})}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;

"use client";

import { BlogResponse } from "@/app/resources/blog/page";
import Button from "@/components/global/button";
import Icons from "@/components/icons";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";

type Blog = {
	blogs: BlogResponse["items"];
	categories: {
		fields: {
			categoryName: "Containerization";
			slug: "containerization";
		};
	}[];
};

const Blogs = ({ blogs, categories }: Blog) => {
	const query = useSearchParams();

	const pathname = usePathname();

	return (
		<section className='mb-8 xl:mb-16'>
			<div className='container xl:grid xl:grid-cols-5 xl:gap-x-10'>
				<div className='w-full'>
					<h4 className='text-black text-2xl font-semibold'>Blog categories</h4>
					<ul className='mt-3 xl:mt-6 block max-xl:mb-3 max-xl:flex items-center max-xl:!w-full max-xl:overflow-x-auto max-xl:space-x-2'>
						<li className=''>
							<Link
								href={pathname}
								className={cn(
									"px-4 block text-xs xl:text-base py-1 max-xl:rounded-xl xl:py-3 whitespace-nowrap text-left w-full",
									{
										"bg-primary font-medium": !query.get("category"),
									}
								)}>
								All
							</Link>
						</li>
						{categories.map((category) => {
							return (
								<li key={category.fields?.slug} className='w-full'>
									<Link
										href={pathname + "?category=" + category.fields?.slug}
										className={cn(
											"px-4 block text-xs xl:text-base py-1 max-xl:rounded-xl xl:py-3 text-left",
											{
												"bg-primary font-medium":
													query.get("category") === category.fields?.slug,
											}
										)}>
										<div className='xl:line-clamp-1 max-xl:whitespace-nowrap'>
											{category.fields?.categoryName}
										</div>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div className='col-span-4'>
					<Link href={`blog/${blogs[0].fields.slug}`}>
						<article className='max-xl:bg-[#F9FAFB] rounded-2xl'>
							<Image
								width={1008}
								height={450}
								src={"https:" + blogs[0].fields.image.fields.file.url}
								alt=''
								className='w-full hidden xl:block object-cover max-h-[700px] rounded-2xl'
							/>
							<Image
								width={488}
								height={224}
								src={"https:" + blogs[0].fields.image.fields.file.url}
								alt=''
								className='w-full overflow-hidden object-cover max-h-[700px] xl:hidden rounded-2xl'
							/>
							<div className='max-xl:p-3'>
								<div className='xl:mt-6 xl:flex overflow-x-auto items-center xl:gap-4'>
									{blogs[0].fields.categories.length > 0 && (
										<div className='flex items-center gap-3 flex-wrap'>
											{blogs[0].fields.categories?.map((category) => {
												return (
													<div
														className='px-2.5 rounded-lg bg-[#F4F4F4] py-2 text-xs whitespace-nowrap xl:text-sm font-semibold text-black'
														key={
															category.fields?.slug +
															category.fields?.categoryName
														}>
														{category.fields?.categoryName}
													</div>
												);
											})}
										</div>
									)}
									<div className='text-xs xl:text-sm max-xl:mt-3 text-black'>
										{blogs[0].fields.readTimeInMinutes} mins read
									</div>
								</div>
								<h2 className='mt-4 font-semibold capitalize text-grey-900 text-2xl xl:text-4xl'>
									{blogs[0].fields.title?.toLowerCase()}
								</h2>
								<p className='text-sm xl:text-base mt-2 mb-6 text-grey-600 line-clamp-2'>
									{blogs[0].fields.summary}
								</p>
								<Button className='text-secondary max-xl:w-full bg-[#F4F9FF]'>
									<div className='flex items-center space-x-2'>
										<span>Read More</span>
										<Icons.ArrowIcon />
									</div>
								</Button>
							</div>
						</article>
					</Link>
					<motion.div
						layout
						className='grid xl:grid-cols-2 mt-10 gap-x-8 gap-y-10'>
						{blogs
							.slice(1)
							.filter(
								(blog) =>
									!query.get("category") ||
									blog.fields.categories.find(
										(category) =>
											category.fields?.slug === query.get("category")
									)
							)
							.map((blog) => {
								return (
									<Link
										className='block h-full'
										href={`blog/${blog.fields.slug}`}
										key={blog.fields.title}>
										<article className='bg-[#F9FAFB] h-full rounded-2xl'>
											<Image
												width={488}
												height={224}
												src={"https:" + blog.fields.image.fields.file.url}
												alt=''
												className='w-full max-h-[700px] rounded-2xl'
											/>
											<div className='p-3 xl:p-5'>
												<div className='xl:flex items-center xl:gap-4 flex-wrap'>
													{blog.fields.categories.length > 0 && (
														<div className='flex items-center gap-3 flex-wrap'>
															{blog.fields.categories?.map((category) => {
																return (
																	<div
																		className={cn(
																			"px-2.5 rounded-lg bg-[#F4F4F4] py-2 text-xs xl:text-sm font-medium text-black",
																			{
																				"bg-primary":
																					query.get("category") ===
																					category.fields?.slug,
																			}
																		)}
																		key={category.fields?.slug}>
																		{category.fields?.categoryName}
																	</div>
																);
															})}
														</div>
													)}
													<div className='text-xs xl:text-sm max-xl:mt-3 text-black'>
														{blog.fields.readTimeInMinutes} mins read
													</div>
												</div>
												<h2 className='mt-4 font-semibold capitalize text-grey-900 text-2xl'>
													{blog.fields.title?.toLowerCase()}
												</h2>
												<p className='max-xl:text-sm mt-2 text-grey-600 line-clamp-2'>
													{blog.fields.summary}
												</p>
												<div className='xl:hidden mt-6'>
													<Button className='text-secondary max-xl:w-full bg-[#F4F9FF]'>
														<div className='flex items-center space-x-2'>
															<span>Read More</span>
															<Icons.ArrowIcon />
														</div>
													</Button>
												</div>
											</div>
										</article>
									</Link>
								);
							})}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Blogs;

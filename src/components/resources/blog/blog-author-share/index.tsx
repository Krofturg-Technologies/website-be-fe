"use client";

import Image from "next/image";
import Icons from "@/components/icons";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { Blog } from "@/app/resources/blog/page";

const BlogAuthorShare = ({ blog }: { blog: Blog }) => {
	const { copy } = useCopyToClipboard();

	const socials = [
		{
			name: "twitter",
			icon: <Icons.TwitterSolidIcon fill='#98A2B3' />,
			href: `https://twitter.com/share?url=${
				process.env.NEXT_PUBLIC_DOMAIN_WEBSITE_URL
			}/blog/${encodeURIComponent(blog?.slug)}`,
		},
		{
			name: "linkedin",
			icon: <Icons.LinkedInSolidIcon fill='#98A2B3' />,
			href: `https://www.linkedin.com/sharing/share-offsite/?url=${
				process.env.NEXT_PUBLIC_DOMAIN_WEBSITE_URL
			}/blog/${encodeURIComponent(blog?.slug)}`,
		},
		{
			name: "facebook",
			icon: <Icons.FacebookSolidIcon fill='#98A2B3' />,
			href: `https://www.facebook.com/sharer/sharer.php?u=${
				process.env.NEXT_PUBLIC_DOMAIN_WEBSITE_URL
			}/blog/${encodeURIComponent(blog?.slug)}`,
		},
	];

	return (
		<div className='mt-10'>
			<div>
				<div className='text-xl font-semibold text-grey-900'>
					Share this post
				</div>
				<div className='grid xl:grid-cols-2 pt-2 xl:pt-4 xl:gap-x-5'>
					<div className='flex items-center space-x-2'>
						<button
							onClick={() =>
								copy(
									`${
										process.env.NEXT_PUBLIC_DOMAIN_WEBSITE_URL
									}/blog/${encodeURIComponent(blog?.slug)}`,
									"Link",
									{
										showNotification: true,
									}
								)
							}
							className='rounded-md'
							rel='noreferrer'>
							<Icons.CopyIcon />
						</button>
						{socials.map((social, index) => {
							return (
								<a
									key={index}
									href={social.href}
									target='_blank'
									className='rounded-md'
									rel='noreferrer'>
									{social.icon}
								</a>
							);
						})}
					</div>
					<div className='max-xl:mt-6 flex items-center xl:justify-end xl:space-x-2 max-xl:gap-2 flex-wrap'>
						{blog.categories.map((category, index) => {
							return (
								<div
									className='border border-grey-900 text-sm font-medium text-gray-900 rounded-lg py-2 px-3.5'
									key={category.fields.slug}>
									{category.fields.categoryName}
								</div>
							);
						})}
					</div>
				</div>
				<div className='my-6 xl:my-10'>
					<hr />
				</div>
				<div>
					<div className='flex items-center space-x-4'>
						<div className='size-12 xl:size-14'>
							<Image
								src={"https:" + blog.author.fields.avatar.fields.file.url}
								alt={blog.author.fields.name + " image"}
								width={56}
								height={56}
								className='w-full h-full object-cover rounded-full'
							/>
						</div>
						<div>
							<h3 className='text-black text-sm xl:text-lg font-semibold'>
								{blog.author.fields.name}
							</h3>
							<h3 className='text-black text-xs xl:text-sm'>
								{blog.author.fields.jobTitle}, {blog.author.fields.companyName}
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogAuthorShare;

"use client";

import { Blog } from "@/app/resources/blog/page";
import Icons from "@/components/icons";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "next-view-transitions";
import Image from "next/image";
import BlogAuthorShare from "../blog-author-share";

type BlogDetailsType = {
	blog: Blog;
};

const BlogDetails = ({ blog }: BlogDetailsType) => {
	return (
		<div className='py-8 xl:py-16'>
			<div className='container'>
				<div className='text-center max-w-[1086px] mx-auto'>
					<Link
						href={`/resources/blog`}
						className='flex items-center justify-center space-x-2'>
						<div className='rotate-180 transform'>
							<Icons.ArrowIcon />
						</div>
						<div className='text-grey-900'>Blog</div>
					</Link>
					<h2 className='mt-3 font-semibold capitalize text-3xl xl:text-4xl text-grey-900'>
						{blog?.title?.toLowerCase()}
					</h2>
					<p className='mt-4 xl:mt-6 xl:text-xl'>{blog.summary}</p>
				</div>
				<Image
					width={1312}
					height={700}
					src={"https:" + blog.image.fields.file.url}
					alt=''
					className='w-full mt-10 max-h-[750px] object-cover rounded-[20px] xl:mt-16'
				/>
				<div className='prose mx-auto mt-8 xl:mt-24 text-body'>
					{documentToReactComponents(blog?.body, {})}
				</div>

				<BlogAuthorShare blog={blog} />
			</div>
		</div>
	);
};

export default BlogDetails;

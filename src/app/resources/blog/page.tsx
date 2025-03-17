import BlogSection from "@/components/resources/blog/blog-section";
import Blogs from "@/components/resources/blog/blogs";
import { client } from "../../../../contentful/client";
import { Suspense } from "react";
import { Document } from "@contentful/rich-text-types";
import { Metadata } from "next";

export type Blog = {
	title: string;
	body: Document;
	date: string;
	image: {
		fields: {
			file: {
				url: string;
			};
			title: string;
		};
	};
	categories: {
		fields: {
			categoryName: "Company";
			slug: "company";
		};
	}[];
	keywords: string[];
	previewImage: {
		fields: {
			file: {
				url: string;
			};
			title: string;
		};
	};
	readTimeInMinutes: string;
	slug: string;
	summary: string;
	author: {
		fields: {
			name: string;
			jobTitle: string;
			companyName: string;
			avatar: {
				fields: {
					file: {
						url: string;
					};
					title: string;
				};
			};
		};
	};
};

export type BlogResponse = {
	items: {
		fields: Blog;
	}[];
};

const BlogPage = async () => {
	const response: BlogResponse = await client?.getEntries({
		content_type: "blog",
	});

	const categoriesResponse = await client?.getEntries({
		content_type: "blogCategory",
	});

	return (
		<>
			<BlogSection />
			<Suspense>
				<Blogs blogs={response.items} categories={categoriesResponse.items} />
			</Suspense>
		</>
	);
};

export default BlogPage;

export const metadata: Metadata = {
	title: "Resources | Blog",
};

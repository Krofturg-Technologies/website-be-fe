import BlogDetails from "@/components/resources/blog/blog-details";
import { Blog, BlogResponse } from "../page";
import { client } from "../../../../../contentful/client";

type BlogDetailsResponse = {
	items: {
		fields: Blog;
	}[];
};

const BlogDetailsPage = async ({ params }: any) => {
	const response: BlogDetailsResponse = await client.getEntries({
		content_type: "blog",
		"fields.slug": params?.id,
	});

	const blog = response?.items[0]?.fields;

	return (
		<>
			<BlogDetails blog={blog} />
		</>
	);
};

export default BlogDetailsPage;

export async function generateStaticParams() {
	const response: BlogResponse = await client?.getEntries({
		content_type: "blog",
	});

	return response.items.map((blog) => ({
		id: blog.fields.slug,
	}));
}

export async function generateMetadata({ params }: any) {
	const response: BlogDetailsResponse = await client.getEntries({
		content_type: "blog",
		"fields.slug": params.id,
	});

	const fields = response?.items[0]?.fields;

	return {
		title: " Resources | Blog | " + fields?.title,
		description: fields?.summary,
		url:
			process.env.NEXT_PUBLIC_DOMAIN_WEBSITE_URL +
			"/resources/blog/" +
			fields?.slug,
		siteName: "Krofturg Technologies",
		type: "article",
		publishedTime: fields?.date,
		authors: [fields.author.fields.name],
		image: "https:" + fields?.previewImage.fields.file.url,
		keywords: fields?.keywords,
		twiiter: {
			card: "summary_large_image",
			site: "@krofturg Technologies",
			title: fields?.title,
			description: fields?.summary,
			image: "https:" + fields?.previewImage.fields.file.url,
		},
		openGraph: {
			title: fields?.title,
			description: fields?.summary,
			image: "https:" + fields?.previewImage.fields.file.url,
			type: "article",
		},
	};
}

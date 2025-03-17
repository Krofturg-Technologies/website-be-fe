import ProductsFeatures from "@/components/products/products-features";
import ProductsHero from "@/components/products/products-hero";

const ProductPage = () => {
	return (
		<>
			<ProductsHero />
			<ProductsFeatures />
			{/* <Testimonials /> */}
		</>
	);
};

export default ProductPage;

export async function generateMetadata({ params }: any) {
	const { id } = params;

	return {
		title: " Products | " + id,
	};
}

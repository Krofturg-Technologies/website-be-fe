import SmallHero from "@/components/global/small-hero";
import JoinMarketplaceForm from "@/components/marketplace/join-marketplace-form";

const MarketPlacePage = () => {
	return (
		<>
			<SmallHero
				title='Krofturg Marketplace'
				description='Find the best vendors for your projects, compare services, request proposals, and build lasting partnerships.'
			/>
			<JoinMarketplaceForm />
		</>
	);
};

export default MarketPlacePage;

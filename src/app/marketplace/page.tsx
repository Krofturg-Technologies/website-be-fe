import SmallHero from "@/components/global/small-hero";
import JoinMarketplaceForm from "@/components/marketplace/join-marketplace-form";
import { Metadata } from "next";

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

export const metadata: Metadata = {
	title: "Marketplace",
};

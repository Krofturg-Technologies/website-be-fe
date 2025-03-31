import FreeTrialForm from "@/components/free-trial/free-trial-form";
import SmallHero from "@/components/global/small-hero";
import BuyQuestionnairesForm from "@/components/products/buy-questionnaires-form";

const ProductPage = () => {
	return (
		<>
			<SmallHero
				title='Buy Security Questionnaires'
				description='At Krofturg, we help businesses strengthen their defenses with tailored risk management, vendor lifecycle management, and cyber resilience solutions.'
			/>
			<BuyQuestionnairesForm />
		</>
	);
};

export default ProductPage;

export async function generateMetadata({ params }: any) {
	const { id } = params;

	return {
		title: " Products | " + id + " | buy",
	};
}

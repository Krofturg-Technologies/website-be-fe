import FreeTrialForm from "@/components/free-trial/free-trial-form";
import SmallHero from "@/components/global/small-hero";
import ComparisonPlan from "@/components/pricing/comparison-plan";
import { Metadata } from "next";

const FreeTrialPage = () => {
	return (
		<>
			<SmallHero
				title='Free Trial'
				description='At Krofturg, we help businesses strengthen their defenses with tailored risk management, vendor lifecycle management, and cyber resilience solutions.'
			/>
			<FreeTrialForm />
			<ComparisonPlan />
		</>
	);
};

export default FreeTrialPage;

export const metadata: Metadata = {
	title: "Free Trial",
};

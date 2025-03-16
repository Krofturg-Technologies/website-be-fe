import FreeTrialForm from "@/components/free-trial/free-trial-form";
import SmallHero from "@/components/global/small-hero";
import ComparisonPlan from "@/components/pricing/comparison-plan";

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

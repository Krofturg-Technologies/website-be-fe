import RequestADemoForm from "@/components/demo/request-a-demo-form";
import SmallHero from "@/components/global/small-hero";

const DemoPage = () => {
	return (
		<>
			<SmallHero
				title='Get a Demo'
				description='At Krofturg, we help businesses strengthen their defenses with tailored risk management, vendor lifecycle management, and cyber resilience solutions.'
			/>
			<RequestADemoForm />
		</>
	);
};

export default DemoPage;

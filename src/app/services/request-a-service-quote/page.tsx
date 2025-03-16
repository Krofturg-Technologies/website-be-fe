import SmallHero from "@/components/global/small-hero";
import RequestAServiceQuoteForm from "@/components/services/request-a-service-quote-form";

const RequestAServiceQuote = () => {
	return (
		<>
			<SmallHero
				title='Lorem ipsum dolor sit amet'
				description='Krofturg Technologies is a technology company founded in 2024. At Krofturg, we help businesses strengthen their defenses with tailored risk management, vendor lifecycle management, and cyber resilience solutions.'
			/>
			<RequestAServiceQuoteForm />
		</>
	);
};

export default RequestAServiceQuote;

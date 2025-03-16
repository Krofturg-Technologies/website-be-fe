import LegalContent from "@/components/legal/legal-content";

const TermsAndConditionsPage = () => {
	return (
		<section className='py-8 xl:py-16'>
			<div className='container'>
				<div className='prose'>
					<h2 className='mt-3 font-semibold text-3xl xl:text-4xl text-grey-900'>
						Terms and Conditions
					</h2>
					<p className='mt-4 xl:mt-6 xl:text-xl'>
						Terms and Conditions are a set of rules and guidelines that a user
						must agree to in order to use your website or mobile app. It acts as
						a legal contract between you (the company) who has the website or
						mobile app and the user who access your website and mobile app.
					</p>
				</div>
				<LegalContent id='termsAndConditions' />
			</div>
		</section>
	);
};

export default TermsAndConditionsPage;

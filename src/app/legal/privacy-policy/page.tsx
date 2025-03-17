import LegalContent from "@/components/legal/legal-content";
import { Metadata } from "next";

const PrivacyPolicyPage = () => {
	return (
		<section className='py-8 xl:py-16'>
			<div className='container'>
				<div className='prose'>
					<h2 className='mt-3 font-semibold text-3xl xl:text-4xl text-grey-900'>
						Privacy Policy
					</h2>
					<p className='mt-4 xl:mt-6 xl:text-xl'>
						Privacy Policy is a legal document that discloses the ways a party
						gathers, uses, discloses, and manages a customer or client's data.
						It fulfills a legal requirement to protect a customer or client's
						privacy.
					</p>
				</div>
				<LegalContent id='privacyPolicy' />
			</div>
		</section>
	);
};

export default PrivacyPolicyPage;

export const metadata: Metadata = {
	title: "Privacy Policy",
};

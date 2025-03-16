import { cn } from "@/lib/utils";
import HaveQuestions from "../have-questions";
import { FAQResponse } from "@/app/faq/page";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type FAQSectionProps = {
	faqs: FAQResponse;
};

const FAQSection = ({ faqs }: FAQSectionProps) => {
	const options = {};

	return (
		<section className='py-10 xl:py-16 bg-[#E8FFF8]'>
			<div className='container'>
				<div className='text-center'>
					<div className='text-grey-400'>FAQs</div>
					<h2 className='mt-3 font-semibold text-3xl xl:text-4xl text-grey-900'>
						Ask us anything
					</h2>
					<p className='mt-4 xl:mt-6 xl:text-xl'>
						Need something cleared up? Here are our most frequently asked
						questions.
					</p>
				</div>
				<div className='mt-8 xl:mt-20'>
					{faqs.items.map((faq, index) => {
						return (
							<div
								key={faq.fields.question}
								className={cn(
									"grid xl:grid-cols-7 max-xl:gap-y-6 xl:gap-x-10 py-6 border-b border-grey-400",
									{
										"border-t": index === 0,
									}
								)}>
								<div className='xl:col-span-3'>
									<h3 className='font-semibold text-lg text-grey-900'>
										{faq.fields.question}
									</h3>
								</div>
								<div className='xl:col-span-4'>
									<div className='prose text-grey-700'>
										{documentToReactComponents(faq.fields.answer, options)}
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<HaveQuestions />
			</div>
		</section>
	);
};

export default FAQSection;

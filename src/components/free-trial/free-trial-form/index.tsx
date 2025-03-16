"use client";

import Button from "@/components/global/button";
import Input from "@/components/global/Input";
import { FormProvider, useForm } from "react-hook-form";

const FreeTrialForm = () => {
	const methods = useForm({
		mode: "onChange",
		defaultValues: {},
	});

	const {
		formState: { errors, isValid },
	} = methods;

	const onSubmit = async () => {};

	return (
		<section>
			<div className='container grid xl:grid-cols-2 gap-x-24 py-10 xl:py-16'>
				<div>
					<h1 className='text-3xl xl:text-3xl font-semibold mt-3 text-grey-900'>
						Free Trial
					</h1>
					<p className='text-base mt-4 xl:mt-6'>
						Experience the power of Krofturg Technologies with our{" "}
						<b>free trial! </b>
						Get full access to our <b>Vendor Lifecycle Management Tool</b> for a
						limited time, allowing you to explore how our platform can help you
						manage risks, streamline vendor assessments, and enhance your cyber
						resilience. <br /> <br /> No commitments, no hidden fees, just a
						chance to see how our tool can transform your approach to vendor
						risk management. Sign up today and start securing your vendors with
						ease!
					</p>
				</div>
				<div>
					<FormProvider {...methods}>
						<form
							onSubmit={methods.handleSubmit(onSubmit)}
							className='w-full my-8'>
							<div className='w-full space-y-5'>
								<div className='w-full gap-x-8 grid grid-cols-2'>
									<Input
										name='firstName'
										label='First name'
										rules={["required"]}
										placeholder='First name'
									/>
									<Input
										name='lastName'
										label='Last name'
										rules={["required"]}
										placeholder='First name'
									/>
								</div>
								<Input
									name='email'
									label='Email'
									rules={["required", "email"]}
									placeholder='Email'
								/>
								<Input
									name='orgName'
									label='Organization name'
									rules={["required"]}
									placeholder='Organization name'
								/>
								<Input
									name='phone'
									label='Phone number'
									rules={["required", "phone"]}
									placeholder='Phone'
								/>
								<Input
									name='country'
									label='Country'
									rules={["required"]}
									placeholder='Country'
								/>
							</div>
						</form>
						<Button className='w-full'>Start Trial</Button>
					</FormProvider>
				</div>
			</div>
		</section>
	);
};

export default FreeTrialForm;

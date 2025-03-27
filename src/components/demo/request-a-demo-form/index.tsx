"use client";

import Button from "@/components/global/button";
import Input from "@/components/global/Input";
import Icons from "@/components/icons";
import { FormProvider, useForm } from "react-hook-form";

const RequestADemoForm = () => {
	const list = [
		"Experts in forensics, malware analysis, and incident response, the team works diligently to identify and neutralize security threats.",
		"Leveraging extensive knowledge and advanced tools, our DFIR professionals play a crucial role in minimizing the impact of cyber incidents on organizations.",
	];

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
						Request a Demo
					</h1>
					<p className='text-base mt-4 xl:mt-6'>
						Ready to streamline your vendor risk management? Request a demo of
						our <b>Vendor Lifecycle Management Tool</b> and see how it can
						simplify the way you access, manage, and mitigate risks with your
						vendors. Our team will guide you through the platform, answer any
						questions you have, and show you how our solution can enhance your
						security posture and compliance efforts.
					</p>
					{/* <ul className='mt-4 xl:mt-14 space-y-4'>
						{list.map((item, index) => {
							return (
								<li key={index} className='flex space-x-3 xl:space-x-6'>
									<Icons.CubeIcon />
									<p className='w-[calc(100%-24px)]'>{item}</p>
								</li>
							);
						})}
					</ul> */}
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
						<Button className='w-full'>Request a Demo</Button>
					</FormProvider>
				</div>
			</div>
		</section>
	);
};

export default RequestADemoForm;

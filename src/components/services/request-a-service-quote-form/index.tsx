"use client";

import Button from "@/components/global/button";
import Input from "@/components/global/Input";
import Icons from "@/components/icons";
import { useRequestServiceQuoteMutation } from "@/services/client";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RequestAServiceQuoteForm = () => {
	const list = [
		"Experts in forensics, malware analysis, and incident response, the team works diligently to identify and neutralize security threats",
		"Leveraging extensive knowledge and advanced tools, our DFIR professionals play a crucial role in minimizing the impact of cyber incidents on organizations",
	];

	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			desc: "",
			orgName: "",
			country: "",
		},
	});

	const {
		formState: { errors, isValid },
		reset,
	} = methods;

	const [requestServiceQuote, { isLoading }] = useRequestServiceQuoteMutation();

	const onSubmit = async () => {
		try {
			const result = await requestServiceQuote({
				firstName: methods.getValues("firstName"),
				lastName: methods.getValues("lastName"),
				email: methods.getValues("email"),
				phone: methods.getValues("phone"),
				orgName: methods.getValues("orgName"),
				service: "DFIR",
				country: methods.getValues("country"),
			}).unwrap();
			toast.success("Request sent successfully");
			reset();
		} catch (error: any) {
			toast.error(error.data.message);
		}
	};

	return (
		<section>
			<div className='container grid xl:grid-cols-2 gap-x-24 py-10 xl:py-16'>
				<div>
					<h1 className='text-3xl xl:text-3xl font-semibold mt-3 text-grey-900'>
						Request a Service Quote
					</h1>
					<p className='text-base mt-4 xl:mt-6'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						vulputate id ex ut blandit. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Aenean pretium imperdiet ante at eleifend. Nam at
						consequat turpis. Fusce eget mauris id lacus ultricies finibus.
						Etiam molestie in felis sed iaculis. Curabitur sollicitudin dolor in
						nisi finibus dapibus. Nulla facilisi. Proin ante lectus, dictum vel
						justo ut, laoreet tincidunt nibh.
					</p>
					<ul className='mt-4 xl:mt-14 space-y-4'>
						{list.map((item, index) => {
							return (
								<li key={index} className='flex space-x-3 xl:space-x-6'>
									<Icons.CubeIcon />
									<p className='w-[calc(100%-24px)]'>{item}</p>
								</li>
							);
						})}
					</ul>
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
									rules={["required"]}
									placeholder='Phone'
								/>
								<Input
									name='country'
									label='Country'
									rules={["required"]}
									placeholder='Country'
								/>
							</div>
							<div className='mt-8'>
								<Button
									type='submit'
									disabled={!isValid}
									isLoading={isLoading}
									className='w-full'>
									Request a Quote
								</Button>
							</div>
						</form>
					</FormProvider>
				</div>
			</div>
		</section>
	);
};

export default RequestAServiceQuoteForm;

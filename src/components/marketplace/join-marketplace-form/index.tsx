"use client";

import Button from "@/components/global/button";
import Input from "@/components/global/Input";
import Icons from "@/components/icons";
import { FormProvider, useForm } from "react-hook-form";

const JoinMarketplaceForm = () => {
	const list = [
		{
			title: "Discover New Business Opportunities",
			description:
				"Expand your reach by becoming part of our marketplace and tap into a pool of businesses seeking vendors. ",
		},
		{
			title: "Get discovered globally",
			description:
				"Get ahead of the competition and grow your client base intentionally.",
		},
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
						Be the First to Know About Business Needs – Join Our Marketplace
					</h1>
					<p className='text-base mt-4 xl:mt-6'>
						By joining our marketplace, you’ll gain exclusive access to a wide
						network of businesses actively seeking vendors. Whether you
						specialize in IT security, compliance, or other services, you can be
						among the first to know about opportunities and connect with
						businesses looking for reliable, top-rated partners.
					</p>
					<ul className='mt-4 xl:mt-14 space-y-4'>
						{list.map((item, index) => {
							return (
								<li key={index} className='flex space-x-3 xl:space-x-6'>
									<div>
										<Icons.CubeIcon />
									</div>
									<div>
										<h4 className='font-semibold'>{item.title}</h4>
										<p className='w-[calc(100%-24px)]'>{item.description}</p>
									</div>
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
						<Button className='w-full'>Join Marketplace</Button>
					</FormProvider>
				</div>
			</div>
		</section>
	);
};

export default JoinMarketplaceForm;

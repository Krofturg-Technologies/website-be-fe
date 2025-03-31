"use client";

import Button from "@/components/global/button";
import Input from "@/components/global/Input";
import { useContactUsMutation } from "@/services/client";
import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactHero = () => {
	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			desc: "",
		},
	});

	const {
		formState: { errors, isValid },
		reset,
	} = methods;

	const [contact, { isLoading }] = useContactUsMutation();

	const onSubmit = async () => {
		try {
			const result = await contact({
				firstName: methods.getValues("firstName"),
				lastName: methods.getValues("lastName"),
				email: methods.getValues("email"),
				phone: methods.getValues("phone"),
				desc: methods.getValues("desc"),
			}).unwrap();
			toast.success("Message sent successfully");
			reset();
		} catch (error: any) {
			toast.error(error.data.message);
		}
	};

	return (
		<section className='grid xl:grid-cols-2'>
			<Image
				width={749}
				height={858}
				alt=''
				src='/assets/images/contact-image.jpg'
				className='w-full hidden xl:block'
			/>
			<div className='container py-10 xl:py-24'>
				<div>
					<h1 className='text-3xl xl:text-4xl font-semibold mt-3 text-grey-900'>
						Level up your security
					</h1>
					<p className='text-base mt-4 xl:mt-5'>
						You can reach us anytime via{" "}
						<a href='mailto:info@krofturg.com' className='text-primary'>
							info@krofturg.com
						</a>
					</p>
				</div>
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
								name='phone'
								label='Phone number'
								rules={["required"]}
								placeholder='Phone'
							/>
							<Input
								name='desc'
								label='How can we help?'
								rules={["required"]}
								tag='textarea'
								placeholder='Tell us a little about the project...'
							/>
						</div>
						<div className='mt-8'>
							<Button
								type='submit'
								disabled={!isValid}
								isLoading={isLoading}
								className='w-full'>
								Contact Us
							</Button>
						</div>
					</form>
				</FormProvider>
			</div>
		</section>
	);
};

export default ContactHero;

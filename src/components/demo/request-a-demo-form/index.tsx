"use client";

import Button from "@/components/global/button";
import Input from "@/components/global/Input";
import SelectInput from "@/components/global/SelectInput";
import { countriesData, Country } from "@/data/countriesData";
import { useJoinWaitlistMutation } from "@/services/client";
import { CheckCheckIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Option = {
	name: string;
	value: string;
};

const RequestADemoForm = () => {
	const [searchCountries, setSearchCountries] = useState("");

	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			desc: "",
			orgName: "",
			country: null! as Country,
			service: null! as Option,
		},
	});

	const {
		watch,
		formState: { errors, isValid },
		reset,
	} = methods;

	const country = watch("country") as Country;

	const service = watch("service") as unknown as Option;

	const [joinWaitlist, { isLoading }] = useJoinWaitlistMutation();

	const onSubmit = async () => {
		try {
			const result = await joinWaitlist({
				firstName: methods.getValues("firstName"),
				lastName: methods.getValues("lastName"),
				email: methods.getValues("email"),
				phone: methods.getValues("phone"),
				orgName: methods.getValues("orgName"),
				service: service.value,
				country: country.name,
				ref: "demo",
			}).unwrap();
			toast.success("Request sent successfully");
			reset();
		} catch (error: any) {
			toast.error(error.data.message);
		}
	};

	const services = [
		"⁠Vendor Lifecycle & Risk Management",
		"Security Questionnaires",
	];

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
								<SelectInput
									name='service'
									label='Service'
									required
									position='top'
									trigger={(selected) => {
										return (
											<div className='flex h-min bg-transparent items-center space-x-1'>
												{selected?.name ? (
													<div className='text-[#667085]'>{selected?.name}</div>
												) : (
													<div className='mt-[2px] text-tc-secondary'>
														Select a service
													</div>
												)}
											</div>
										);
									}}
									options={services.map((service) => ({
										name: service,
										value: service,
									}))}
									optionComponent={(option, selectedOption) => {
										return (
											<div
												className={`py-3 w-full px-4 flex items-center space-x-5 text-tc-main hover:bg-pc-01 ${
													selectedOption?.name === option?.name
														? "bg-pc-01"
														: ""
												}`}>
												<div className='w-full flex items-center space-x-1'>
													<div>{option.name}</div>
												</div>

												{selectedOption?.name === option?.name && (
													<div>
														<CheckCheckIcon color='#00EAA3' />
													</div>
												)}
											</div>
										);
									}}
								/>
								<SelectInput
									name='country'
									label='Country'
									required
									position='top'
									onDropdownClose={() => setSearchCountries("")}
									trigger={(selected: Country) => {
										return (
											<div className='flex h-min bg-transparent items-center space-x-1'>
												{selected?.name ? (
													<>
														<div className='w-6 h-6 flex justify-center items-center rounded-full overflow-hidden'>
															<ReactCountryFlag
																className='text-2xl'
																countryCode={selected.iso}
																svg
																cdnUrl='https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/'
																cdnSuffix='svg'
																title={selected.name}
																aria-label={selected.name}
															/>
														</div>
														<div className='text-[#667085]'>
															{selected?.name}
														</div>
													</>
												) : (
													<div className='mt-[2px] text-tc-secondary'>
														Select your country
													</div>
												)}
											</div>
										);
									}}
									options={countriesData.filter((country) =>
										JSON.stringify(country)
											.toLowerCase()
											.includes(searchCountries.replace("+", "").toLowerCase())
									)}
									optionsHeader={
										<div className='p-4 w-full bg-white border-b border-pc-03'>
											<div className='flex items-center space-x-2 p-2 w-fit border border-pc-03 bg-pc-01 rounded-lg'>
												<SearchIcon color='' />
												<input
													className='outline-none bg-transparent text-sm text-tc-secondary'
													type='search'
													placeholder='Search countries'
													value={searchCountries}
													onChange={(e) => setSearchCountries(e.target.value)}
												/>
											</div>
										</div>
									}
									optionComponent={(
										option: Country,
										selectedOption: Country
									) => {
										return (
											<div
												className={`py-3 w-full px-4 flex items-center space-x-5 text-tc-main hover:bg-pc-01 ${
													selectedOption?.name === option?.name
														? "bg-pc-01"
														: ""
												}`}>
												<div className='w-full flex items-center space-x-1'>
													<div className='w-6 h-6 flex justify-center items-center rounded-full overflow-hidden'>
														<ReactCountryFlag
															className='text-2xl'
															countryCode={option.iso}
															svg
															cdnUrl='https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/'
															cdnSuffix='svg'
															title={option.name}
															aria-label={option.name}
														/>
													</div>
													<div>{option.name}</div>
												</div>

												{selectedOption?.name === option?.name && (
													<div>
														<CheckCheckIcon color='#00EAA3' />
													</div>
												)}
											</div>
										);
									}}
								/>
							</div>
							<div className='mt-8'>
								<Button
									type='submit'
									disabled={!isValid}
									isLoading={isLoading}
									className='w-full'>
									Join Waitlist
								</Button>
							</div>
						</form>
					</FormProvider>
				</div>
			</div>
		</section>
	);
};

export default RequestADemoForm;

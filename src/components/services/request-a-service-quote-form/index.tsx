"use client";

import Button from "@/components/global/button";
import Input from "@/components/global/Input";
import SelectInput from "@/components/global/SelectInput";
import Icons from "@/components/icons";
import { countriesData, Country } from "@/data/countriesData";
import { useRequestServiceQuoteMutation } from "@/services/client";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";
import { CheckCheckIcon, SearchIcon } from "lucide-react";

const RequestAServiceQuoteForm = () => {
	const [searchCountries, setSearchCountries] = useState("");

	const list = [
		"Customized Cybersecurity Solutions – Designed to meet your business needs.",
		"Proactive Risk Management – Helping organizations minimize cyber threats before they occur.",
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
			country: null! as Country,
			service: "",
		},
	});

	const {
		watch,
		formState: { errors, isValid },
		reset,
	} = methods;

	const country = watch("country") as Country;

	const [requestServiceQuote, { isLoading }] = useRequestServiceQuoteMutation();

	const onSubmit = async () => {
		try {
			const result = await requestServiceQuote({
				firstName: methods.getValues("firstName"),
				lastName: methods.getValues("lastName"),
				email: methods.getValues("email"),
				phone: methods.getValues("phone"),
				orgName: methods.getValues("orgName"),
				service: methods.getValues("service"),
				country: country.name,
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
						At Krofturg Technologies, we provide tailored risk management, cyber
						resilience solutions, and vendor lifecycle management to protect
						your business from security threats.
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
									name='service'
									label='Service'
									rules={["required"]}
									placeholder='What service are you requesting for?'
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
													<div className='text-sm mt-[2px] text-tc-secondary'>
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

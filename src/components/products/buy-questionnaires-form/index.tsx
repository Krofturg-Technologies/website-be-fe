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

const BuyQuestionnairesForm = () => {
	const [searchCountries, setSearchCountries] = useState("");

	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			orgName: "",
			country: null! as Country,
			phone: "",
		},
	});

	const {
		watch,
		formState: { errors, isValid },
		reset,
	} = methods;

	const country = watch("country") as Country;

	const [joinWaitlist, { isLoading }] = useJoinWaitlistMutation();

	const onSubmit = async () => {
		try {
			const result = await joinWaitlist({
				firstName: methods.getValues("firstName"),
				lastName: methods.getValues("lastName"),
				email: methods.getValues("email"),
				phone: methods.getValues("phone"),
				orgName: methods.getValues("orgName"),
				country: country.name,
				ref: "questionnaires",
			}).unwrap();
			toast.success(
				"You have successfully joined the buy questionnaires waitlist"
			);
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
						Buy Securtity Questionnaires
					</h1>
					<p className='text-base mt-4 xl:mt-6'>
						Simplify and streamline your vendor security assessments with
						Krofturg's Security Questionnaire. Designed to automate and
						standardize the process, our solution helps you evaluate third-party
						security practices efficiently while ensuring compliance with
						industry standards.
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

export default BuyQuestionnairesForm;

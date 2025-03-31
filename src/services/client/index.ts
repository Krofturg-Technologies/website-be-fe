import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type ContactUsRequest = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	desc: string;
};

export type ContactUsResponse = {};

export type ServiceQuoteRequest = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	orgName: string;
	service: string;
	country: string;
};

export type ServiceQuoteResponse = {};

export type JoinWaitlistRequest = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	orgName: string;
	service?: string;
	country?: string;
	ref: string; //quote for service quote -- trial for trial -- buy questionaire -- ans so on
	desc?: string; // If it applies.
};

export type JoinWaitlistResponse = {};

const postRequest = (url: string, details: unknown) => ({
	url,
	method: "POST",
	body: details,
});

export const client = createApi({
	reducerPath: "client",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://vlrm-be.onrender.com/api/client",
	}),
	endpoints: (builder) => ({
		contactUs: builder.mutation<ContactUsResponse, ContactUsRequest>({
			query: (credentials) => postRequest("/contactUs", credentials),
		}),
		joinWaitlist: builder.mutation<JoinWaitlistResponse, JoinWaitlistRequest>({
			query: (credentials) => postRequest("/waitlist", credentials),
		}),
		requestServiceQuote: builder.mutation<
			ServiceQuoteResponse,
			ServiceQuoteRequest
		>({
			query: (credentials) => postRequest("/serviceQuote", credentials),
		}),
	}),
});

export const {
	useContactUsMutation,
	useRequestServiceQuoteMutation,
	useJoinWaitlistMutation,
} = client;

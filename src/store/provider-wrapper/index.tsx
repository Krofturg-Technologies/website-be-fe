"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "..";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProviderWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<ToastContainer closeButton={false} />
			<Provider store={store}>{children}</Provider>
		</>
	);
};

export default ProviderWrapper;

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";
import Button from "../button";
import Icons from "@/components/icons";

const CookiesBanner = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const cookieConsent = Cookies.get("cookieConsent");
		if (!cookieConsent) {
			setIsVisible(true);
		}
	}, []);

	const handleAllow = () => {
		Cookies.set("cookieConsent", "allow", { expires: 365 });
		setIsVisible(false);
	};

	const handleDeny = () => {
		Cookies.set("cookieConsent", "deny", { expires: 365 });
		setIsVisible(false);
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className='fixed bottom-0 left-0 right-0 z-[9999] border-t-2 bg-white shadow-lg'
					initial={{ y: "100%" }}
					animate={{ y: 0 }}
					exit={{ y: "100%" }}
					transition={{ duration: 0.5 }}>
					<div className='relative'>
						<button
							onClick={() => setIsVisible(false)}
							className='absolute right-2 top-2 flex justify-center items-center'>
							<Icons.CloseIcon className='fill-grey-900' />
						</button>
						<div className='container py-6 max-xl:space-y-6 xl:space-x-6 xl:flex justify-between items-center'>
							<div className='flex-1 col-span-3'>
								<h1 className='text-xl xl:text-2xl font-semibold text-grey-900'>
									This website uses cookies
								</h1>
								<p className='text-sm xl:text-base mt-1 xl:mt-2'>
									This website uses scripts like cookies and similar technology
									that is able to read, write and store information on your
									browser and device for the purpose of enhancing your user
									experience. By clicking “Allow”, you consent to our use of
									cookies in accordance with our Cookie Policy
								</p>
							</div>
							<div className='max-xl:space-y-3 xl:flex xl:space-x-3'>
								<Button className='max-xl:w-full' onClick={handleAllow}>
									Allow
								</Button>
								<Button
									className='max-xl:w-full'
									theme='outline'
									onClick={handleDeny}>
									Deny
								</Button>
							</div>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default CookiesBanner;

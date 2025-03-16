import Articles from "@/components/home/articles";
import Hero from "@/components/home/hero";
import Partners from "@/components/home/partners";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import UserDataSafe from "@/components/home/user-data-safe";

export default function Home() {
	return (
		<>
			<Hero />
			{/* <Partners /> */}
			<Services />
			{/* <Testimonials /> */}
			<Articles />
			<UserDataSafe />
		</>
	);
}

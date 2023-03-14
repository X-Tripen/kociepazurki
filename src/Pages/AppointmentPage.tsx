import React from "react";
import Footer from "../Components/Footer";
import SignupForm from "../Components/LoginForm";
import NavigationList from "../Components/Navigation/NavigationList";
import SocialMediaList from "../Components/SocialMedia/SocialMediaList";

const AppointmentPage: React.FC = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center bg-gray-200 min-h-screen  pt-11 w-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-rose-300/40 via-gray-200 to-indigo-500/10">
				<NavigationList />
				<section className=" bg-gray-100 overflow-hidden xl:rounded-xl max-w-7xl shadow-xl">
					<h2 className="text-2xl text-stone-600 font-roboto font-extralight mt-8 italic text-center px-12">
						Jeżeli chiałbyś / chciałabyś umówić się ze mną na manicure to
						skorzystaj z formularza.
					</h2>
					<h1 className="text-4xl text-stone-600 font-roboto font-extralight mt-12 md:mt-16 italic text-center">
						Umów Spotkanie
					</h1>
					<SignupForm />
					<p className="text-2xl text-stone-600 font-roboto font-extralight md:mt-2 italic text-center px-12">
						Albo napisz do mnie prywatnie poprzez któryś z poniższych linków do
						moich social mediów:
					</p>
					<SocialMediaList />
				</section>
			</div>
			<Footer />
		</>
	);
};

export default AppointmentPage;

import React from "react";
import Footer from "../Components/Footer";
import NavigationList from "../Components/Navigation/NavigationList";
import PortfolioShowcaseList from "../Components/PortfolioShowcase/PortfolioShowcaseList";
import profilePic from "../Images/Gaba.jpg";

const HomePage: React.FC = () => {
	return (
		<div className="flex flex-col items-center bg-gray-200 min-h-screen  pt-10 w-full">
			<NavigationList />
			<section className=" bg-gray-100 overflow-hidden rounded-sm  max-w-7xl">
				<div className="flex justify-between">
					<div className="px-12 flex flex-col justify-center">
						<h1 className="text-6xl font-roboto italic text-stone-700 font-bold leading-snug">
							Hej. Mam na imię <span className="text-rose-500">Gabriela</span>
							...
						</h1>
						<h2 className="text-4xl text-stone-600 font-roboto font-extralight  mt-8 italic text-right mr-2 ">
							...I jestem stylistką paznokci
						</h2>
					</div>
					<img
						className="p-8 w-1/4 h-1/4 object-cover rounded-full"
						src={profilePic}
						alt=""
					/>
				</div>
			</section>
			<section className=" bg-gray-100 overflow-hidden rounded-sm max-w-7xl">
				<div className="flex justify-between">
					<img className="p-2 w-2/5 object-cover" src={profilePic} alt="" />
					<div className="px-12 py-32">
						<h1 className="text-4xl font-roboto italic text-stone-700 font-bold leading-snug">
							Moja pasja do manicure hybrydowego zaczeła się ...
						</h1>
						<h2 className="text-4xl text-stone-600 font-roboto font-extralight  mt-8 italic text-right mr-2 ">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
							quia magnam est. Nobis, enim veniam porro assumenda perferendis
							repellendus alias? Aut animi corrupti ducimus facere similique!
							Pariatur expedita ad hic.
						</h2>
					</div>
				</div>
			</section>
			<section className=" bg-gray-100 overflow-hidden rounded-sm max-w-7xl">
				<h2 className="text-4xl text-stone-600 font-roboto font-extralight  mt-8 italic text-right p-8">
					Oto kilka moich kreacji:
				</h2>
				<PortfolioShowcaseList />
			</section>
			<Footer />
		</div>
	);
};

export default HomePage;

import React from "react";
import ReactDOM from "react-dom/client";

import Menu from "./components/Menu";
import PalletPicker from "./components/PalettePicker";
import { Context } from "./Context";

import { PALLETS, SECTIONS } from "./constants";
import { BrowserRouter as Router } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';

import "./index.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

const App = () => {
	const [pallet, setPallet] = React.useState(PALLETS[0].className);
	const [selected, setSelected] = React.useState(SECTIONS[0].title);

	const selectPallet = pallet => {
		setPallet(pallet);
	};

	// everytime pallet changes. change className of root div
	React.useEffect(() => {
		const root = document.getElementById("root");
		root.className = pallet;
	}, [pallet]);

	return (
		<Router>
			<Context.Provider value={{ 
				selectPallet,
				pallet,
				}}>
				<div className="mx-auto h-full w-full bg-skin-fill flex px-32">
					<div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24 lg:justify-between">
						<div className="items-center flex-clmn ">
							<div className="flex-clmn  w-4/6">
				<img style={{
									height: "200px",
									width: "200px",
									borderRadius: "50%",
									marginRight: "5px",
									marginLeft: "5px",
									cursor: "pointer",
								}}
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXjGP31UWobvCrN_gGZEctslXRGpMeFR5Wkw&s"
								></img>
								<PalletPicker />
								<h1 className="text-skin-base text-4xl sm:text-5xl mt-4 sm:text-6xl text-5xl mt-4 text-primary text-shadow-purple finished-typing">Valeria Barzola</h1>
								<div className="my-2">
									<span className="font-bold text-skin-base">Fullstack Developer</span>
								</div>
						
								<br></br>
							</div>
							<Menu selected={selected} setSelected={setSelected} />
						</div>
						<div className="flex">
						<i className="fa-brands fa-github mx-2 text-skin-base"></i>
						<i className="fa-brands fa-linkedin mx-2 text-skin-base"></i>
						<i className="fa-brands fa-x-twitter mx-2 text-skin-base"></i>
						<i className="fa-brands fa-goodreads mx-2 text-skin-base"></i>
						</div>
					</div>
					<div className="lg:w-1/2 lg:py-24 flex flex-col gap-[40px]">
						{SECTIONS.map(section => {
							const Component = section.component;
							return <Component key={section.title} id={section.id} />;
						})}
					</div>
				</div>
			</Context.Provider>
		</Router>
	);
};

root.render(<App />);

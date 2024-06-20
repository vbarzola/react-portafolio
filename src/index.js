import React from "react";
import ReactDOM from "react-dom/client";

import Menu from "./components/Menu";
import PalletPicker from "./components/PalettePicker";
import { Context } from "./Context";

import { PALLETS, SECTIONS } from "./constants";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

const App = () => {
	const [pallet, setPallet] = React.useState(PALLETS[0].className);
	const [selected, setSelected] = React.useState(SECTIONS[0].title);

	const selectPallet = pallet => {
		setPallet(pallet);
	};

	// everytime pallet changes. change class of root div
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
				<div className="mx-auto h-full px-24 w-full bg-skin-fill flex">
					<div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24">
						<div className="flex items-center">
							<div className="flex-clmn  w-4/6">
								<h1 className="text-skin-base text-4xl sm:text-5xl">Valeria Barzola</h1>
								<div className="my-2">
									<span className="font-bold text-skin-base">Current position</span>
								</div>

								<div className="my-2 text-skin-base">
									<span>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum qui
										doloremque tempore sint enim voluptas impedit ex, suscipit aspernatur
										tempora? Nulla, obcaecati laudantium sapiente praesentium ipsum earum
										similique maiores perferendis.
									</span>
								</div>
								<PalletPicker />
								<br></br>
							</div>
						</div>
						<Menu selected={selected} setSelected={setSelected} />
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

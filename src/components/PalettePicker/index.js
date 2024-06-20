import React, { useContext } from "react";

import { Context } from "../../Context";
import { PALLETS } from "../../constants";


const Circle = ({ color, onClick, selected }) => (
	<div
		onClick={onClick}
		style={{
			height: "20px",
			width: "20px",
			backgroundColor: color,
			borderRadius: "50%",
			marginRight: "5px",
			marginLeft: "5px",
			cursor: "pointer",
			border: selected ? "2px solid white" : "none",
		}}></div>
);

const PalletPicker = () => {
	const { selectPallet, pallet : selectedPallete } = useContext(Context);

	return (
		<div className="flex mt-4">
			{PALLETS.map(pallet => (
				<Circle
					color={pallet.color}
					selected={selectedPallete === pallet.className}
					onClick={() => selectPallet(pallet.className)}
				/>
			))}
		</div>
	);
};

export default PalletPicker;

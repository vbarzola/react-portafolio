import React from "react";


import './index.css';

const Badge = ({ children }) => {
	return (
		<span
			className={`
        inline-block text-xs 
        px-2 py-1 rounded-full tracking-wide
        text-skin-base
        bg-skin-accent-opacity-50
      `}>
			{children}
		</span>
	);
};

const Card = ({
	img,
	title,
	position,
	description,
	startDate,
	endDate,
	tags,
}) => {
	return (
		<div className="flex flex-col md:flex-row items-start p-8 rounded-lg mb-4 card-experience">
			<div className="text-skin-base font-bold text-sm whitespace-nowrap mr-8 mt-[8px]">
				{
					startDate && endDate && 
					`${startDate} - ${endDate}`
				}
			</div>

			{
				img && (
					<img
						style={{
							width: "150px",
							marginRight: "12px",
							borderRadius: "5px",
						}}
						src={img}
						alt={title}
					/>
				)
			}


			<div className="flex flex-col">
				<h2 className="text-2xl font-bold position"> {title} </h2>
				<h4 className="text-lg font-semibold text-skin-base"> {position} </h4>
				<p className="text-skin-base text-sm">{description}</p>

				<div className="flex space-x-2 mt-4">
					{tags.map((tag, index) => (
						<Badge key={index}> {tag} </Badge>
					))}
				</div>
			</div>
		</div>
	);
};

export default Card;

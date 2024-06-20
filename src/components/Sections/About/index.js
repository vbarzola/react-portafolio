import React, { useContext } from "react";
import data from "../../../data/skills.json";
import { Context } from "../../../Context";

import './index.css';

const About = ({ id }) => {

	const { pallet } = useContext(Context);
	
	return (
		<div id={id} className="about-container">
			<span className="text-skin-base">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</span>
      <div className="my-4">
      <h1 className="bold flex justify-center text-skin-accent">Skills</h1>
			<div id="skill-grid" className="mt-4" >
				{data.data.map((skill, index) => (
					<div className="flex-clmn" key={index}>
						<img 
							src={`./skills/${pallet}/${skill.img}`}
							alt={skill.title} />
						<span className="text-skin-base">{skill.name}</span>
					</div>
				))}
			</div>
      </div>
		</div>
	);
};

export default About;

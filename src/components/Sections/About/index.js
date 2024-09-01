import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../Context";

import Slider from "react-slick";

import './index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import skillsData  from '../../../data/skills.json';


const About = ({ id }) => {
	const { pallet } = useContext(Context);
	const [matrix, setMatrix] = useState([]);
	useEffect(() => {
		const skills = skillsData.data;
		const matrixtmp = [];
		const chunk = 9;
		for (let i = 0; i < skills.length; i += chunk) {
			matrixtmp.push(skills.slice(i, i + chunk));
		}
		setMatrix(matrixtmp);
	}, []);

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div id={id} className="about-container">
			<span className="text-skin-base">
				Computer science engineer. I started my career as a fullstack developer in
				2020. I have experience in developing web applications using React, Node.js,
				and MongoDB. I experienced the field of data analysis and machine learning,
				where I developed projects using Python and R. I am passionate about
				creating beautiful and innovative solutions to complex problems.<br></br>I
				am a quick learner and I am always looking for new challenges.<br></br>
				<br></br>
				When i'm not coding, I enjoy playing video games and reading.
			</span>
			<div className="my-4">
				<Slider {...settings}>
					{
						matrix.map((skills, index) => (
							<div key={index} className="skill-grid">
								{skills.map((skill, index) => (
									<div key={index} className="flex flex-col items-center mx-4">
										<img
											className="w-16 h-16"
											src={`./skills/${pallet}/${skill.img}`}
											alt={skill.name}
										/>
										<span className="text-skin-base">{skill.name}</span>
									</div>
								))}
							</div>
						))
					}
				</Slider>
			</div>
		</div>
	);
};

export default About;

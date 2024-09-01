import React from 'react';
import Card from '../../shared/Card';

const Projects = ({ id }) => {

	const projects = [
		{
			title: 'Project 1',
			img: 'https://alexvelez.herokuapp.com/assets/img/projects/MusicGenerator_preview.png',
			position: 'Full-time',
			description: 'Designed and developed features for a web application. Managed a team of 3 developers. Conducted code reviews and mentored junior developers.',
			tags: ['React', 'TypeScript', 'Node.js', 'MySQL'],
		},
		{
			title: 'Project 2',
			position: 'Full-time',
			description: 'Developed a web application using React and Node.js. Implemented a RESTful API. Conducted code reviews and pair programming sessions.',
			tags: ['React', 'Node.js', 'MongoDB', 'Express'],
		}
	];

  return (
    <div className='text-skin-base' id={id}>
      <span className="text-skin-base">
				{
					 // for each project a card
					 projects.map((project, index) => (
						<Card key={index} {...project} />
					))
				}
			</span>
    </div>
  );
}

export default Projects;
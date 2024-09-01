import React from 'react';
import Card from '../../shared/Card';

const data = [
  {
    title: 'Tech Lead',
    position: 'Full-time',
    description: 'Designed and developed features for a web application. Managed a team of 3 developers. Conducted code reviews and mentored junior developers.',
    startDate: '2023',
    endDate: 'Present',
    tags: ['React', 'TypeScript', 'Node.js', 'MySQL'],
  },
  {
    title: 'Software Developer',
    position: 'Full-time',
    description: 'Developed a web application using React and Node.js. Implemented a RESTful API. Conducted code reviews and pair programming sessions.',
    startDate: '2022',
    endDate: '2023',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
];


const Experience = ({ id }) => {
  return (
    <div id={id}>
      <div className="mt-4">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
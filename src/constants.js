import About from "./components/Sections/About";
import Experience from "./components/Sections/Experience";
import Projects from "./components/Sections/Projects";

export const SECTIONS = [
  {
    title: 'ABOUT',
    component: About,
    id: 'about'
  },
  {
    title: 'EXPERIENCE',
    component: Experience,
    id: 'experience'
  },
  {
    title: 'PROJECTS',
    component: Projects,
    id: 'projects'
  }
];

export const PALLETS = [
	{
		color: "rgba(239, 152, 167, 1)",
		className: "default",
	},
  {
		color: "rgba(128, 112, 148, 1)",
		className: "dark",
	},
	{
		color: "rgba(247, 190, 169, 1)",
		className: "Orange",
	},
];
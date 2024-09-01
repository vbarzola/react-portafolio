import React, { useEffect }from "react";
import { SECTIONS } from "../../constants";

import { Link } from "react-router-dom";
import { useLocation} from "react-router-dom";

import "./index.css";

const Menu = ({ selected, setSelected, className= '' }) => {

  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const id = hash.replace('#', '');
      setSelected(id);
      const element = document.getElementById(id);
      if (element) {
				const elementPosition = element.offsetTop;
				const topOffset = 40;
				window.scrollTo({
							top: elementPosition - topOffset,
						 behavior: "smooth"
				});
				
      }
    }
  }, [location, setSelected]);  

	return (
			<div className={`justify-center ${className} mt-4`}>
				{SECTIONS.map((section, index) => (
					<div key={index} className="py-2">
						<div className="menu-item-container">
							<Link
								to={`#${section.id}`}
								className={`menu-option ${
									selected === section.id
										? "text-skin-base font-bold"
										: "text-skin-base"
								}`}>
								{section.title}
							</Link>
							{selected === section.id && <div className="line" />}
						</div>
					</div>
				))}
			</div>
	);
};

export default Menu;

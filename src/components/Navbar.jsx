import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { data } from "../data/sections";

const Navbar = () => {
  const { pathname } = useLocation();
  const [section, setSection] = useState(pathname.slice(1));

  return (
    <nav className="navbar-component">
      <ul className="navbar-list">
        {data.map((item) => (
          <li key={item.name} onClick={() => setSection(item.name)}>
            <Link to={item.name}>
              <ReactSVG
                src={item.logo}
                className={item.name === section ? "section-active" : ""}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

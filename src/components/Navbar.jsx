import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { data } from "../data/sections";

const Navbar = () => {
  const [section, setSection] = useState("home");

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

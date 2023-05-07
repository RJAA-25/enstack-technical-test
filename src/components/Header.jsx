import { useContext } from "react";
import { Link } from "react-router-dom";
import { clientContext } from "../context/client";
import { ReactSVG } from "react-svg";
import search from "/src/assets/svg/search.svg";
import basket from "/src/assets/svg/basket.svg";

const Header = () => {
  const { cart } = useContext(clientContext);
  const totalItems = cart.reduce((a, b) => a + b.quantity, 0);

  return (
    <div className="header-component">
      <ReactSVG src={search} />
      <div>
        <span>Make Home</span>
        <span>Beautiful</span>
      </div>
      <Link to="/cart">
        <span>{totalItems}</span>
        <ReactSVG src={basket} />
      </Link>
    </div>
  );
};

export default Header;

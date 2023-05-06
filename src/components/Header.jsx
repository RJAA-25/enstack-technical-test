import { ReactSVG } from "react-svg";
import search from "/src/assets/svg/search.svg";
import cart from "/src/assets/svg/cart.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-component">
      <ReactSVG src={search} />
      <div>
        <span>Make Home</span>
        <span>Beautiful</span>
      </div>
      <Link to="/cart">
        <ReactSVG src={cart} />
      </Link>
    </div>
  );
};

export default Header;

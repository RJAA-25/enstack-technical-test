import { ReactSVG } from "react-svg";
import logo from "/src/assets/svg/logo.svg";

const Logo = () => {
  return (
    <div className="logo-component">
      <div className="logo-divide"></div>
      <ReactSVG src={logo} />
      <div className="logo-divide"></div>
    </div>
  );
};

export default Logo;

import { ReactSVG } from "react-svg";
import congrats from "/src/assets/svg/congrats.svg";
import { Link } from "react-router-dom";

const Congrats = () => {
  return (
    <div className="congrats-container">
      <div className="congrats-content">
        <h1>Success!</h1>
        <ReactSVG src={congrats} />
        <p>
          Your order will be delivered soon.
          <br />
          Thank you for choosing our app.
        </p>
      </div>
      <button>Track your orders</button>
      <button>
        <Link to="/home">Back to home</Link>
      </button>
    </div>
  );
};

export default Congrats;

import { Link } from "react-router-dom";

const Boarding = () => {
  return (
    <div className="boarding-container">
      <div className="boarding-img">
        <img src="/src/assets/images/boarding.jpg" alt="Boarding" />
      </div>
      <div className="boarding-content">
        <h1>
          Make Your <br />
          Home Beautiful
        </h1>
        <p>
          The best simple place where you discover most wonderful furnitures and
          make your home beautiful
        </p>
        <Link to="/login">Get Started</Link>
      </div>
    </div>
  );
};

export default Boarding;

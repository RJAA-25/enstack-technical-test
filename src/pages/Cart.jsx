import { useContext, useEffect, useState } from "react";
import { clientContext } from "../context/client";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import { priceFormat, validPromo } from "../helper";
import { ReactSVG } from "react-svg";
import left from "/src/assets/svg/left.svg";
import right from "/src/assets/svg/right.svg";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, checkoutCart } = useContext(clientContext);
  // const cost = cart.reduce((a, b) => a + b.total, 0);

  const [promo, setPromo] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const cost = cart.reduce((a, b) => a + b.total, 0);
    const total = (cost * (100 - discount)) / 100;
    setTotalCost(total);
  }, [cart, discount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validPromo.test(promo)) {
      let discount = Number(promo.match(/\d{2}/)[0]);
      setDiscount(discount);
    } else {
      setDiscount(0);
    }
  };

  return (
    <div className="cart-container">
      <button onClick={() => navigate(-1)} className="cart-back">
        <ReactSVG src={left} />
      </button>
      <h1>Cart</h1>
      <ul className="cart-list">
        {cart.map((item) => (
          <CartItem key={item.product_id} item={item} />
        ))}
      </ul>
      <div className="cart-summary">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="promo"
            placeholder="Enter your promo code"
            onChange={(e) => setPromo(e.target.value)}
          />
          <button>
            <ReactSVG src={right} />
          </button>
        </form>
        <div className="cart-total">
          <span>Total:</span>
          <span className={discount ? "cart-discounted" : ""}>
            {priceFormat.format(totalCost).replace("$", "$ ")}
          </span>
        </div>
        <button
          className="cart-checkout"
          onClick={() => {
            checkoutCart();
            setTotalCost(0);
            setDiscount(0);
            setPromo("");
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

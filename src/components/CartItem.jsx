import { useContext, useState } from "react";
import { clientContext } from "../context/client";
import { ReactSVG } from "react-svg";
import { priceFormat } from "../helper";
import remove from "/src/assets/svg/remove.svg";
import minus from "/src/assets/svg/minus.svg";
import plus from "/src/assets/svg/plus.svg";

const CartItem = (props) => {
  const { item } = props;

  const [quantity, setQuantity] = useState(item.quantity);
  const { addToCart, removeFromCart } = useContext(clientContext);

  return (
    <li className="cart-item">
      <div className="cart-img">
        <img src="https://picsum.photos/1000" alt={item.name} />
      </div>
      <div className="cart-details">
        <span>{item.name}</span>
        <span>{priceFormat.format(item.price).replace("$", "$ ")}</span>
        <div className="cart-quantity">
          <button
            disabled={quantity === item.stock}
            onClick={() => {
              setQuantity((state) => state + 1);
              addToCart(item, quantity + 1);
            }}
          >
            <ReactSVG src={plus} />
          </button>
          <span>{quantity}</span>
          <button
            disabled={quantity === 1}
            onClick={() => {
              setQuantity((state) => state - 1);
              addToCart(item, quantity - 1);
            }}
          >
            <ReactSVG src={minus} />
          </button>
        </div>
      </div>
      <button className="cart-remove" onClick={() => removeFromCart(item)}>
        <ReactSVG src={remove} />
      </button>
    </li>
  );
};

export default CartItem;

import { useContext } from "react";
import { clientContext } from "../context/client";
import { Link } from "react-router-dom";
import { priceFormat } from "../helper";
import { ReactSVG } from "react-svg";
import remove from "/src/assets/svg/remove.svg";
import bag from "/src/assets/svg/bag.svg";

const FavoriteItem = (props) => {
  const { item } = props;
  const { toggleFavorite, toggleCart, cart } = useContext(clientContext);
  const cartItem = cart.find((obj) => obj.product_id === item.product_id);

  return (
    <li className="favorite-item">
      <Link to={`/products/${item.product_id}`} className="favorite-link">
        <div className="favorite-img">
          <img
            // src="https://picsum.photos/1000"
            src={item.main_image}
            alt={item.name}
          />
        </div>
        <div className="favorite-details">
          <span>{item.name}</span>
          <span>{priceFormat.format(item.price).replace("$", "$ ")}</span>
        </div>
      </Link>
      <div className="favorite-add-remove">
        <button onClick={() => toggleFavorite(item)}>
          <ReactSVG src={remove} />
        </button>
        <button
          // className={`${cartItem ? ".cart-toggle" : ""}`}
          onClick={() => toggleCart(item)}
        >
          <ReactSVG src={bag} />
        </button>
      </div>
    </li>
  );
};

export default FavoriteItem;

import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clientContext } from "../context/client";
import { priceFormat } from "../helper";
import { ReactSVG } from "react-svg";
import left from "/src/assets/svg/left.svg";
import minus from "/src/assets/svg/minus.svg";
import plus from "/src/assets/svg/plus.svg";
import gold from "/src/assets/svg/gold.svg";
import favorite from "/src/assets/svg/favorite.svg";

const Product = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const {
    products,
    toggleFavorite,
    favorite: favorites,
    cart,
    addToCart,
  } = useContext(clientContext);
  const productItem = products.find((obj) => obj.product_id === productId);
  const cartItem = cart.find((obj) => obj.product_id === productId);
  const favoriteItem = favorites.find((obj) => obj.product_id === productId);

  const {
    name,
    price,
    main_image,
    product_images,
    description,
    rating,
    review_count,
    stock,
  } = productItem;

  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 0);

  const disableButton =
    (!cartItem && quantity === 0) || cartItem?.quantity === quantity;

  const buttonContent =
    !cartItem || cartItem?.quantity === quantity
      ? "Add to cart"
      : quantity === 0
      ? "Remove from cart"
      : "Update cart";

  return (
    <div className="product-container">
      <div className="product-img">
        <img
          // src="https://picsum.photos/1000"
          src={main_image}
          alt={productItem.name}
        />
      </div>
      <button onClick={() => navigate(-1)} className="product-back">
        <ReactSVG src={left} />
      </button>
      <div className="product-details">
        <h1>{name}</h1>
        <div className="product-price-quantity">
          <span className="product-price">
            {priceFormat.format(price).replace("$", "$ ")}
          </span>
          <div className="product-quantity">
            <button
              disabled={quantity === stock}
              onClick={() => setQuantity((state) => state + 1)}
            >
              <ReactSVG src={plus} />
            </button>
            <span>{String(quantity).padStart(2, "0")}</span>
            <button
              disabled={quantity === 0}
              onClick={() => setQuantity((state) => state - 1)}
            >
              <ReactSVG src={minus} />
            </button>
          </div>
        </div>
        <div className="product-rating">
          <ReactSVG src={gold} />
          <span className="product-rating-score">{rating.toFixed(2)}</span>
          <span className="product-rating-review">{`(${review_count} reviews)`}</span>
        </div>
      </div>

      <div className="product-description">{description}</div>

      <div className="product-actions">
        <button
          className={`product-favorite ${
            favoriteItem ? "favorite-active" : ""
          }`}
          onClick={() => toggleFavorite(productItem)}
        >
          <ReactSVG src={favorite} />
        </button>
        <button
          className={`product-add ${disableButton ? "product-disable" : ""} ${
            buttonContent === "Remove from cart" ? "product-remove" : ""
          }`}
          disabled={disableButton}
          onClick={() => addToCart(productItem, quantity)}
        >
          {buttonContent}
        </button>
      </div>
    </div>
  );
};

export default Product;

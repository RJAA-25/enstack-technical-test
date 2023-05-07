import { useContext } from "react";
import { clientContext } from "../context/client";
import FavoriteItem from "../components/FavoriteItem";

const Favorite = () => {
  const { favorite, addFavoritesToCart } = useContext(clientContext);

  return (
    <div className="favorite-container">
      <h1>Favorites</h1>
      <ul className="favorite-list">
        {favorite.map((item) => (
          <FavoriteItem key={item.product_id} item={item} />
        ))}
      </ul>
      <div className="favorite-action">
        <button onClick={() => addFavoritesToCart()}>Add all to my cart</button>
      </div>
    </div>
  );
};

export default Favorite;

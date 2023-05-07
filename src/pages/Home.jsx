import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { clientContext } from "../context/client";
import { priceFormat } from "../helper";
import { data } from "../data/products";
import Categories from "../components/Categories";
import Header from "../components/Header";
import bag from "/src/assets/svg/bag.svg";

const Home = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("popular");
  const [products, setProducts] = useState([]);

  const { products: data, cart, toggleCart } = useContext(clientContext);

  const toggleBasket = (item) => {
    return cart.find((obj) => obj.product_id === item.product_id);
  };

  useEffect(() => {
    let items;
    if (category === "popular") {
      items = [...data].filter((obj) => obj.rating >= 4);
    } else {
      items = [...data].filter((obj) => obj.type === category);
    }
    items.sort((a, b) => {
      // Sort by priority
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
        // Sort alphabetically if same priority
      } else {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        else return 0;
      }
    });
    setProducts(items);
  }, [category]);

  return (
    <div className="home-container">
      <Header />
      <Categories category={{ category, setCategory }} />
      <div className="home-products-container">
        {products.map((item) => (
          <div key={item.product_id} className="home-product">
            <div className="home-product-img">
              <img
                // src="https://picsum.photos/1000"
                src={item.main_image}
                alt={item.name}
                onClick={() => navigate(`/products/${item.product_id}`)}
              />
              <ReactSVG
                src={bag}
                className={`add-to-cart ${
                  toggleBasket(item) ? "cart-toggle" : ""
                }`}
                onClick={() => toggleCart(item)}
              />
            </div>
            <div
              className="home-product-details"
              onClick={() => navigate(`/products/${item.product_id}`)}
            >
              <span className="home-product-name">{item.name}</span>
              <span className="home-product-price">
                {priceFormat.format(item.price).replace("$", "$ ")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

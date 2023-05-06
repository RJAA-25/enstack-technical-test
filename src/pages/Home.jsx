import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import Categories from "../components/Categories";
import Header from "../components/Header";
import { data } from "../data/products";
import { priceFormat } from "../helper";
import bag from "/src/assets/svg/bag.svg";

const Home = () => {
  const [category, setCategory] = useState("popular");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let items;
    if (category === "popular") {
      items = data.filter((obj) => obj.rating >= 4);
    } else {
      items = data.filter((obj) => obj.type === category);
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
          <div key={item.name} className="home-product">
            <div className="home-product-img">
              <img
                src="https://picsum.photos/500"
                alt={item.name}
                onClick={() => alert("Moving to Product Page")}
              />
              <ReactSVG
                src={bag}
                className="add-to-cart"
                onClick={() => alert(`${item.name} has been added to cart`)}
              />
            </div>
            <div
              className="home-product-details"
              onClick={() => alert("Moving to Product Page")}
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

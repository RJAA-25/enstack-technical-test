import { ReactSVG } from "react-svg";
import { data } from "../data/categories";

const Categories = (props) => {
  const {
    category: { category, setCategory },
  } = props;

  return (
    <div className="category-component">
      <ul className="category-list">
        {data.map((item) => (
          <li
            key={item.name}
            className={`category-item ${
              category === item.name ? "category-active" : ""
            }`}
            onClick={() => setCategory(item.name)}
          >
            <ReactSVG src={item.logo} className="category-logo" />
            <span className="category-name">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

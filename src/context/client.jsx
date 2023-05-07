import { createContext, useState } from "react";
import { data } from "../data/products";
import { toast } from "react-hot-toast";
export const clientContext = createContext({});

export const ClientProvider = (props) => {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);

  // Favorite
  const toggleFavorite = (item) => {
    toast.dismiss();
    const target = favorite.find((obj) => obj.product_id === item.product_id);
    if (!target) {
      setFavorite((state) => [...state, item]);
      toast.success("Added to favorites");
    } else {
      // Create clone of favorite items
      const arr = [...favorite];
      const index = arr.indexOf(target);
      // Remove target item
      arr.splice(index, 1);
      setFavorite(arr);
      toast("Removed from favorites");
    }
  };

  const toggleCart = (item) => {
    toast.dismiss();
    const target = cart.find((obj) => obj.product_id === item.product_id);
    if (!target) {
      addToCart(item);
    } else {
      removeFromCart(item);
    }
  };

  const addFavoritesToCart = () => {
    favorite.forEach((item) => {
      const target = cart.find((obj) => obj.product_id === item.product_id);
      if (!target) addToCart(item);
    });
    toast.dismiss();
    toast.success("Added favorites to cart");
  };

  const addToCart = (item, quantity = 1) => {
    toast.dismiss();
    const target = cart.find((obj) => obj.product_id === item.product_id);
    if (!target) {
      if (item.stock >= quantity) {
        const cartItem = {
          product_id: item.product_id,
          name: item.name,
          main_image: item.main_image,
          stock: item.stock,
          price: item.price,
          quantity,
          total: quantity * item.price,
        };
        toast.success("Added to cart");
        setCart((state) => [...state, cartItem]);
      }
    } else {
      if (quantity === 0) {
        removeFromCart(item);
      } else {
        const arr = [...cart];
        const index = arr.indexOf(target);
        // Update attributes
        arr[index].quantity = quantity;
        arr[index].total = target.price * quantity;
        setCart(arr);
        toast.success("Updated cart");
      }
    }
  };
  const removeFromCart = (item) => {
    toast.dismiss();
    const target = cart.find((obj) => obj.product_id === item.product_id);
    // Create clone of favorite items
    const arr = [...cart];
    const index = arr.indexOf(target);
    arr.splice(index, 1);
    setCart(arr);
    toast("Removed from cart");
  };

  const checkoutCart = () => {
    const arr = [...products];
    cart.forEach((item) => {
      const target = products.find((obj) => obj.product_id === item.product_id);
      const index = products.indexOf(target);
      arr[index].stock = target.stock - item.quantity;
    });
    setProducts(arr);
    setCart([]);
    toast.success("Checkout successful");
  };

  const initialState = {
    products,
    favorite,
    toggleFavorite,
    addFavoritesToCart,
    cart,
    toggleCart,
    addToCart,
    removeFromCart,
    checkoutCart,
  };

  return (
    <clientContext.Provider value={initialState}>
      {props.children}
    </clientContext.Provider>
  );
};

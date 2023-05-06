import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./reset.css";
import "./index.css";

import Root from "./pages/Root";
import Boarding from "./pages/Boarding";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Layout from "./layout/Layout";
import Favorite from "./pages/Favorite";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Boarding />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorite" element={<Favorite />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

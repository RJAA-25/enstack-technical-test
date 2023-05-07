import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ClientProvider } from "./context/client";
import { Toaster } from "react-hot-toast";

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
import Product from "./pages/Product";
import Congrats from "./pages/Congrats";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";
import Error from "./pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index element={<Boarding />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="notification" element={<Notification />} />
        <Route path="profile" element={<Profile />} />
        <Route path="congrats" element={<Congrats />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClientProvider>
      <Toaster position="top-center" reverseOrder={true} />
      <RouterProvider router={router} />
    </ClientProvider>
  </React.StrictMode>
);

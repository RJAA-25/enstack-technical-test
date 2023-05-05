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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Boarding />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="home" element={<Home />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

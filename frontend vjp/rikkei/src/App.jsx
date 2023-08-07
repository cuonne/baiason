import React from "react";
import "./App2.css";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from "react-router-dom";
import Howtoresiger from "./pages/Howtoresiger";
import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";
import Blog from "./pages/Blog";
import Blog2 from "./pages/Blog2";
import Login from "./pages/Login/Login";
import Login2 from "./pages/login2/Login2";
import Resiger from "./pages/Resiger/Resiger";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/resiger",
      element: <Resiger />,
    },
    {
      path: "/login2",
      element: <Login2 />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "regiser", element: <Howtoresiger /> },
        { path: "blog", element: <Blog /> },
        { path: "blog2", element: <Blog2 /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}>
        <Outlet/>
      </RouterProvider>
    </div>
  );
}

export default App;

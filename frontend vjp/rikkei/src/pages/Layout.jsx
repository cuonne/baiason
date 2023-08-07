import React from "react";

import Footer from "../components/Footer";

import Mainheader2 from "../components/Mainheader2";
import Svg from "../components/Svg";
import Offcanvas from "../components/Offcanvas";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Svg></Svg>
      <Offcanvas></Offcanvas>
      <Mainheader2></Mainheader2>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default Layout;

import React from "react";
import Footer from "../components/Footer";
// import BannerSection from "../components/BannerSection";
import Mainheader2 from "../components/Mainheader2";
import Svg from "../components/Svg";
import Offcanvas from "../components/Offcanvas";
import ServiceSection3 from "../components/ServiceSection3";

function Howtoresiger() {
  return (
    <div>
      <Svg></Svg>
      <Offcanvas></Offcanvas>
      <Mainheader2></Mainheader2>
      <div
        data-elementor-type="wp-page"
        data-elementor-id={9}
        className="elementor elementor-9"
        style={{ paddingTop: "30px", paddingBottom: "30px" }}
      >
        {/* <BannerSection></BannerSection> */}
        <ServiceSection3></ServiceSection3>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Howtoresiger;

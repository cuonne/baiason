import React, { useState, useEffect }  from "react";
import Offcanvas from "../components/Offcanvas";
import Svg from "../components/Svg";
import Mainheader from "../components/Mainheader";
import BannerSection from "../components/BannerSection";
import ProvideSection from "../components/ProvideSection";
import ServiceSection from "../components/ServiceSection";
import AboutSection from "../components/AboutSection";
import ServiceSection2 from "../components/ServiceSection2";
import ServiceSection3 from "../components/ServiceSection3";
import BlogSection from "../components/BlogSection";
import BlogSection2 from "../components/BlogSection2";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import { useNavigate ,useLocation  } from "react-router-dom";
import { Button } from "antd";

function Homepage() {

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get('username');

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem("token"); // Assuming you store the login token in local storage
    if (token) {
      setIsLoggedIn(true);
      navigate("/")
    } else {
      setIsLoggedIn(false);
      navigate("/login"); // Redirect to the login page if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear the login token from local storage
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to the login page after logout
  };

  return (
    <div>
    <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {username && (
            <span style={{ marginRight: "10px", color: "black" }}>
              Welcome, {username}
            </span>
          )}
          <Button type="primary" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    
      <div className="home page-template page-template-page-templates page-template-home1 page-template-page-templateshome1-php page page-id-9 elementor-default elementor-kit-5 elementor-page elementor-page-9">
        <Svg></Svg>
        <Offcanvas></Offcanvas>
        <Mainheader></Mainheader>
        <div
          data-elementor-type="wp-page"
          data-elementor-id={9}
          className="elementor elementor-9"
        >
          <BannerSection></BannerSection>
          <ProvideSection></ProvideSection>
          <ServiceSection></ServiceSection>
          <AboutSection></AboutSection>
          <ServiceSection2></ServiceSection2>
          <ServiceSection3></ServiceSection3>

          <BlogSection></BlogSection>
          <BlogSection2></BlogSection2>
          <TeamSection></TeamSection>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Homepage;

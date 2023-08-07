import React from "react";
import { Link } from "react-router-dom";
function Mainheader() {
  return (
    <div>
      {" "}
      {/* Main header Start */}
      <header className="main-header main-header-two" id="sc-header-sticky">
        {/*  upper-header  */}
        <div className="upper-header style-two">
          <div className="header-inner-area">
            <div className="sc-canvas-inner">
              <div className="menu-navbar area">
                <a
                  id="canva_expander2"
                  href="#"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <svg
                    width={36}
                    height={24}
                    viewBox="0 0 36 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={36} height={1} fill="Black" />
                    <rect y={12} width={29} height={1} fill="Black" />
                    <rect y={23} width={21} height={1} fill="Black" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="menu-navbar area d-none">
              <a
                id="canva_expander"
                href="#"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <svg
                  width={36}
                  height={24}
                  viewBox="0 0 36 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={36} height={1} fill="white" />
                  <rect y={12} width={29} height={1} fill="white" />
                  <rect y={23} width={21} height={1} fill="white" />
                </svg>
              </a>
            </div>
            <div className="sc-menu-inner margin-right-ss">
              <div
                className="sc-main-menu d-flex flex_start"
                style={{ width: "100%" }}
              >
                <div className="main-menu-list">
                  <div className="main-menu-list">
                    <ul
                      data-in="#"
                      data-out="#"
                      className="main-menu"
                      id="menu-main-menu-left"
                    >
                      <li
                        id="menu-item-392"
                        style={{ paddingRight: 0 }}
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-392 border-bottom1"
                      >
                        <Link to="http://localhost:3000/blog2">
                          <span
                            style={{ fontSize: "20px", color: "black" }}
                            title="Contact"
                          >
                            Về học bổng
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="menu-img menu_img_1"
                  style={{
                    maxWidth: "220px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginRight: 0,
                  }}
                >
                  <Link to="http://localhost:3000/">
                    <img
                      src="https://dev-lms.rikkeiacademy.com/8dfd712d-fefb-4ca4-9021-55759531d118.png"
                      alt="Logo"
                      style={{ filter: "brightness(0)" }}
                    />
                  </Link>
                </div>
                <div
                  className="menu-img menu_img_2"
                  style={{
                    maxWidth: "120px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginRight: 0,
                    marginLeft: 0,
                  }}
                >
                  <Link to="http://localhost:3000/blog">
                    <img
                      src="https://dev-lms.rikkeiacademy.com/white-logo-new.png"
                      alt="Logo"
                      style={{ filter: "brightness(0)" }}
                    />{" "}
                  </Link>
                </div>
                <div className="sc-main-menu">
                  <div className="main-menu-list">
                    <div className="main-menu-list">
                      <ul
                        data-in="#"
                        data-out="#"
                        className="main-menu"
                        id="menu-main-menu-right"
                      >
                        <li
                          id="menu-item-392"
                          style={{ paddingRight: 0 }}
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-392 border-bottom1"
                        >
                          <Link to="http://localhost:3000/regiser">
                            <span
                              href="#get-scholarship"
                              style={{ fontSize: "20px" }}
                            >
                              <span style={{ color: "black" }}>
                                {" "}
                                Cách Thức Đăng Kí{" "}
                              </span>
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Main header End */}
    </div>
  );
}

export default Mainheader;

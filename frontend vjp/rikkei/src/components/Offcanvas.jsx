import React from "react";

function Offcanvas() {
  return (
    <div>
      {/* Preloader Start */}
      {/* <div id="site-preloader" className="site-preloader">
    <div className="loader-wrap">
      <div className="ring">
        <span />
      </div>
    </div>
  </div> */}
      {/* Preloader Ends */}
      {/*Sc Offcanvas Area Start*/}
      {/*Sc Offcanvas Area End*/}
      {/*Sc Offcanvas Two Area Start*/}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        // style={{ backgroundColor: "#831818 !important" }}
      >
        <div
          className="sc-offcanvas-header d-flex align-items-center justify-content-between"
          style={{ width: "100%" }}
        >
          <div
            className="sticky-logo logo-area text-center"
            style={{ width: "200px" }}
          >
            <a href="#">
              <img
                src="https://dev-lms.rikkeiacademy.com/8dfd712d-fefb-4ca4-9021-55759531d118.png"
                alt="Logo"
              />
            </a>
          </div>
          <div
            className="offcanvas-icon"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{ backgroundColor: "transparent" }}
          >
            <a id="canva_close2" href="#">
              <i className="fas fa-times" />
            </a>
          </div>
        </div>
        <div className="widget">
          <p style={{ color: "white" }}>
            Học bổng Ươm Mầm Xanh là một cơ hội hấp dẫn dành cho các sinh viên
            có hoàn cảnh khó khăn theo đuổi đam mê Công nghệ thông tin.
          </p>
        </div>
        <div className="widget address">
          <div>
            <ul>
              <li>
                <div className="content">
                  <p style={{ color: "white" }}>Địa chỉ</p>
                  <strong style={{ color: "white" }}>
                    Tầng 7, tháp A toà sông Đà, Mễ Trì, Hà Nội
                  </strong>
                </div>
              </li>
              <li>
                <div className="content">
                  <p style={{ color: "white" }}>Email</p>
                  <strong style={{ color: "white" }}>
                    academy@rikkeisoft.com
                  </strong>
                </div>
              </li>
              <li>
                <div className="content">
                  <p style={{ color: "white" }}>LIÊN HỆ</p>
                  <strong style={{ color: "white" }}>086 206 9233</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*Sc Offcanvas Two Area End*/}
    </div>
  );
}

export default Offcanvas;

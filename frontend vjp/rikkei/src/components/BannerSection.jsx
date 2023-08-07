import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
function BannerSection() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-5731d77 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="5731d77"
        data-element_type="section"
        id="hero"
      >
        <div className="elementor-container elementor-column-gap-no">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a8a867e"
            data-id="a8a867e"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-adcc80d elementor-widget elementor-widget-hero"
                data-id="adcc80d"
                data-element_type="widget"
                data-widget_type="hero.default"
              >
                <div className="elementor-widget-container">
                  {/*  Banner Section Start  */}
                  <section
                    className="banner-section pb-esm-0"
                    style={{
                      backgroundImage:
                        "url(https://dev-lms.rikkeiacademy.com/thietkeuommamxanh/anhdautrang/%E1%BA%A2nh%20b%C3%ACa%20%C4%91%E1%BA%A7u%20trang.png)",
                    }}
                    
                  >
                    <Slider {...settings}>
                      <div className="container">
                        <div className="content-box">
                          <div className="tittle-text">
                            <h1
                              className="wow bounceInleft slider-title animated"
                              data-wow-duration="4s"
                            >
                              Học Bổng <br /> Ươm Mầm Xanh
                            </h1>
                            <p>
                              <i>
                                Tài trợ 200 học bổng lập trình viên hơn 10 tỉ
                                đồng
                              </i>
                            </p>
                          </div>
                          <a className="theme-btn-two" href="#get-scholarship">
                            <span>Đăng kí ngay</span>
                          </a>
                        </div>
                      </div>

                      <div className="container">
                        <div className="content-box">
                          <div className="tittle-text">
                            <h1
                              className="wow bounceInleft slider-title animated"
                              data-wow-duration="4s"
                            >
                              Chắp Cánh <br /> Ước Mơ Công Nghệ
                            </h1>
                            <p>
                              <i>
                                Tài trợ 200 học bổng lập trình viên hơn 10 tỉ
                                đồng
                              </i>
                            </p>
                          </div>
                          <a className="theme-btn-two" href="#get-scholarship">
                            {" "}
                            <span>Đăng ký ngay</span>
                          </a>
                        </div>
                      </div>
                    </Slider>

                    {/* <div className="slider-carousel ">
                      <div className="slider-item ">
                        <div className="container">
                          <div className="content-box" style={{ margin: 0 }}>
                            <div className="tittle-text">
                              <h1
                                className="wow bounceInleft slider-title"
                                data-wow-duration="4s"
                              >
                                Học Bổng <br /> Ươm Mầm Xanh
                              </h1>
                              <p>
                                {" "}
                                <i>
                                  Tài trợ 200 học bổng lập trình viên hơn 10 tỉ
                                  đồng
                                </i>
                              </p>
                            </div>
                            <a
                              className="theme-btn-two"
                              href="#get-scholarship"
                            >
                              <span>Đăng kí ngay</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="slider-item">
                        <div className="container">
                          <div className="content-box" style={{ margin: 0 }}>
                            <div className="tittle-text">
                              <h1
                                className="wow bounceInleft slider-title"
                                data-wow-duration="4s"
                              >
                                Chắp Cánh <br /> Ước Mơ Công Nghệ
                              </h1>
                              <p>
                                {" "}
                                <i>
                                  Tài trợ 200 học bổng lập trình viên hơn 10 tỉ
                                  đồng
                                </i>
                              </p>
                            </div>
                            <a
                              className="theme-btn-two"
                              href="#get-scholarship"
                            >
                              {" "}
                              <span>Đăng ký ngay</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div className="banner-bottom-text">
                      <p>
                        Hãy cùng tìm hiểu về chương trình học bổng
                        <b style={{ color: "#ee0909", fontSize: "20px" }}>
                          Ươm Mầm Xanh
                        </b>{" "}
                        và cách thức đăng ký tham gia cùng{" "}
                        <b style={{ color: "#ee0909", fontSize: "20px" }}>
                          RIKKEI ACADEMY
                        </b>{" "}
                        nhé!
                      </p>
                      <p />
                    </div>
                  </section>
                  {/*  Banner Section End  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BannerSection;

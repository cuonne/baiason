import React from "react";
import Slider from "react-slick";
import ReactDOM from "react-dom";
import { Carousel } from "@trendyol-js/react-carousel";
function BlogSection2() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: "unslick" },
      {
        breakpoint: 600,
        settings: "unslick",
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-626c3b2 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="626c3b2"
        data-element_type="section"
        id="blog"
      >
        <div className="elementor-container elementor-column-gap-no">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3e2e024"
            data-id="3e2e024"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-f6b485b elementor-widget elementor-widget-blog"
                data-id="f6b485b"
                data-element_type="widget"
                data-widget_type="blog.default"
              >
                <div className="elementor-widget-container">
                  {/*  Blog Section Start  */}
                  <section className="blog-section">
                    <div className="container">
                      <h2 className="st-title text-center">
                        CẢM NHẬN TỪ BÁO CHÍ{" "}
                      </h2>
                      <Slider {...settings}>
                        <div
                          id="log"
                          className="blog-item"
                          style={{
                            height: "1000px",
                            display: "flex !important",
                          }}
                        >
                          <div className="blog-content">
                            <figure>
                              <img
                                loading="lazy"
                                width="100%"
                                style={{ height: "100%" }}
                                src="https://dev-lms.rikkeiacademy.com/camnhanbaochi.jpg"
                                className="attachment-nvisor-blog size-nvisor-blog wp-post-image"
                                alt=""
                                decoding="async"
                              />
                            </figure>
                            <div className="text">
                              <h5>Nov 21, 2022</h5>
                              <a
                                href="https://vnexpress.net/200-suat-hoc-bong-cho-lap-trinh-vien-4538535.html?fbclid=IwAR0Ci3EFUu4Y2WlD6B9H-GbOIDiRAYS0XwEWYJKd7euK23H2J9krw_bBNOk"
                                tabIndex={0}
                              >
                                <h2
                                  className="blog-title bottom_margin"
                                  style={{
                                    marginBottom: "27px !important",
                                  }}
                                >
                                  200 suất học bổng cho lập trình viên
                                </h2>
                              </a>
                              <div className="btn-box">
                                <a
                                  style={{
                                    display: "flex !important",
                                    justifyContent: "center !important",
                                    alignItems: "center !important",
                                  }}
                                  href="https://vnexpress.net/200-suat-hoc-bong-cho-lap-trinh-vien-4538535.html?fbclid=IwAR0Ci3EFUu4Y2WlD6B9H-GbOIDiRAYS0XwEWYJKd7euK23H2J9krw_bBNOk"
                                  className="link-btn"
                                  tabIndex={0}
                                >
                                  <i className="fas fa-arrow-right" />
                                </a>
                                <a
                                  className="theme-btn-two main-nav-one-btn"
                                  href="https://vnexpress.net/200-suat-hoc-bong-cho-lap-trinh-vien-4538535.html?fbclid=IwAR0Ci3EFUu4Y2WlD6B9H-GbOIDiRAYS0XwEWYJKd7euK23H2J9krw_bBNOk"
                                  tabIndex={0}
                                >
                                  <span>Read More</span>
                                  <svg
                                    width={18}
                                    height={11}
                                    viewBox="0 0 18 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12.44 10.3095L17.25 5.49945L12.44 0.689453L11.6315 1.49793L15.0614 4.92782L0.127308 4.92782L0.127308 6.07115L15.0613 6.07116L11.6315 9.50097L12.44 10.3095Z"
                                      fill="white"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="blog-overlay" />
                        </div>
                        <div
                          id="log"
                          className="blog-item"
                          style={{
                            height: "527px !important",
                            display: "flex !important",
                          }}
                        >
                          <div className="blog-content">
                            <figure>
                              <img
                                width="100%"
                                style={{ height: "100%" }}
                                src="https://dev-lms.rikkeiacademy.com/camnhanbaochi_3.jpg"
                                className="attachment-nvisor-blog size-nvisor-blog wp-post-image"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                            </figure>
                            <div className="text">
                              <h5>Nov 19, ﻿2022</h5>
                              <a
                                href="https://dantri.com.vn/giao-duc-huong-nghiep/digiworld-tai-tro-200-suat-hoc-bong-lap-trinh-vien-tai-rikkei-academy-20221119125820506.htm?fbclid=IwAR1gVxr-wF6Jw1ZbkJ314BZadrFWir3QALe_AO4fxq0iUfHJSLkCLvk-60E"
                                tabIndex={0}
                              >
                                <h2 className="blog-title">
                                  Digiworld tài trợ 200 suất học bổng lập trình
                                  viên tại Rikkei Academy
                                </h2>
                              </a>
                              <div className="btn-box">
                                <a
                                  style={{
                                    display: "flex !important",
                                    justifyContent: "center !important",
                                    alignItems: "center !important",
                                  }}
                                  href="https://dantri.com.vn/giao-duc-huong-nghiep/digiworld-tai-tro-200-suat-hoc-bong-lap-trinh-vien-tai-rikkei-academy-20221119125820506.htm?fbclid=IwAR1gVxr-wF6Jw1ZbkJ314BZadrFWir3QALe_AO4fxq0iUfHJSLkCLvk-60E"
                                  className="link-btn"
                                  tabIndex={0}
                                >
                                  <i className="fas fa-arrow-right" />
                                </a>
                                <a
                                  className="theme-btn-two main-nav-one-btn"
                                  href="https://dantri.com.vn/giao-duc-huong-nghiep/digiworld-tai-tro-200-suat-hoc-bong-lap-trinh-vien-tai-rikkei-academy-20221119125820506.htm?fbclid=IwAR1gVxr-wF6Jw1ZbkJ314BZadrFWir3QALe_AO4fxq0iUfHJSLkCLvk-60E"
                                  tabIndex={0}
                                >
                                  <span>Read More</span>
                                  <svg
                                    width={18}
                                    height={11}
                                    viewBox="0 0 18 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12.44 10.3095L17.25 5.49945L12.44 0.689453L11.6315 1.49793L15.0614 4.92782L0.127308 4.92782L0.127308 6.07115L15.0613 6.07116L11.6315 9.50097L12.44 10.3095Z"
                                      fill="white"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="blog-overlay" />
                        </div>
                        <div
                          id="log"
                          className="blog-item"
                          style={{
                            height: "527px !important",
                            display: "flex !important",
                          }}
                        >
                          <div className="blog-content">
                            <figure>
                              <img
                                width="100%"
                                style={{ height: "100%" }}
                                src="https://dev-lms.rikkeiacademy.com/camnhanbaochi_2.jpg"
                                className="attachment-nvisor-blog size-nvisor-blog wp-post-image"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                            </figure>
                            <div className="text">
                              <h5>Nov 21,﻿ 2022</h5>
                              <a
                                href="https://vtv.vn/goc-doanh-nghiep/digiworld-tai-tro-200-suat-hoc-bong-voi-gia-tri-hon-10-ti-dong-20221121163346635.htm?fbclid=IwAR3VhAOX_xLH7DPw5-dfQF2ZCnktYTnprDL8H6fwsws0IqgOxRZZ4RnCe9I"
                                tabIndex={0}
                              >
                                <h2 className="blog-title">
                                  Digiworld tài trợ 200 suất học bổng với giá
                                  trị hơn 10 tỉ đồng
                                </h2>
                              </a>
                              <div className="btn-box">
                                <a
                                  style={{
                                    display: "flex !important",
                                    justifyContent: "center !important",
                                    alignItems: "center !important",
                                  }}
                                  href="https://vtv.vn/goc-doanh-nghiep/digiworld-tai-tro-200-suat-hoc-bong-voi-gia-tri-hon-10-ti-dong-20221121163346635.htm?fbclid=IwAR3VhAOX_xLH7DPw5-dfQF2ZCnktYTnprDL8H6fwsws0IqgOxRZZ4RnCe9I"
                                  className="link-btn"
                                  tabIndex={0}
                                >
                                  <i className="fas fa-arrow-right" />
                                </a>
                                <a
                                  className="theme-btn-two main-nav-one-btn"
                                  href="https://vtv.vn/goc-doanh-nghiep/digiworld-tai-tro-200-suat-hoc-bong-voi-gia-tri-hon-10-ti-dong-20221121163346635.htm?fbclid=IwAR3VhAOX_xLH7DPw5-dfQF2ZCnktYTnprDL8H6fwsws0IqgOxRZZ4RnCe9I"
                                  tabIndex={0}
                                >
                                  <span>Read More</span>
                                  <svg
                                    width={18}
                                    height={11}
                                    viewBox="0 0 18 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12.44 10.3095L17.25 5.49945L12.44 0.689453L11.6315 1.49793L15.0614 4.92782L0.127308 4.92782L0.127308 6.07115L15.0613 6.07116L11.6315 9.50097L12.44 10.3095Z"
                                      fill="white"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="blog-overlay" />
                        </div>
                      </Slider>
                      {/* <div className="sc-blog-slider">
                        <div className="blog-item" style={{ height: "527px" }}>
                          <div className="blog-content">
                            <figure>
                              <img
                                loading="lazy"
                                width="100%"
                                style={{ height: "100%" }}
                                src="https://dev-lms.rikkeiacademy.com/camnhanbaochi.jpg"
                                className="attachment-nvisor-blog size-nvisor-blog wp-post-image"
                                alt=""
                                decoding="async"
                              />
                            </figure>
                            <div className="text">
                              <h5>Nov 21, 2022</h5>
                              <a
                                href="https://vnexpress.net/200-suat-hoc-bong-cho-lap-trinh-vien-4538535.html?fbclid=IwAR0Ci3EFUu4Y2WlD6B9H-GbOIDiRAYS0XwEWYJKd7euK23H2J9krw_bBNOk"
                                tabIndex={0}
                              >
                                <h2
                                  className="blog-title bottom_margin"
                                  style={{
                                    marginBottom: "27px !important",
                                  }}
                                >
                                  200 suất học bổng cho lập trình viên
                                </h2>
                              </a>
                              <div className="btn-box">
                                <a
                                  style={{
                                    display: "flex !important",
                                    justifyContent: "center !important",
                                    alignItems: "center !important",
                                  }}
                                  href="https://vnexpress.net/200-suat-hoc-bong-cho-lap-trinh-vien-4538535.html?fbclid=IwAR0Ci3EFUu4Y2WlD6B9H-GbOIDiRAYS0XwEWYJKd7euK23H2J9krw_bBNOk"
                                  className="link-btn"
                                  tabIndex={0}
                                >
                                  <i className="fas fa-arrow-right" />
                                </a>
                                <a
                                  className="theme-btn-two main-nav-one-btn"
                                  href="https://vnexpress.net/200-suat-hoc-bong-cho-lap-trinh-vien-4538535.html?fbclid=IwAR0Ci3EFUu4Y2WlD6B9H-GbOIDiRAYS0XwEWYJKd7euK23H2J9krw_bBNOk"
                                  tabIndex={0}
                                >
                                  <span>Read More</span>
                                  <svg
                                    width={18}
                                    height={11}
                                    viewBox="0 0 18 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12.44 10.3095L17.25 5.49945L12.44 0.689453L11.6315 1.49793L15.0614 4.92782L0.127308 4.92782L0.127308 6.07115L15.0613 6.07116L11.6315 9.50097L12.44 10.3095Z"
                                      fill="white"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="blog-overlay" />
                        </div>
                        <div className="blog-item" style={{ height: "527px" }}>
                          <div className="blog-content">
                            <figure>
                              <img
                                width="100%"
                                style={{ height: "100%" }}
                                src="https://dev-lms.rikkeiacademy.com/camnhanbaochi_3.jpg"
                                className="attachment-nvisor-blog size-nvisor-blog wp-post-image"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                            </figure>
                            <div className="text">
                              <h5>Nov 19, ﻿2022</h5>
                              <a
                                href="https://dantri.com.vn/giao-duc-huong-nghiep/digiworld-tai-tro-200-suat-hoc-bong-lap-trinh-vien-tai-rikkei-academy-20221119125820506.htm?fbclid=IwAR1gVxr-wF6Jw1ZbkJ314BZadrFWir3QALe_AO4fxq0iUfHJSLkCLvk-60E"
                                tabIndex={0}
                              >
                                <h2 className="blog-title">
                                  Digiworld tài trợ 200 suất học bổng lập trình
                                  viên tại Rikkei Academy
                                </h2>
                              </a>
                              <div className="btn-box">
                                <a
                                  style={{
                                    display: "flex !important",
                                    justifyContent: "center !important",
                                    alignItems: "center !important",
                                  }}
                                  href="https://dantri.com.vn/giao-duc-huong-nghiep/digiworld-tai-tro-200-suat-hoc-bong-lap-trinh-vien-tai-rikkei-academy-20221119125820506.htm?fbclid=IwAR1gVxr-wF6Jw1ZbkJ314BZadrFWir3QALe_AO4fxq0iUfHJSLkCLvk-60E"
                                  className="link-btn"
                                  tabIndex={0}
                                >
                                  <i className="fas fa-arrow-right" />
                                </a>
                                <a
                                  className="theme-btn-two main-nav-one-btn"
                                  href="https://dantri.com.vn/giao-duc-huong-nghiep/digiworld-tai-tro-200-suat-hoc-bong-lap-trinh-vien-tai-rikkei-academy-20221119125820506.htm?fbclid=IwAR1gVxr-wF6Jw1ZbkJ314BZadrFWir3QALe_AO4fxq0iUfHJSLkCLvk-60E"
                                  tabIndex={0}
                                >
                                  <span>Read More</span>
                                  <svg
                                    width={18}
                                    height={11}
                                    viewBox="0 0 18 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12.44 10.3095L17.25 5.49945L12.44 0.689453L11.6315 1.49793L15.0614 4.92782L0.127308 4.92782L0.127308 6.07115L15.0613 6.07116L11.6315 9.50097L12.44 10.3095Z"
                                      fill="white"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="blog-overlay" />
                        </div>
                        <div className="blog-item" style={{ height: "527px" }}>
                          <div className="blog-content">
                            <figure>
                              <img
                                width="100%"
                                style={{ height: "100%" }}
                                src="https://dev-lms.rikkeiacademy.com/camnhanbaochi_2.jpg"
                                className="attachment-nvisor-blog size-nvisor-blog wp-post-image"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                            </figure>
                            <div className="text">
                              <h5>Nov 21,﻿ 2022</h5>
                              <a
                                href="https://vtv.vn/goc-doanh-nghiep/digiworld-tai-tro-200-suat-hoc-bong-voi-gia-tri-hon-10-ti-dong-20221121163346635.htm?fbclid=IwAR3VhAOX_xLH7DPw5-dfQF2ZCnktYTnprDL8H6fwsws0IqgOxRZZ4RnCe9I"
                                tabIndex={0}
                              >
                                <h2 className="blog-title">
                                  Digiworld tài trợ 200 suất học bổng với giá
                                  trị hơn 10 tỉ đồng
                                </h2>
                              </a>
                              <div className="btn-box">
                                <a
                                  style={{
                                    display: "flex !important",
                                    justifyContent: "center !important",
                                    alignItems: "center !important",
                                  }}
                                  href="https://vtv.vn/goc-doanh-nghiep/digiworld-tai-tro-200-suat-hoc-bong-voi-gia-tri-hon-10-ti-dong-20221121163346635.htm?fbclid=IwAR3VhAOX_xLH7DPw5-dfQF2ZCnktYTnprDL8H6fwsws0IqgOxRZZ4RnCe9I"
                                  className="link-btn"
                                  tabIndex={0}
                                >
                                  <i className="fas fa-arrow-right" />
                                </a>
                                <a
                                  className="theme-btn-two main-nav-one-btn"
                                  href="https://vtv.vn/goc-doanh-nghiep/digiworld-tai-tro-200-suat-hoc-bong-voi-gia-tri-hon-10-ti-dong-20221121163346635.htm?fbclid=IwAR3VhAOX_xLH7DPw5-dfQF2ZCnktYTnprDL8H6fwsws0IqgOxRZZ4RnCe9I"
                                  tabIndex={0}
                                >
                                  <span>Read More</span>
                                  <svg
                                    width={18}
                                    height={11}
                                    viewBox="0 0 18 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12.44 10.3095L17.25 5.49945L12.44 0.689453L11.6315 1.49793L15.0614 4.92782L0.127308 4.92782L0.127308 6.07115L15.0613 6.07116L11.6315 9.50097L12.44 10.3095Z"
                                      fill="white"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="blog-overlay" />
                        </div>
                      </div> */}
                    </div>
                  </section>
                  {/*  Blog Section End  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogSection2;

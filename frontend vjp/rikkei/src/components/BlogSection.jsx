import React, { Component } from "react";
import Slider from "react-slick";
import ReactDOM from "react-dom";
import { Carousel } from "@trendyol-js/react-carousel";
// import ReactDOM from "react-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

function BlogSection() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1024, settings: "unslick" },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
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
                  <section
                    className="blog-section"
                    style={{ paddingTop: "50px" }}
                  >
                    <div className="container">
                      <h2 className="st-title text-center">
                        CẢM XÚC VỠ ÒA KHI NHẬN ĐƯỢC <br /> HỌC BỔNG CỦA HỌC VIỆN{" "}
                      </h2>
                      <h5
                        className="text-center"
                        style={{ marginBottom: "50px" }}
                      >
                        Thông qua các suất học bổng, “Ươm Mầm Xanh” sẽ tài trợ
                        100% học phí cho 01 khóa đào tạo lập trình Fullstack tại
                        Học viện đào tạo công nghệ Rikkei Academy. Mong rằng các
                        em có thể chuyên tâm học tốt hơn và bớt vất vả hơn trên
                        con đường thực hiện ước mơ của mình.
                      </h5>
                      {/* <Carousel>
                        <div className="blog-item">
                          <div className="blog-content">
                            <figure>
                              <a href="https://www.youtube.com/watch?v=1yuSFNDqcCs">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src="https://dev-lms.rikkeiacademy.com/photo-2-1669022669808459350370.webp"
                                  alt=""
                                />
                                <div className="link_ytsch">
                                  <img
                                    src="https://dev-lms.rikkeiacademy.com/Icon/Asset%2032@4x.png"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </figure>
                          </div>
                          <div className="blog-overlay" />
                        </div>

                        <div className="blog-item">
                          <div className="blog-content">
                            <figure>
                              <a href="https://www.youtube.com/watch?v=3UcJz5y_Z8Q">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src="https://dev-lms.rikkeiacademy.com/hoc-bong-lap-trinh-ban-thang-scaled.jpg"
                                  alt=""
                                />
                                <div className="link_ytsch">
                                  <img
                                    src="https://dev-lms.rikkeiacademy.com/Icon/Asset%2032@4x.png"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </figure>
                          </div>
                          <div className="blog-overlay" />
                        </div>
                      </Carousel> */}
                      {/* <Carousel>
                        <div className="blog-item">
                          <div className="blog-content">
                            <figure>
                              <a href="https://www.youtube.com/watch?v=1yuSFNDqcCs">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src="https://dev-lms.rikkeiacademy.com/photo-2-1669022669808459350370.webp"
                                  alt=""
                                />
                                <div className="link_ytsch">
                                  <img
                                    src="https://dev-lms.rikkeiacademy.com/Icon/Asset%2032@4x.png"
                                    alt=""
                                    srcSet
                                  />
                                </div>
                              </a>
                            </figure>
                          </div>
                          <div className="blog-overlay" />
                        </div>

                        <div className="blog-item">
                          <div className="blog-content">
                            <figure>
                              <a href="https://www.youtube.com/watch?v=3UcJz5y_Z8Q">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src="https://dev-lms.rikkeiacademy.com/hoc-bong-lap-trinh-ban-thang-scaled.jpg"
                                  alt=""
                                />
                                <div className="link_ytsch">
                                  <img
                                    src="https://dev-lms.rikkeiacademy.com/Icon/Asset%2032@4x.png"
                                    alt=""
                                    srcSet
                                  />
                                </div>
                              </a>
                            </figure>
                          </div>
                          <div className="blog-overlay" />
                        </div>
                      </Carousel> */}

                      <Slider {...settings}>
                        <div className="blog-item">
                          <div className="blog-content">
                            <figure>
                              <a href="https://www.youtube.com/watch?v=1yuSFNDqcCs">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src="https://dev-lms.rikkeiacademy.com/photo-2-1669022669808459350370.webp"
                                  alt=""
                                />
                                <div className="link_ytsch">
                                  <img
                                    src="https://dev-lms.rikkeiacademy.com/Icon/Asset%2032@4x.png"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </figure>
                          </div>
                          <div className="blog-overlay" />
                        </div>

                        <div className="blog-item">
                          <div className="blog-content">
                            <figure>
                              <a href="https://www.youtube.com/watch?v=3UcJz5y_Z8Q">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src="https://dev-lms.rikkeiacademy.com/hoc-bong-lap-trinh-ban-thang-scaled.jpg"
                                  alt=""
                                />
                                <div className="link_ytsch">
                                  <img
                                    src="https://dev-lms.rikkeiacademy.com/Icon/Asset%2032@4x.png"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </figure>
                          </div>
                          <div className="blog-overlay" />
                        </div>
                      </Slider>
                      {/* <div className="sc-blog-slider">
                        <div className="blog-item">
                          <div className="blog-content">
                            <figure>
                              <a href="https://www.youtube.com/watch?v=1yuSFNDqcCs">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src="https://dev-lms.rikkeiacademy.com/photo-2-1669022669808459350370.webp"
                                  alt=""
                                />
                                <div className="link_ytsch">
                                  <img
                                    src="https://dev-lms.rikkeiacademy.com/Icon/Asset%2032@4x.png"
                                    alt=""
                                    srcSet
                                  />
                                </div>
                              </a>
                            </figure>
                          </div>
                          <div className="blog-overlay" />
                        </div>
                        <div className="blog-item">
                          <div className="blog-content">
                            <figure>
                              <a href="https://www.youtube.com/watch?v=3UcJz5y_Z8Q">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src="https://dev-lms.rikkeiacademy.com/hoc-bong-lap-trinh-ban-thang-scaled.jpg"
                                  alt=""
                                />
                                <div className="link_ytsch">
                                  <img
                                    src="https://dev-lms.rikkeiacademy.com/Icon/Asset%2032@4x.png"
                                    alt=""
                                    srcSet
                                  />
                                </div>
                              </a>
                            </figure>
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

export default BlogSection;

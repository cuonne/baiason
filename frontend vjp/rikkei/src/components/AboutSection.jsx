import React from "react";

function AboutSection() {
  return (
    <div>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-5d32847 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="5d32847"
        data-element_type="section"
        id="about"
      >
        <div className="elementor-container elementor-column-gap-no">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-172dc4d"
            data-id="172dc4d"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-60ff5de elementor-widget elementor-widget-about"
                data-id="60ff5de"
                data-element_type="widget"
                data-widget_type="about.default"
              >
                <div className="elementor-widget-container">
                  {/* About Section Start*/}
                  <section className="about-section pl-about">
                    <div className="container-fluid p-0">
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="about-content">
                            <h2 className="st-title">Học Bổng Hấp Dẫn</h2>
                            <p>
                              Tại chương trình này, mỗi bạn trẻ sẽ được tài trợ
                              80% - 100% học phí từ công ty Cổ phần thế giới số
                              Digiworld và Học viện đào tạo công nghệ Rikkei
                              Academy để chinh phục ước mơ công nghệ.
                            </p>
                            <div className="progress-area">
                              <div
                                className="progress-btm"
                                style={{ width: "525px" }}
                              >
                                <label
                                  style={{
                                    color: "#686a72",
                                    fontSize: "20px",
                                  }}
                                >
                                  Học Bổng 100%
                                </label>
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={60}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ maxWidth: "100%" }}
                                  >
                                    <span
                                      style={{
                                        color: "#686a72",
                                        fontSize: "20px",
                                      }}
                                      className="title"
                                    >
                                      69.000.000 VNĐ
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="progress-btm"
                                style={{ width: "525px" }}
                              >
                                <label
                                  style={{
                                    color: "#686a72",
                                    fontSize: "20px",
                                  }}
                                >
                                  Học Bổng 80%
                                </label>
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={60}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ maxWidth: "80%" }}
                                  >
                                    <span
                                      style={{
                                        color: "#686a72",
                                        fontSize: "20px",
                                      }}
                                      className="title"
                                    >
                                      55.000.000 VNĐ
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="about-button">
                              <a href="#get-scholarship">
                                <button
                                  className="theme-btn-one btn btn-danger more-about-btn"
                                  type="button"
                                >
                                  <span>Đăng ký ngay</span>
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6" style={{ padding: 0 }}>
                          <div className="about-right-img">
                            <img
                              decoding="async"
                              src="https://dev-lms.rikkeiacademy.com/%E1%BA%A2nh%20vu%C3%B4ng%202.png"
                              alt="Shape"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* About Section End*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;

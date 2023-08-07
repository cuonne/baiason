import React from "react";

function ServiceSection2() {
  return (
    <div>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-366ff3e elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="366ff3e"
        data-element_type="section"
        id="service"
      >
        <div className="elementor-container elementor-column-gap-no">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c4b5e1a"
            data-id="c4b5e1a"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-ba52275 elementor-widget elementor-widget-service"
                data-id="ba52275"
                data-element_type="widget"
                data-widget_type="service.default"
              >
                <div className="elementor-widget-container">
                  {/* Service Section Start*/}
                  <section className="service-section service-section-two">
                    <div className="service-section-overlay-top">
                      <figure>
                        <img
                          decoding="async"
                          src="https://wpriverthemes.com/nvisor/wp-content/uploads/2023/03/service-top-2.png"
                          alt="Service"
                        />
                      </figure>
                    </div>
                    <div className="service-section-overlay-bottom">
                      <figure>
                        <img
                          decoding="async"
                          src="https://wpriverthemes.com/nvisor/wp-content/uploads/2023/03/service-bottom-2.png"
                          alt="Service"
                        />
                      </figure>
                    </div>
                    <div className="container">
                      <div className="service-content">
                        <div className="row">
                          <div className="col-lg-6">
                            <h5
                              style={{ color: "#DF2E2E" }}
                              className="st-subtitle1 about_sch"
                            >
                              200 HỌC BỔNG
                            </h5>
                            <h2 className="st-title about_sch1">
                              Đang chờ các bạn
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="service-item">
                        <div className="row">
                          <div className="col">
                            <div className="card card-margin-bottom">
                              <div className="card-body">
                                <span>01</span>
                                <h3>Đăng kí nhận học bổng </h3>
                                <a href="#get-scholarship">
                                  <button
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                    className="theme-btn-one btn btn-danger more-about-btn"
                                    type="button"
                                  >
                                    <span
                                      style={{
                                        fontSize: "14px",
                                        marginBottom: 0,
                                      }}
                                    >
                                      Tại đây
                                    </span>
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card card-margin-bottom card-margin-top">
                              <div className="card-body">
                                <span>02</span>
                                <h3>Lọc danh sách các bạn đủ tiêu chí</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card card-margin-bottom">
                              <div className="card-body">
                                <span>03</span>
                                <h3>Xét duyệt học bổng </h3>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card card-margin-bottom card-margin-top1">
                              <div className="card-body">
                                <span>04</span>
                                <h3>Thông báo kết quả </h3>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card card-margin-bottom">
                              <div className="card-body">
                                <span>05</span>
                                <h3>Kiểm tra đối chiếu và xác nhận </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-shape">
                      <img
                        decoding="async"
                        src="https://wpriverthemes.com/nvisor/wp-content/uploads/2023/03/service-shape-comp.png"
                        alt="Shape"
                      />
                    </div>
                  </section>
                  {/* Service Section End*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceSection2;

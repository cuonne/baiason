import React from "react";

function TeamSection() {
  return (
    <div>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-80d2540 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="80d2540"
        data-element_type="section"
        id="team"
      >
        <div className="elementor-container elementor-column-gap-no">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5a4d577"
            data-id="5a4d577"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-eaa1871 elementor-widget elementor-widget-team"
                data-id="eaa1871"
                data-element_type="widget"
                data-widget_type="team.default"
              >
                <div className="elementor-widget-container">
                  {/* Team Section Start*/}
                  <section className="team-section">
                    <div className="container">
                      <div className="row align-items-center team-bottom1">
                        <div className="col-lg-6">
                          <h2 className="st-title">
                            Sự ủng hộ tuyệt đối <br />
                            đến từ Quý đối tác
                          </h2>
                        </div>
                        <div className="col-lg-6">
                          <p>
                            Là một chương trình ý nghĩa mang đến sự lan toả rộng
                            lớn đến với quý đối tác, Rikkei Academy và Digiworld
                            tin rằng ngọn lửa tri thức, ngọn lửa yêu thương sẽ
                            đến với từng lối nhỏ để mở lối cho tương lai nhiều
                            bạn trẻ chưa may mắn, luôn khao khát vươn lên.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="container team-container">
                      <div className="row team-left" style={{ paddingLeft: 0 }}>
                        <div className="col-lg-3 col-md-6 mb-sm-4 mb-esm-4">
                          <div className="team-member member-bottom">
                            <div className="team-content">
                              <figure>
                                <img
                                  decoding="async"
                                  src="https://dev-lms.rikkeiacademy.com/af0b1ab6-1f6f-488b-bb07-760eab0f327d.png"
                                  alt="Team"
                                />
                              </figure>
                            </div>
                            <div className="team-overlay" />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-sm-4 mb-esm-4">
                          <div className="team-member sc-margin-top team-member">
                            <div className="team-content">
                              <figure>
                                <img
                                  decoding="async"
                                  src="https://dev-lms.rikkeiacademy.com/91c685e9-0e03-4aab-8862-76211c1357cc.png"
                                  alt="Team"
                                />
                              </figure>
                            </div>
                            <div className="team-overlay" />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-sm-4 mb-esm-4">
                          <div className="team-member">
                            <div className="team-content">
                              <figure>
                                <img
                                  decoding="async"
                                  src="https://dev-lms.rikkeiacademy.com/NTA05022.png"
                                  alt="Team"
                                />
                              </figure>
                            </div>
                            <div className="team-overlay" />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-sm-4 mb-esm-4">
                          <div className="team-member sc-margin-top">
                            <div className="team-content">
                              <figure>
                                <img
                                  decoding="async"
                                  src="https://dev-lms.rikkeiacademy.com/NTA05182.png"
                                  alt="Team"
                                />
                              </figure>
                            </div>
                            <div className="team-overlay" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Team Section End*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamSection;

import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
function ServiceSection3() {
  // const [value, setValue] = useState("");
  const url =
    "https://script.google.com/macros/s/AKfycbyCo8alo1bTiRzLq4ptkWCbeDTskiRFkEh9obPv5FOdl5zcpvOOPBLRAHaQtZ75wcAP/exec";
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    address: "",
    comments: "",
  });
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      "https://script.google.com/macros/s/AKfycbyCo8alo1bTiRzLq4ptkWCbeDTskiRFkEh9obPv5FOdl5zcpvOOPBLRAHaQtZ75wcAP/exec",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Control-Allow-Origin": "*",
          mode: "no-cors",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((response) => console.log("Success:", JSON.stringify(response)))
      .catch((error) => console.error("Error:", error));
    // axios.post(url, {
    //   firstname: data.firstname,
    //   lastname: data.lastname,
    //   dateOfBirth: data.dateOfBirth,
    //   phone: data.phone,
    //   email: data.email,
    //   address: data.address,
    //   comments: data.comments,
    // });
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    console.log(newData);
  };
  return (
    <div>
      <section
        style={{ paddingTop: "135px" }}
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
                  <section
                    className="service-section service-section-two"
                    style={{
                      backgroundColor: "transparent",
                      paddingBottom: "100px",
                    }}
                  >
                    <div className="container">
                      <div className="row abc-xyz">
                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                          <img
                            style={{ height: "100%" }}
                            src="https://dev-lms.rikkeiacademy.com/unnamed%20(1).png"
                            alt=""
                          />
                        </div>
                        <div
                          className="col-md-6 col-lg-6 col-sm-12 col-xs-12"
                          id="get-scholarship"
                        >
                          <div className="register pt-md-5">
                            <Form
                              noValidate
                              validated={validated}
                              onSubmit={handleSubmit}
                              // action="
                              //  https://script.google.com/macros/s/AKfycbyCo8alo1bTiRzLq4ptkWCbeDTskiRFkEh9obPv5FOdl5zcpvOOPBLRAHaQtZ75wcAP/exec"
                              // method="post"
                            >
                              <div className="get">
                                <p>Đăng Ký Nhận Học Bổng</p>
                              </div>

                              <Row className="first-last ">
                                <Form.Group
                                  as={Col}
                                  controlId="validationCustom02"
                                >
                                  {/* <Form.Label>First name</Form.Label> */}
                                  <Form.Control
                                    required
                                    type="text"
                                    name="firstname"
                                    placeholder="Họ"
                                    value={data.fistname}
                                    onChange={(e) => handleChange(e)}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Vui lòng nhập họ
                                  </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                  as={Col}
                                  controlId="validationCustom02"
                                >
                                  {/* <Form.Label>Last name</Form.Label> */}
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder="Tên"
                                    name="lastname"
                                    value={data.lastname}
                                    onChange={(e) => handleChange(e)}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Vui lòng nhập tên
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Row>

                              <Row className="email-input">
                                <Form.Group
                                  as={Col}
                                  controlId="validationCustom02"
                                >
                                  {/* <Form.Label>Last name</Form.Label> */}
                                  <Form.Control
                                    required
                                    type="date"
                                    name="dateOfBirth"
                                    onChange={(e) => handleChange(e)}
                                    value={data.dateOfBirth}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Vui lòng nhập ngày tháng
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Row>

                              <Row className="email-input">
                                <Form.Group
                                  as={Col}
                                  controlId="validationCustom02"
                                >
                                  {/* <Form.Label>Last name</Form.Label> */}
                                  <Form.Control
                                    required
                                    type="tel"
                                    name="phone"
                                    value={data.phone}
                                    attern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Số Điện Thoại"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Vui lòng nhập số điện thoại
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Row>

                              <Row className="email-input">
                                <Form.Group
                                  as={Col}
                                  controlId="validationCustom02"
                                >
                                  {/* <Form.Label>Last name</Form.Label> */}
                                  <Form.Control
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={data.email}
                                    onChange={(e) => handleChange(e)}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Vui lòng nhập email
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Row>

                              <Row className="email-input">
                                <Form.Group
                                  as={Col}
                                  controlId="validationCustom02"
                                >
                                  {/* <Form.Label>Last name</Form.Label> */}
                                  <Form.Control
                                    required
                                    type="text"
                                    name="address"
                                    value={data.address}
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Địa Chỉ"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Vui lòng nhập địa chỉ
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Row>

                              <Row>
                                <Form.Label>
                                  Bạn biết thông tin qua đâu{" "}
                                  <span style={{ color: "red" }}>* </span>
                                </Form.Label>
                                <Form.Group
                                  className="mb-3"
                                  style={{ display: "flex" }}
                                  // as={Row}
                                >
                                  <Form.Check
                                    required
                                    type="radio"
                                    label="Rikkei Academy"
                                    // style={{ marginLeft: "10px" }}
                                    name="gido"
                                    id="Rikkei"
                                    // feedback="You must agree before submitting."
                                    // feedbackType="invalid"
                                  />
                                  <Form.Check
                                    required
                                    type="radio"
                                    label="Digiworld"
                                    name="gido"
                                    id="Digi"
                                    style={{ marginLeft: "10px" }}
                                    // feedback="You must agree before submitting."
                                    // feedbackType="invalid"
                                  />
                                  <Form.Check
                                    required
                                    type="radio"
                                    label=" Trung ương đoàn"
                                    name="gido"
                                    id="center"
                                    style={{ marginLeft: "10px" }}
                                    // feedback="You must agree before submitting."
                                    // feedbackType="invalid"
                                  />
                                  <Form.Check
                                    required
                                    type="radio"
                                    label="Khác"
                                    name="gido"
                                    id="other"
                                    style={{ marginLeft: "10px" }}
                                    // feedback="You must agree before submitting."
                                    // feedbackType="invalid"
                                  />
                                </Form.Group>
                              </Row>
                              <Row className="Education">
                                <Form.Label>
                                  Trình độ học vấn
                                  <span style={{ color: "red" }}>* </span>
                                </Form.Label>
                                <Form.Group
                                  className="mb-3"
                                  style={{ display: "flex" }}
                                >
                                  <Form.Check
                                    required
                                    type="radio"
                                    label="THPT"
                                    name="hoc"
                                    id="highschool"
                                    className="input2"
                                    // feedback="You must agree before submitting."
                                    // feedbackType="invalid"
                                  />
                                  <Form.Check
                                    required
                                    type="radio"
                                    label="Trung cấp"
                                    name="hoc"
                                    id="intermediate"
                                    className="input2"
                                    // feedback="You must agree before submitting."
                                    // feedbackType="invalid"
                                  />
                                  <Form.Check
                                    required
                                    type="radio"
                                    label=" Cao đẳng"
                                    name="hoc"
                                    id="college"
                                    className="input2"
                                    // feedback="You must agree before submitting."
                                    // feedbackType="invalid"
                                  />
                                  <Form.Check
                                    required
                                    type="radio"
                                    label="Đại học"
                                    name="hoc"
                                    id="univercity"
                                    className="input2"
                                    // feedback="You must agree before submitting."
                                    // feedbackType="invalid"
                                  />
                                </Form.Group>
                              </Row>

                              <Row>
                                <Form.Group
                                  as={Col}
                                  controlId="exampleForm.ControlTextarea1"
                                >
                                  {/* <Form.Label>Last name</Form.Label> */}
                                  <Form.Control
                                    required
                                    as="textarea"
                                    cols={40}
                                    rows={5}
                                    className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Mô tả về điều kiện hoàn cảnh *"
                                    defaultValue={""}
                                    name="comments"
                                    value={data.comments}
                                    onChange={(e) => handleChange(e)}
                                  />
                                </Form.Group>
                              </Row>

                              <Row className="button-send">
                                <Button type="submit">Submit form</Button>
                              </Row>
                            </Form>
                          </div>
                        </div>
                      </div>
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

export default ServiceSection3;

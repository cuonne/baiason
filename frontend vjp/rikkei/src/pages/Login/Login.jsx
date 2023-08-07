  import React, { useState, useEffect, useContext } from "react";
  import { useNavigate } from "react-router-dom";
  import "./Login.css";
  import { LockOutlined, UserOutlined } from "@ant-design/icons";
  import { Button, Form, Input, message } from "antd";

  // import {}

  function Login() {

    const onFinishFailed = () => {
      message.error("Vui lòng điền vào ô trống theo yêu cầu");
    };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const accounts = [
      { username: "admin@gmail.com", password: "123456789" },
      { username: "user@gmail.com", password: "123456789" },
      // Thêm các tài khoản khác vào đây
    ];

    const navigate = useNavigate();
    const handleLogin = () => {
      const matchedAccount = accounts.find(
        (account) =>
          account.username === username && account.password === password
      );
      if (matchedAccount) {
        // Generate a login token or use any authentication mechanism
        const token = "your_login_token";
    
        // Store the login token in local storage
        localStorage.setItem("token", token);
      navigate("/", { state: { username: username } });
        setIsLoggedIn(true);
        message.success("Đăng nhập thành công");
      } else {
        setIsLoggedIn(false);
        message.error("Kiểm tra lại tài khoản hoặc mật khẩu");
      }
    };
    useEffect(() => {
      if (isLoggedIn) {
        navigate("/", { state: { username: username } });
      }
    }, [isLoggedIn, navigate, username]);

    return (
      <div className="login__container">
        <div className="logIn test">
          <div className="ant-row" style={{ height: "100%" }}>
            <div className="login">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={handleLogin}
                onFinishFailed={onFinishFailed}
              >
                <h3 className="ant-typography" style={{ paddingBottom: "15px" }}>
                  Đăng nhập
                </h3>

                <Form.Item name="username" label="UserName"></Form.Item>
                <Form.Item
                  type="text"
                  name="username"
                  rules={[
                    { required: true, message: "Nhập tên đăng nhập" },
                    { type: "text", warningOnly: true },
                    {
                      type: "string",
                      min: 6,
                      message: "Tên đăng nhập phải có tối thiểu 6 kí tự",
                    },
                    {
                      type: "email",
                      message: "Không phải địng dạng email",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Item>
                <Form.Item name="password" label="Password"></Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Nhập mật khẩu" },
                    { type: "password", warningOnly: true },
                    {
                      type: "string",
                      min: 8,
                      message: "Mật khẩu phải có tối thiểu 8 kí tự",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Item>

                <Form.Item>
                  <a className="login-form-forgot" href="">
                    Bạn quên mật khẩu ?
                  </a>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Đăng nhập
                  </Button>
                </Form.Item>
                <Form.Item>
                  <a href="#">
                    <button
                      type="button"
                      className="ant-btn ant-btn-link ant-btn-sm btn-common"
                    >
                      <span
                        role="img"
                        aria-label="left"
                        className="anticon anticon-left"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          className=""
                          data-icon="left"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
                        </svg>
                      </span>
                      <span>Quay lại trang chủ</span>
                    </button>
                  </a>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Login;

import type { CascaderProps } from "antd";
import "./Resiger.css";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  message,
  Select,
} from "antd";
import React, { useState } from "react";

const { Option } = Select;

interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}

const residences: CascaderProps<DataNodeType>["options"] = [
  {
    value: "hanoi",
    label: "Hà Nội",
    children: [
      {
        value: "caugiay",
        label: "Cầu Giấy",
        children: [
          {
            value: "midinh",
            label: "Mĩ Đình",
          },
        ],
      },
    ],
  },
  {
    value: "hochiminh",
    label: "Hồ Chí Minh",
    children: [
      {
        value: "daudo",
        label: "Đâu đó",
        children: [
          {
            value: "dauday",
            label: "Đâu đấy",
          },
        ],
      },
    ],
  },
];

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const App: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    message.success("Đăng kí thành công");
    if (onFinish) {
      // window.location.href = "http://localhost:3000/";
    } else {
      message.error("Vui lòng điền vào ô trống theo yêu cầu");
    }
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 75 }}>
        <Option value="84">+84</Option>
        <Option value="99">+99</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
    <div className="resiger__container">
      <div className="ResIger test">
        <div className="ant-row" style={{ height: "100%" }}>
          <div className="Resiger">
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              className="resiger-form"
              onFinish={onFinish}
              initialValues={{
                residence: ["hanoi", "caugiay", "midinh"],
                prefix: "84",
              }}
              style={{ maxWidth: 600 }}
              scrollToFirstError
            >
              <h3 className="ant-typography" style={{ paddingBottom: "15px" }}>
                Đăng Kí
              </h3>
              <Form.Item label="E-mail" name="email"></Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                  { type: "text", warningOnly: true },
                  { type: "string", min: 6 },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Password" name="password"></Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  { type: "text", warningOnly: true },
                  { type: "string", min: 8 },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
              <Form.Item label="Confirm Password" name="confirm"></Form.Item>
              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The new password that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              {/* <Form.Item
              name="nickname"
              label="Nickname"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: "Please input your nickname!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item> */}
              <Form.Item label="Địa Chỉ" name="residence"></Form.Item>
              <Form.Item
                name="residence"
                rules={[
                  {
                    type: "array",
                    required: true,
                    message: "Please select your habitual residence!",
                  },
                ]}
              >
                <Cascader options={residences} />
              </Form.Item>
              <Form.Item label="Số Điện Thoại" name="phone"></Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                  { type: "text", warningOnly: true },
                  { type: "string", max: 10 },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  style={{ width: "100%" }}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Form.Item>
              <Form.Item label="Website" name="website"></Form.Item>
              <Form.Item
                name="website"
                rules={[{ required: true, message: "Please input website!" }]}
              >
                <AutoComplete
                  options={websiteOptions}
                  onChange={onWebsiteChange}
                  placeholder="website"
                >
                  <Input />
                </AutoComplete>
              </Form.Item>
              {/* <Form.Item label="Giới thiệu" name="intro"></Form.Item>
              <Form.Item
                name="intro"
                rules={[{ required: true, message: "Please input Intro" }]}
              >
                <Input.TextArea showCount maxLength={100} />
              </Form.Item> */}
              <Form.Item label="Giới tính" name="gender"></Form.Item>
              <Form.Item
                name="gender"
                rules={[{ required: true, message: "Please select gender!" }]}
              >
                <Select placeholder="select your gender">
                  <Option value="Male">Nam</Option>
                  <Option value="Female">Nữ</Option>
                  <Option value="other">Khác</Option>
                </Select>
              </Form.Item>

              {/* <Form.Item
              label="Captcha"
              extra="We must make sure that your are a human."
            >
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item
                    name="captcha"
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: "Please input the captcha you got!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Button>Get captcha</Button>
                </Col>
              </Row>
            </Form.Item> */}

              <Form.Item
                className="input-t"
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("Should accept agreement")),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox>
                  Tôi đồng ý với <a href="">Điều khoản dịch vụ</a>
                </Checkbox>
              </Form.Item>
              <Form.Item {...tailFormItemLayout} className="btn-firm">
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Form>
            <div style={{ marginLeft: "-300px" }}> login with fb or email</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

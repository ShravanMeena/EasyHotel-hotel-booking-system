import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
const mainContainer = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "80vh",
};
export default class Login extends Component {
  onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  render() {
    return (
      <div style={mainContainer}>
        <div
          style={{
            borderRadius: 10,
            padding: 50,
            border: "1px solid #eee",
            width: "45%",
          }}>
          <h1 style={{ width: "100%", textAlign: "center", paddingBottom: 40 }}>
            Log In
          </h1>{" "}
          <Form
            style={{ width: "100%" }}
            size='large'
            name='normal_login'
            className='login-form'
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}>
            <label>Email address</label>
            <Form.Item
              name='email'
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}>
              <Input
                prefix={<MailOutlined className='site-form-item-icon' />}
                placeholder='Email'
              />
            </Form.Item>

            <label>Password</label>
            <Form.Item
              name='password'
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}>
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='Password'
              />
            </Form.Item>

            <Form.Item style={{ display: "flex" }}>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'>
                Log In{" "}
              </Button>

              <Button
                style={{ marginLeft: 10 }}
                htmlType='submit'
                className='login-form-button'>
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

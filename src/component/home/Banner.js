import React, { Component } from "react";
import { Carousel, Form, Input, Button, DatePicker } from "antd";
import {
  UsergroupDeleteOutlined,
  ClockCircleOutlined,
  // CalendarOutlined,
  SearchOutlined,
} from "@ant-design/icons";
const { RangePicker } = DatePicker;

const contentStyle = {
  height: "570px",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url(
    "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  )`,
};

export default class Banner extends Component {
  constructor() {
    super();
    this.state = {
      form: "",
      forceUpdate: "",
    };
  }

  onFinish = (values) => {
    console.log("Finish:", values);
  };

  render() {
    const { form } = this.state;
    return (
      <Carousel autoplay>
        <div>
          <div style={contentStyle}>
            <h1 style={{ color: "#fff", fontSize: 40 }}>
              EasyBook Hotel Booking System
            </h1>
            <p>Let's start exploring the world together with EasyBook</p>

            {/* hotel search */}
            <div
              style={{
                background: "#fff",
                padding: 10,
                borderRadius: 5,
                marginTop: 20,
              }}>
              <Form
                form={form}
                name='horizontal_login'
                layout='inline'
                size='large'
                onFinish={this.onFinish}>
                <Form.Item
                  name='location'
                  rules={[
                    {
                      required: true,
                      message: "Please input your hotel location!",
                    },
                  ]}>
                  <Input
                    prefix={
                      <ClockCircleOutlined className='site-form-item-icon' />
                    }
                    placeholder='Hotel, city...'
                  />
                </Form.Item>
                <Form.Item
                  name='when'
                  rules={[
                    { required: true, message: "Please input when to when!" },
                  ]}>
                  <RangePicker />
                </Form.Item>

                <Form.Item
                  name='persons'
                  rules={[
                    {
                      required: true,
                      message: "Please input your adults number",
                    },
                  ]}>
                  <Input
                    prefix={
                      <UsergroupDeleteOutlined className='site-form-item-icon' />
                    }
                    type='text'
                    placeholder='Persons'
                  />
                </Form.Item>

                <Form.Item shouldUpdate>
                  {() => (
                    <Button
                      style={{ background: "#f9b90f", color: "#fff" }}
                      htmlType='submit'>
                      Search <SearchOutlined />
                    </Button>
                  )}
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </Carousel>
    );
  }
}

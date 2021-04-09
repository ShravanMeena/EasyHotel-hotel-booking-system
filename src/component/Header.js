import React, { Component } from "react";

import { Menu } from "antd";
import {
  HomeOutlined,
  CreditCardOutlined,
  SettingOutlined,
  LoginOutlined,
  DingdingOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

export default class Header extends Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <>
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 20,
            right: 20,
          }}>
          <h1 style={{ fontWeight: "bold" }}>
            <span style={{ color: "#18458b" }}>
              <DingdingOutlined />
              Easy
            </span>
            Book
          </h1>
        </div>

        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode='horizontal'
          style={{ padding: 20 }}>
          <Menu.Item key='mail' icon={<HomeOutlined />}>
            Home
          </Menu.Item>

          <Menu.Item key='hotel' icon={<CreditCardOutlined />}>
            Your Bookings
          </Menu.Item>

          <Menu.Item key='login' icon={<LoginOutlined />}>
            Login
          </Menu.Item>

          <Menu.Item key='register' icon={<UserAddOutlined />}>
            Register
          </Menu.Item>

          <SubMenu key='SubMenu' icon={<SettingOutlined />} title='My Account'>
            <Menu.ItemGroup>
              <Menu.Item key='setting:1'>Edit profile</Menu.Item>
              <Menu.Item key='setting:2'>Add listing</Menu.Item>
              <Menu.Item key='setting:3'>Booking</Menu.Item>
              <Menu.Item key='setting:4'>Reviews</Menu.Item>
              <Menu.Item key='setting:5'>Logout</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </>
    );
  }
}
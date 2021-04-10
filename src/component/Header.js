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
import { Link } from "react-router-dom";

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
            top: 20,
            right: 20,
          }}>
          <h1 style={{ fontWeight: "bold" }}>
            <Link to='/'>
              <span style={{ color: "#18458b" }}>
                <DingdingOutlined />
                Easy
              </span>
              Book
            </Link>
          </h1>
        </div>

        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode='horizontal'
          style={{ padding: 20 }}>
          <Menu.Item key='mail' icon={<HomeOutlined />}>
            <Link to='/'>Home</Link>
          </Menu.Item>

          <Menu.Item key='hotel' icon={<CreditCardOutlined />}>
            Your Bookings
          </Menu.Item>

          <Menu.Item key='login' icon={<LoginOutlined />}>
            <Link to='/login'>Login</Link>
          </Menu.Item>

          <Menu.Item key='register' icon={<UserAddOutlined />}>
            <Link to='/register'>Register</Link>
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

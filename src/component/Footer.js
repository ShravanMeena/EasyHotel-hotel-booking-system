import { Divider } from "antd";
import React, { Component } from "react";
// import { LeftOutlined, RightOutlined, HeartOutlined } from "@ant-design/icons";

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: 100,
          marginTop: 80,
        }}>
        {/* <div style={{ display: "flex" }}>
          <LeftOutlined />
          <RightOutlined />
        </div>{" "}
        <span>with</span> */}
        {/* <HeartOutlined /> */}
        <Divider></Divider>
        <a href='https://www.pakkamarwadi.tk/'>pakkamarwadi.tk</a>
      </div>
    );
  }
}

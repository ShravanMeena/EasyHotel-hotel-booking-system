import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import {
  AppleOutlined,
  AndroidOutlined,
  StarOutlined,
} from "@ant-design/icons";

export default class AppAvailable extends Component {
  render() {
    return (
      <Row
        style={{
          height: "70vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 70,
          backgroundImage: `url("https://images.pexels.com/photos/3771835/pexels-photo-3771835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
        }}>
        <Col span={12}>
          <h1
            style={{
              fontSize: 60,
              color: "#18458b",
              marginTop: -50,
            }}>
            Our App Available Now
          </h1>
          <p
            style={{
              opacity: 0.7,
              marginBottom: 30,
            }}>
            In ut odio libero, at vulputate urna. Nulla tristique mi a massa
            convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida.
            Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam
            nonu mmy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat.
          </p>

          <div>
            <Button
              size='large'
              style={{
                background: "#18458b",
                color: "#fff",
                borderColor: "#18458b",
              }}>
              <AppleOutlined /> Download for iPhone
            </Button>{" "}
            <Button
              size='large'
              style={{
                background: "#18458b",
                color: "#fff",
                borderColor: "#18458b",
              }}>
              <AndroidOutlined /> Download for Android
            </Button>
          </div>
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          span={12}>
          <img
            alt='okk'
            src='http://easybook.kwst.net/images/api.png'
            style={{ objectFit: "contain", height: 500 }}
          />

          <div
            style={{
              background: "#18458b",
              color: "#fff",
              padding: 5,
              borderRadius: 5,
              position: "absolute",
              right: 160,
            }}>
            <h2
              style={{
                color: "#ffff",
                fontSize: 14,
              }}>
              EasyBook <StarOutlined />
            </h2>
          </div>
        </Col>
      </Row>
    );
  }
}

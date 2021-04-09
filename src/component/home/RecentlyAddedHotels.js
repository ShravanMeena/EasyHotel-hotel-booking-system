import React, { Component } from "react";
import { Button, Divider } from "antd";
import {
  SwapOutlined,
  HeartOutlined,
  ShakeOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import Star from "../Star";

const iconBg = {
  background: "#ecf6f8",
  alignItems: "center",
  justifyContent: "center",
  padding: 5,
  marginLeft: 5,
  color: "#18458b",
};

const iconBg2 = {
  marginLeft: 10,
  color: "#18458b",
  fontSize: 20,
};

const data = [1, 2, 3, 4];
const contentStyle = {
  minHeight: "90vh",
  background: "#ecf6f8",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 50,
};

export default class RecentlyAddedHotels extends Component {
  render() {
    return (
      <div style={contentStyle}>
        <Star />
        <h1 style={{ color: "#18458b" }}>Recently Added Hotels</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
          pulvinar neque. Nulla finibus lobortis pulvinar.
        </p>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}>
          {data.map((item, i) => {
            return (
              <div
                style={{
                  width: "24%",
                  borderRadius: 10,
                  background: "#fff",
                  marginBottom: 20,
                }}>
                <img
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                  }}
                  alt='example'
                  src='https://images.pexels.com/photos/6434623/pexels-photo-6434623.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                />
                <div style={{ padding: 15 }}>
                  <h1>Gold plaza hotel</h1>
                  <p>
                    sit amet, consectetur adipiscing elit. Maecenas in pulvinar
                    neque. Nulla finibus lobortis pulvinar.
                  </p>

                  <div style={{ display: "flex" }}>
                    <div style={iconBg2}>
                      <SwapOutlined />
                    </div>

                    <div style={iconBg2}>
                      <HeartOutlined />
                    </div>

                    <div style={iconBg2}>
                      <ShakeOutlined />
                    </div>

                    <div style={iconBg2}>
                      <WifiOutlined />
                    </div>
                  </div>

                  <Divider />
                  <div style={{ display: "flex" }}>
                    <Button>AWG/NIGHT &99</Button>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}>
                      <div style={iconBg}>
                        <SwapOutlined />
                      </div>

                      <div style={iconBg}>
                        <HeartOutlined />
                      </div>

                      <div style={iconBg}>
                        <ShakeOutlined />
                      </div>

                      <div style={iconBg}>
                        <WifiOutlined />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

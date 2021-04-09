import React, { Component } from "react";
import {
  CreditCardOutlined,
  GiftOutlined,
  CustomerServiceOutlined,
  UsergroupDeleteOutlined,
  LikeOutlined,
  IdcardOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";
import Star from "../Star";
const data = [
  { id: 1, icon: CustomerServiceOutlined, title: "Best service guarantee" },
  { id: 2, icon: GiftOutlined, title: "Exclusive gifts" },
  { id: 3, icon: CreditCardOutlined, title: "Get more from your card" },
];

const data_new = [
  {
    id: 1,
    icon: UsergroupDeleteOutlined,
    title: "New Visiters Every Week",
    numbers: 254,
  },
  {
    id: 2,
    icon: LikeOutlined,
    title: "Happy customers every year",
    numbers: 12168,
  },
  { id: 3, icon: HeartOutlined, title: "Won Awards", numbers: 172 },
  {
    id: 4,
    icon: IdcardOutlined,
    title: "New Listing Every Week",
    numbers: 765,
  },
];

export default class WhyChoose extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: 50,
        }}>
        <Star /> <h1 style={{ color: "#18458b" }}>Why Choose Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
          pulvinar neque. Nulla finibus lobortis pulvinar.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: 30,
          }}>
          {data.map((item, i) => {
            return (
              <div
                key={i}
                style={{
                  width: "27%",
                  height: 250,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 20,
                  border: "1px solid #eee",
                  borderRadius: 5,
                }}>
                <item.icon style={{ fontSize: 60, color: "#18458b" }} />
                <h2
                  style={{
                    textAlign: "center",
                    color: "#18458b",
                    marginTop: 10,
                  }}>
                  {item.title}
                </h2>
                <p style={{ textAlign: "center" }}>
                  Proin dapibus nisl ornare diam varius tempus. Aenean a quam
                  luctus, finibus tellus ut, convallis eros sollicitudin turpis.
                </p>
              </div>
            );
          })}
        </div>
        <Divider></Divider>
        <div
          style={{
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 30,
          }}>
          {data_new.map((item, i) => {
            return (
              <div
                key={i}
                style={{
                  width: "24%",
                  height: 120,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 20,
                  border: "1px solid #ecf6f8",
                  borderRadius: 5,
                  background: "#ecf6f8",
                }}>
                <div>
                  <h1 style={{ textAlign: "left", color: "#18458b" }}>
                    {item.numbers}
                  </h1>
                  <p style={{ textAlign: "left", fontSize: 14, opacity: 0.8 }}>
                    {item.title}{" "}
                  </p>
                </div>
                <item.icon style={{ fontSize: 60, color: "#18458b" }} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Star from "../Star";
const contentStyle = {
  height: "90vh",
  background: "#ffff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 40,
};
export default class PopularDestinations extends Component {
  render() {
    return (
      <div style={contentStyle}>
        <Star />
        <h1 style={{ color: "#18458b" }}>Popular Destinations</h1>
      </div>
    );
  }
}

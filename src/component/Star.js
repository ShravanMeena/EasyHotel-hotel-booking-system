import React, { Component } from "react";
import { StarOutlined, StarFilled } from "@ant-design/icons";
export default class Star extends Component {
  render() {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <StarOutlined size='small' />
        <StarFilled style={{ color: "#f9b90f", fontSize: 20, margin: 4 }} />
        <StarOutlined size='small' />
      </div>
    );
  }
}

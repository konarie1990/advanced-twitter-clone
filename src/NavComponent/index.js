import React, { Component } from "react";
import "./navComponent.css";

class NavComponent extends Component {
  render() {
    return (
      <div className="nav">
        <div className="navBarLeft" />
        <div className="navBarMiddle" />
        <div className="navBarRight" />
      </div>
    );
  }
}

export default NavComponent;

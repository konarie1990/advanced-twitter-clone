import React from "react";
import LeftComponent from "./LeftComponent/index";
import MiddleComponent from "./MiddleComponent/index";
import RightComponent from "./RightComponent/index";
import "./App.css";
import NavComponent from "./NavComponent";

function App() {
  return (
    <div>
      <NavComponent />
      <div className="app">
        <LeftComponent />
        <MiddleComponent />
        <RightComponent />
      </div>
    </div>
  );
}
export default App;

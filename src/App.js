import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img
        onError={(e) => {
          e.target.remove();
        }}
        onLoad={(e) => {
          e.target.value = logo;
        }}
        src={logo}
        className="App-logo"
        alt="logo"
      />
    </div>
  );
}

export default App;

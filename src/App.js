import React from "react";
import "./App.css";
import dice from "./assets/dice.svg";
import divider from "./assets/divider.svg";

function App() {
  return (
    <div className="background">
      <div className="content">
        <p>ADVICE 117</p>
        <h4>
          It is easy to sit up and take notice, what's difficult is getting up
          and taking action{" "}
        </h4>
        <img src={divider} alt="divider" />
        <img src={dice} alt="dice" />
      </div>
    </div>
  );
}

export default App;

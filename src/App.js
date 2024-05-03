import React, { useEffect, useState } from "react";
import "./App.css";
import dice from "./assets/dice.svg";
import divider from "./assets/divider.svg";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip.advice))
      .catch((error) => console.error("Error fetching advice", error));
  };

  const getAdvice = () => {
    fetchAdvice();
  };

  return (
    <div className="background">
      <div className="content">
        <p>ADVICE 117</p>
        {advice && <h4>{advice}</h4>}
        <img src={divider} alt="divider" className="divider" />
        <img src={dice} alt="dice" onClick={getAdvice} />
      </div>
    </div>
  );
}

export default App;

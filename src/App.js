import React, { useEffect, useState } from "react";
import "./App.css";
import dice from "./assets/dice.svg";
import divider from "./assets/divider.svg";

function App() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setId(data.slip.id);
      })
      .catch((error) => console.error("Error fetching advice", error));
  };

  const getAdvice = () => {
    fetchAdvice();
  };

  return (
    <div className="background">
      <div className="content">
        <div className="topic">
          <p>ADVICE #</p>
          {id && <p>{id}</p>}
        </div>
        {advice && <h4>{advice}</h4>}
        <img src={divider} alt="divider" className="divider" />
        <img src={dice} alt="dice" onClick={getAdvice} className="dice" />
      </div>
    </div>
  );
}

export default App;

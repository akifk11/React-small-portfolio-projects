import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((item) => {
        const randItem = Math.floor(Math.random() * item.length);
        setQuote(item[randItem]);
      });
  };
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App">
      <div>
        <h6>{quote.text}</h6>
        <h6>{quote.author}</h6>
      </div>
      <button onClick={getQuote}>get quote</button>
    </div>
  );
}

export default App;

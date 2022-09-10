import React, { useState } from "react";
import Calculator from "./Calculator";

import Row from "./Row";
import HeadRow from "./HeadRow";

export default function App() {
  const [input, setInput] = useState(null);
  const [rate, setRate] = useState(0.03);
  const rates = [
    rate,
    rate + 0.001,

    rate + 0.0015,
    rate + 0.002,
    rate + 0.0025,
    rate + 0.003,
    rate + 0.0035,
    rate + 0.004,
    rate + 0.0045,
    rate + 0.005,
    rate + 0.0055,
  ];

  const principals = [
    300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000,
  ];
  function getInput(event) {
    setInput(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h1>Rate calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter interest rate"
          onChange={getInput}
        />
        <input type="submit" />
      </form>

      <table>
        <thead>
          <HeadRow rates={rates} />
        </thead>
        <tbody>
          <Row rates={rates} principal={300000} />
          <Row rates={rates} principal={400000} />
          <Row rates={rates} principal={500000} />
          <Row rates={rates} principal={600000} />
          <Row rates={rates} principal={700000} />
          <Row rates={rates} principal={800000} />
          <Row rates={rates} principal={900000} />
          <Row rates={rates} principal={1000000} />
        </tbody>
      </table>
    </div>
  );
}

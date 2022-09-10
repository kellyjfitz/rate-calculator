import React, { useState } from "react";
import Calculator from "./Calculator";

import Row from "./Row";
import HeadRow from "./HeadRow";
import "bootstrap/dist/css/bootstrap.min.css";

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
    rate + 0.006,
    rate + 0.0065,
    rate + 0.007,
    rate + 0.0075,
    rate + 0.008,
    rate + 0.0085,
    rate + 0.009,
    rate + 0.0095,
    rate + 0.01,
  ];

  const principals = [
    300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000,
  ];
  function getInput(event) {
    setInput(event.target.value / 100);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setRate(input);
  }

  return (
    <div className="container">
      <h1 className="mt-5">Rate calculator</h1>
      <p>
        Add the current interest rate below. <br />
        The table will update to tell you the monthly repayment and the
        difference in monthly repayments.
      </p>
      <p>These calculations are based on a 30-year loan term.</p>
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

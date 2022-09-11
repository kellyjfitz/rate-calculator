import React, { useState } from "react";

import Row from "./Row";
import HeadRow from "./HeadRow";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

export default function App() {
  const [input, setInput] = useState(null);
  const [rate, setRate] = useState(0.03);

  const rates = [rate];

  //using this loop to generate the new rate values
  //which go up by 0.0005 each time
  //that's 5 basis points
  //some of the later values end up super long, not sure why
  //if I try to round them before pushing them to the array it errors every time
  for (let i = 0; i < 20; i++) {
    let newRate = rates[rates.length - 1] + 0.0005;
    rates.push(newRate);
  }
  // to get around the above error, I round the interest rates
  // then push them to a new array of rounded rates
  // I leave out the second one in the original array
  //because they never lift rates by just 5 basis points
  let roundedRates = [];
  rates.map(function (roundedRate, index) {
    roundedRate = roundedRate.toFixed(4);
    if (index !== 1) {
      roundedRates.push(roundedRate);
    }
    return null;
  });

  function getInput(event) {
    setInput(event.target.value / 100);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setRate(input);
  }

  return (
    <div className="container">
      <h1 className="mt-5">Repayment calculator</h1>
      <p>Add the current interest rate below.</p>

      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Enter interest rate"
            onChange={getInput}
          />
          <Button type="submit">
            <FontAwesomeIcon icon={faCalculator} />
          </Button>
        </InputGroup>
      </Form>
      <p>
        The table will update to tell you the monthly repayment and the
        difference in monthly repayments.
        <br />
        These calculations are based on a <strong>20 years</strong> remaining on
        the loan term.
      </p>
      <Table striped responsive>
        <thead>
          <HeadRow rates={roundedRates} />
        </thead>
        <tbody>
          <Row rates={roundedRates} principal={300000} />
          <Row rates={roundedRates} principal={400000} />
          <Row rates={roundedRates} principal={500000} />
          <Row rates={roundedRates} principal={600000} />
          <Row rates={roundedRates} principal={700000} />
          <Row rates={roundedRates} principal={800000} />
          <Row rates={roundedRates} principal={900000} />
          <Row rates={roundedRates} principal={1000000} />
        </tbody>
      </Table>
    </div>
  );
}

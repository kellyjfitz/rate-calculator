import React, { useState } from "react";
import Row from "./Row";
import HeadRow from "./HeadRow";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [input, setInput] = useState(null);
  const [rate, setRate] = useState(0.03);
  const rates = [rate];
  const rateDecreases = [rate];

  //using this loop to generate the new rate values
  //which go up by 0.0005 each time
  //that's 5 basis points
  //some of the later values end up super long, not sure why
  //if I try to round them before pushing them to the array it errors every time
  //this one is for the rate increases
  for (let i = 0; i < 20; i++) {
    let newRate = rates[rates.length - 1] + 0.0005;
    rates.push(newRate);
  }

  //this one is for the rate decreases
  for (let i = 0; i < 20; i++) {
    let rateDrop = rateDecreases[rateDecreases.length - 1] - 0.0005;
    rateDecreases.push(rateDrop);
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

  let roundedRateDecreases = [];
  rateDecreases.map(function (roundedRate, index) {
    roundedRate = roundedRate.toFixed(4);
    if (index !== 1) {
      roundedRateDecreases.push(roundedRate);
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
      <h1>Repayment calculator</h1>

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
      <p>Add the current/initial interest rate above.</p>
      <p>
        The tables will update to tell you the monthly repayment and the
        difference in repayments following a rate change.
      </p>
      <p>
        The first table shows you rate increases and the second table rate
        decreases.
      </p>
      <p>
        These calculations are based on <strong>20 years</strong> remaining on
        the loan term and don't factor in fees.
      </p>
      <h3>Rate increases</h3>
      <Table striped bordered responsive>
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
      <h3>Rate decreases</h3>
      <Table striped bordered responsive>
        <thead>
          <HeadRow rates={roundedRateDecreases} />
        </thead>
        <tbody>
          <Row rates={roundedRateDecreases} principal={300000} />
          <Row rates={roundedRateDecreases} principal={400000} />
          <Row rates={roundedRateDecreases} principal={500000} />
          <Row rates={roundedRateDecreases} principal={600000} />
          <Row rates={roundedRateDecreases} principal={700000} />
          <Row rates={roundedRateDecreases} principal={800000} />
          <Row rates={roundedRateDecreases} principal={900000} />
          <Row rates={roundedRateDecreases} principal={1000000} />
        </tbody>
      </Table>

      <Footer />
    </div>
  );
}

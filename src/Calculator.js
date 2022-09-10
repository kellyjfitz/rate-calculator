import React from "react";

export default function Calculator(props) {
  const principals = [
    300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000,
  ];
  function calculateRepayment(principal) {
    // To figure your mortgage payment, start by converting your annual interest rate to a monthly interest rate by dividing by 12.
    const monthlyInterest = props.rate / 12;
    //Next, add 1 to the monthly rate.
    const monthlyInterestPlusOne = monthlyInterest + 1;

    //Third, multiply the number of years in the term of the mortgage by 12 to calculate the number of monthly payments you’ll make.
    const months = 30 * 12;
    //Fourth, raise the result of 1 plus the monthly rate to the negative power of the number of monthly payments you’ll make.
    let repayment = monthlyInterestPlusOne ** -months;
    //Fifth, subtract that result from 1.
    repayment = 1 - repayment;
    //Sixth, divide the monthly rate by the result.
    repayment = monthlyInterest / repayment;
    //Last, multiple the result by the amount you borrowed.
    repayment *= principal;
    repayment = Math.round(repayment);
    return repayment;
  }
  let repayments = [];
  principals.map(function (principal) {
    let repayment = calculateRepayment(principal);
    repayments.push(repayment);
    return null;
  });
  console.log(repayments);
  if (props.rate) {
    return (
      <div>
        <h3>Rate: {props.rate * 100}%</h3>
        Monthly repayment: ${calculateRepayment(principals[0])}
        <br />
        <ul>
          {repayments.map(function (repayment, index) {
            return <li key={index}>{repayment}</li>;
          })}
        </ul>
      </div>
    );
  } else return null;
}

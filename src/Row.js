import React from "react";
export default function Row(props) {
  function calculateRepayment(rate) {
    // To figure your mortgage payment, start by converting your annual interest rate to a monthly interest rate by dividing by 12.
    const monthlyInterest = rate / 12;
    //Next, add 1 to the monthly rate.
    const monthlyInterestPlusOne = monthlyInterest + 1;

    //Third, multiply the number of years in the term of the mortgage by 12 to calculate the number of monthly payments you’ll make.
    const months = 20 * 12;
    //Fourth, raise the result of 1 plus the monthly rate to the negative power of the number of monthly payments you’ll make.
    let repayment = monthlyInterestPlusOne ** -months;
    //Fifth, subtract that result from 1.
    repayment = 1 - repayment;
    //Sixth, divide the monthly rate by the result.
    repayment = monthlyInterest / repayment;
    //Last, multiple the result by the amount you borrowed.
    repayment *= props.principal;
    repayment = Math.round(repayment);
    return repayment;
  }

  //creating empty array to hold the repayments once they are calculates
  let repayments = [];
  //looping through the array of rates, and calculating the repayment based on the props.principal
  props.rates.map(function (rate, index) {
    let repayment = calculateRepayment(rate);
    //now adding the repayment to the array
    repayments.push(repayment);
    //calculating the difference between the new repayments and the initial repayment
    let difference = repayment - repayments[0];
    //adding the difference to the array for everything except the initial repayment
    index > 0 && repayments.push(difference);
    return null;
  });
  return (
    <tr>
      <th scope="row">${props.principal}</th>
      {repayments.map(function (repayment, index) {
        return <td key={index}>{repayment}</td>;
      })}
    </tr>
  );
}

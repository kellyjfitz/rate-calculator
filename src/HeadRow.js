import React from "react";
export default function HeadRow(props) {
  //creating an empty array to hold the column headers
  let colHeaders = [];

  props.rates.map(function (rate) {
    //multiplying rate by 100 and then rounding to two decimal places for a nice looking number
    rate *= 100;
    rate = rate.toFixed(2);
    //adding the rate to the colHeaders array
    colHeaders.push(rate);
    //adding the D for the difference column header to the colHeaders array
    colHeaders.push("D");
    return null;
  });
  //removing the first D from the array since there is no difference after the first repayment
  colHeaders.splice(1, 1);

  return (
    <tr>
      <th />
      {colHeaders.map(function (colhead, index) {
        return <th key={index}>{colhead}</th>;
      })}
    </tr>
  );
}

import React from "react";
export default function HeadRow(props) {
  let colHeaders = [];
  props.rates.map(function (rate, index) {
    rate *= 100;
    rate = rate.toFixed(2);
    colHeaders.push(rate);
    return null;
  });

  const d = "D";
  return (
    <tr>
      <th />
      <th>{colHeaders[0]}</th>
      <th>{colHeaders[1]}</th>
      <th>{d}</th>
      <th>{colHeaders[2]}</th>
      <th>{d}</th>

      <th>{colHeaders[3]}</th>
      <th>{d}</th>

      <th>{colHeaders[4]}</th>
      <th>{d}</th>

      <th>{colHeaders[5]}</th>
      <th>{d}</th>

      <th>{colHeaders[6]}</th>
      <th>{d}</th>

      <th>{colHeaders[7]}</th>
      <th>{d}</th>

      <th>{colHeaders[8]}</th>
      <th>{d}</th>

      <th>{colHeaders[9]}</th>
      <th>{d}</th>

      <th>{colHeaders[10]}</th>
      <th>{d}</th>

      <th>{colHeaders[11]}</th>
    </tr>
  );
}

/* {props.rates.map(function (colhead, index) {
        return <th key={index}>{colhead.toFixed(4)}</th>;
      })} */

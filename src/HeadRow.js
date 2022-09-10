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
      <th rowSpan="2">{colHeaders[0]}</th>
      <th>
        {colHeaders[1]}
        <br />
        +10pts
      </th>
      <th>{d}</th>
      <th>
        {colHeaders[2]}
        <br />
        +15pts
      </th>
      <th>{d}</th>

      <th>
        {colHeaders[3]}
        <br />
        +20pts
      </th>
      <th>{d}</th>

      <th>
        {colHeaders[4]}
        <br />
        +25pts
      </th>
      <th>{d}</th>

      <th>
        {colHeaders[5]}
        <br />
        +30pts
      </th>
      <th>{d}</th>

      <th>
        {colHeaders[6]}
        <br />
        +35pts
      </th>
      <th>{d}</th>

      <th>
        {colHeaders[7]}
        <br />
        +40pts
      </th>
      <th>{d}</th>

      <th>
        {colHeaders[8]}
        <br />
        +45pts
      </th>
      <th>{d}</th>

      <th>
        {colHeaders[9]}
        <br />
        +50pts
      </th>
      <th>{d}</th>

      <th>
        {colHeaders[10]}
        <br />
        +55pts
      </th>
      <th>{d}</th>

      <th>
        {colHeaders[11]}
        <br />
        +60pts
      </th>
      <th>{d}</th>
      <th>
        {colHeaders[12]}
        <br />
        +65pts
      </th>
      <th>{d}</th>
      <th>
        {colHeaders[13]}
        <br />
        +70pts
      </th>
      <th>{d}</th>
      <th>
        {colHeaders[14]}
        <br />
        +75pts
      </th>
      <th>{d}</th>
      <th>
        {colHeaders[15]}
        <br />
        +80pts
      </th>
      <th>{d}</th>
      <th>
        {colHeaders[16]}
        <br />
        +85pts
      </th>
      <th>{d}</th>
      <th>
        {colHeaders[17]}
        <br />
        +90pts
      </th>
      <th>{d}</th>
      <th>
        {colHeaders[18]}
        <br />
        +95pts
      </th>
      <th>{d}</th>
      <th>
        {colHeaders[19]}
        <br />
        +100pts
      </th>
      <th>{d}</th>
    </tr>
  );
}

/* {props.rates.map(function (colhead, index) {
        return <th key={index}>{colhead.toFixed(4)}</th>;
      })} */

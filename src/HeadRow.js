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
      <th scope="col" rowSpan="2">
        {colHeaders[0]}
      </th>
      <th scope="col" rowSpan="2">
        <small>+10</small>
        <br />
        {colHeaders[1]}
      </th>
      <th>{d}</th>
      <th>
        <small>+15</small>
        <br />
        {colHeaders[2]}
      </th>
      <th>{d}</th>

      <th>
        <small>+20</small>
        <br />
        {colHeaders[3]}
      </th>
      <th>{d}</th>

      <th>
        <small>+25</small>
        <br />
        {colHeaders[4]}
      </th>
      <th>{d}</th>

      <th>
        <small>+30</small>
        <br />
        {colHeaders[5]}
      </th>
      <th>{d}</th>

      <th>
        <small>+35</small>
        <br />
        {colHeaders[6]}
      </th>
      <th>{d}</th>

      <th>
        <small>+40</small>
        <br />
        {colHeaders[7]}
      </th>
      <th>{d}</th>

      <th>
        <small>+45</small>
        <br />
        {colHeaders[8]}
      </th>
      <th>{d}</th>

      <th>
        <small>+50</small>
        <br />
        {colHeaders[9]}
      </th>
      <th>{d}</th>

      <th>
        <small>+55</small>
        <br />
        {colHeaders[10]}
      </th>
      <th>{d}</th>

      <th>
        <small>+60</small>
        <br />
        {colHeaders[11]}
      </th>
      <th>{d}</th>
      <th>
        <small>+65</small>
        <br />
        {colHeaders[12]}
      </th>
      <th>{d}</th>
      <th>
        <small>+70</small>
        <br />
        {colHeaders[13]}
      </th>
      <th>{d}</th>
      <th>
        <small>+75</small>
        <br />
        {colHeaders[14]}
      </th>
      <th>{d}</th>
      <th>
        <small>+80</small>
        <br />
        {colHeaders[15]}
      </th>
      <th>{d}</th>
      <th>
        <small>+85</small>
        <br />
        {colHeaders[16]}
      </th>
      <th>{d}</th>
      <th>
        <small>+90</small>
        <br />
        {colHeaders[17]}
      </th>
      <th>{d}</th>
      <th>
        <small>+95</small>
        <br />
        {colHeaders[18]}
      </th>
      <th>{d}</th>
      <th>
        <small>+100</small>
        <br />
        {colHeaders[19]}
      </th>
      <th>{d}</th>
    </tr>
  );
}

/* {props.rates.map(function (colhead, index) {
        return <th key={index}>{colhead.toFixed(4)}</th>;
      })} */

import React from "react";
import "./CityInfo.css";

export default function List1(props) {
  return (
    <ul>
      <li>
        Last updated: {props.date} {props.time}
      </li>
      <li>Cloudy</li>
    </ul>
  );
}

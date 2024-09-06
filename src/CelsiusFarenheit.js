import React from "react";

export default function CelsiusFarenheit(props) {
  return (
    <div className="Temperature">
      {props.temp}
      <div className="celsius">
        <a href="">°C</a> | <a href="">°F</a>
      </div>
    </div>
  );
}

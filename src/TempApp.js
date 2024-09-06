import React from "react";

export default function TempApp(props) {
  return (
    <div className="row">
      <div className="col-6">
        <div className="clearfix">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Clear"
            className="float-left"
          />
          <div className="float-left">
            <div className="Temperature">{props.temp}</div>
            <span className="celsius">
              <a href="">°C</a> | <a href="">°F</a>
            </span>
          </div>
        </div>
      </div>

      <div className="col-6">
        <ul>
          <li className="bullet">Humidity: {props.humidity}%</li>
          <li className="bullet">Wind: {props.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}

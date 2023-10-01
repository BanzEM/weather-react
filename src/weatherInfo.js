import React from "react";

export default function weatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>{props.data.date}</li>
        <li>{props.data.description}</li>
      </ul>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              src="https://openweathermap.org/img/wn/${TemperatureData.icon}@2x.png"
              alt="icon"
            />
            <span> Math.round({props.data.temperature}) °C|°F</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 10%</li>
              <li>{props.data.humidity}</li>
              <li>{props.data.wind}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

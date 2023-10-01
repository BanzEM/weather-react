import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <input type="text" placeholder="Enter City" />
        <button>Search</button>
      </form>
      <div>Cape Town</div>
      <ul>
        <li>Sunday 7:00pm</li>
        <li>mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" />
          <span> 15 °C|°F</span>
          <div className="col-6">
            <ul>
              <li>Precipitation: 10%</li>
              <li>Humidity:80%</li>
              <li>Wind speed: 10km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

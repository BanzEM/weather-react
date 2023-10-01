import React, { useState } from "react";
import "./Weather.css";
import weatherInfo from "./weatherInfo";

export default function Weather() {
  const [TemperatureData, setTemperatureData] = useState({ ready: false });

  function showTemperature(event) {
    setTemperatureData({
      ready: true,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: "Sunday 7pm",
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(response.data);
  }

  if (TemperatureData.ready) {
    return (
      <div className="weather">
        <form>
          <weatherInfo data={TemperatureData} />
          <input type="text" placeholder="Enter City" />
          <button>Search</button>
        </form>
      </div>
    );
  } else {
    let apikey = "a63e0c69093b1d4e3df9e98b9a64478b";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
    return <div>Loading...</div>;
  }
}

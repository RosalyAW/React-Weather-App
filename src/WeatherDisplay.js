import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import "./WeatherDisplay.css";

export default function WeatherDisplay() {
    let weatherData = {
    city: "Sevilla",
    temperature: "24°c",
    date: "Tue-23 Sept 2020-22:45h",
    description: "Sunny",
    sunrise: "07.33h",
    sunset: "17.45h",
    humidity: 80,
    wind: 10
  };
    return (
    <div className="App">
 <nav className="navbar top navbar">
            <div className="searchBar">
              <form id="search-button" className="form-inline">
                <button
                  id="currentButton"
                  className="btn btn-outline-light my-2 my-sm-0"
                  type="submit"
                >
                  <i className="fas fa-map-marker-alt"></i>
                </button>
                <button
                  id="search"
                  className="btn btn-outline-light my-2 my-xs-0"
                  type="submit"
                >
                  <i className="fas fa-search"></i>
                </button>
                <input
                  id="search-text-input"
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search for city..."
                  aria-label="Search"
                />
                <button
                  id="celcius-button"
                  className="btn btn-outline-light my-2 my-xs-0"
                  type="submit"
                >
                    °C
                </button>
                <button
                  id="fahrenheit-button"
                  className="btn btn-outline-light my-2 my-xs-0"
                  type="submit"
                >
                    °F
                </button>
              </form>
            </div>
          </nav>

          <div className="row">
            <div className="col-12" id="cityTime">
              <h1 id="city">
                <strong>{weatherData.city}</strong>
              </h1>
              <p id="currentTime">{weatherData.date}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <img
                src="Sunny-icon.png"
                alt="Sunny"
                id="topIcon"
                className="topWeatherIcon"
              />
            </div>
            <div className="col-4" id="tempDescription">
              <h1 className="temp-current" id="current-temp">
                {weatherData.temperature}
              </h1>
              <p id="description">{weatherData.description}</p>
            </div>
            <div className="col-4">
              <ul className="details">
                <li id="sunrise">Sunrise: {weatherData.sunrise}</li>
                <li id="sunset">Sunset:{weatherData.sunset}</li>
                <li id="humidity">Humidity:{weatherData.humidity}</li>
                <li id="windSpeed">Wind:{weatherData.wind}</li>
              </ul>
            </div>
            </div>
            </div>
);
}
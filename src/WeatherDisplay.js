import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import DateFormat from "./DateFormat.js";
import Axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "./WeatherDisplay.css";

export default function WeatherDisplay(props) {
  const [Conditions, setConditions] = useState({});
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);

  function showConditionsResponse(response) {
    setConditions({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity:response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: "icon",
      sunset: "17.45h",
      sunrise: "08.00h",
    });
    setReady(true);
  }
  function handleCitySubmit(event) {
    setCity(event.target.value);
  }
  function search() {
    let ApiKey = "5c57e0689379640fccf1044191d9a54c";
    let Unit = "metric";
    let Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=${Unit}`;
    Axios.get(Url).then(showConditionsResponse);
  }
  function Submit(event) {
    event.preventDefault();
    search();
  }
  //ISSUE: Make the Icon from fontawesome work!!
  if (ready) {
    return (
      <div className="WeatherDisplay">
        <nav className="navbar top navbar">
          <div className="searchBar">
            <form onSubmit={Submit} id="search-button" className="form-inline">
              <button
                id="currentButton"
                className="btn btn-outline-light my-2 my-sm-0"
                type="submit"
              >
                <i className="fas fa-map-marker-alt">Now</i>
              </button>
              <button
                id="search"
                className="btn btn-outline-light my-2 my-xs-0"
                type="submit"
              >
                <i className="fas fa-search">Search</i>
              </button>
              <input
                id="search-text-input"
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search for city..."
                aria-label="Search"
                autoComplete="off"
                onChange={handleCitySubmit}
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
              <strong>{Conditions.city}</strong>
            </h1>
            <p id="currentTime"><DateFormat date={Conditions.date}/></p>
          </div>
        </div>
        <div className="row">
          <div className="TopIcon col-4">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="white"
              size={100}
              animate={true}
            />
          </div>
          <div className="col-4" id="tempDescription">
            <h1 className="temp-current" id="current-temp">
              {Conditions.temperature}ºc</h1>
            <p id="description">{Conditions.description}</p>
          </div>
          <div className="col-4">
            <ul className="details">
              <li id="sunrise">Sunrise: {Conditions.sunrise}</li>
              <li id="sunset">Sunset: {Conditions.sunset}</li>
              <li id="humidity">Humidity: {Conditions.humidity} %</li>
              <li id="windSpeed">Wind: {Conditions.wind} Km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <p>Page is Loading...</p>;
  }
}
import React, { useState } from "react";
import DateFormat from "./DateFormat.js";
import Axios from "axios";
import DisplayIcon from "./DisplayIcon.js";
import CovertionButton from "./ConvertionButton.js";
import DailyForecast from "./DailyForecast.js";
import Timeformat from "./TimeFormat.js";

import "bootstrap/dist/css/bootstrap.css";
import "./WeatherDisplay.css";
import TimeFormat from "./TimeFormat.js";

export default function WeatherDisplay(props) {
  const [Conditions, setConditions] = useState({});
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [units, setUnits] = useState("celsius");

  function showConditionsResponse(response) {
    setConditions({
      city: response.data.name,
      date: DateFormat(response.data.dt * 1000),
      currentTime: TimeFormat(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity:response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      sunset:Timeformat(response.data.sys.sunset * 1000),
      sunrise:Timeformat(response.data.sys.sunrise * 1000),
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
  
  if (ready) {
    return (
      <div className="WeatherDisplay">
        <nav className="navbar top navbar">
          <div className="searchBar">
            <form onSubmit={Submit} id="search-button" className="form-inline">
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
              <CovertionButton setUnits={setUnits} />
            </form>
          </div>
        </nav>
        <div className="row">
          <div className="col-12" id="cityTime">
            <h1 id="city">
              <strong>{Conditions.city}</strong>
            </h1>
            <p id="currentDate">{Conditions.date}</p>
            <p id="currentTime">{Conditions.currentTime}h</p>
          </div>
        </div>
        <div className="row">
          <div className="TopIcon col-4">
            <DisplayIcon code={Conditions.icon}/>
          </div>
          <div className="col-4" id="tempDescription"> 
            {units === "celsius" ? <h1 className="temp-current" id="current-temp"> {Math.round(Conditions.temperature)}°c </h1> : <h1 className="temp-current" id="current-temp">{Math.round(Conditions.temperature * 9 / 5 + 32)}°f</h1>}
            <p id="description">{Conditions.description}</p>
          </div>
          <div className="col-4">
            <ul className="details">
              <li id="sunrise"> Sunrise: {Conditions.sunrise} am </li>
              <li id="sunset"> Sunset: {Conditions.sunset} pm </li>
              <li id="humidity">Humidity: {Conditions.humidity} %</li>
              <li id="windSpeed">Wind: {Conditions.wind} Km/h</li>
            </ul>
          </div>
          <DailyForecast city={Conditions.city}/>
        </div>
      </div>
    );
  } else {
    search();
    return <p>Page is Loading...</p>;
  }
}
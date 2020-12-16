import React, {useState} from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import Axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';
import "./WeatherDisplay.css";

export default function WeatherDisplay(props) {
  const [Conditions, setConditions] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  
  function showConditionsResponse(response) {
    console.log(response.data);
    setConditions({
      ready: true,
      city: response.data.name,
      date: "Tue-23 Sept 2020-22:45h",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: "icon",
      sunset: "17.45h",
      sunrise: "08.00h"
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    Submit();
  }
  function handleCitySubmit(event) {
    setCity(event.target.value);
  }
  function Submit() {
    let ApiKey = "4f7f9f9b241615e6a8ecfd81de742bd2";
    let Unit = "metric";
    let Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=${Unit}`
    
    Axios.get(Url).then(showConditionsResponse);
  }
  //ISSUE: Make the Icon from fontawesome work!!
  if (Conditions.ready) {
    return (
      <p>Page is Loading...</p>
    );
  } else {
    return (
      <div className="WeatherDisplay">
        <nav className="navbar top navbar">
          <div className="searchBar">
            <form onSubmit={handleSubmit} id="search-button" className="form-inline">
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
            <p id="currentTime">{Conditions.date}</p>
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
              {Conditions.temperature}
            </h1>
            <p id="description">{Conditions.description}</p>
          </div>
          <div className="col-4">
            <ul className="details">
              <li id="sunrise">Sunrise: {Conditions.sunrise}</li>
              <li id="sunset">Sunset:{Conditions.sunset}</li>
              <li id="humidity">Humidity:{Conditions.humidity}</li>
              <li id="windSpeed">Wind:{Conditions.wind}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
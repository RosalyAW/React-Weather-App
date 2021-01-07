import React from "react";
import WeatherDisplay from "./WeatherDisplay";
import { Container } from "react-bootstrap";
import DailyForecast from "./DailyForecast";
import Footer from "./Footer";

import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import "./WeatherDisplay.css";
import "./DailyForecast.css";



function App() {

  return (
    <Container>
    <div className="App">
        <WeatherDisplay defaultCity="Muiden"/>
        <DailyForecast />
    </div>
      <Footer />
      </Container>
  );
}

export default App;
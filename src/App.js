import React from "react";
import WeatherDisplay from "./WeatherDisplay";
import 'bootstrap/dist/css/bootstrap.css';

import "./App.css";


function App() {

  return (
    <div className="App">
      <div className="container">
        <WeatherDisplay />
      </div>
    </div>
  );
}

export default App;
import React from "react";
import WeatherDisplay from "./WeatherDisplay";
import Footer from "./Footer";

import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import "./WeatherDisplay.css";
import { Container } from "react-bootstrap";


function App() {

  return (
    <Container>
    <div className="App">
      <WeatherDisplay />
    </div>
      <Footer />
      </Container>
  );
}

export default App;
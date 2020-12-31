import React from "react";

import "./ConvertionButton.css";

export default function ConvertionButton(props) {
      function ConvertionFahrenheit(event) {
        event.preventDefault();
        props.setUnits("fahrenheit");
    }
    function ConvertionCelsius(event) {
        event.preventDefault();
        props.setUnits("celsius");
    }
        return (
            <div className="ConvertionButton">
                <button
                    id="fahrenheit-button"
                    className="btn btn-outline-light my-2 my-xs-0"
                    type="submit"
                    onClick={ConvertionCelsius}>
                    °C
    </button>
            <div className="ConvertionButton">
                <button
                    id="fahrenheit-button"
                    className="btn btn-outline-light my-2 my-xs-0"
                    type="submit"
                    onClick={ConvertionFahrenheit}
                >
                        °F
              </button >
                </div>
                </div>
        );
    }
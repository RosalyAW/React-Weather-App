import React, {useState} from "react";

export default function ConvertionButton(props) {
    let { units, setUnits } = useState("celsius");

    function ConvertionCelsius(event) {
        event.preventDefault();
        setUnits("celcius");
    }
    function celsiusToFahrenheit(event){
        event.preventDefault();
return (props.celsius * 9) / 5 + 32;
    }
    function ConvertionFahrenheit(event) {
        event.preventDefault();
        setUnits("fahrenheit");
    }
    
    if (units) {
        return (
            <div className="ConvertionButton">
                <button
                    id="fahrenheit-button"
                    className="btn btn-outline-light my-2 my-xs-0"
                    type="submit"
                    onClick={ConvertionCelsius}>
                    {Math.round(props.celsius)}°C
    </button>
            <div className="ConvertionButton">
                <button
                    id="fahrenheit-button"
                    className="btn btn-outline-light my-2 my-xs-0"
                    type="submit"
                    onClick={ConvertionFahrenheit}
                >
                  {Math.round(celsiusToFahrenheit())}  °F
              </button >
                </div>
                </div>
        );
    }
    else {
        return (null);
    }
}
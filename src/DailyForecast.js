import React, {useState} from "react";
import Axios from "axios";
import DisplayIcon from "./DisplayIcon";


export default function DailyForecast(props) {
    const [Ready, setReady] = useState(false);
    const [Forecast, setForecast] = useState(null);

    function showDailyForecast(response) {
       setForecast(response.data);
        setReady(true);
        
    }
    if (Ready && props.city === Forecast.city.name) {
        return (
            <div className="daily-forecast row">
                <div className="col-12">
                    <h6><strong> Daily forecast</strong></h6>
                </div>
                <div className="day col-2">
                    <p><strong>{new Date(Forecast.list[0].dt * 1000).getHours()}:00</strong></p>
                    <DisplayIcon code={Forecast.list[0].weather[0].icon} />
                    <p>{Math.round(Forecast.list[0].main.temp_min)}<strong>/{Math.round(Forecast.list[0].main.temp_max)}°c</strong></p>
                </div>
                <div className="day col-2">
                    <p><strong>{new Date(Forecast.list[1].dt * 1000).getHours()}:00</strong></p>
                   <DisplayIcon code={Forecast.list[1].weather[0].icon} />
                    <p>{Math.round(Forecast.list[1].main.temp_min)}<strong>/{Math.round(Forecast.list[0].main.temp_max)}°c</strong></p>
                </div>
                <div className="day col-2">
                    <p><strong>{new Date(Forecast.list[2].dt * 1000).getHours()}:00</strong></p>
                    <DisplayIcon code={Forecast.list[2].weather[0].icon} />
                    <p>{Math.round(Forecast.list[2].main.temp_min)}<strong>/{Math.round(Forecast.list[0].main.temp_max)}°c</strong></p>
                </div>
                <div className="day col-2">
                    <p><strong>{new Date(Forecast.list[3].dt * 1000).getHours()}:00</strong></p>
                   <DisplayIcon code={Forecast.list[3].weather[0].icon} />
                    <p>{Math.round(Forecast.list[3].main.temp_min)}<strong>/{Math.round(Forecast.list[0].main.temp_max)}°c</strong></p>
                </div>
                <div className="day col-2">
                    <p><strong>{new Date(Forecast.list[4].dt * 1000).getHours()}:00</strong></p>
                    <DisplayIcon code={Forecast.list[4].weather[0].icon} />
                    <p>{Math.round(Forecast.list[4].main.temp_min)}<strong>/{Math.round(Forecast.list[0].main.temp_max)}°c</strong></p>
                </div>
            </div>
        );
    }
    else {
          let apiKey = "5c57e0689379640fccf1044191d9a54c";
    let Unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${Unit}`
    Axios.get(apiUrl).then(showDailyForecast);
        return ("Loading");
    }
}
import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

//let apiKey ="5c57e0689379640fccf1044191d9a54c";
//let Unit = "metric";
//let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${unit}`

export default function DailyForecast() {
    return (
        <div className="daily-forecast row">
            <div className="col-12">
                <h6><strong> Daily forecast</strong></h6>
            </div>
            <div className="day col-2">
                <p><strong>12:00h</strong></p>
        <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="white"
        size={50}
        animate={true}
      />
                <p>17<strong>/25°c</strong></p>
            </div>
            <div className="day col-2">
                <p><strong>15:00h</strong></p>
                 <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="white"
        size={50}
        animate={true}
      />
                <p>17<strong>/25°c</strong></p>
            </div>
            <div className="day col-2">
                <p><strong>18:00h</strong></p>
                 <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="white"
        size={50}
        animate={true}
      />
                <p>17<strong>/25°c</strong></p>
            </div>
            <div className="day col-2">
                <p><strong>21:00h</strong></p>
                 <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="white"
        size={50}
        animate={true}
      />
                <p>17<strong>/25°c</strong></p>
            </div>
            <div className="day col-2">
                <p><strong>00:00h</strong></p>
                <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="white"
        size={50}
        animate={true}
      />
                <p>17<strong>/25°c</strong></p>
            </div>
        </div>
    );
}
import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function DailyForecast() {
    return (
        <div class="daily-forecast row">
            <div class="col-12">
                <h6><strong> Daily forecast</strong></h6>
            </div>
            <div class="day col-2">
                <p><strong>Wed</strong></p>
        <ReactAnimatedWeather
        icon="SNOW"
        color="white"
        size={50}
        animate={true}
      />
                <p>17<strong>/25°c</strong></p>
            </div>
            <div class="day col-2">
                <p><strong>Thu</strong></p>
                 <ReactAnimatedWeather
        icon="SNOW"
        color="white"
        size={50}
        animate={true}
      />
                <p>17<strong>/25°c</strong></p>
            </div>
            <div class="day col-2">
                <p><strong>Fri</strong></p>
                 <ReactAnimatedWeather
        icon="SNOW"
        color="white"
        size={50}
        animate={true}
      />
                <p>17<strong>/25°c</strong></p>
            </div>
            <div class="day col-2">
                <p><strong>Sat</strong></p>
                 <ReactAnimatedWeather
        icon="SNOW"
        color="white"
        size={50}
        animate={true}
      />
                <p>17<strong>/25°c</strong></p>
            </div>
            <div class="day col-2">
                <p><strong>Sun</strong></p>
                <ReactAnimatedWeather
        icon="SNOW"
        color="white"
        size={50}
        animate={true}
      />
                <p>17<strong>/25°c</strong></p>
            </div>
        </div>
    );
}
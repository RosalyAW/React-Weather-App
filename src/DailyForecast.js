import React from "react";

export default function DailyForecast() {
    return (
        <div class="daily-forecast row">
            <div class="col-12">
                <h6><strong> Daily forecast</strong></h6>
            </div>
            <div class="day col-2">
                <p><strong>Wed</strong></p>
                <i class="f185 far fa-sun"></i>
                <p>17<strong>/25°c</strong></p>
            </div>
            <div class="day col-2">
                <p><strong>Thu</strong></p>
                <i class="f185 far fa-sun"></i>
                <p>17<strong>/25°c</strong></p>
            </div>
            <div class="day col-2">
                <p><strong>Fri</strong></p>
                <i class="f185 far fa-sun"></i>
                <p>17<strong>/25°c</strong></p>
            </div>
            <div class="day col-2">
                <p><strong>Sat</strong></p>
                <i class="f185 far fa-sun"></i>
                <p>17<strong>/25°c</strong></p>
            </div>
            <div class="day col-2">
                <p><strong>Sun</strong></p>
                <i class="f185 far fa-sun"></i>
                <p>17<strong>/25°c</strong></p>
            </div>
        </div>
    );
}
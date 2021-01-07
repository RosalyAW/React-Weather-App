import React from "react";

export default function DateFormat(timestamp) {
    let date = new Date(timestamp);
    let dayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let day = dayName[date.getDay()];
    let dateNumber = date.getDate();
    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    return (
        <div>{day} {dateNumber} {month} {year}</div>);
}
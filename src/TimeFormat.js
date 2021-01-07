import React from "react";

export default function TimeFormat(timestamp){
 let time = new Date(timestamp);
  let hours = time.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  } else {
    hours = hours + "";
  }
  let min = time.getMinutes();

  if (min < 10) {
    min = `0${min}`;
  } else {
    min = min + ``;
  }
  return `${hours}:${min}`;
}
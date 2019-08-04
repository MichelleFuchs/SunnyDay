import React from "react";
import Skycons from "../../resources/skycons.js";

const Icon = props => {
  var skycons = new Skycons({});

  skycons.add("weather-icon", props.icon);
  skycons.play();

  return <canvas id="weather-icon" width="128" height="128" />;
};

export default Icon;

import React from "react";
import Icon from "./Helpers/Icon";

const ShowWeather = props => {
  const toCelcius = temp => {
    return Math.round(((temp - 32) / 1.8) * 100) / 100;
  };

  return (
    <React.Fragment>
      {props.result && (
        <div className="result container">
          <div className="row">
            <p className="col-10 mx-auto font-weight-bold ">Current Weather:</p>
          </div>
          <div className="row">
            <p className="col-10 mx-auto">{props.result}</p>
          </div>
          <div className="row">
            <p className="col-10 mx-auto">
              {`${props.temp}°F / ${toCelcius(props.temp)}°C`}
            </p>
          </div>
          <Icon icon={props.icon} />
          <div className="row">
            <p className="col-10 mx-auto">It's {props.time} there. </p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ShowWeather;

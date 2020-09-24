import React from "react";

const WeatherCard = (props) => (
    <div>
        <p>{props.condition}</p>
        <p>{props.temp}</p>
        <img src={props.icon} />
    </div>
)

export default WeatherCard;
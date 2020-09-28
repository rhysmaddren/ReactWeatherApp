import React from "react";
import styled from 'styled-components'

const StyledWeatherCard = styled.div`
    width:40%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #3A506B;
    border-radius: 20px;

    p {
        font-size: 20px; ;
        padding: 20px;
        text-align: center;
        margin:20px;
        background-color: #5BC0BE;
        flex-grow: 1;
        border-radius: 20px;

    }

    div {
        margin:auto;
    }
`



const WeatherCard = (props) => (
    <StyledWeatherCard>
        <p>{props.condition}</p>
        <div>
            <img src={props.icon} />
        </div>
        <p>{props.temp}</p>
    </StyledWeatherCard>
)

export default WeatherCard;
import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';

const locations = [ //array that stores the locations and location id's, later used to create buttons
  { name: "San Francisco", id: "5391959" },
  { name: "Yosemite", id: "5370594" },
  { name: "Las Vegas", id: "5506956" },
  { name: "Los Angeles", id: "5368361" }
]

function App() {
  const [cityWeather, setCityWeather] = useState(null); //https://reactjs.org/docs/hooks-state.html
  const handleLocationClick = async (id) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    const data = await res.json();
    setCityWeather(data);
  }
  return (
    <div>
      {locations.map(location => (//maps over the array and creates a button for each location
        <button onClick={() => handleLocationClick(location.id)}>{location.name}</button>
      ))}
      {cityWeather ? ( //selecting the data to take from the parsed JSON
        <WeatherCard condition={cityWeather.weather[0].main} temp={`${Math.floor(cityWeather.main.temp)} C`} icon={`http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`} />
      ) : null}
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function App() {
  const [cityWeather, setCityWeather] = useState(null);
  const handleLocationClick = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=San+Fransisco&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    const data = await res.json();
    setCityWeather(data);
  }
  return (
    <div>
      <button onClick={handleLocationClick}>San Fransisco</button>
      {cityWeather ? (
        <div>
          <p>{cityWeather.weather[0].main}</p>
          <img src={`http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`} />
        </div>
      ) : null}
    </div>
  );
}

export default App;

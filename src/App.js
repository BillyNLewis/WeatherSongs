import React, { useState } from 'react';
import './styles.css';
import Date from './components/Date';
import WeatherBox from './components/WeatherBox';

function App() {
  const [zipInput, setZipInput] = useState('');
  const [weather, setWeather] = useState({
    dataRecieved: false,
    info: null,
    error: null,
    anim: false
  });
  const [fade, setFade] = useState(true);
  function fetchData(event) {
    const zipCode = event.target.value;
    setZipInput('');
    const apiKey = '388841c28e943040b14b31523fc0e09c';
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${apiKey}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error: Please enter a valid US zip code');
      })
      .then(
        (data) =>
          setWeather({
            dataRecieved: true,
            info: data,
            error: null,
            anim: true
          }),
        setFade(!fade)
      )
      .catch((error) => setWeather({ error, dataRecieved: false }));
  }
  return (
    <div className='app '>
      <main>
        <div className='search-box'>
          <Date />
          <input
            type='text'
            className='search-bar'
            placeholder='Enter zip code:'
            onChange={(e) => setZipInput(e.target.value)}
            value={zipInput}
          />
          <button
            onClick={fetchData}
            className='submit-button'
            type='submit'
            value={zipInput}
          >
            Get Weather
          </button>
        </div>
        {weather.error ? (
          <p className='errorMessage'>{weather.error.message}</p>
        ) : null}
        {weather.dataRecieved ? (
          <WeatherBox key={fade} weather={weather.info} />
        ) : null}
      </main>
    </div>
  );
}
export default App;

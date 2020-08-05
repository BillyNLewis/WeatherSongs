import PropTypes from 'prop-types';
import React from 'react';
import Playlist from './Playlist';

function WeatherBox(props) {
  // Destructing Props
  const {
    weather: {
      name,
      main: { temp },
      weather: [{ description, main }]
    }
  } = props;

  let musicUrl = '';
  switch (main) {
    case 'Clouds':
    case 'Clear':
      musicUrl =
        'https://open.spotify.com/embed/playlist/37i9dQZF1DX1BzILRveYHb';
      break;
    case 'Rain':
    case 'Drizzle':
    case 'Thunderstorm':
      musicUrl = 'https://open.spotify.com/embed/album/4byKOIYLTMszD1uH4I8GWe';
      break;
    case 'Snow':
      musicUrl =
        'https://open.spotify.com/embed/playlist/3rPI2X9xN3SQSmk651RGEU';
      break;
    default:
      musicUrl =
        'https://open.spotify.com/embed/playlist/37i9dQZF1DX4VvfRBFClxm';
  }

  return (
    <div className='weatherArea fadeInAnimation'>
      <div className='location-box'>
        <div className='weather'>{description}</div>

        <div className='location'>{name}</div>
      </div>

      <div className='weather-box'>
        <div className='temp'>{temp}°F</div>
      </div>
      <Playlist music={musicUrl} />
    </div>
  );
}

WeatherBox.propTypes = {
  weather: PropTypes.shape({
    name: PropTypes.string.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default WeatherBox;

import PropTypes from 'prop-types';
import React from 'react';

function WeatherBox(props) {
  // Destructing Props
  const {
    weather: {
      name,
      main: { temp },
      weather: [{ description }]
    }
  } = props;

  return (
    <div className='weatherArea fadeInAnimation'>
      <div className='location-box'>
        <div className='weather'>{description}</div>

        <div className='location'>{name}</div>
      </div>

      <div className='weather-box'>
        <div className='temp'>{temp}°F</div>
      </div>
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

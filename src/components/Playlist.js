import React from 'react';
import PropTypes from 'prop-types';

function Playlist(props) {
  const { music } = props;
  return (
    <div className='playList'>
      <p>Playlist Recommendation</p>
      <iframe
        title='Playlist'
        src={music}
        width='100%'
        height='310'
        frameBorder='0'
        allowtransparency='true'
        allow='encrypted-media'
      />
    </div>
  );
}
Playlist.propTypes = {
  music: PropTypes.string.isRequired
};

export default Playlist;

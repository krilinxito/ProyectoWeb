import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = ({ poster, title, synopsis, cardStyle, titleStyle }) => {
  return (
    <div className="movie-card" style={{ ...cardStyle }}>
      <img src={poster} alt={`${title} poster`} className="movie-card-img" />
      <div className="movie-card-content">
        <h2 className="movie-card-title" style={{ ...titleStyle }}>{title}</h2>
        <hr className="movie-card-divider" />
        <p className="movie-card-text">{synopsis}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  cardStyle: PropTypes.object,
  titleStyle: PropTypes.object,
};

MovieCard.defaultProps = {
  cardStyle: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '10px',
    overflow: 'hidden',
    color: '#fff',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    width: '100%',
    margin: '20px 0',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
    backgroundColor: '#333',
    padding: '25px',
  },
  titleStyle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
};

export default MovieCard;
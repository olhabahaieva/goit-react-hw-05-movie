import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  const filteredMovies = movies.filter(movie => movie.title);

  return (
    <ul>
      {filteredMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movie: PropTypes.array,
}



export default MovieList;

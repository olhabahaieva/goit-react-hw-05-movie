import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const filteredMovies = movies.filter(movie => movie.title);

  return (
    <ul>
      {/* {error && <p>Sorry, something went wrong</p>}
      {loading && <p>Data is loading</p>} */}
      {filteredMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

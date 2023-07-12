import MovieDetails from 'pages/movieDetails/MovieDetails';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMovieDetails } from 'shared/APIs/movieDetailsAPI';

const MovieList = ({ movies }) => {
  const openRef = useRef(null);
  // eslint-disable-next-line
  const [movie, setMovie] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(false);

  const filteredMovies = movies.filter(movie => movie.title);
  const target = openRef.current;
  const onClick = async => {
    try {
      setLoading(true);
      setError(false);
      const fetchedMovie = getMovieDetails(target);
      setMovie(fetchedMovie);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ul>
      {filteredMovies.map(movie => (
        <li key={movie.id}>
          <Link onClick={onClick} to={`${movie.id}`}>
            {movie.title}
          </Link>
          <MovieDetails movie={movie}></MovieDetails>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

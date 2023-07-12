import MovieDetails from 'pages/movieDetails/MovieDetails';
import React, { useRef, useState } from 'react';
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

  const onClick = async => {
    const target = openRef.current;
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
          <MovieDetails onClick={onClick} movie={movie}>
           {console.log(movie)}
          </MovieDetails>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

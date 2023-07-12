import MovieInfo from 'components/movieInfo/MovieDetails';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'shared/APIs/movieDetailsAPI';

export const MovieDetails = () => {
  // console.log(movie);
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      try {
        const fetchedMovie = await getMovieDetails(movieId);
        setMovie(fetchedMovie);
      } catch (error) {}
    }
    getMovie();
  }, [movieId]);

  return <div>{movie && <MovieInfo movie={movie} />}</div>;
};

export default MovieDetails;

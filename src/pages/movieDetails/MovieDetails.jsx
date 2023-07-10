import { MovieInfo } from 'components/movieInfo/MovieInfo';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'shared/APIs/movieDetailsAPI';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovie() {
      try {
        const fetchedMovie = getMovieDetails(movieId);
        setMovie(fetchedMovie);
        console.log(fetchedMovie)
      } catch (error) {}
    }
    getMovie();
  }, [movieId]);
  return <div>{movie && <MovieInfo movie={movie}/>}</div>;
}

export default MovieDetails;

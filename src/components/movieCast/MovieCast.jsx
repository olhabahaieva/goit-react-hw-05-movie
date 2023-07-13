import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovieCast from 'shared/APIs/movieCastAPI';
import MovieCastInfo from 'components/movieCastInfo/MovieCastInfo';

export const MovieCast = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
//   console.log(movieId);

  useEffect(() => {
    async function getCast() {
      try {
        const fetchedMovies = await getMovieCast(movieId);
        setMovie(fetchedMovies);
      } catch (error) {
        console.log(error);
      }
    }

    getCast();
  }, [movieId]);

  return <div>{movie && <MovieCastInfo movie={movie}/>}</div>;
};

export default MovieCast;

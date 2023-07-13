import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovieReviews from 'shared/APIs/movieReviewsAPI';
import MovieReviewsInfo from 'components/movieReviewsInfo/MovieReviewsInfo';

export const MovieReviews = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
//   console.log({ movieId })
  useEffect(() => {
    async function getReviews() {
      try {
        const fetchedReviews = await getMovieReviews(movieId);
        setMovie(fetchedReviews);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieId]);
  //   console.log(movie);
  return <div>{movie && <MovieReviewsInfo movie={movie} />}</div>;
};

export default MovieReviews;

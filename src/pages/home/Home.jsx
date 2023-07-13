import TrendingMovieList from 'modules/trendingMovieList/TrendingMovieList';
import MovieDetails from 'pages/movieDetails/MovieDetails';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovieDetails from 'shared/APIs/movieDetailsAPI';

const Home = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        const fetchedMovie = await getMovieDetails(movieId);
        setMovie(fetchedMovie);
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <>
      <TrendingMovieList />;
      {movie && <MovieDetails movie={movie} />}
    </>
  );
};

export default Home;

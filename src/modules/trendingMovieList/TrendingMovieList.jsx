import { getTrendingMovies } from 'shared/APIs/trendingMoviesAPI';
import { useEffect, useState } from 'react';
import MovieList from 'components/movieList/MovieList';
import css from './TrendingMovieList';
import getMovieDetails from 'shared/APIs/movieDetailsAPI';
import { useParams } from 'react-router-dom';

const TrendingMovieList = () => {
  const { movieId } = useParams();
  // eslint-disable-next-line
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(false);
  // eslint-disable-next-line
  const [movie, setMovie] = useState();

  const onClick = async movieId => {
    try {
      const fetchedMovie = await getMovieDetails(movieId);
      setMovie(fetchedMovie);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    async function getMovies() {
      try {
        setLoading(true);
        setError(false);
        const fetchedMovies = await getTrendingMovies(controller.signal);
        setMovies(fetchedMovies);
        // console.log(fetchedMovies)
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovies();

    return () => controller.abort();
  }, []);

  return (
    <div className={css.marginTop}>
      <h1 className={css.title}>Trending today</h1>
      {error && <p>Sorry, something went wrong</p>}
      {loading && <p>Data is loading</p>}
      {movies.length > 0 && (
        <MovieList movies={movies} onClick={() => onClick(movieId)} />
      )}
    </div>
  );
};

export default TrendingMovieList;

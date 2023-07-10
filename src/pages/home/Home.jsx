import { getTrendingMovies } from 'shared/APIs/trendingMoviesAPI';
import { useEffect, useState } from 'react';
import MovieList from 'components/movieList/MovieList';
import css from './Home.module.css';

const Home = () => {
  // eslint-disable-next-line
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(false);

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
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default Home;

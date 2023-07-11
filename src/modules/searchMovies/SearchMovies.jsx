import { getMovieBySearch } from 'shared/APIs/movieBySearch';
import React, { useEffect, useState } from 'react';
import MovieList from 'components/movieList/MovieList';

const SearchMovies = () => {
  // eslint-disable-next-line
  const [target, setTarget] = useState('');
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function getMovies(target) {
      try {
        setLoading(true);
        setError(false);
        const fetchedMovies = await getMovieBySearch(target);
        setMovies(fetchedMovies);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovies();

    return () => controller.abort();
  }, [target]);

  return <>{movies.length > 0 && <MovieList movies={movies} />}</>;
};

export default SearchMovies;

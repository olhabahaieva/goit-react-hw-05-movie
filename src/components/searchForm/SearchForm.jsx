import React, { useRef, useState } from 'react';
import MovieList from 'components/movieList/MovieList';
import { getMovieBySearch } from 'shared/APIs/movieBySearch';

const SearchMovies = () => {
  const searchRef = useRef(null);
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const target = searchRef.current.value;
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search:</label>
      <input type="text" name="search" id="search" ref={searchRef} />
      <button type="submit">Submit</button>
      {movies.length > 0 && <MovieList movies={movies} />}
    </form>
  );
};

export default SearchMovies;

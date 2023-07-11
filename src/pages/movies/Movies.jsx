import SearchForm from 'components/searchForm/SearchForm';
import SearchMovies from 'modules/searchMovies/SearchMovies';
import React from 'react';

export const Movies = (movies, target) => {
  return (
    <>
      <SearchForm />
      {movies === target && <SearchMovies />}
    </>
  );
};

export default Movies;

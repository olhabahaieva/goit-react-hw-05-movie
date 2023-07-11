import SearchForm from 'components/searchForm/SearchForm';
import SearchMovies from 'modules/searchMovies/SearchMovies';
import React from 'react';

export const Movies = ({target}) => {
  console.log(target)
  return (
    <>
      <SearchForm />
      <SearchMovies />
    </>
  );
};

export default Movies;

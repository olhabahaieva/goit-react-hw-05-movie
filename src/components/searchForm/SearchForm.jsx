import React, { useState } from 'react';
import css from './SearchForm';

const SearchForm = ({ onSubmit }) => {
  console.log(onSubmit)
  const [state, setState] = useState({ search: '' });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state.search.trim());
    setState({ search: '' });
  };
  const { search } = state;
  return (
    <form className={css.marginTop} action="" onSubmit={handleSubmit}>
      <label htmlFor="search"></label>
      <input 
      onChange={handleChange} 
      type="text" 
      name="search" 
      id="search"
      value={search}
      placeholder="type movie name..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

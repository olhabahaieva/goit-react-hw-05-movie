import css from './Movies.module.css';

const Movies = () => {
  return (
    <form className={css.marginTop} action="">
      <label htmlFor="search"></label>
      <input type="text" name="search" id="search"/>
      <button type="submit">Search</button>
    </form>
  );
};
export default Movies;

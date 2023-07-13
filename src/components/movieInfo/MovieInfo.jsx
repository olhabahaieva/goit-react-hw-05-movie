import React from 'react';
import { Link } from 'react-router-dom';
import css from './MovieInfo.module.css';

export const MovieInfo = ({ movie }) => {
  return (
    <div className={css.card}>
    <div className={css.cardMain}>
       <img
          src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
          alt={movie.title}
        />
      <div>
       
        <h1>{movie.title}</h1>
        <p>User Score: {movie.vote_average}</p>
        <p className={css.boldText}>Overview</p>
        <p>{movie.overview}</p>
        <p className={css.boldText}>Genres</p>
        <p>{movie.genre_ids}</p>
      </div>

      
    </div>
    <div className={css.info}>
      <div className={css.line}></div>
    <p>Additional Information</p>
    <Link to="/cast">Cast</Link>
    <Link to="/reviews">Reviews</Link>
    <div className={css.line}></div>
  </div>
  </div>
  );
};

export default MovieInfo;

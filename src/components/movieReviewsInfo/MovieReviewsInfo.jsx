import React from 'react';
import css from './MovieReviews.module.css';

const MovieReviewsInfo = ({ movie }) => {
  // console.log(movie);
  return (
    <ul className={css.list}>
      {movie.map(el => (
        <li key={el.id}>
          <p className={css.boldText}>{el.author}</p>
          <p>{el.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviewsInfo;

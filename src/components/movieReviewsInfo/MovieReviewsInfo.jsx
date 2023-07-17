import React from 'react';
import css from './MovieReviews.module.css';
import PropTypes from 'prop-types';

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

MovieReviewsInfo.propTypes = {
  movie: PropTypes.array,
}

export default MovieReviewsInfo;

import React from 'react';
import css from './MovieCastInfo.module.css';
import myImage from 'images/myImage.jpg';

export const MovieCastInfo = ({ movie }) => {
  const children = movie.map(el => (
    <li key={el.cast_id || el.id}>
      <img
        src={el.profile_path ? `https://image.tmdb.org/t/p/w200/${el.profile_path}` : myImage}
        alt={el.name}
      />
      <p className={css.boldText}>{el.name}</p>
      <p>{el.character}</p>
    </li>
  ));
  return <ul className={css.card}>{children}</ul>;
};

export default MovieCastInfo;

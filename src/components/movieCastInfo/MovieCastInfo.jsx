import React from 'react';
import css from './MovieCastInfo.module.css';

export const MovieCastInfo = ({ movie }) => {
  const castActors =  movie.cast || [];

  return (
    <ul className={css.card}>
      {castActors.map(el => (
        <>
          <li key={el.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${el.profile_path}`}
              alt={el.name}
            />
            <p className={css.boldText}>{el.name}</p>
            <p>{el.character}</p>
          </li>
        </>
      ))}
    </ul>
  );
};

export default MovieCastInfo;

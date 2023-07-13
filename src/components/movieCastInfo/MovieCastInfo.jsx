import React from 'react';

export const MovieCastInfo = ({ movie }) => {
  //   console.log(movie)
  const castActors = movie.cast;
  console.log(castActors);

  return (
    <ul>
      {castActors.map(el => (
        <li key={el.id}>{el.name}</li>
      ))}
    </ul>
  );
};

export default MovieCastInfo;

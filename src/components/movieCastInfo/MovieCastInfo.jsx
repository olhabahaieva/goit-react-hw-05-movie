import React from 'react';

export const MovieCastInfo = ({ movie }) => {
  //   console.log(movie)
  const castActors = movie.cast;
  console.log(castActors);

  return (
    <ul>
      {castActors.map(el => (
        <>
          <li key={el.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${el.profile_path}`}
              alt={el.name}
            />
            <p>{el.name}</p>
            <p>{el.character}</p>
          </li>
        </>
      ))}
    </ul>
  );
};

export default MovieCastInfo;

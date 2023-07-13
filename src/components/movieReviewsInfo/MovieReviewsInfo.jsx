import React from 'react';

const MovieReviewsInfo = ({ movie }) => {
  console.log(movie);
  return (
    <ul>
      {movie.map(el => (
        <li key={el.id}>
          <p>{el.author}</p>
          <p>{el.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviewsInfo;

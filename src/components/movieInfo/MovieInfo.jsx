import React from 'react';
import { Link } from 'react-router-dom';

export const MovieInfo = ({ movie }) => {
  return (
    <div>
      <div>
        <img src={movie.poster_path} alt={movie.title} />

        <h1>{movie.title}</h1>
        <p>{movie.vote_average}</p>
        <p>Overview</p>
        <p>{movie.overview}</p>
        <p>Genres</p>
        <p>{movie.genre_ids}</p>
      </div>

      <div>
        <p>Additional Information</p>
        <Link to="/cast">Cast</Link>
        <Link to="/reviews">Reviews</Link>
      </div>
    </div>
  );
};

export default MovieInfo;

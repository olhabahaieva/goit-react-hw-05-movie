import React from 'react';
import { Link } from 'react-router-dom';

export const MovieDetails = ({ movie, onClick }) => {
  console.log(movie);
  return (
    <div>
      <div>
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

export default MovieDetails;

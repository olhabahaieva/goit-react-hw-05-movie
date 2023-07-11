import React from 'react'
import { Link } from 'react-router-dom';

export const MovieDetails = ({movie, onClick}) => {
  return (
    <Link to={`${movie.id}`}>{movie.title || movie.name}</Link>
  )
}

export default MovieDetails;

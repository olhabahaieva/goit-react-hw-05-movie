import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './MovieInfo.module.css';
import MovieCast from 'components/movieCast/MovieCast';
import MovieReviews from 'components/movieReviews/MovieReviews';

export const MovieInfo = ({ movie }) => {
  const [showMovieCast, setShowMovieCast] = useState(false);
  const[showMovieReviews, setShowMovieReviews] = useState(false);

  const handleShowMovieCast = () => {
    setShowMovieCast((prevShowMovieCast) => !prevShowMovieCast);
  };

  const handleShowMovieReviews = () =>{
    setShowMovieReviews((prevshowMovieReviews)=> !showMovieReviews);
  };

  return (
    <div className={css.card}>
      <div className={css.cardMain}>
        <img
          src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <h1>{movie.title}</h1>
          <p>User Score: {movie.vote_average}</p>
          <p className={css.boldText}>Overview</p>
          <p>{movie.overview}</p>
          <p className={css.boldText}>Genres</p>
          {movie.genres.map(genre => (
            <ul className={css.genres} key={genre.id}>
              <li>{genre.name}</li>
            </ul>
          ))}
          <p>{movie.genre_ids}</p>
        </div>
      </div>
      <div className={css.info}>
        <div className={css.line}></div>
        <p>Additional Information</p>
        <Link onClick={handleShowMovieCast}>Cast</Link>
        <Link onClick={handleShowMovieReviews}>Reviews</Link>
        <div className={css.line}></div>
        {showMovieCast && <MovieCast movie={movie} />}
        {showMovieReviews && <MovieReviews movie={movie}/>}
      </div>
    </div>
  );
};

export default MovieInfo;

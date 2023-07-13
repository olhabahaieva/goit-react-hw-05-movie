import MovieInfo from 'components/movieInfo/MovieInfo';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import getMovieDetails from 'shared/APIs/movieDetailsAPI';


export const MovieDetails = () => {
  // console.log(movie);
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const prevPageLocation = location.state?.from || "/";

  const goBack = () => navigate(prevPageLocation);

  useEffect(() => {
    async function getMovie() {
      try {
        const fetchedMovie = await getMovieDetails(movieId);
        setMovie(fetchedMovie);
      } catch (error) {}
    }
    getMovie();
  }, [movieId]);
 
  return <div>
    <button type="button" onClick={goBack} text="Go Back">Go Back</button>
    {movie && <MovieInfo movie={movie} />} {console.log(movie)}
    </div>;
};

export default MovieDetails;

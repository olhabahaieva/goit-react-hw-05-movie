import { useEffect, useState } from 'react';
import css from './Movies.module.css';
import { getMovieBySearch } from 'shared/APIs/movieBySearch';
import { useParams } from 'react-router-dom';


const Movies = () => {
  const {movieId} = useParams();
  // eslint-disable-next-line
  const [movie, setMovie] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    async function getMovie(){
        try {
            setLoading(true)
            const fetchedMovie = await getMovieBySearch(movieId);
            setMovie(fetchedMovie);
        } catch (error) {
            
        } finally{
            setLoading(false);
        }
    }
    getMovie()
  }, [movieId])

  return (
    <form className={css.marginTop} action="">
      <label htmlFor="search"></label>
      <input type="text" name="search" id="search" />
      <button type="submit">Search</button>
    </form>
  );
};
export default Movies;

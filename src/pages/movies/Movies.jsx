import { useEffect, useState } from 'react';
import css from './Movies.module.css';
import { getMovieBySearch } from 'shared/APIs/movieBySearch';
import { useParams } from 'react-router-dom';
import MovieDetails from 'pages/movieDetails/MovieDetails';


const Movies = () => {
  
  const {movieId} = useParams();
  // eslint-disable-next-line
  const[inputValue, setInputValue] = useState('');
  // eslint-disable-next-line
  const [movie, setMovie] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);

  const onChange = (e)=>{
    setInputValue(e.target.value);
  }

  const handleButtonClick = (e)=>{
    e.preventDefault();
    setInputValue(e.target.value)
  }

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
    <>
    <form className={css.marginTop} action="">
      <label htmlFor="search"></label>
      <input onChange={onChange} type="text" name="search" id="search" />
      <button onClick={handleButtonClick} type="submit">Search</button>
    </form>
    {movie && !loading && <MovieDetails movie={movie}/>}
    </>
  );
};
export default Movies;

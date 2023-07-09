import { getTrendingMovies } from 'shared/APIs/trendingMoviesAPI';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  // eslint-disable-next-line
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        setError(false);
        const fetchedMovies = await getTrendingMovies();
        setMovies(fetchedMovies);
        console.log(fetchedMovies)
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <>
      <ul></ul>
    </>
  );
};

export default Home;

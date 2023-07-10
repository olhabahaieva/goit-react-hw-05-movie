import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const filteredMovies = movies.filter((movie) => movie.title);

  return (
    <ul>
      {filteredMovies.map((movie) => (
        <li key={movie.id}>
          <Link to={`${movie.id}`}>{movie.title || movie.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

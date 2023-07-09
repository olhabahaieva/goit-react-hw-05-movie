import { Link } from 'react-router-dom';

const MovieList = ({movies})=>{
    return (
      <ul>
{movies.map(movie =>{
    return (
        <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.original_title}</Link>
        </li>
    )
})}
      </ul>  
    )
}

export default MovieList;
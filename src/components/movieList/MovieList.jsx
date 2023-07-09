import { Link } from 'react-router-dom';

const MovieList = ({movies})=>{
    return (
      <ul>
{movies.map(movie =>{
    return (
        <li key={movie.results.id}>
            <Link to={`${movie.results.id}`}></Link>
        </li>
    )
})}
      </ul>  
    )
}

export default MovieList;
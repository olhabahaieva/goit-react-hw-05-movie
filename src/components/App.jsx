import { Route, Routes } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
import SharedLayout from 'shared/sharedLayout';
import Movies from '../pages/movies';
import Home from '../pages/home';
import MovieDetails from 'pages/movieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          flexWrap: 'wrap',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 18,
          color: '#010101',
        }}
      >
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

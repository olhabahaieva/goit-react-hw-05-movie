import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
import SharedLayout from 'shared/sharedLayout';
import Home from '../pages/home';

// import Movies from '../pages/movies';
// import MovieDetails from 'pages/movieDetails/MovieDetails';
// import MovieCast from './movieCast/MovieCast';
// import MovieReviews from './movieReviews/MovieReviews';

const Movies = lazy(() => import('../pages/movies'));
const MovieDetails = lazy(() => import('pages/movieDetails/MovieDetails'));
const MovieCast = lazy(() => import('./movieCast/MovieCast'));
const MovieReviews = lazy(() => import('./movieReviews/MovieReviews'));

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
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />

              <Route path="movies" element={<Movies />} />

              <Route path="movies/:movieId" element={<MovieDetails />}>
                <Route path="cast" element={<MovieCast />} />
                <Route path="reviews" element={<MovieReviews />} />
              </Route>

              <Route path="*" element={<div>Page not found</div>} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

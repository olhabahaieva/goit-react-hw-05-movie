import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'shared/sharedLayout';
import Movies from '../pages/movies';
import Home from '../pages/home';
import 'modern-normalize/modern-normalize.css';

export const App = () => {
  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

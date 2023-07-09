import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <Link className={css.link} to="/">
            Home
          </Link>
          <Link className={css.link} to="/movies">
            Movies
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;

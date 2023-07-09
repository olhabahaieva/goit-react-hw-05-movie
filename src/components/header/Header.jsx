import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={css.header}>
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

export default Header;
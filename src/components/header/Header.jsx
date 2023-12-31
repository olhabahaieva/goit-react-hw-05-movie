import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <>
      <header>
        <nav className={css.nav}>
         <ul className={css.menu}>
           <li>
              <NavLink className={css.link} to="/" >
                
                Home
              </NavLink>
           </li>
            <li>
              <NavLink className={css.link} to="/movies">
                Movies
              </NavLink>
            </li>
         </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
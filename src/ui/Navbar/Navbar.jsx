import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink title="Shop" to="/">
            Shop
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

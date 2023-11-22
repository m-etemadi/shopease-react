import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

function Navbar() {
  const isAuthenticated = useSelector(
    state => state.authentication.isAuthenticated
  );

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink title="Products" to="/">
            Products
          </NavLink>
        </li>

        {isAuthenticated && (
          <li>
            <NavLink title="My orders" to="/my-orders">
              My orders
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

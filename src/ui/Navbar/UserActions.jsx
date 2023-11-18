import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  calculateTotalByProperty,
} from '../../features/cart/cartSlice';
import { logout } from '../../features/login/authenticationSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import styles from './userActions.module.css';

function UserActions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartLength = useSelector(state => state.cart.cartItems).length;
  const isAuthenticated = useSelector(
    state => state.authentication.isAuthenticated
  );
  const totalQuantity = useSelector(calculateTotalByProperty('quantity'));

  function handleLogout() {
    dispatch(clearCart());
    dispatch(logout());

    navigate('/');
  }

  return (
    <ul className={styles.userActions}>
      {!isAuthenticated ? (
        <li>
          <Link title="Login" to="login">
            Login
          </Link>
        </li>
      ) : (
        <li>
          <Link title="Logout" onClick={handleLogout}>
            Logout
          </Link>
        </li>
      )}

      <li>
        <Link title="Cart" to="cart">
          {cartLength > 0 && (
            <span className={styles.badge}>
              {totalQuantity > 9 ? '+10' : totalQuantity}
            </span>
          )}
          <FontAwesomeIcon icon={faShoppingCart} size="xl" />
        </Link>
      </li>
    </ul>
  );
}

export default UserActions;

import { NavLink } from 'react-router-dom';
import { useShopping } from '../../contexts/ShoppingContext';
import { useAuth } from '../../contexts/FakeAuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const { cartLength, totalQuantity } = useShopping();
  const { isAuthenticated, user } = useAuth();

  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
        <div>
          {!isAuthenticated ? (
            <NavLink to="login">Login</NavLink>
          ) : (
            `${user.name}`
          )}

          <NavLink to="cart">
            {cartLength > 0 && (
              <span className="cart-badge">
                {totalQuantity > 9 ? '+10' : totalQuantity}
              </span>
            )}
            <FontAwesomeIcon icon={faShoppingCart} size="xl" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

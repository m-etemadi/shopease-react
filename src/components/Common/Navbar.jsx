import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/FakeAuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const { cartLength, totalQuantity, clearCart } = useCart();
  const { isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {
    clearCart();
    logout();
    navigate('/');
  }

  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
        <div>
          {!isAuthenticated ? (
            <Link to="login">Login</Link>
          ) : (
            <span className="btn-logout" onClick={handleLogout}>
              <FontAwesomeIcon icon={faPowerOff} size="xl" />
            </span>
          )}

          <Link to="cart">
            {cartLength > 0 && (
              <span className="cart-badge">
                {totalQuantity > 9 ? '+10' : totalQuantity}
              </span>
            )}
            <FontAwesomeIcon icon={faShoppingCart} size="xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

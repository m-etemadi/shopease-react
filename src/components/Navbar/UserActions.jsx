import { Link, useNavigate } from 'react-router-dom';

import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/FakeAuthContext';
import { calculateTotalByProperty } from '../../utils/helpers';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function UserActions() {
  const { cartItems, clearCart } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const cartLength = cartItems.length;
  const totalQuantity = calculateTotalByProperty(cartItems, 'quantity');

  function handleLogout() {
    clearCart();
    logout();
    navigate('/');
  }

  return (
    <div>
      <ul>
        {!isAuthenticated ? (
          <li>
            <Link to="login">Login</Link>
          </li>
        ) : (
          <li>
            <Link onClick={handleLogout}>Logout</Link>
          </li>
        )}

        <li>
          <Link to="cart">
            {cartLength > 0 && (
              <span className="cart-badge">
                {totalQuantity > 9 ? '+10' : totalQuantity}
              </span>
            )}
            <FontAwesomeIcon icon={faShoppingCart} size="xl" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default UserActions;

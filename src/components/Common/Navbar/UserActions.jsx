import { memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useCart } from '../../../contexts/CartContext';
import { useAuth } from '../../../contexts/FakeAuthContext';

import { calculateTotalByProperty } from '../../../utils/helpers';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function UserActions() {
  const { cartItems, clearCart } = useCart();
  const { isAuthenticated, logout } = useAuth();

  const cartLength = cartItems.length;

  const totalQuantity = calculateTotalByProperty(cartItems, 'quantity');

  const navigate = useNavigate();

  function handleLogout() {
    clearCart();
    logout();
    navigate('/');
  }

  return (
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
  );
}

export default memo(UserActions);

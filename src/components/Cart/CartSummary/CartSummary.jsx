import { useNavigate } from 'react-router';

import { useCart } from '../../../contexts/CartContext';
import { useAuth } from '../../../contexts/FakeAuthContext';
import {
  calculateTotalByProperty,
  formatCurrency,
} from '../../../utils/helpers';

import Button from '../../Common/Button';

function CartSummary() {
  const { cartItems, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const subtotal = calculateTotalByProperty(cartItems, 'totalPrice');

  function handleCheckout() {
    isAuthenticated
      ? navigate('/order/checkout')
      : navigate('/login?destination=checkout');
  }

  return (
    <div className="cart-summary">
      <h2 className="page-title">Cart totals</h2>
      <div className="row">
        <div className="cell">Subtotal</div>
        <div className="cell">{formatCurrency(subtotal)}</div>
      </div>
      <div className="row">
        <div className="cell">Shipping Fee</div>
        <div className="cell">Free</div>
      </div>
      <div className="row">
        <div className="cell">
          <strong>Total</strong>
        </div>
        <div className="cell">
          <strong>{formatCurrency(subtotal)}</strong>
        </div>
      </div>
      <div className="summary-actions">
        <Button className="btn" onClick={() => navigate('/')}>
          Continue Shopping
        </Button>
        <Button className="btn" onClick={handleCheckout}>
          Checkout
        </Button>
        <Button className="btn" onClick={clearCart}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default CartSummary;

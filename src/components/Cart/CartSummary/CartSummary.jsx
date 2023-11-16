import { useNavigate } from 'react-router';

import { useCart } from '../../../contexts/CartContext';
import { useAuth } from '../../../contexts/FakeAuthContext';
import {
  calculateTotalByProperty,
  formatCurrency,
} from '../../../utils/helpers';

import Button from '../../Common/Button';

import styles from './CartSummary.module.css';

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
    <div className={styles.cartSummary}>
      <h2 className="page-title">Cart totals</h2>
      <div className={styles.row}>
        <div className={styles.cell}>Subtotal</div>
        <div className={styles.cell}>{formatCurrency(subtotal)}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>Shipping Fee</div>
        <div className={styles.cell}>Free</div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <strong>Total</strong>
        </div>
        <div className={styles.cell}>
          <strong>{formatCurrency(subtotal)}</strong>
        </div>
      </div>
      <div className={styles.cartSummaryActions}>
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

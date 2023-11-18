import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, calculateTotalByProperty } from '../cartSlice';

import { formatCurrency } from '../../../utils/helpers';

import Button from '../../../ui/Common/Button/Button';

import styles from './CartSummary.module.css';

function CartSummary() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    state => state.authentication.isAuthenticated
  );
  const subtotal = useSelector(calculateTotalByProperty('totalPrice'));

  function handleCheckout() {
    isAuthenticated
      ? navigate('/order/checkout')
      : navigate('/login?destination=checkout');
  }

  return (
    <div className={styles.cartSummary}>
      <h2 className="heading-primary">Cart totals</h2>
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
        <Button type="primary" onClick={() => navigate('/')}>
          Continue Shopping
        </Button>
        <Button type="primary" onClick={handleCheckout}>
          Checkout
        </Button>
        <Button type="primary" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default CartSummary;

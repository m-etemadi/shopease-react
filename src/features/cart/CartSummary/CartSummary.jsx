import { useSelector } from 'react-redux';
import { calculateTotalByProperty } from '../cartSlice';

import { formatCurrency } from '../../../utils/helpers';

import CartSummaryActions from '../CartSummaryActions/CartSummaryActions';

import styles from './CartSummary.module.css';

function CartSummary() {
  const subtotal = useSelector(calculateTotalByProperty('totalPrice'));

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
      <CartSummaryActions />
    </div>
  );
}

export default CartSummary;

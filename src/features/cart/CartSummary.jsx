import { useSelector } from 'react-redux';
import { calculateTotalByProperty } from './cartSlice';

import { formatCurrency } from '../../utils/helpers';

function CartSummary() {
  const subtotal = useSelector(calculateTotalByProperty('totalPrice'));

  return (
    <div className="table-summary container-secondary">
      <h2 className="heading-primary">Cart totals</h2>
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
    </div>
  );
}

export default CartSummary;

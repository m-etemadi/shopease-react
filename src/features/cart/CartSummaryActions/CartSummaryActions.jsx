import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../cartSlice';
import Button from '../../../ui/Common/Button/Button';

function CartSummaryActions() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    state => state.authentication.isAuthenticated
  );

  function handleCheckout() {
    isAuthenticated
      ? navigate('/order/checkout')
      : navigate('/login?destination=checkout');
  }

  return (
    <div className="table-summary-actions">
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
  );
}

export default CartSummaryActions;
